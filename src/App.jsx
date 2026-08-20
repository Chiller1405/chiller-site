import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ChatWidget from './components/ChatWidget';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ContactUs from './components/ContactUs';

const translations = {
  he: {
    logo: "צ'ילר",
    bookingLink: "הזמנות",
    privacyLink: "מדיניות פרטיות",
    termsLink: "תנאי שימוש",
    contactLink: "צור קשר",
    talkToChiller: "דבר עם צ'ילר",
    tagline: "עוזר נסיעות חכם מבוסס AI לתרמילאים",
    
    // About Chiller translations
    aboutTitle: "על צ'ילר - Chiller",
    aboutSubtitle: "השותף החכם שלך לטיול הגדול",
    aboutDescription: "צ'ילר הוא עוזר נסיעות חכם מבוסס AI שפותח במיוחד כדי לסייע לתרמילאים ומטיילים עצמאיים לתכנן את הרפתקת חייהם בטיול הגדול. צ'ילר מתמחה במתן מענה לוגיסטי, מציאת מקומות לינה מתאימים, סגירת אטרקציות, וסידור מעברים ותחבורה (אוטובוסים, שאטלים, מעבורות וטיסות). צ'ילר מיועד לתפקד כ״חבר מומחה בכיס״ עבור התרמילאי הישראלי ולעזור לו לבנות את חווית הטיול המושלמת בשבילו.",
    whoTitle: "למי השירות מיועד?",
    whoText: "למוצ'ילרים ותרמילאים ישראלים המחפשים לחקור את העולם בצורה מתוחכמת, מותאמת אישית וחסכונית.",
    whatTitle: "מה צ'ילר יודע לעשות?",
    whatItems: [
      "איתור והזמנת דרכי הגעה, אוטובוסים, טיסות ומעברי גבול יבשתיים וימיים.",
      "השוואה, חיפוש והזמנה של הוסטלים ומקומות לינה מומלצים.",
      "איתור והזמנת אטרקציות, סיורים וחוויות אקסטרים.",
      "התאמה והזמנת חבילות תקשורת ו-eSIM לכל מדינה."
    ],
    visionTitle: "החזון שלנו",
    goalText: "להנגיש את כלי התכנון והמענה הלוגיסטי המובילים ביותר לכל תרמילאי, ולאפשר לכם לצאת לדרך בראש שקט תוך חיבור לספקי השירות הטובים והאמינים ביותר בעולם הנסיעות והטיולים.",

    // Booking section translations
    bookingTitle: "פורטל הזמנות נסיעות",
    bookingSubtitle: "בדקו והזמינו כבר עכשיו ישירות מהאתר כדי לטייל בראש שקט.",
    categories: {
      accommodation: "לינה ואירוח 🛏️",
      transport: "תחבורה, מעברים וטיסות 🚌",
      attractions: "אטרקציות וחוויות 🎟️",
      connectivity: "תקשורת ואינטרנט 📱"
    },
    partners: {
      booking: { name: "Booking.com", desc: "האתר המוביל בעולם להזמנת מלונות, דירות וחדרי אירוח." },
      expedia: { name: "Expedia", desc: "סוכנות נסיעות מקוונת מקיפה להזמנת מלונות ודילים." },
      agoda: { name: "Agoda", desc: "דילים מעולים והזמנות לינה בכל העולם." },
      busbud: { name: "Busbud", desc: "השוואה והזמנת כרטיסי אוטובוס למעברים בין ערים ומדינות." },
      trip: { name: "Trip.com", desc: "סוכנות נסיעות בינלאומית המציעה טיסות, רכבות ומלונות." },
      wayaway: { name: "WayAway", desc: "מנוע חיפוש טיסות המציע החזר כספי (Cashback) על רכישות נסיעות." },
      getyourguide: { name: "GetYourGuide", desc: "סיורים מודרכים, אטרקציות ופעילויות מדהימות בטיול." },
      viator: { name: "Viator", desc: "מאות אלפי חוויות, טיולי יום ופעילויות שטח מומלצות." },
      klook: { name: "Klook", desc: "פלטפורמה להזמנת חוויות טיול, סיורים מקומיים וכרטיסי כניסה." },
      airalo: { name: "Airalo", desc: "חבילות eSIM מקומיות ואזוריות לחיבור מיידי לאינטרנט." },
      yesim: { name: "Yesim", desc: "כרטיסי eSIM המאפשרים חיבור יציב לאינטרנט סלולרי ברחבי העולם." }
    },
    bookBtn: "להזמנה באתר",
    footerNotice: "Chiller Travel משתתפת בתוכניות שותפים. אנו עשויים להרוויח עמלה על הזמנות המתבצעות דרך הקישורים שלנו ללא עלות נוספת עבורכם.",
    footerCopyright: "כל הזכויות שמורות ל-Chiller Travel."
  },
  en: {
    logo: "Chiller",
    bookingLink: "Booking",
    privacyLink: "Privacy Policy",
    termsLink: "Terms of Service",
    contactLink: "Contact Us",
    talkToChiller: "Talk to Chiller",
    tagline: "AI-Powered Travel Assistant for Backpackers",

    // About Chiller translations
    aboutTitle: "About Chiller",
    aboutSubtitle: "Your smart travel companion for the big trip",
    aboutDescription: "Chiller is a smart AI-powered travel assistant developed specifically to help backpackers and independent travelers plan the adventure of a lifetime on the big trip. Chiller specializes in logistics, finding suitable accommodation, booking attractions, and arranging transport (buses, shuttles, ferries, and flights). Chiller is designed to be your 'expert friend in your pocket,' helping you build your perfect travel experience.",
    whoTitle: "Who is it for?",
    whoText: "For backpackers looking to explore the world in a smart, personalized, and cost-effective way.",
    whatTitle: "What Chiller Can Do",
    whatItems: [
      "Find and book routes, buses, flights, and land/sea border crossings.",
      "Compare, search, and book recommended hostels and accommodations.",
      "Find and book attractions, tours, and extreme experiences.",
      "Match and book communication packages and eSIMs for each country."
    ],
    visionTitle: "Our Vision",
    goalText: "To make top-tier planning and logistics tools accessible to every backpacker, allowing you to travel with peace of mind by connecting you with the best and most reliable service providers in the travel industry.",

    // Booking section translations
    bookingTitle: "Travel Booking Portal",
    bookingSubtitle: "Check and book right now directly from the site to travel with peace of mind.",
    categories: {
      accommodation: "Accommodation 🛏️",
      transport: "Transport & Flights 🚌",
      attractions: "Attractions & Experiences 🎟️",
      connectivity: "Telecom & Internet 📱"
    },
    partners: {
      booking: { name: "Booking.com", desc: "The world's leading site for booking hotels, apartments, and guest houses." },
      expedia: { name: "Expedia", desc: "A comprehensive travel platform for booking hotels, flights, and vacation packages." },
      agoda: { name: "Agoda", desc: "Great deals and accommodation booking worldwide." },
      busbud: { name: "Busbud", desc: "Compare and book intercity and cross-border bus tickets easily." },
      trip: { name: "Trip.com", desc: "An international online travel agency offering flights, hotels, and train tickets." },
      wayaway: { name: "WayAway", desc: "Flight search engine that helps you find cheap flights with cashback on travel purchases." },
      getyourguide: { name: "GetYourGuide", desc: "Find guided tours, attractions, and amazing travel experiences." },
      viator: { name: "Viator", desc: "Hundreds of thousands of recommended experiences, day trips, and outdoor tours." },
      klook: { name: "Klook", desc: "Book tour experiences, local attractions, transit passes, and activities." },
      airalo: { name: "Airalo", desc: "Local and regional eSIM packages for instant mobile internet access." },
      yesim: { name: "Yesim", desc: "eSIM cards offering stable mobile data connection in countries worldwide." }
    },
    bookBtn: "Book Now",
    footerNotice: "Chiller Travel participates in affiliate programs. We may earn a commission on bookings made through our links at no extra cost to you.",
    footerCopyright: "All rights reserved. Chiller Travel."
  }
};

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState('he');

  const t = translations[lang];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setCurrentPage('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#terms') {
        setCurrentPage('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#booking') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById('booking');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Run on initial mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <div className="grid-bg"></div>
      <Header lang={lang} setLang={setLang} t={t} setIsChatOpen={setIsChatOpen} />
      <main className="app-container" dir={lang === 'he' ? 'rtl' : 'ltr'}>
        {currentPage === 'home' && (
          <>
            {/* About Chiller Section */}
            <section id="about" className="about-section">
              <div className="badge">{t.tagline}</div>
              <h1 className="about-title">{t.aboutTitle}</h1>
              <p className="about-subtitle">{t.aboutSubtitle}</p>
              
              <div className="about-card">
                <p className="about-desc">{t.aboutDescription}</p>
                
                <div className="about-grid">
                  <div className="about-grid-col">
                    <h3>{t.whoTitle}</h3>
                    <p>{t.whoText}</p>
                  </div>
                  
                  <div className="about-grid-col">
                    <h3>{t.visionTitle}</h3>
                    <p>{t.goalText}</p>
                  </div>
                </div>

                <div className="about-capabilities">
                  <h3>{t.whatTitle}</h3>
                  <ul className="capabilities-list">
                    {t.whatItems.map((item, idx) => (
                      <li key={idx}>
                        <svg className="bullet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  type="button"
                  className="cta-button" 
                  onClick={() => setIsChatOpen(true)}
                  aria-label={t.talkToChiller}
                >
                  <span>{t.talkToChiller}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </button>
              </div>
            </section>

            {/* Travel Booking Portal Section */}
            <section id="booking" className="booking-section">
              <h2 className="section-title">{t.bookingTitle}</h2>
              <p className="section-subtitle">{t.bookingSubtitle}</p>
              
              <div className="booking-categories">
                {/* Category 1: Accommodation */}
                <div className="booking-category">
                  <h3>{t.categories.accommodation}</h3>
                  <div className="partners-grid">
                    <div className="partner-card">
                      <h4>{t.partners.booking.name}</h4>
                      <p>{t.partners.booking.desc}</p>
                      <a href="/go/booking" target="_blank" rel="noopener noreferrer" className="partner-link-btn">
                        {t.bookBtn}
                      </a>
                    </div>
                    <div className="partner-card">
                      <h4>{t.partners.expedia.name}</h4>
                      <p>{t.partners.expedia.desc}</p>
                      <a href="/go/expedia" target="_blank" rel="noopener noreferrer" className="partner-link-btn">
                        {t.bookBtn}
                      </a>
                    </div>
                    <div className="partner-card">
                      <h4>{t.partners.agoda.name}</h4>
                      <p>{t.partners.agoda.desc}</p>
                      <a href="/go/agoda" target="_blank" rel="noopener noreferrer" className="partner-link-btn">
                        {t.bookBtn}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Category 2: Transport & Flights */}
                <div className="booking-category">
                  <h3>{t.categories.transport}</h3>
                  <div className="partners-grid">
                    <div className="partner-card">
                      <h4>{t.partners.busbud.name}</h4>
                      <p>{t.partners.busbud.desc}</p>
                      <a href="/go/busbud" target="_blank" rel="noopener noreferrer" className="partner-link-btn">
                        {t.bookBtn}
                      </a>
                    </div>
                    <div className="partner-card">
                      <h4>{t.partners.trip.name}</h4>
                      <p>{t.partners.trip.desc}</p>
                      <a href="/go/trip" target="_blank" rel="noopener noreferrer" className="partner-link-btn">
                        {t.bookBtn}
                      </a>
                    </div>
                    <div className="partner-card">
                      <h4>{t.partners.wayaway.name}</h4>
                      <p>{t.partners.wayaway.desc}</p>
                      <a href="/go/wayaway" target="_blank" rel="noopener noreferrer" className="partner-link-btn">
                        {t.bookBtn}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Category 3: Attractions */}
                <div className="booking-category">
                  <h3>{t.categories.attractions}</h3>
                  <div className="partners-grid">
                    <div className="partner-card">
                      <h4>{t.partners.getyourguide.name}</h4>
                      <p>{t.partners.getyourguide.desc}</p>
                      <a href="/go/getyourguide" target="_blank" rel="noopener noreferrer" className="partner-link-btn">
                        {t.bookBtn}
                      </a>
                    </div>
                    <div className="partner-card">
                      <h4>{t.partners.viator.name}</h4>
                      <p>{t.partners.viator.desc}</p>
                      <a href="/go/viator" target="_blank" rel="noopener noreferrer" className="partner-link-btn">
                        {t.bookBtn}
                      </a>
                    </div>
                    <div className="partner-card">
                      <h4>{t.partners.klook.name}</h4>
                      <p>{t.partners.klook.desc}</p>
                      <a href="/go/klook" target="_blank" rel="noopener noreferrer" className="partner-link-btn">
                        {t.bookBtn}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Category 4: eSIM/SIM */}
                <div className="booking-category">
                  <h3>{t.categories.connectivity}</h3>
                  <div className="partners-grid">
                    <div className="partner-card">
                      <h4>{t.partners.airalo.name}</h4>
                      <p>{t.partners.airalo.desc}</p>
                      <a href="/go/airalo" target="_blank" rel="noopener noreferrer" className="partner-link-btn">
                        {t.bookBtn}
                      </a>
                    </div>
                    <div className="partner-card">
                      <h4>{t.partners.yesim.name}</h4>
                      <p>{t.partners.yesim.desc}</p>
                      <a href="/go/yesim" target="_blank" rel="noopener noreferrer" className="partner-link-btn">
                        {t.bookBtn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicy onBack={() => { window.location.hash = 'home'; }} />
        )}

        {currentPage === 'terms' && (
          <TermsOfService onBack={() => { window.location.hash = 'home'; }} />
        )}

        {currentPage === 'contact' && (
          <ContactUs onBack={() => { window.location.hash = 'home'; }} />
        )}

        <footer className="footer-container">
          <div className="footer-nav">
            <a 
              href="#privacy" 
              className="footer-link"
            >
              {t.privacyLink}
            </a>
            <span className="footer-separator">•</span>
            <a 
              href="#terms" 
              className="footer-link"
            >
              {t.termsLink}
            </a>
            <span className="footer-separator">•</span>
            <a 
              href="#contact" 
              className="footer-link"
            >
              {t.contactLink}
            </a>
          </div>
          <p className="footer-disclosure">
            {t.footerNotice}
          </p>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Chiller Travel. {t.footerCopyright}
          </div>
        </footer>
      </main>

      {/* Floating Chat Widget */}
      <ChatWidget externalIsOpen={isChatOpen} setExternalIsOpen={setIsChatOpen} />
    </>
  );
}

export default App;
