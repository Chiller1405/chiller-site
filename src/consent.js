// Cookie / analytics consent (2026-09-23, legal-checklist review).
//
// Microsoft Clarity (session recording + heatmaps, sets the _clck/_clsk cookies) used to be
// injected by an inline <script> in index.html and go/index.html, so it ran on every page load
// before the visitor agreed to anything. It is now loaded ONLY from here, and only after the
// visitor explicitly clicks "accept" in <CookieBanner />. Essential storage (the chat widget's
// sessionStorage session id, this consent flag itself) does not need consent and is unaffected.
//
// Shared by both Vite entry points: src/main.jsx (the site) and src/go/redirect.js (the /go
// affiliate redirect page), so the choice made on the main site is respected on /go too.

const CONSENT_KEY = 'chiller_cookie_consent'; // 'accepted' | 'rejected' | (missing = not asked yet)
const CLARITY_PROJECT_ID = 'y48i1zn527';
export const CONSENT_CHANGE_EVENT = 'chiller-consent-change';

let clarityLoaded = false;

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null; // storage blocked (private mode etc.) -> treat as "not asked", load nothing
  }
}

function loadClarity() {
  if (clarityLoaded || typeof window === 'undefined') return;
  clarityLoaded = true;
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID);
}

function deleteClarityCookies() {
  const host = window.location.hostname;
  const domains = ['', host, '.' + host.replace(/^www\./, '')];
  ['_clck', '_clsk', 'CLID', 'ANONCHK', 'MR', 'MUID', 'SM'].forEach((name) => {
    domains.forEach((d) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ''}`;
    });
  });
}

export function setConsent(value) {
  const previous = getConsent();
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage blocked: the choice still applies for this page view */
  }
  if (value === 'accepted') {
    loadClarity();
  } else if (previous === 'accepted' && clarityLoaded) {
    // Withdrawing consent after Clarity already started: clear its cookies and reload so the
    // running script is gone. Reloading is the only reliable way to stop an injected tracker.
    deleteClarityCookies();
    window.location.reload();
    return;
  } else {
    deleteClarityCookies();
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

// Re-opens the banner (footer "cookie settings" link) without changing the stored choice until
// the visitor picks again.
export function reopenConsentBanner() {
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: { reopen: true } }));
}

export function loadAnalyticsIfConsented() {
  if (getConsent() === 'accepted') {
    loadClarity();
  } else {
    // Visitors from before consent gating (pre 2026-09-23) still carry old _clck/_clsk cookies
    // in their browser. They're inert without the script, but clear them unless consent exists.
    deleteClarityCookies();
  }
}
