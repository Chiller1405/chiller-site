import React, { useState } from 'react';

export default function ProductTheater({ lang }) {
  const isHe = lang === 'he';
  const [activeTab, setActiveTab] = useState('hostel');

  const theaterScenarios = [
    {
      id: 'hostel',
      icon: '🛏️',
      tabTitle: isHe ? 'הוסטלים ולינה' : 'Hostels & Stays',
      query: isHe 
        ? '"אני במדיין, מחפש הוסטל בפובלאדו או לאורלס, חברתי אבל שיהיה אפשר לישון בלילה, עד 22$ למיטה בדורמס."' 
        : '"I am in Medellín, looking for a hostel in Poblado or Laureles. Good social vibe but quiet enough to sleep, under $22/dorm bed."',
      solutionIntro: isHe
        ? 'צ\'ילר מחפש לפי דירוגים, ביקורות על רעש, מיקום ואבטחה, ומציע מקומות שמתאימים לדרישות שלך:'
        : 'Chiller analyzes verified reviews, noise complaints, security, and location, surfacing only vetted spots:',
      highlights: [
        {
          name: 'Los Patios Hostel (El Poblado)',
          rating: '⭐ 9.5 / 10',
          price: '$20 / night',
          pros: isHe ? 'גג מדהים עם בר ושיעורי יוגה, וילונות פרטיים סביב כל מיטה, שקט אחרי 23:00' : 'Rooftop bar & yoga, privacy curtains on all bunks, quiet after 23:00',
          link: '/go/booking',
          provider: 'Booking.com'
        },
        {
          name: 'The Wandering Paisa (Laureles)',
          rating: '⭐ 9.1 / 10',
          price: '$15 / night',
          pros: isHe ? 'שכונה אותנטית יותר, קרוב לתחנת מטרו, ערבי סלסה ושיחות שפה ללא תשלום' : 'Authentic Colombian neighborhood, near metro, free salsa nights',
          link: '/go/agoda',
          provider: 'Agoda'
        }
      ],
      tip: isHe 
        ? '💡 טיפ צ\'ילר: אם אתה מחפש חיי לילה סוערים, פובלאדו זה המקום. אם אתה רוצה להרגיש את קולומביה האמיתית במחיר נמוך ב-30%, לך על לאורלס.'
        : '💡 Chiller Tip: Poblado has the wild nightlife; Laureles offers authentic local cafes and costs ~30% less.'
    },
    {
      id: 'bus',
      icon: '🚌',
      tabTitle: isHe ? 'אוטובוסים ומעברים' : 'Buses & Transits',
      query: isHe
        ? '"צריך להגיע מפוקהרה לקטמנדו בנפאל. שמעתי שהכביש בשיפוצים. מה עדיף - ואן תיירים, אוטובוס VIP או טיסה מקומית?"'
        : '"Need to get from Pokhara to Kathmandu. Heard the highway is under construction. Tourist van, VIP sofa bus, or domestic flight?"',
      solutionIntro: isHe
        ? 'צ\'ילר מחפש מידע עדכני על מצב הכביש ומשווה בין האפשרויות:'
        : 'Chiller checks live traveler reports from the last 24 hours regarding road construction and landslide delays:',
      highlights: [
        {
          name: 'Greenline / Swift Holidays VIP Sofa Bus',
          rating: '🚌 9-11 hours',
          price: '$16 (2,200 NPR)',
          pros: isHe ? 'מושבי כורסה מרווחים, מזגן, ארוחת צהריים נקייה בדרך. עדיף על ואנים קטנים ומטלטלים.' : 'Wide sofa recliners, A/C, clean lunch stop included. Safer than cramped local vans.',
          link: '/go/busbud',
          provider: 'Busbud'
        },
        {
          name: 'Buddha Air / Yeti Airlines (Flight)',
          rating: '✈️ 25 minutes',
          price: '$95 - $115',
          pros: isHe ? 'אם אתה קצר בזמן או רגיש לבחילות נסיעה בכבישים מתפתלים, הטיסה חוסכת יום שלם.' : 'Saves an entire day of grueling twists. Stunning Himalayan views if seated on left side.',
          link: '/go/trip',
          provider: 'Trip.com'
        }
      ],
      tip: isHe
        ? '💡 טיפ צ\'ילר: אם לקחת טיסה, בקש צ\'ק-אין בצד שמאל של המטוס (שורות A) כדי לראות את רכס האנאפורנה!'
        : '💡 Chiller Tip: Flying to Kathmandu? Request window seat on the LEFT side (Row A) for jaw-dropping Himalaya views.'
    },
    {
      id: 'flight',
      icon: '✈️',
      tabTitle: isHe ? 'טיסות ומלכודות כבודה' : 'Flights & Baggage',
      query: isHe
        ? '"מחפש טיסה מבאנגקוק להאנוי בסוף השבוע הבא עם מוצ\'ילה של 18 קילו."'
        : '"Looking for a flight from Bangkok to Hanoi next weekend with an 18kg backpack."',
      solutionIntro: isHe
        ? 'צ\'ילר מחשב את המחיר הכולל באמת — כולל תוספת כבודה לבטן המטוס (שמנועי חיפוש רגילים מסתירים):'
        : 'Chiller calculates true total cost—including checked baggage fees that generic search engines hide until checkout:',
      highlights: [
        {
          name: 'Vietnam Airlines (Full Service)',
          rating: '⭐ כולל 23 ק"ג',
          price: '$92 Total',
          pros: isHe ? 'יוצא משדה התעופה המרכזי סוברנבהומי (BKK), כולל כבודה של 23 ק"ג וארוחה קלה.' : 'Departs from main BKK airport, includes 23kg checked bag + snack.',
          link: '/go/trip',
          provider: 'Trip.com'
        },
        {
          name: 'AirAsia (Low Cost)',
          rating: '⚠️ בסיס $48 + כבודה $38',
          price: '$86 Total',
          pros: isHe ? 'יוצא משדה דון מואנג (DMK). החיסכון הוא רק 6$ אך דורש נסיעה ארוכה יותר לשדה.' : 'Departs Don Mueang (DMK). Net savings only $6 after adding 20kg bag.',
          link: '/go/wayaway',
          provider: 'WayAway'
        }
      ],
      tip: isHe
        ? '💡 טיפ צ\'ילר: תמיד תחשב את עלות המונית לשדה דון מואנג לעומת רכבת ה-Airport Link הנוחה לסוברנבהומי.'
        : '💡 Chiller Tip: Factor in the taxi to DMK vs. the cheap $1.30 Airport Rail Link train directly into BKK.'
    },
    {
      id: 'spontaneous',
      icon: '🧭',
      tabTitle: isHe ? 'שינוי מסלול ספונטני' : 'Crisis & Weather Pivots',
      query: isHe
        ? '"תקוע בברזיל, כל הטיסות לפלוריאנופוליס בוטלו בגלל סופה. יש לי שבוע פנוי, לאן לשנות יעד?"'
        : '"Stuck in Brazil, flights to Florianópolis cancelled due to storm. Have a week, where should I pivot?"',
      solutionIntro: isHe
        ? 'צ\'ילר מציע חלופות מיידיות מבוססות מזג אוויר וזמינות תחבורה יבשתית:'
        : 'Chiller generates immediate route alternatives based on live radar and regional bus networks:',
      highlights: [
        {
          name: 'Paraty & Ilha Grande (Costa Verde)',
          rating: '☀️ שמש 28°C',
          price: 'אוטובוס $18 (4 שעות)',
          pros: isHe ? 'עיירה קולוניאלית עתיקה, אי ללא מכוניות עם 100 חופים טרופיים ומסלולי ג\'ונגל.' : 'Colonial cobblestone streets, car-free tropical island with 100 beaches & jungle trails.',
          link: '/go/busbud',
          provider: 'Busbud'
        },
        {
          name: 'Ouro Preto & Tiradentes (Minas Gerais)',
          rating: '🏞️ תרבות והרים',
          price: 'אוטובוס לילה $24',
          pros: isHe ? 'אוכל ברזילאי מסורתי מדהים, מפלי מים קרובים ואווירת תרמילאים רגועה.' : 'Legendary food, waterfalls, gold-rush history, and affordable mountain lodges.',
          link: '/go/booking',
          provider: 'Booking.com'
        }
      ],
      tip: isHe
        ? '💡 טיפ צ\'ילר: פראטי נמצאת באמצע הדרך בין ריו לסאו פאולו, כך שתוכל להמשיך ממנה לכל יעד בקלות.'
        : '💡 Chiller Tip: Paraty is halfway between Rio and São Paulo, giving you full flexibility to connect onward.'
    },
    {
      id: 'activities',
      icon: '🏄',
      tabTitle: isHe ? 'אטרקציות ואקסטרים' : 'Adventures & Tours',
      query: isHe
        ? '"רוצה לעשות טרק של 4 ימים לסנטה קרוז בהואראז (פרו). לקחת סוכנות או לעשות עצמאי?"'
        : '"Want to hike the 4-day Santa Cruz trek in Huaraz, Peru. Guided agency or unguided independent?"',
      solutionIntro: isHe
        ? 'צ\'ילר שוקל את רמת הניסיון שלך, משקל הציוד והתקציב, ומסביר על מה לבדוק כשבוחרים סוכנות:'
        : 'Chiller weighs your altitude experience, gear weight, and budget, and explains what to check when choosing an agency:',
      highlights: [
        {
          name: 'Santa Cruz Guided Expedition (All-Inclusive)',
          rating: '🏔️ 4 Days / 3 Nights',
          price: '$180 - $220',
          pros: isHe ? 'כולל חמורים לנשיאת הציוד, שף שמבשל 3 ארוחות חמות ביום, אוהלים ומדריך בטיחות עם חמצן.' : 'Includes pack mules, cook with hot meals, heavy-duty 4-season tents, and emergency oxygen.',
          link: '/go/getyourguide',
          provider: 'GetYourGuide'
        }
      ],
      tip: isHe
        ? '💡 טיפ צ\'ילר: אל תתחיל את הטרק בלי לפחות יומיים התאקלמות בהואראז (3,050 מ\') וטיול יום ללגונה ווילקאקוצ\'ה או 69.'
        : '💡 Chiller Tip: Never start this trek without 2 full acclimatization days in Huaraz and a day hike to Laguna 69.'
    },
    {
      id: 'esim',
      icon: '📱',
      tabTitle: isHe ? 'חבילות אינטרנט ו-eSIM' : 'Connectivity & eSIM',
      query: isHe
        ? '"נוחת מחר בפיליפינים. עדיף לקנות סים מקומי בנמל תעופה או להתקין eSIM מראש?"'
        : '"Landing in the Philippines tomorrow. Buy physical SIM at Manila airport or pre-install eSIM?"',
      solutionIntro: isHe
        ? 'צ\'ילר יודע שבשדה התעופה חבילות לתיירים נוטות להיות יקרות יותר, והתורים ארוכים:'
        : 'Chiller knows airport SIM kiosks in Manila charge 3x rates with 45-minute queues:',
      highlights: [
        {
          name: 'Airalo Discover Global / Regional',
          rating: '⚡ חיבור מיידי',
          price: '$9.50 / 3GB (15 Days)',
          pros: isHe ? 'מתחבר אוטומטית לרשת Globe / Smart ברגע שהגלגלים נוגעים במסלול. בלי תורים ובלי להחליף כרטיס.' : 'Connects to Globe/Smart the second your plane touches down. No queues, keep WhatsApp number.',
          link: '/go/airalo',
          provider: 'Airalo'
        },
        {
          name: 'Yesim Unlimited Data Plan',
          rating: '🌐 ללא הגבלת גלישה',
          price: '$21 / 7 Days Unlimited',
          pros: isHe ? 'פתרון מושלם למי שרוצה לעבוד מהלפטופ עם הוטספוט או לשתף סטוריז באיכות גבוהה.' : 'Ideal for hotspotting laptops, video calls home, or uploading high-res trip media.',
          link: '/go/yesim',
          provider: 'Yesim'
        }
      ],
      tip: isHe
        ? '💡 טיפ צ\'ילר: תוודא שהמכשיר שלך תומך ב-eSIM ואינו נעול למפעיל סלולרי מקומי.'
        : '💡 Chiller Tip: Check that your device is carrier-unlocked before departing.'
    }
  ];

  const current = theaterScenarios.find((s) => s.id === activeTab) || theaterScenarios[0];

  return (
    <section className="product-theater-section" id="scenarios">
      <div className="theater-container">
        
        {/* Head */}
        <div className="section-head text-center">
          <div className="section-badge">
            {isHe ? 'תרחישים אמיתיים מהשטח' : 'Field-Tested Backpacker Scenarios'}
          </div>
          <h2 className="section-heading">
            {isHe ? (
              <>תראה מה צ'ילר יודע לעשות.<br /><span className="text-highlight">בדיוק השאלות שאתה שואל בטיול.</span></>
            ) : (
              <>See what Chiller can solve.<br /><span className="text-highlight">The exact dilemmas you face on the road.</span></>
            )}
          </h2>
          <p className="section-subtext">
            {isHe ? (
              'לא תשובות רובוטיות מנותקות. צ\'ילר חושב כמו תרמילאי שחרש את היעד, והמלצה ממומנת תמיד מסומנת.'
            ) : (
              'No generic, disconnected answers. Chiller thinks like a backpacker who knows the route, and paid recommendations are always labeled.'
            )}
          </p>
          <p className="demo-disclaimer">
            {isHe ? 'התרחישים הם דוגמאות להמחשה. תשובות אמיתיות תלויות במידע הזמין באותו רגע, ועלולות לטעות.' : 'Scenarios are illustrative. Real answers depend on the information available at the time and may contain mistakes.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="theater-tabs-bar">
          {theaterScenarios.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`theater-tab-btn ${item.id === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="tab-icon">{item.icon}</span>
              <span className="tab-text">{item.tabTitle}</span>
            </button>
          ))}
        </div>

        {/* Active Scenario Card Display */}
        <div className="theater-card-main animate-fade-in" key={current.id}>
          
          {/* Query Bar */}
          <div className="theater-query-header">
            <div className="query-user-tag">
              <span className="query-avatar">🎒</span>
              <div className="query-bubble">
                <span className="query-label">{isHe ? 'השאלה שלך לצ\'ילר:' : 'What you ask Chiller:'}</span>
                <p className="query-text">{current.query}</p>
              </div>
            </div>
          </div>

          {/* Solution Body */}
          <div className="theater-solution-body">
            <p className="solution-intro">{current.solutionIntro}</p>

            <div className="theater-options-grid">
              {current.highlights.map((h, i) => (
                <div key={i} className="theater-option-card">
                  <div className="option-top">
                    <h4 className="option-title">{h.name}</h4>
                    <span className="option-price">{h.price}</span>
                  </div>
                  <div className="option-meta">
                    <span className="option-rating">{h.rating}</span>
                    <span className="option-provider">{h.provider}</span>
                  </div>
                  <p className="option-pros">{h.pros}</p>
                  <a 
                    href={h.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="option-link-btn"
                  >
                    <span>{isHe ? 'בדוק פרטים והזמנה ↗' : 'Check Details & Book ↗'}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Pro Tip Box */}
            <div className="theater-pro-tip">
              <p>{current.tip}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
