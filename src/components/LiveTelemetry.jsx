import React from 'react';

export default function LiveTelemetry({ lang }) {
  const isHe = lang === 'he';

  const telemetryItems = [
    {
      badge: isHe ? 'מחיר בזמן אמת' : 'Live Fare Verification',
      status: isHe ? 'סונכרן לפני 3 דקות' : 'Synced 3m ago',
      origin: 'Bangkok (DMK)',
      dest: 'Chiang Mai (CNX)',
      metric: '$31 USD',
      submetric: isHe ? 'חיסכון של 42% מול המחיר הממוצע' : '42% below 14-day average',
      icon: '✈️'
    },
    {
      badge: isHe ? 'זמינות מושבים' : 'Sleeper Bed Availability',
      status: isHe ? 'זמין ברגע זה' : 'Live inventory',
      origin: 'Cusco Terminal',
      dest: 'Puno / Lake Titicaca',
      metric: isHe ? '4 מושבי מיטה נותרו' : '4 Cama seats left',
      submetric: isHe ? 'חברת Transzela • יציאה ב-22:00' : 'Transzela • 22:00 Departure',
      icon: '🚌'
    },
    {
      badge: isHe ? 'מעבר גבול פעיל' : 'Border Status',
      status: isHe ? 'פתוח ופעיל' : 'Open & Normal',
      origin: 'Nong Khai (Thailand)',
      dest: 'Thanaleng (Laos)',
      metric: isHe ? 'זמן המתנה: ~25 דק\'' : 'Queue time: ~25 mins',
      submetric: isHe ? 'ויזה בכניסה: $40 USD מזומן' : 'Visa on Arrival: $40 USD cash',
      icon: '🛂'
    },
    {
      badge: isHe ? 'מזג אוויר וטרקים' : 'Trail Conditions',
      status: isHe ? 'מעודכן להיום' : 'Updated today',
      origin: 'Salkantay Pass',
      dest: 'Machu Picchu',
      metric: isHe ? 'מעבר פתוח, רוח קרה 4°C' : 'Pass clear, gusty 4°C',
      submetric: isHe ? 'מומלץ ציוד תרמי ומעיל גשם' : 'Thermal base layer recommended',
      icon: '🏔️'
    }
  ];

  return (
    <section className="telemetry-section" id="intelligence">
      <div className="telemetry-container">
        
        {/* Header */}
        <div className="telemetry-header">
          <div className="telemetry-badge-row">
            <span className="telemetry-dot pulse"></span>
            <span className="telemetry-badge-text">
              {isHe ? 'חיפוש חי במקורות מידע וספקים' : 'Live Search Across Travel Sources'}
            </span>
          </div>

          <h2 className="telemetry-title">
            {isHe ? (
              <>מידע עדכני. <span className="text-gradient-mint">לא בלוגים מצהיבים מ-2019.</span></>
            ) : (
              <>Up-to-date information. <span className="text-gradient-mint">Not outdated travel blogs.</span></>
            )}
          </h2>

          <p className="telemetry-desc">
            {isHe ? (
              'המחירים, לוחות הזמנים ומעברי הגבול בעולם התרמילאות משתנים כל הזמן. צ\'ילר מחפש מחירים ומידע בזמן אמת במקורות שמחוברים אליו, ואומר לך כשמשהו לא מאומת. המחיר הסופי תמיד נקבע אצל הספק.'
            ) : (
              'Transit schedules, border permits, and hostel rates fluctuate daily. Chiller searches its connected sources in real time and tells you when something isn\'t verified. The final price is always set by the provider.'
            )}
          </p>
          <p className="demo-disclaimer">
            {isHe ? 'הכרטיסים למטה הם דוגמאות להמחשה, לא נתונים חיים.' : 'The cards below are illustrative examples, not live data.'}
          </p>
        </div>

        {/* Telemetry Board Grid */}
        <div className="telemetry-grid">
          {telemetryItems.map((item, idx) => (
            <div key={idx} className="telemetry-card">
              <div className="telemetry-card-top">
                <span className="telemetry-type-badge">{item.badge}</span>
                <span className="telemetry-sync-time">{item.status}</span>
              </div>

              <div className="telemetry-route">
                <span className="telemetry-icon">{item.icon}</span>
                <div className="telemetry-endpoints">
                  <span className="route-origin">{item.origin}</span>
                  <span className="route-arrow">→</span>
                  <span className="route-dest">{item.dest}</span>
                </div>
              </div>

              <div className="telemetry-metric-box">
                <div className="telemetry-main-metric">{item.metric}</div>
                <div className="telemetry-sub-metric">{item.submetric}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Partner Badges */}
        <div className="telemetry-partners-strip">
          <span className="partners-label">
            {isHe ? 'חלק מהספקים ומקורות המידע שצ\'ילר עובד איתם:' : 'Some of the providers and sources Chiller works with:'}
          </span>
          <div className="partners-logos">
            <span className="partner-logo-pill">Booking.com</span>
            <span className="partner-logo-pill">Busbud</span>
            <span className="partner-logo-pill">Trip.com</span>
            <span className="partner-logo-pill">Airalo</span>
            <span className="partner-logo-pill">GetYourGuide</span>
            <span className="partner-logo-pill">Agoda</span>
          </div>
        </div>

      </div>
    </section>
  );
}
