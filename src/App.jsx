import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AppChaosComparison from './components/AppChaosComparison';
import ProductTheater from './components/ProductTheater';
import LiveTelemetry from './components/LiveTelemetry';
import WhatsAppExperience from './components/WhatsAppExperience';
import BookingPortal from './components/BookingPortal';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import ChatWidget from './components/ChatWidget';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ContactUs from './components/ContactUs';
import AccessibilityStatement from './components/AccessibilityStatement';
import CookieBanner from './components/CookieBanner';
import { reopenConsentBanner } from './consent';

const translations = {
  he: {
    logo: "צ'ילר",
    tagline: "עוזר נסיעות חכם מבוסס AI לתרמילאים",
    heroEyebrow: "זמין עכשיו בווטסאפ • החבר החכם לתרמילאים",
    heroPrimaryCta: "פתח שיחה בווטסאפ — חינם",
    bookingLink: "פורטל הזמנות",
    privacyLink: "מדיניות פרטיות",
    termsLink: "תנאי שימוש",
    contactLink: "צור קשר",
    accessibilityLink: "הצהרת נגישות",
    cookieSettings: "הגדרות עוגיות",
    talkToChiller: "דבר עם צ'ילר",
    footerNotice: "Chiller Travel משתתפת בתוכניות שותפים של ספקי נסיעות. אנו עשויים להרוויח עמלה על הזמנות דרך הקישורים שלנו, ללא עלות נוספת מצידכם, והמלצות ממומנות מסומנות. צ'ילר מבוסס בינה מלאכותית ועלול לטעות; ההזמנה והתשלום נעשים אצל הספק ובאחריותו.",
    footerCopyright: "© 2026 Chiller Travel (צ'ילר). כל הזכויות שמורות. נבנה באהבה עבור מטיילים עצמאיים ותרמילאים.",
    footerBackpackerNote: "צ'ילר נבנה על בסיס חוויות שטח אמיתיות בדרום ומרכז אמריקה, מזרח אסיה והודו.",
    footerNavHead: "ניווט באתר",
    footerLegalHead: "משפטי ושקיפות",
    footerCommunityHead: "תרמילאות"
  },
  en: {
    logo: "Chiller",
    tagline: "AI-Powered Travel Companion for Backpackers",
    heroEyebrow: "Live on WhatsApp • Smart Backpacker Friend",
    heroPrimaryCta: "Start Chatting on WhatsApp — Free",
    bookingLink: "Booking Portal",
    privacyLink: "Privacy Policy",
    termsLink: "Terms of Service",
    contactLink: "Contact Us",
    accessibilityLink: "Accessibility",
    cookieSettings: "Cookie settings",
    talkToChiller: "Talk to Chiller",
    footerNotice: "Chiller Travel participates in travel affiliate programs. We may earn a commission on bookings made through our links at no extra cost to you, and sponsored recommendations are labeled. Chiller is AI-based and can make mistakes; bookings and payments happen with, and are the responsibility of, the provider.",
    footerCopyright: "© 2026 Chiller Travel. All rights reserved. Built with love for independent travelers and backpackers.",
    footerBackpackerNote: "Chiller was forged on real trails across South & Central America, Southeast Asia, and India.",
    footerNavHead: "Navigation",
    footerLegalHead: "Legal & Trust",
    footerCommunityHead: "Backpacking Hubs"
  }
};

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState('he');

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setCurrentPage('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#terms') {
        setCurrentPage('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#accessibility') {
        setCurrentPage('accessibility');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isHe = lang === 'he';

  return (
    <div className={`chiller-app-wrapper ${lang === 'he' ? 'lang-he' : 'lang-en'}`} dir={isHe ? 'rtl' : 'ltr'}>
      {/* Background Ambience */}
      <div className="ambient-background"></div>

      {/* Global Navigation Header */}
      <Header 
        lang={lang} 
        setLang={setLang} 
      />

      <main className="app-main">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero with Interactive Phone Mockup */}
            <HeroSection 
              lang={lang} 
              t={t} 
              onOpenChatWidget={() => setIsChatOpen(true)} 
            />

            {/* 2. 10 Apps vs. 1 Conversation */}
            <AppChaosComparison 
              lang={lang} 
            />

            {/* 3. Product Theater: 6 Backpacker Scenarios */}
            <ProductTheater 
              lang={lang} 
            />

            {/* 4. Live Telemetry & Real-Time Intelligence */}
            <LiveTelemetry 
              lang={lang} 
            />

            {/* 5. Zero-Friction WhatsApp Flow & Culture */}
            <WhatsAppExperience 
              lang={lang} 
            />

            {/* 6. Verified Booking Portal */}
            <BookingPortal 
              lang={lang} 
            />

            {/* 7. Skeptic's FAQ */}
            <FaqSection 
              lang={lang} 
            />

            {/* 8. High-Impact Finale Banner */}
            <CtaBanner 
              lang={lang} 
            />
          </>
        )}

        {/* Legal and Information Pages */}
        {currentPage === 'privacy' && <PrivacyPolicy lang={lang} />}
        {currentPage === 'terms' && <TermsOfService lang={lang} />}
        {currentPage === 'accessibility' && <AccessibilityStatement lang={lang} />}
        {currentPage === 'contact' && <ContactUs lang={lang} />}
      </main>

      {/* Modern High-Impact Footer */}
      <footer className="app-footer">
        <div className="footer-container">
          
          <div className="footer-top-grid">
            {/* Brand Col */}
            <div className="footer-brand-col">
              <div className="footer-logo">
                <span className="logo-symbol">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.15" />
                    <path d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm2.8 11.2l-4.8 1.6 1.6-4.8 4.8-1.6z" />
                  </svg>
                </span>
                <span className="logo-name">CHILLER</span>
                <span className="logo-sub">{isHe ? "צ'ילר" : "Travel AI"}</span>
              </div>
              <p className="footer-brand-desc">
                {t.tagline}
              </p>
              <p className="footer-brand-note">
                {t.footerBackpackerNote}
              </p>
            </div>

            {/* Nav Links Col */}
            <div className="footer-col">
              <h4>{t.footerNavHead}</h4>
              <ul className="footer-links">
                <li><a href="#hero">{isHe ? 'ראשי' : 'Home'}</a></li>
                <li><a href="#problem">{isHe ? 'הבעיה בטיול' : 'The Problem'}</a></li>
                <li><a href="#scenarios">{isHe ? 'תרחישים אמיתיים' : 'Scenarios'}</a></li>
                <li><a href="#intelligence">{isHe ? 'מידע חי' : 'Live Data'}</a></li>
                <li><a href="#how-it-works">{isHe ? 'איך זה עובד' : 'How It Works'}</a></li>
                <li><a href="#booking">{isHe ? 'ספקי הזמנות' : 'Booking Portal'}</a></li>
                <li><a href="#faq">{isHe ? 'שאלות ותשובות' : 'FAQ'}</a></li>
              </ul>
            </div>

            {/* Backpacker Hubs Col */}
            <div className="footer-col">
              <h4>{t.footerCommunityHead}</h4>
              <ul className="footer-links">
                <li><span>{isHe ? 'דרום אמריקה (פרו, בוליביה, ארגנטינה)' : 'South America (Peru, Bolivia, Argentina)'}</span></li>
                <li><span>{isHe ? 'מרכז אמריקה (מקסיקו, גואטמלה, קוסטה ריקה)' : 'Central America (Mexico, Guatemala, CR)'}</span></li>
                <li><span>{isHe ? 'דרום-מזרח אסיה (תאילנד, וייטנאם, לאוס)' : 'Southeast Asia (Thailand, Vietnam, Laos)'}</span></li>
                <li><span>{isHe ? 'תת-היבשת ההודית ונפאל' : 'India & Nepal Himalayas'}</span></li>
              </ul>
            </div>

            {/* Legal Col */}
            <div className="footer-col">
              <h4>{t.footerLegalHead}</h4>
              <ul className="footer-links">
                <li><a href="#privacy">{t.privacyLink}</a></li>
                <li><a href="#terms">{t.termsLink}</a></li>
                <li><a href="#accessibility">{t.accessibilityLink}</a></li>
                <li><a href="#contact">{t.contactLink}</a></li>
                <li>
                  <button 
                    type="button" 
                    className="footer-text-btn"
                    onClick={reopenConsentBanner}
                  >
                    {t.cookieSettings}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom-row">
            <p className="footer-disclosure">{t.footerNotice}</p>
            <p className="footer-copy">{t.footerCopyright}</p>
          </div>

        </div>
      </footer>

      {/* Live In-Browser Chat Widget (Preserved for interactive testing) */}
      <ChatWidget 
        externalIsOpen={isChatOpen} 
        setExternalIsOpen={setIsChatOpen} 
      />

      {/* Cookie Banner */}
      <CookieBanner lang={lang} />
    </div>
  );
}

export default App;
