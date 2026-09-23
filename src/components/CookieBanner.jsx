import React, { useEffect, useState } from 'react';
import { getConsent, setConsent, CONSENT_CHANGE_EVENT } from '../consent';

const TEXT = {
  he: {
    title: 'עוגיות וכלי מדידה',
    body: 'אנחנו משתמשים בכלי מדידה (Microsoft Clarity) כדי להבין איך משתמשים באתר ולשפר אותו. הכלי נטען רק אם תאשרו. עוגיות הכרחיות להפעלת האתר והצ\'אט פועלות תמיד.',
    more: 'פרטים במדיניות הפרטיות',
    accept: 'אישור',
    reject: 'דחייה',
  },
  en: {
    title: 'Cookies & analytics',
    body: 'We use an analytics tool (Microsoft Clarity) to understand how the site is used and improve it. It only loads if you accept. Cookies that are essential for the site and chat always run.',
    more: 'Details in the Privacy Policy',
    accept: 'Accept',
    reject: 'Decline',
  },
};

export default function CookieBanner({ lang }) {
  const [visible, setVisible] = useState(() => getConsent() === null);
  const t = TEXT[lang] || TEXT.he;

  useEffect(() => {
    const onChange = (e) => {
      if (e.detail && e.detail.reopen) setVisible(true);
    };
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, []);

  if (!visible) return null;

  const choose = (value) => {
    setVisible(false);
    setConsent(value);
  };

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      dir={lang === 'he' ? 'rtl' : 'ltr'}
    >
      <div className="cookie-banner-text">
        <strong id="cookie-banner-title">{t.title}</strong>
        <p>
          {t.body}{' '}
          <a href="#privacy" className="legal-link">{t.more}</a>
        </p>
      </div>
      <div className="cookie-banner-actions">
        <button type="button" className="cookie-btn" onClick={() => choose('accepted')}>
          {t.accept}
        </button>
        <button type="button" className="cookie-btn" onClick={() => choose('rejected')}>
          {t.reject}
        </button>
      </div>
    </div>
  );
}
