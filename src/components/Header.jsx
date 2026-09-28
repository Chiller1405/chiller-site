import React from 'react';

export default function Header({ lang, setLang, t, setIsChatOpen }) {
  const handleNavClick = (e, targetHash) => {
    window.location.hash = targetHash;
  };

  return (
    <header className="app-header" dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <div className="header-container">
        <div className="header-logo-wrapper">
          <a 
            href="#home" 
            className="header-logo"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            {t.logo}
          </a>
        </div>
        
        <nav className="header-nav">
          <a 
            href="#booking" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'booking')}
          >
            {t.bookingLink}
          </a>
          <a 
            href="#privacy" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'privacy')}
          >
            {t.privacyLink}
          </a>
          <a 
            href="#terms" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'terms')}
          >
            {t.termsLink}
          </a>
          <a 
            href="#contact" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            {t.contactLink}
          </a>
        </nav>
        
        <div className="header-actions">
          <button 
            type="button"
            className="header-cta"
            onClick={() => setIsChatOpen(true)}
            aria-label={t.talkToChiller}
          >
            <span>{t.talkToChiller}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>

          <button 
            type="button"
            className="lang-toggle-btn"
            onClick={() => setLang(lang === 'he' ? 'en' : 'he')}
            aria-label={lang === 'he' ? 'Switch to English' : 'עבור לעברית'}
          >
            {lang === 'he' ? 'English' : 'עברית'}
          </button>
        </div>
      </div>
    </header>
  );
}
