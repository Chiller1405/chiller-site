import { affiliateProviders } from '../config/affiliateProviders';
import { loadAnalyticsIfConsented } from '../consent';

// Microsoft Clarity used to be an inline <script> in go/index.html that ran before any consent.
// It now loads only if the visitor already accepted analytics on the main site (2026-09-23).
loadAnalyticsIfConsented();

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function resolveProviderAndDest() {
  const path = window.location.pathname; // E.g., "/go/klook" or "/go/booking"
  const pathParts = path.split('/').filter(Boolean);

  // Find where "go" is in the path segments to get the segment right after it
  const goIdx = pathParts.indexOf('go');
  let providerId = goIdx !== -1 && pathParts[goIdx + 1] ? pathParts[goIdx + 1] : null;

  // If the path doesn't specify the provider (e.g. "/go/" or "/go/index.html"), check query parameters
  if (!providerId || providerId.toLowerCase() === 'index.html') {
    providerId = getQueryParam('provider') || getQueryParam('providerId') || getQueryParam('dest');
  }

  let customDest = getQueryParam('dest');

  // If customDest is not a full URL, it is likely a provider ID. Null it out so we use the provider's cleanUrl.
  if (customDest && !customDest.startsWith('http://') && !customDest.startsWith('https://')) {
    customDest = null;
  }

  // FIXED (code review, 2026-09-23): a dest that merely STARTS with "https://" but isn't a real
  // URL (e.g. "https://<img src=x onerror=...>") used to reach Flow B's `catch`, where the raw
  // string was dropped into innerHTML — a reflected XSS on chiller-travel.com. Anything the URL
  // parser rejects is now treated as no destination at all, and the page falls back to home.
  if (customDest) {
    try {
      const parsed = new URL(customDest);
      if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') customDest = null;
    } catch {
      customDest = null;
    }
  }

  // If dest query parameter is a full URL, it could represent the destination directly.
  // If providerId is still undefined, we attempt to match the domain of the customDest URL.
  let matchedProvider = null;

  if (providerId && !providerId.startsWith('http://') && !providerId.startsWith('https://')) {
    matchedProvider = affiliateProviders.find(p => p.id.toLowerCase() === providerId.toLowerCase());
  }

  // If we couldn't match a provider by ID but have a custom destination URL, scan for domain matches
  if (!matchedProvider && customDest) {
    try {
      const urlObj = new URL(customDest);
      const hostname = urlObj.hostname.toLowerCase();

      // FIXED (Section 9 review, 2026-09-22): this used to be `hostname.includes(providerHost)` —
      // a plain substring check, which also matches a spoofed host like
      // "booking.com.evil-domain.ru" (it DOES contain "booking.com" as a substring). Since a match
      // here makes performRedirect() show the "Flow A: Verified Affiliate" UI ("למעבר ל-X לחץ
      // המשך") instead of the "Flow B: unverified external site" warning that exists specifically
      // to flag exactly this kind of link — a crafted ?dest= URL could impersonate a trusted
      // partner and use chiller-travel.com's own domain reputation to make a phishing redirect
      // look legitimate. Now requires an exact hostname match or a real subdomain
      // (es.booking.com, m.agoda.com) — same fix already applied on the bot side
      // (chiller-bot/services/affiliateService.js's isValidUrlForProvider, which has carried this
      // exact same protection since the Section 7 review with an explicit comment about it).
      matchedProvider = affiliateProviders.find(provider => {
        const cleanUrlObj = new URL(provider.cleanUrl);
        const providerHost = cleanUrlObj.hostname.replace(/^www\./, '').toLowerCase();
        return hostname === providerHost || hostname.endsWith(`.${providerHost}`);
      });

      if (matchedProvider) {
        providerId = matchedProvider.id;
      }
    } catch (e) {
      console.error("Failed to parse custom destination URL:", e);
    }
  }

  return { provider: matchedProvider, customDest };
}

