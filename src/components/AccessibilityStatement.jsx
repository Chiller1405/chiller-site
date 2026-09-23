import React from 'react';

// Accessibility statement (2026-09-23, legal-checklist review). Worded as "we aim to meet" rather
// than "we comply with" on purpose: no formal accessibility audit has been done yet, so claiming
// full compliance would itself be an overstated promise.
function AccessibilityStatement({ onBack }) {
  return (
    <div className="legal-container" dir="rtl" style={{ textAlign: 'right', alignItems: 'stretch' }}>
      <button type="button" className="back-btn" onClick={onBack} style={{ alignSelf: 'flex-start' }}>
        <span>חזרה לדף הבית</span>
      </button>

      <header className="legal-header">
        <h1 className="legal-title" style={{ fontSize: '2.4rem' }}>הצהרת נגישות</h1>
        <div className="legal-meta">עודכן לאחרונה: ספטמבר 2026</div>
      </header>

      <section className="legal-section">
        <p className="legal-text">
          אנחנו ב-Chiller Travel רוצים שכל מטייל ומטיילת יוכלו להשתמש באתר ובצ'אט בנוחות, כולל אנשים עם מוגבלות.
          אנו פועלים להתאים את האתר להנחיות WCAG 2.0 ברמה AA ולתקן הישראלי ת"י 5568, ושואפים לעמוד בהן.
        </p>
      </section>

      <section className="legal-section">
        <h2>מה עשינו באתר</h2>
        <ul className="legal-list" style={{ paddingRight: '24px', paddingLeft: 0 }}>
          <li>ניווט מלא במקלדת, עם סימון ברור של הרכיב שעליו עומדים (מסגרת פוקוס).</li>
          <li>הגדרת שפת העמוד וכיוון הכתיבה (עברית מימין לשמאל, אנגלית משמאל לימין) כדי שקוראי מסך יקריאו נכון.</li>
          <li>תוויות טקסט לכפתורים ולשדות קלט, כולל שדה ההקלדה בצ'אט.</li>
          <li>ניגודיות צבעים מספקת בין הטקסט לרקע.</li>
          <li>התאמה לתצוגה בטלפון ובמחשב.</li>
          <li>האתר לא משתמש בתמונות שנושאות מידע, ולכן אין תוכן חזותי שדורש טקסט חלופי.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>מגבלות ידועות</h2>
        <p className="legal-text">
          התשובות בצ'אט נוצרות אוטומטית על ידי בינה מלאכותית, ולפעמים כוללות קישורים לאתרים של ספקים חיצוניים
          (למשל אתרי הזמנת לינה או טיסות). הנגישות של אתרים אלה באחריות הספקים עצמם ואינה בשליטתנו.
        </p>
      </section>

      <section className="legal-section">
        <h2>נתקלתם בבעיה?</h2>
        <div className="legal-highlight-box" style={{ borderLeft: 'none', borderRight: '4px solid #38bdf8', borderRadius: '12px 0 0 12px' }}>
          <p>
            אם משהו באתר לא נגיש לכם, נשמח לשמוע ולתקן. כתבו לנו ל-
            <a href="mailto:chillerbot1405@gmail.com" className="legal-link">chillerbot1405@gmail.com</a>
            {' '}ותארו את הבעיה ואת העמוד שבו נתקלתם בה. נחזור אליכם בהקדם.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AccessibilityStatement;
