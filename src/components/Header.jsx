import React, { useState, useEffect } from 'react';

export default function Header({ lang, setLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (window.location.hash.startsWith('#privacy') || 
        window.location.hash.startsWith('#terms') || 
        window.location.hash.startsWith('#accessibility') || 
        window.location.hash.startsWith('#contact')) {
      window.location.hash = '';
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = targetId;
    }
  };

  const isHe = lang === 'he';

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    isHe 
      ? "היי צ'ילר! אני מתכנן את הטיול שלי ואשמח לעזרה עם..." 
      : "Hey Chiller! I'm planning my backpacking trip and would love some help with..."
  )}`;

  return (
    <header className={`app-header ${isScrolled ? 'scrolled' : ''}`} dir={isHe ? 'rtl' : 'ltr'}>
      <div className="header-container">
        
        {/* Brand Logo */}
        <div className="header-logo-wrapper">
          <a 
            href="#hero" 
            className="header-logo"
            onClick={(e) => handleNavClick(e, 'hero')}
          >
            <span className="logo-symbol">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.15" />
                <path d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm2.8 11.2l-4.8 1.6 1.6-4.8 4.8-1.6z" />
              </svg>
            </span>
            <span className="logo-text">CHILLER</span>
            <span className="logo-he-sub">צ׳ילר</span>
          </a>
        </div>
        
        {/* Desktop Nav Links */}
        <nav className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a 
            href="#problem" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'problem')}
          >
            {isHe ? 'הבעיה בטיול' : 'The Problem'}
          </a>
          <a 
            href="#scenarios" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'scenarios')}
          >
            {isHe ? 'מה אפשר לשאול' : 'What You Can Ask'}
          </a>
          <a 
            href="#intelligence" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'intelligence')}
          >
            {isHe ? 'מידע בזמן אמת' : 'Live Intelligence'}
          </a>
          <a 
            href="#how-it-works" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'how-it-works')}
          >
            {isHe ? 'איך זה עובד' : 'How It Works'}
          </a>
          <a 
            href="#booking" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'booking')}
          >
            {isHe ? 'פורטל הזמנות' : 'Booking Portal'}
          </a>
          <a 
            href="#faq" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'faq')}
          >
            {isHe ? 'שאלות ותשובות' : 'FAQ'}
          </a>
        </nav>
        
        {/* Header Right Actions */}
        <div className="header-actions">
          {/* Language Switcher */}
          <button 
            type="button"
            className="lang-toggle-btn"
            onClick={() => setLang(isHe ? 'en' : 'he')}
            aria-label={isHe ? 'Switch to English' : 'עבור לעברית'}
          >
            <span className="lang-icon">🌐</span>
            <span>{isHe ? 'EN' : 'עב'}</span>
          </button>

          {/* Primary WhatsApp Pill */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header-cta"
            aria-label={isHe ? "פתח ווטסאפ" : "Chat on WhatsApp"}
          >
            <span className="live-dot pulse"></span>
            <span>{isHe ? "פתח ווטסאפ" : "Chat on WhatsApp"}</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}
