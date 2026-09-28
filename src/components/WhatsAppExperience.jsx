import React from 'react';

export default function WhatsAppExperience({ lang }) {
  const isHe = lang === 'he';

  const steps = [
    {
      num: '01',
      title: isHe ? 'פותחים את הווטסאפ' : 'Open WhatsApp',
      desc: isHe 
        ? 'בלי להוריד אפליקציה חדשה על ה-WiFi המקרטע של ההוסטל. בלי להירשם עם סיסמה. פשוט לוחצים ומתחילים לדבר.' 
        : 'Zero app downloads on sluggish hostel Wi-Fi. Zero account setups. Tap the link and you are instantly in the chat.',
      tag: isHe ? 'ללא התקנה' : 'Zero Setup'
    },
    {
      num: '02',
      title: isHe ? 'שואלים בדיוק כמו חבר' : 'Ask Like You\'d Ask a Friend',
      desc: isHe 
        ? 'כתבו חופשי בעברית או באנגלית, או שלחו הודעה קולית כשאתם הולכים ברחוב עם המוצ\'ילה: "צ\'ילר, מה יש לעשות פה הערב?"' 
        : 'Type naturally in English or Hebrew, or send a quick voice note while walking: "Chiller, what should I eat tonight nearby?"',
      tag: isHe ? 'טקסט או הודעה קולית' : 'Text or Voice Note'
    },
    {
      num: '03',
      title: isHe ? 'מקבלים תשובה מדויקת וקישור' : 'Get Clear Answers & Direct Links',
      desc: isHe 
        ? 'מקבלים המלצה מסוננת עם קישור ישיר להזמנה אצל הספק, בלי תוספת למחיר. חלק מהקישורים הם קישורי שותפים.' 
        : 'Get curated recommendations with direct links to book with the provider, at no extra cost to you. Some links are affiliate links.',
      tag: isHe ? 'ההזמנה אצל הספק' : 'Book with the provider'
    }
  ];

  return (
    <section className="wa-experience-section" id="how-it-works">
      <div className="wa-experience-container">
        
        {/* Header */}
        <div className="section-head text-center">
          <div className="section-badge">
            {isHe ? 'פשוט, קל וללא חיכוך' : 'Zero Friction Experience'}
          </div>
          <h2 className="section-heading">
            {isHe ? (
              <>האפליקציה שאתה הכי אוהב בטלפון — <br /><span className="text-highlight">עכשיו עם המוח של מדריך טיולים עולמי.</span></>
            ) : (
              <>The app you already use all day — <br /><span className="text-highlight">supercharged with veteran travel intelligence.</span></>
            )}
          </h2>
          <p className="section-subtext">
            {isHe ? (
              'צ\'ילר חי ישירות בווטסאפ שלך, לצד השיחות עם החברים מההוסטל והמשפחה בבית. נגיש תמיד, מהיר ואינטואיטיבי.'
            ) : (
              'Chiller lives directly inside your WhatsApp alongside your family chats and hostel groups. Always accessible, fast, and light.'
            )}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="wa-steps-grid">
          {steps.map((st, idx) => (
            <div key={idx} className="wa-step-card">
              <div className="step-card-header">
                <span className="step-number">{st.num}</span>
                <span className="step-badge">{st.tag}</span>
              </div>
              <h3 className="step-title">{st.title}</h3>
              <p className="step-desc">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Culture Callout: Built for the Big Trip */}
        <div className="backpacker-dna-box">
          <div className="dna-content">
            <span className="dna-label">{isHe ? '🎒 נולד עבור "הטיול הגדול"' : '🎒 Built for the Big Trip'}</span>
            <h3 className="dna-title">
              {isHe 
                ? 'מדרום אמריקה ועד מזרח אסיה: אנחנו מבינים מה מוצ\'ילר באמת צריך.' 
                : 'From South America to Southeast Asia: built by travelers who know the road.'}
            </h3>
            <p className="dna-text">
              {isHe 
                ? 'נסיעות לילה של 20 שעות, מעברי גבול יבשתיים נידחים, חיפושי הוסטלים של הרגע האחרון, וספונטניות מוחלטת. צ\'ילר לא תוכנן במשרדים ממוזגים של חברת תיירות מסחרית — הוא נולד כדי לתת שקט נפשי בכל פינה בגלובוס.'
                : '20-hour night buses, obscure overland border crossings, last-minute dorm scrambles, and total freedom. Chiller wasn\'t designed for generic vacation tourists—it was forged for independent explorers who want genuine adventure without logistical burnout.'}
            </p>
            <div className="dna-tags">
              <span>🇨🇴 קולומביה</span>
              <span>🇵🇪 פרו</span>
              <span>🇧🇴 בוליביה</span>
              <span>🇦🇷 ארגנטינה</span>
              <span>🇹🇭 תאילנד</span>
              <span>🇻🇳 וייטנאם</span>
              <span>🇱🇦 לאוס</span>
              <span>🇮🇳 הודו</span>
              <span>🇵🇭 פיליפינים</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
