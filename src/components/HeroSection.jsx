import React, { useState } from 'react';

export default function HeroSection({ lang, t, onOpenChatWidget }) {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const scenarios = t.heroScenarios || [
    {
      id: 'hostel',
      promptLabel: lang === 'he' ? '🛏️ הוסטל בבואנוס איירס' : '🛏️ Hostel in Buenos Aires',
      userMsg: lang === 'he' 
        ? 'נחתתי בבואנוס איירס. מחפש הוסטל חברתי בפלרמו סוהו עם וויפיי חזק עד 25$ ללילה' 
        : 'Just landed in Buenos Aires. Looking for a social hostel in Palermo Soho with strong WiFi under $25/night',
      time: '14:21',
      botReplies: [
        {
          text: lang === 'he' 
            ? 'ברוך הבא לארגנטינה! 🇦🇷 פלרמו סוהו מעולה. הנה שתי אופציות שמתאימות לתרמילאים:'
            : 'Welcome to Argentina! 🇦🇷 Palermo Soho is prime. Here are 2 backpacker-friendly spots:',
          card: {
            title: 'Selin & Art Palermo Soho',
            tag: lang === 'he' ? '⭐ 9.3 מעולה • אווירה חברתית' : '⭐ 9.3 Superb • Social Vibe',
            price: '$21 / night',
            detail: lang === 'he' ? '4 מיטות פנויות בדורמס • גג שקיעות • וויפיי 120Mbps' : '4 dorm beds left • Rooftop terrace • 120Mbps WiFi',
            link: '/go/booking',
            actionText: lang === 'he' ? 'בדיקת זמינות ישירה ↗' : 'View on Booking ↗'
          },
          subtext: lang === 'he' 
            ? '💡 טיפ צ\'ילר: קח שירות מוניות מורשה משדה התעופה (Ezeiza) ולא חאפרים. עולה בערך 28,000 פזו.' 
            : '💡 Chiller Tip: Take an authorized remis taxi from Ezeiza, avoid curbside touts (~28,000 ARS).'
        }
      ]
    },
    {
      id: 'bus',
      promptLabel: lang === 'he' ? '🚌 אוטובוס לילה בפרו' : '🚌 Night Bus in Peru',
      userMsg: lang === 'he'
        ? 'איך הכי טוב להגיע מלימה לארקיפה מחר בלילה? רוצה אוטובוס נוח שלא ישבור את הגב'
        : 'Best way from Lima to Arequipa tomorrow night? Want a reliable sleeper bus.',
      time: '20:15',
      botReplies: [
        {
          text: lang === 'he'
            ? 'בחרת נכון - נסיעה של כ-16 שעות. מומלץ לקחת מושב Cama 160° או 180° עם חברה בטוחה:'
            : 'Good call - ~16h journey. Definitely book a 160° or 180° Cama seat with a verified operator:',
          card: {
            title: 'Cruz del Sur — Suite Class',
            tag: lang === 'he' ? '🛡️ מפעיל בדירוג עליון • כולל ארוחה קלה' : '🛡️ Top-Rated Operator • Meal included',
            price: '$34 (125 PEN)',
            detail: lang === 'he' ? 'יוצא ב-21:30 מטרמינל חביאר פראדו • מגיע ב-13:30' : 'Departs 21:30 Javier Prado • Arrives 13:30',
            link: '/go/busbud',
            actionText: lang === 'he' ? 'הזמנת כרטיס ב-Busbud ↗' : 'Book on Busbud ↗'
          },
          subtext: lang === 'he'
            ? '💡 טיפ צ\'ילר: תביא פליז או מעיל קל לנסיעה, המזגן באוטובוסי לילה בדרום אמריקה מקפיא!'
            : '💡 Chiller Tip: Bring a warm fleece, night bus A/C in South America is notoriously freezing!'
        }
      ]
    },
    {
      id: 'esim',
      promptLabel: lang === 'he' ? '📱 חבילת eSIM לוייטנאם ותאילנד' : '📱 eSIM for Vietnam & Thailand',
      userMsg: lang === 'he'
        ? 'עובר מחר מווייטנאם לתאילנד, צריך eSIM שיתפוס בשתיהן לחודש בלי להחליף סים פיזי'
        : 'Flying tomorrow from Vietnam to Thailand, need an eSIM that covers both for 1 month without swapping cards.',
      time: '11:04',
      botReplies: [
        {
          text: lang === 'he'
            ? 'הכי נוח לקחת חבילה אזורית לאסיה (Regional Asialink). הנה אפשרות מתאימה:'
            : 'Easiest route is a regional Asia package (Asialink). Here is a good option:',
          card: {
            title: 'Airalo Asialink (14 Countries)',
            tag: lang === 'he' ? '⚡ הפעלה מיידית תוך 2 דקות' : '⚡ Instant Activation in 2 mins',
            price: '$13 / 5GB (30 Days)',
            detail: lang === 'he' ? 'כולל תאילנד, וייטנאם, לאוס, קמבודיה ועוד' : 'Includes Thailand, Vietnam, Laos, Cambodia & more',
            link: '/go/airalo',
            actionText: lang === 'he' ? 'קבלת קוד והתקנה ↗' : 'Get eSIM on Airalo ↗'
          },
          subtext: lang === 'he'
            ? '💡 טיפ צ\'ילר: התקן את הפרופיל עוד בהוסטל עם הוויפיי לפני העלייה לטיסה.'
            : '💡 Chiller Tip: Install the eSIM profile while on hostel WiFi before boarding.'
        }
      ]
    },
    {
      id: 'spontaneous',
      promptLabel: lang === 'he' ? '🌧️ גשם שוטף בצפון - מה עושים?' : '🌧️ Stuck in Heavy Rain',
      userMsg: lang === 'he'
        ? 'ירד גשם זלעפות בפאי ולא נוכל לנסוע על אופנועים. מה כדאי לעשות היום?'
        : 'Pouring rain in Pai, Thailand, cannot ride motorbikes today. What should we do?',
      time: '10:48',
      botReplies: [
        {
          text: lang === 'he'
            ? 'לא נורא, פאי מדהימה בגשם! הנה 3 דברים מעולים לעשות בלי להירטב על האופנוע:'
            : 'No stress, Pai is magical in the rain! Here are 3 great sheltered ways to spend the day:',
          card: {
            title: 'Pai Hot Springs & Herbal Baths',
            tag: lang === 'he' ? '♨️ מעיינות חמים טבעיים ביער' : '♨️ Natural Jungle Hot Springs',
            price: '200 THB (~$6)',
            detail: lang === 'he' ? 'קח טנדר סונגתאו משותף מהמרכז (40 באט) • מושלם לימי גשם' : 'Shared songthaew from center (40 THB) • Cozy in rain',
            link: '/go/klook',
            actionText: lang === 'he' ? 'לפרטים נוספים ↗' : 'See Details ↗'
          },
          subtext: lang === 'he'
            ? 'אחרי זה תקפצו ל-Art Farm Cafe לשוקו חם וספר טוב.'
            : 'After that, drop by Art Farm Cafe for hot cocoa and good music.'
        }
      ]
    }
  ];

  const currentScenario = scenarios[activeScenarioIndex] || scenarios[0];

  const handleSelectScenario = (index) => {
    if (index === activeScenarioIndex) return;
    setIsTyping(true);
    setActiveScenarioIndex(index);
    setTimeout(() => {
      setIsTyping(false);
    }, 450);
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    lang === 'he' 
      ? "היי צ'ילר! אני מתכנן את הטיול שלי ואשמח לעזרה עם..." 
      : "Hey Chiller! I'm planning my backpacking trip and would love some help with..."
  )}`;

  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        
        {/* Left Column: Headlines, Value Props & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="live-dot pulse"></span>
            <span>{t.heroEyebrow || (lang === 'he' ? "זמין בווטסאפ • החבר החכם לתרמילאים" : "Live on WhatsApp • Smart Backpacker Friend")}</span>
          </div>

          <h1 className="hero-title">
            {lang === 'he' ? (
              <>
                החבר הכי מנוסה לטיול שלך.<br />
                <span className="text-gradient-mint">עכשיו ישירות בווטסאפ.</span>
              </>
            ) : (
              <>
                The smartest backpacker friend you'll ever have.<br />
                <span className="text-gradient-mint">Right in your WhatsApp.</span>
              </>
            )}
          </h1>

          <p className="hero-subtitle">
            {lang === 'he' ? (
              "במקום לטבוע בין 14 אפליקציות, קבוצות וואטסאפ מבולגנות וחיפושים בגוגל ב-2 בלילה — פשוט שואלים את צ'ילר. מהוסטלים ועד אוטובוסי לילה, טיסות, אטרקציות ו-eSIM בזמן אמת."
            ) : (
              "Stop drowning in 14 browser tabs, chaotic group chats, and outdated blogs at 2 AM. Just text Chiller what you need—from sleeper buses and $20 hostels to live flight prices and eSIMs."
            )}
          </p>

          {/* Action Row */}
          <div className="hero-cta-group">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="primary-whatsapp-btn"
              aria-label={t.heroPrimaryCta || (lang === 'he' ? "דבר עם צ'ילר בווטסאפ" : "Chat with Chiller on WhatsApp")}
            >
              <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.87-.442-1.488-.616-2.482-2.109-2.556-2.208-.073-.099-.607-.808-.607-1.543s.385-1.1.522-1.249c.143-.15.312-.187.416-.187.104 0 .208.002.298.006.096.004.225-.037.351.27.13.319.444 1.082.483 1.161.039.08.065.173.013.277-.052.104-.078.169-.156.26-.078.091-.163.203-.233.273-.078.077-.16.16-.069.316.091.156.403.664.864 1.074.593.528 1.093.691 1.249.769.156.078.247.065.338-.039.091-.104.39-.455.494-.611.104-.156.208-.13.351-.078.143.052.909.429 1.065.507.156.078.26.117.299.182.039.065.039.377-.105.782z"/>
              </svg>
              <span>{t.heroPrimaryCta || (lang === 'he' ? "פתח שיחה בווטסאפ — חינם" : "Start Chatting on WhatsApp — Free")}</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <button 
              type="button" 
              className="secondary-demo-btn"
              onClick={onOpenChatWidget}
              aria-label={lang === 'he' ? "נסה צ'אט עכשיו באתר" : "Try live chat in browser"}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>{lang === 'he' ? "נסה צ'אט עכשיו באתר" : "Test live chat here"}</span>
            </button>
          </div>

          {/* Trust Chips */}
          <div className="hero-trust-chips">
            <div className="trust-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>{lang === 'he' ? "ללא צורך בהורדת אפליקציה" : "Zero app downloads needed"}</span>
            </div>
            <div className="trust-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>{lang === 'he' ? "מידע חי בזמן אמת" : "Live real-time prices & routes"}</span>
            </div>
            <div className="trust-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>{lang === 'he' ? "עברית ואנגלית שוטפת" : "Fluent English & Hebrew"}</span>
            </div>
          </div>

          {/* Quick Scenario Pills to feed into the Phone Simulator */}
          <div className="hero-prompt-picker">
            <span className="picker-label">{lang === 'he' ? "לחצו לבדיקת תרחיש:" : "Click to test a real scenario:"}</span>
            <div className="picker-chips">
              {scenarios.map((sc, i) => (
                <button
                  key={sc.id}
                  type="button"
                  className={`scenario-chip ${i === activeScenarioIndex ? 'active' : ''}`}
                  onClick={() => handleSelectScenario(i)}
                >
                  {sc.promptLabel}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Phone Simulator */}
        <div className="hero-simulator-wrapper">
          <p className="demo-disclaimer demo-disclaimer--hero">
            {lang === 'he' ? 'הדגמה להמחשה. המחירים והפרטים אינם נתונים חיים.' : 'Illustrative demo. Prices and details are not live data.'}
          </p>
          <div className="phone-frame-outer">
            {/* Dynamic Status Notch */}
            <div className="phone-notch">
              <span className="notch-speaker"></span>
              <span className="notch-camera"></span>
            </div>

            {/* WhatsApp App Mockup */}
            <div className="phone-screen">
              {/* Phone Header */}
              <div className="sim-wa-header">
                <div className="sim-wa-back">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                </div>
                <div className="sim-wa-avatar">
                  <span>C</span>
                  <span className="sim-avatar-status"></span>
                </div>
                <div className="sim-wa-info">
                  <div className="sim-name">Chiller • צ'ילר</div>
                  <div className="sim-status">
                    <span className="status-indicator"></span>
                    <span>{lang === 'he' ? 'זמין • עוזר נסיעות חכם' : 'Online • Smart Companion'}</span>
                  </div>
                </div>
                <div className="sim-wa-actions">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </div>
              </div>

              {/* Chat Thread Area */}
              <div className="sim-wa-body">
                <div className="sim-date-divider">
                  <span>{lang === 'he' ? 'היום' : 'TODAY'}</span>
                </div>

                {/* User Message */}
                <div className="sim-msg user">
                  <div className="sim-bubble">
                    <p>{currentScenario.userMsg}</p>
                    <span className="sim-msg-meta">
                      {currentScenario.time}
                      <svg className="ticks" viewBox="0 0 16 15" fill="none">
                        <path d="M15.01 3.316l-7.79 7.79-4.24-4.24.71-.71 3.53 3.53 7.08-7.08.71.71zm-4.24 0l-7.79 7.79-1.41-1.41.71-.71.7.7 7.08-7.08.71.71z" fill="#4fc3f7"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Bot Response */}
                {isTyping ? (
                  <div className="sim-msg bot">
                    <div className="sim-bubble typing-bubble">
                      <div className="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                ) : (
                  currentScenario.botReplies.map((reply, idx) => (
                    <div key={idx} className="sim-msg bot animate-fade-in">
                      <div className="sim-bubble">
                        <p className="sim-reply-text">{reply.text}</p>
                        
                        {reply.card && (
                          <div className="sim-rich-card">
                            <div className="card-top-row">
                              <span className="card-title">{reply.card.title}</span>
                              <span className="card-price-pill">{reply.card.price}</span>
                            </div>
                            <div className="card-tag">{reply.card.tag}</div>
                            <div className="card-detail">{reply.card.detail}</div>
                            <a 
                              href={reply.card.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="card-action-btn"
                            >
                              <span>{reply.card.actionText}</span>
                            </a>
                          </div>
                        )}

                        {reply.subtext && (
                          <p className="sim-reply-subtext">{reply.subtext}</p>
                        )}

                        <span className="sim-msg-meta">
                          {currentScenario.time}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Simulated Input Field at bottom of Phone */}
              <div className="sim-wa-footer">
                <div className="sim-wa-input-fake">
                  <span>{lang === 'he' ? 'הקלד שאלה לצ\'ילר...' : 'Ask Chiller anything...'}</span>
                </div>
                <div className="sim-wa-send-circle">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14.5v-9l6 4.5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