// For providers using linkType: 'append' (e.g. Trip.com's own affiliate platform): the
// destination URL is used as-is, with the provider's fixed tracking params appended directly
// onto it (as opposed to {{dest}} providers, which wrap the whole destination inside a
// tracking-domain URL, e.g. tp.media/r?...&u=<encoded dest>).
// Adds the provider's partner params (and, for MobiMatter-style programs, a partner hash) to the
// exact page the bot built. Rewritten 2026-09-23: the old version glued "?params" onto the end of
// the string, which put them AFTER any "#fragment" (where the site never sees them) and could
// duplicate a param the page already had. Our partner value wins over any same-named param.
function appendAffiliateParams(url, paramsString, affiliateHash) {
  try {
    const urlObj = new URL(url);
    if (paramsString) {
      for (const [key, value] of new URLSearchParams(paramsString)) {
        urlObj.searchParams.set(key, value);
      }
    }
    if (affiliateHash) urlObj.hash = affiliateHash;
    return urlObj.toString();
  } catch {
    return url;
  }
}

function hostMatchesProvider(destUrl, provider) {
  try {
    const host = new URL(destUrl).hostname.toLowerCase().replace(/^www\./, '');
    const providerHost = new URL(provider.cleanUrl).hostname.toLowerCase().replace(/^www\./, '');
    return host === providerHost || host.endsWith(`.${providerHost}`);
  } catch {
    return false;
  }
}

function appendTrackingParams(targetUrl) {
  try {
    const currentParams = new URLSearchParams(window.location.search);
    const paramsToAppend = new URLSearchParams();

    for (const [key, value] of currentParams.entries()) {
      if (key !== 'dest' && key !== 'provider') {
        paramsToAppend.append(key, value);
      }
    }

    if (paramsToAppend.toString()) {
      const urlObj = new URL(targetUrl, window.location.origin);
      for (const [key, value] of paramsToAppend.entries()) {
        urlObj.searchParams.append(key, value);
      }
      return urlObj.toString();
    }
  } catch (e) {
    console.error("Failed to append tracking parameters:", e);
  }
  return targetUrl;
}

// Minimal funnel logging: fire-and-forget beacon to the bot backend so click volume per
// provider is greppable from server logs (no dashboard, no DB write — see chiller-bot's
// POST /api/log-click).
function logClick(provider) {
  try {
    const payload = JSON.stringify({
      providerId: provider ? provider.id : null,
      isActive: !!(provider && provider.isActive),
      referrer: document.referrer || null,
      ts: Date.now(),
    });
    const blob = new Blob([payload], { type: 'application/json' });
    navigator.sendBeacon('https://chiller-bot-server.onrender.com/api/log-click', blob);
  } catch (e) {
    console.error('Failed to log click:', e);
  }
}

// Writes before + <span id="partner-name">highlight</span> + after using text nodes only, so a
// provider name or hostname can never be interpreted as HTML.
function setTitleWithHighlight(el, before, highlight, after) {
  const span = document.createElement('span');
  span.id = 'partner-name';
  span.textContent = highlight;
  el.replaceChildren(document.createTextNode(before), span, document.createTextNode(after));
}

