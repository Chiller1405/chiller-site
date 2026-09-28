import React from 'react';

export default function BookingPortal({ lang }) {
  const isHe = lang === 'he';

  const categories = [
    {
      id: 'accommodation',
      title: isHe ? 'לינה והוסטלים 🛏️' : 'Hostels & Accommodation 🛏️',
      desc: isHe ? 'השוואת מחירים, זמינות חדרים ודורמס בכל העולם' : 'Compare dorm beds, guest houses, and private rooms',
      partners: [
        { name: 'Booking.com', tag: isHe ? 'מבחר ענק וביטול גמיש' : 'Huge inventory & flexible cancellation', link: '/go/booking' },
        { name: 'Agoda', tag: isHe ? 'דילים חזקים במיוחד באסיה' : 'Unbeatable rates across Asia', link: '/go/agoda' },
        { name: 'Expedia', tag: isHe ? 'מלונות, דילים וחבילות' : 'Hotels, deals, and flight bundles', link: '/go/expedia' }
      ]
    },
    {
      id: 'transport',
      title: isHe ? 'תחבורה, אוטובוסים וטיסות 🚌' : 'Buses, Transits & Flights 🚌',
      desc: isHe ? 'הזמנת כרטיסים למעברים יבשתיים וטיסות לואו-קוסט' : 'Intercity coaches, sleeper buses, ferries & domestic flights',
      partners: [
        { name: 'Busbud', tag: isHe ? 'אוטובוסי לילה בדרום אמריקה ואירופה' : 'South America & European coach routes', link: '/go/busbud' },
        { name: 'Trip.com', tag: isHe ? 'רכבות, טיסות ומעברים באסיה' : 'Trains, flights & Asian transit', link: '/go/trip' },
        { name: 'WayAway', tag: isHe ? 'מנוע טיסות עם קאשבק לתרמילאים' : 'Flight comparison with cashback rewards', link: '/go/wayaway' }
      ]
    },
    {
      id: 'attractions',
      title: isHe ? 'אטרקציות, סיורים ואקסטרים 🎟️' : 'Adventures & Guided Tours 🎟️',
      desc: isHe ? 'מדריכים מקומיים, טרקים מורשים וכרטיסי כניסה' : 'Certified trekking guides, surf schools, and skip-the-line passes',
      partners: [
        { name: 'GetYourGuide', tag: isHe ? 'טרקים, שייט וחוויות שטח' : 'Guided expeditions, rafting & day hikes', link: '/go/getyourguide' },
        { name: 'Viator', tag: isHe ? 'סיורים מודרכים ופעילויות מגוונות' : 'Local excursions & cultural experiences', link: '/go/viator' },
        { name: 'Klook', tag: isHe ? 'אטרקציות וכרטיסי רכבת באסיה' : 'Asia theme parks, passes & rail tickets', link: '/go/klook' }
      ]
    },
    {
      id: 'connectivity',
      title: isHe ? 'תקשורת, אינטרנט ו-eSIM 📱' : 'Connectivity & eSIM 📱',
      desc: isHe ? 'חיבור מיידי לאינטרנט ברגע הנחיתה ללא החלפת כרטיס' : 'Instant mobile internet the second you land without physical SIMs',
      partners: [
        { name: 'Airalo', tag: isHe ? 'חבילות מקומיות ואזוריות במעל 200 מדינות' : 'Regional & country packs in 200+ destinations', link: '/go/airalo' },
        { name: 'Yesim', tag: isHe ? 'חבילות ללא הגבלה ואינטרנט מהיר' : 'Unlimited high-speed global data packages', link: '/go/yesim' }
      ]
    }
  ];

  return (
    <section className="portal-section" id="booking">
      <div className="portal-container">
        
        <div className="section-head text-center">
          <div className="section-badge">
            {isHe ? 'פורטל שותפים רשמי' : 'Verified Travel Partners'}
          </div>
          <h2 className="section-heading">
            {isHe ? (
              <>רוצים להזמין ישירות בעצמכם?<br /><span className="text-highlight">ספקי נסיעות מוכרים לתרמילאים.</span></>
            ) : (
              <>Prefer to browse directly?<br /><span className="text-highlight">Top vetted booking partners in one place.</span></>
            )}
          </h2>
          <p className="section-subtext">
            {isHe 
              ? 'ההזמנה והתשלום מתבצעים ישירות באתר הספק ולפי התנאים שלו. חלק מהקישורים הם קישורי שותפים, ואנחנו עשויים לקבל עמלה בלי תוספת למחיר.'
              : 'Chiller connects you strictly with recognized global providers offering full buyer protection.'}
          </p>
        </div>

        {/* Categories Bento */}
        <div className="portal-categories-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="portal-cat-card">
              <div className="cat-card-header">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>

              <div className="partners-list">
                {cat.partners.map((partner, pIdx) => (
                  <div key={pIdx} className="portal-partner-item">
                    <div className="partner-item-info">
                      <span className="partner-item-name">{partner.name}</span>
                      <span className="partner-item-tag">{partner.tag}</span>
                    </div>
                    <a 
                      href={partner.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="partner-go-btn"
                    >
                      <span>{isHe ? 'מעבר לאתר ↗' : 'Visit ↗'}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
