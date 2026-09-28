import React from 'react';

export default function AppChaosComparison({ lang }) {
  const isHe = lang === 'he';

  const appsList = [
    { name: 'Skyscanner', tag: isHe ? 'חיפוש טיסות ומלכודות כבודה' : 'Flight hunting & hidden fees', icon: '✈️' },
    { name: 'Booking.com', tag: isHe ? 'סחרור מחירים ומילארד פופ-אפים' : 'Price jumps & popup overload', icon: '🏨' },
    { name: 'Hostelworld', tag: isHe ? 'מיטות שאזלו וביקורות סותרות' : 'Sold-out beds & conflicting reviews', icon: '🛏️' },
    { name: 'Rome2Rio', tag: isHe ? 'מחירים לא מעודכנים מלפני הקורונה' : 'Outdated schedules from 2021', icon: '🗺️' },
    { name: 'WhatsApp Groups', tag: isHe ? '500 הודעות ספאם כדי למצוא המלצה אחת' : '500 chaotic group texts for 1 tip', icon: '💬' },
    { name: 'Reddit / Blogs', tag: isHe ? 'פוסטים באורך 3,000 מילה בשביל לוח זמנים' : '3,000-word SEO blogs for a bus time', icon: '📝' },
    { name: 'Google Maps', tag: isHe ? 'זמני נסיעה לא מציאותיים בעולם השלישי' : 'Unrealistic transit times in mountains', icon: '📍' },
    { name: 'eSIM Providers', tag: isHe ? 'השוואות גיגות ותאימות בין מדינות' : 'Confusing regional data packages', icon: '📶' }
  ];

  return (
    <section className="chaos-section" id="problem">
      <div className="chaos-container">
        
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="section-badge">
            {isHe ? 'הבעיה האמיתית בטיול' : 'The Real Backpacker Struggle'}
          </div>
          <h2 className="section-heading">
            {isHe ? (
              <>10 אפליקציות שונות וסוללה על 12% — <br className="hide-mobile" /><span className="text-highlight">או שיחה אחת שפותרת הכל.</span></>
            ) : (
              <>10 separate apps on 12% battery — <br className="hide-mobile" /><span className="text-highlight">or one chat that sorts it all.</span></>
            )}
          </h2>
          <p className="section-subtext">
            {isHe ? (
              'לא עלית על מטוס לקצה השני של העולם כדי לשבת בערב במיטת ההוסטל ולהתעסק 3 שעות בלוגיסטיקה מתישה. צ\'ילר מחליף את קרקס האפליקציות בצ\'אט פשוט.'
            ) : (
              'You didn\'t cross the globe just to spend 3 hours every evening in a hostel bunk managing screen-time anxiety. Chiller replaces the app chaos with one intuitive conversation.'
            )}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="chaos-grid">
          
          {/* Left / Top: The Chaos Side */}
          <div className="chaos-card chaos-bad">
            <div className="chaos-card-header">
              <span className="chaos-status-pill bad">
                {isHe ? '❌ הדרך הישנה והמתישה' : '❌ The Exhausting Old Way'}
              </span>
              <h3>{isHe ? 'עומס של 10+ כלים שונים' : 'Juggling 10+ Fragmented Apps'}</h3>
            </div>

            <div className="apps-cloud">
              {appsList.map((app, idx) => (
                <div key={idx} className="app-pill-item">
                  <span className="app-pill-icon">{app.icon}</span>
                  <div className="app-pill-text">
                    <strong>{app.name}</strong>
                    <span>{app.tag}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="chaos-outcome">
              <p>
                {isHe 
                  ? '🤦‍♂️ התוצאה: שעות מבוזבזות, עצבים, כרטיסים שנרכשים ברגע האחרון במחיר כפול וספק תמידי אם בחרת נכון.'
                  : '🤦‍♂️ The Result: Wasted hours, decision fatigue, overpriced panic bookings, and constant anxiety.'}
              </p>
            </div>
          </div>

          {/* Right / Bottom: The Chiller Way */}
          <div className="chaos-card chaos-good">
            <div className="chaos-card-header">
              <span className="chaos-status-pill good">
                {isHe ? '✨ הדרך של צ\'ילר' : '✨ The Chiller Way'}
              </span>
              <h3>{isHe ? 'חבר מומחה אחד בכיס' : 'One Trusted Friend in Your Pocket'}</h3>
            </div>

            <div className="chiller-solution-box">
              <div className="chiller-chat-preview-mini">
                <div className="mini-user-bubble">
                  {isHe 
                    ? '"צ\'ילר, מה הדרך הכי זולה ובטוחה להגיע מחר מסן פדרו דה אטקמה לסלטה?"'
                    : '"Chiller, what\'s the cheapest and safest way from San Pedro de Atacama to Salta tomorrow?"'}
                </div>
                <div className="mini-bot-bubble">
                  <p>
                    {isHe 
                      ? 'בדקתי עבורך את מעבר הגבול פאסו דה חאמה (Paso de Jama). יש אוטובוס של חברת Andesmar בימי שני ורביעי ב-07:00 בבוקר (55$). קח בחשבון עלייה לגובה של 4,800 מטר — תשתה המון מים ותכין 5,000 פזו ארגנטינאי למס מעבר.'
                      : 'Checked Paso de Jama border pass. Andesmar departs Mon/Wed at 07:00 AM ($55). High altitude alert (4,800m) — hydrate well and have your digital immigration QR ready.'}
                  </p>
                  <div className="mini-badge-verified">
                    ✓ {isHe ? 'דוגמה להמחשה • קישור לאתר הספק' : 'Illustrative example • Link to the provider'}
                  </div>
                </div>
              </div>

              <div className="solution-perks">
                <div className="perk-row">
                  <span className="perk-check">✓</span>
                  <span>{isHe ? 'בלי להתקין שום אפליקציה חדשה' : 'No new apps to download or configure'}</span>
                </div>
                <div className="perk-row">
                  <span className="perk-check">✓</span>
                  <span>{isHe ? 'עובד ישירות בווטסאפ שמותקן אצלך כבר' : 'Operates straight in the WhatsApp you already use'}</span>
                </div>
                <div className="perk-row">
                  <span className="perk-check">✓</span>
                  <span>{isHe ? 'תשובות ממוקדות לתרמילאים ולא פרסומות מנופחות' : 'Backpacker-tuned answers, zero marketing fluff'}</span>
                </div>
                <div className="perk-row">
                  <span className="perk-check">✓</span>
                  <span>{isHe ? 'אפשר לשלוח גם הודעות קוליות כשאתה בדרכים' : 'Send voice notes or text on the move'}</span>
                </div>
              </div>
            </div>

            <div className="chiller-outcome">
              <p>
                {isHe 
                  ? '🎒 התוצאה: שקט נפשי, יותר זמן ליהנות מהטיול והחלטות מהירות תוך 30 שניות.'
                  : '🎒 The Result: Total peace of mind, more time living the adventure, and decisions in 30 seconds.'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