function performRedirect() {
  const { provider: resolvedProvider, customDest } = resolveProviderAndDest();
  // Anti-spoofing (2026-09-23): a provider picked by the /go/<id> path must actually own the
  // destination. Otherwise "/go/agoda?dest=https://evil.example" would show the trusted
  // "continue to Agoda" screen while sending the visitor somewhere else. A mismatch is treated
  // exactly like an unknown external link (Flow B, with its warning and visible hostname).
  const provider =
    resolvedProvider && customDest && !hostMatchesProvider(customDest, resolvedProvider)
      ? null
      : resolvedProvider;
  const debugMode = getQueryParam('debug') === 'true';

  logClick(provider);

  let targetUrl = '';
  let providerName = 'השותף שלנו';

  if (customDest) {
    if (provider && provider.isActive && provider.linkType === 'append') {
      providerName = provider.name;
      targetUrl = appendAffiliateParams(customDest, provider.affiliateParams, provider.affiliateHash);
    } else if (provider && provider.isActive && provider.affiliateUrl) {
      providerName = provider.name;
      if (provider.affiliateUrl.includes('{{dest}}')) {
        targetUrl = provider.affiliateUrl.replace('{{dest}}', encodeURIComponent(customDest));
      } else if (provider.affiliateUrl.includes('{{uri}}')) {
        targetUrl = provider.affiliateUrl.replace('{{uri}}', encodeURIComponent(customDest));
      } else {
        // Fallback to preserve commission/cookies when no placeholder exists
        targetUrl = provider.affiliateUrl;
      }
    } else {
      // Inactive or non-affiliate provider, redirect directly to customDest
      if (provider) {
        providerName = provider.name;
      }
      targetUrl = customDest;
    }
  } else if (provider) {
    providerName = provider.name;
    const baseDest = provider.cleanUrl;
    if (provider.isActive && provider.linkType === 'append') {
      targetUrl = appendAffiliateParams(baseDest, provider.affiliateParams, provider.affiliateHash);
    } else if (provider.isActive && provider.affiliateUrl) {
      if (provider.affiliateUrl.includes('{{dest}}')) {
        targetUrl = provider.affiliateUrl.replace('{{dest}}', encodeURIComponent(baseDest));
      } else if (provider.affiliateUrl.includes('{{uri}}')) {
        targetUrl = provider.affiliateUrl.replace('{{uri}}', encodeURIComponent(baseDest));
      } else {
        targetUrl = provider.affiliateUrl;
      }
    } else {
      targetUrl = baseDest;
    }
  } else {
    targetUrl = '/';
  }

  // Update redirect page UI
  const redirectTitle = document.getElementById('redirect-title');
  const redirectSubtitle = document.getElementById('redirect-subtitle');

  if (provider) {
    // Flow A: Verified Affiliate
    if (redirectTitle) {
      setTitleWithHighlight(redirectTitle, 'למעבר ל-', providerName, ' לחץ המשך');
    }
    if (redirectSubtitle) {
      redirectSubtitle.textContent = "מעביר אותך לאתר השותף...";
    }
  } else if (customDest) {
    // Flow B: Unverified / General External Site (Exposes hostname to prevent phishing/open redirect abuse)
    // customDest is already guaranteed to parse as an http(s) URL (see resolveProviderAndDest).
    const extractedHostname = new URL(customDest).hostname.replace(/^www\./, '');

    if (redirectTitle) {
      setTitleWithHighlight(redirectTitle, 'אתה עובר כעת לאתר חיצוני: ', extractedHostname, '');
    }
    if (redirectSubtitle) {
      redirectSubtitle.textContent = "שים לב: זהו קישור חיצוני שאינו שותף רשמי של Chiller.";
    }
  } else {
    // Default fallback (no provider or custom destination target)
    if (redirectTitle) {
      redirectTitle.textContent = "למעבר לדף הבית לחץ המשך";
    }
    if (redirectSubtitle) {
      redirectSubtitle.textContent = "הקישור לא נמצא או שאינו תקין.";
    }
  }

  if (debugMode) {
    console.log("Redirect System Log:", {
      provider,
      customDest,
      targetUrl,
      referrer: document.referrer
    });

    // Render Debug details directly on the UI
    const debugInfo = document.getElementById('debug-info');
    if (debugInfo) {
      debugInfo.style.display = 'block';
      // Built from DOM nodes + textContent, never innerHTML: customDest and targetUrl come from
      // the query string, so interpolating them as HTML is a script-injection hole.
      const heading = document.createElement('h3');
      heading.textContent = 'Debug Mode Active';
      debugInfo.replaceChildren(heading);
      const addRow = (label, value, asLink = false) => {
        const row = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = `${label}: `;
        row.appendChild(strong);
        if (asLink) {
          const a = document.createElement('a');
          a.href = value;
          a.target = '_blank';
          a.rel = 'noopener';
          a.style.color = '#38bdf8';
          a.style.wordBreak = 'break-all';
          a.textContent = value;
          row.appendChild(a);
        } else {
          row.appendChild(document.createTextNode(String(value)));
        }
        debugInfo.appendChild(row);
      };
      addRow('Matched Provider', provider ? `${provider.name} (${provider.id})` : 'None');
      addRow('Is Active Affiliate', provider ? provider.isActive : 'N/A');
      addRow('Custom Destination', customDest || 'None');
      addRow('Target URL', targetUrl, true);
      addRow('Referrer Policy', 'preserved (origin-when-cross-origin)');
    }
    const loader = document.querySelector('.loader');
    if (loader) loader.style.borderTopColor = '#f59e0b'; // amber loader for debug
  }

  const buttonContainer = document.getElementById('button-container');
  if (buttonContainer) {
    buttonContainer.style.display = 'flex';
  }

  const continueBtn = document.getElementById('continue-btn');
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      const finalUrl = appendTrackingParams(targetUrl);
      window.location.replace(finalUrl);
    });
  }

  const cancelBtn = document.getElementById('cancel-btn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      window.location.replace('/');
    });
  }
}

document.addEventListener('DOMContentLoaded', performRedirect);
