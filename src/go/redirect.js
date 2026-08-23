import { affiliateProviders } from '../config/affiliateProviders';

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

      matchedProvider = affiliateProviders.find(provider => {
        const cleanUrlObj = new URL(provider.cleanUrl);
        const providerHost = cleanUrlObj.hostname.replace('www.', '').toLowerCase();
        return hostname.includes(providerHost);
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

function performRedirect() {
  const { provider, customDest } = resolveProviderAndDest();
  const debugMode = getQueryParam('debug') === 'true';

  logClick(provider);

  let targetUrl = '';
  let providerName = 'השותף שלנו';

  if (customDest) {
    if (provider && provider.isActive && provider.affiliateUrl) {
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
    if (provider.isActive && provider.affiliateUrl) {
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
      redirectTitle.innerHTML = `למעבר ל-<span id="partner-name">${providerName}</span> לחץ המשך`;
    }
    if (redirectSubtitle) {
      redirectSubtitle.textContent = "מכין את ההצעה הטובה ביותר עבורך...";
    }
  } else if (customDest) {
    // Flow B: Unverified / General External Site (Exposes hostname to prevent phishing/open redirect abuse)
    let extractedHostname = '';
    try {
      extractedHostname = new URL(customDest).hostname.replace('www.', '');
    } catch {
      extractedHostname = customDest;
    }

    if (redirectTitle) {
      redirectTitle.innerHTML = `אתה עובר כעת לאתר חיצוני: <span id="partner-name">${extractedHostname}</span>`;
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
      debugInfo.innerHTML = `
        <h3>Debug Mode Active</h3>
        <p><strong>Matched Provider:</strong> ${provider ? `${provider.name} (${provider.id})` : 'None'}</p>
        <p><strong>Is Active Affiliate:</strong> ${provider ? provider.isActive : 'N/A'}</p>
        <p><strong>Custom Destination:</strong> ${customDest || 'None'}</p>
        <p><strong>Target URL:</strong> <a href="${targetUrl}" target="_blank" style="color: #38bdf8; word-break: break-all;">${targetUrl}</a></p>
        <p><strong>Referrer Policy:</strong> preserved (origin-when-cross-origin)</p>
      `;
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
