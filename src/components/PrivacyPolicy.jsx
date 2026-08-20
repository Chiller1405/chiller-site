import React from 'react';

function PrivacyPolicy({ onBack }) {
  return (
    <div className="legal-container">
      <button className="back-btn" onClick={onBack} aria-label="Back to Home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Back to Home</span>
      </button>

      <header className="legal-header">
        <h1 className="legal-title">Privacy Policy</h1>
        <div className="legal-meta">Last Updated: August 2026</div>
      </header>

      <section className="legal-section">
        <p className="legal-text">
          Welcome to Chiller Travel. We highly value your privacy and are committed to protecting the personal data you share with us. This Privacy Policy governs the collection, use, maintenance, and disclosure of information gathered from users of our artificial intelligence (AI) travel assistant platform. By accessing or using our services, you consent to the data practices described in this policy. If you do not agree with any of the terms outlined herein, please discontinue your use of our platform immediately.
        </p>
      </section>

      <section className="legal-section">
        <h2>1. Information We Collect</h2>
        <p className="legal-text">
          We collect two primary categories of information: non-personal data and personal data. Non-personal data includes details automatically recorded by our servers, such as browser type, device identifiers, operating systems, referring URLs, access times, and general analytics data concerning how users interact with the site. Personal data refers to information that you voluntarily provide to us when using our services. This includes, but is not limited to, the text inputs, search queries, destinations, and custom preferences you enter during your conversations with our AI travel assistant, as well as any contact details you submit during support inquiries. Additionally, our platform explicitly utilizes Cookies and other tracking technologies to optimize overall site performance.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Use of Information</h2>
        <p className="legal-text">
          The information we collect is utilized to provide, maintain, protect, and improve the functionality of Chiller Travel. Specifically, we process your conversation inputs and travel preferences to generate personalized, relevant backpacking itineraries, hostel comparisons, and transit route suggestions. Furthermore, we use the collected information to handle support requests, respond to inquiries, monitor platform security, troubleshoot technical issues, and analyze user interaction trends to enhance the user experience across our entire system.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Third-Party Links</h2>
        <p className="legal-text">
          Third-Party Links: The site contains links to external booking sites. Once you leave our site, we are not responsible for their privacy policies.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. User Rights (GDPR / CCPA)</h2>
        <p className="legal-text">
          Depending on your jurisdiction, you may have specific data protection rights under regulations such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). These rights include the right to request access to the personal data we hold about you, the right to request the correction of any inaccurate or incomplete personal information, and the right to request the complete deletion of your personal data from our active systems. If you wish to exercise any of these rights, please contact us using the contact details provided below.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Contact Us</h2>
        <div className="legal-highlight-box">
          <p>
            For any questions or requests, contact us at <a href="mailto:chillerbot1405@gmail.com" className="legal-link">chillerbot1405@gmail.com</a>. You must include your full name in the email so we can process your request.
          </p>
        </div>
      </section>

      <hr className="legal-divider" />

      <div className="rtl-container" dir="rtl">
        <header className="legal-header" style={{ borderBottomColor: 'rgba(255, 255, 255, 0.08)' }}>
          <h1 className="legal-title" style={{ fontSize: '2.4rem' }}>מדיניות פרטיות</h1>
          <div className="legal-meta" style={{ textAlign: 'right' }}>עודכן לאחרונה: אוגוסט 2026</div>
        </header>

        <section className="legal-section">
          <p className="legal-text">
            ברוכים הבאים ל-Chiller Travel. אנו מעריכים מאוד את הפרטיות שלכם ומחויבים להגנה על המידע האישי שאתם משתפים עמנו. מדיניות פרטיות זו מסדירה את האופן שבו אנו אוספים, משתמשים, שומרים ומגלים מידע שנאסף ממשתמשי פלטפורמת סוכן הנסיעות מבוסס הבינה המלאכותית (AI) שלנו. בעצם הגישה או השימוש בשירותים שלנו, אתם מסכימים לנהלי המידע המתוארים במדיניות זו. אם אינכם מסכימים לתנאי כלשהו המפורט במסמך זה, אנא הפסיקו את השימוש בפלטפורמה שלנו באופן מיידי.
          </p>
        </section>

        <section className="legal-section">
          <h2 style={{ fontSize: '1.4rem', color: '#38bdf8' }}>1. מידע שאנו אוספים</h2>
          <p className="legal-text">
            אנו אוספים שתי קטגוריות עיקריות של מידע: מידע שאינו אישי ומידע אישי. מידע שאינו אישי כולל פרטים שנרשמים באופן אוטומטי על ידי השרתים שלנו, כגון סוג הדפדפן, מזהי מכשיר, מערכות הפעלה, כתובות אתרים מפנות, זמני גישה ונתוני ניתוח כלליים בנוגע לאופן שבו משתמשים מקיימים אינטראקציה עם האתר. מידע אישי מתייחס למידע שאתם מספקים לנו מרצונכם החופשי בעת השימוש בשירותים שלנו. מידע זה כולל, בין היתר, את הזנות הטקסט, שאילתות החיפוש, היעדים וההעדפות המותאמות אישית שאתם מזינים במהלך השיחות שלכם עם סוכן הנסיעות של הבינה המלאכותית שלנו, כמו גם פרטי קשר שאתם מגישים במהלך פניות תמיכה. בנוסף, הפלטפורמה שלנו משתמשת במפורש בעוגיות (Cookies) ובטכנולוגיות מעקב אחרות כדי לייעל את הביצועים הכוללים של האתר.
          </p>
        </section>

        <section className="legal-section">
          <h2 style={{ fontSize: '1.4rem', color: '#38bdf8' }}>2. שימוש במידע</h2>
          <p className="legal-text">
            המידע שאנו אוספים משמש כדי לספק, לתחזק, להגן ולשפר את הפונקציונליות של Chiller Travel. באופן ספציפי, אנו מעבדים את שיחות המשתמשים ואת העדפות הנסיעה שלהם כדי להפיק המלצות מותאמות אישית, מסלולי טיול רלוונטיים לתרמילאים, השוואות הוסטלים והצעות למסלולי נסיעה ותחבורה. יתר על כן, אנו משתמשים במידע שנאסף כדי לטפל בבקשות תמיכה, להגיב לפניות משתמשים, לפקח על אבטחת הפלטפורמה, לפתור בעיות טכניות ולנתח מגמות אינטראקציה של משתמשים במטרה לשפר את חוויית המשתמש במערכת כולה.
          </p>
        </section>

        <section className="legal-section">
          <h2 style={{ fontSize: '1.4rem', color: '#38bdf8' }}>3. קישורים לצד שלישי</h2>
          <p className="legal-text">
            קישורים לצד שלישי: האתר מכיל קישורים לאתרי הזמנות חיצוניים. לאחר מעבר לאתרים אלו, איננו אחראים על מדיניות הפרטיות שלהם.
          </p>
        </section>

        <section className="legal-section">
          <h2 style={{ fontSize: '1.4rem', color: '#38bdf8' }}>4. זכויות משתמשים (GDPR / CCPA)</h2>
          <p className="legal-text">
            בהתאם לאזור השיפוט שלכם, יייתכן שיעמדו לזכותכם זכויות ספציפיות להגנה על נתונים תחת תקנות כגון תקנת הגנת המידע הכללית (GDPR) וחוק פרטיות הצרכן של קליפורניה (CCPA). זכויות אלו כוללות את הזכות לבקש גישה למידע האישי שאנו מחזיקים עליכם, הזכות לבקש תיקון של כל מידע אישי לא מדויק או לא שלם, והזכות לבקש מחיקה מלאה של המידע האישי שלכם מהמערכות הפעילות שלנו. אם ברצונכם לממש זכות כלשהי מזכויות אלו, אנא צרו עמנו קשר באמצעות פרטי הקשר המופיעים להלן.
          </p>
        </section>

        <section className="legal-section">
          <h2 style={{ fontSize: '1.4rem', color: '#38bdf8' }}>5. יצירת קשר</h2>
          <div className="legal-highlight-box" style={{ borderLeft: 'none', borderRight: '4px solid #38bdf8', borderRadius: '12px 0 0 12px' }}>
            <p>
              לכל שאלה או בקשה, פנו אלינו בכתובת <a href="mailto:chillerbot1405@gmail.com" className="legal-link">chillerbot1405@gmail.com</a>. חובה לציין שם מלא בפנייה כדי שנוכל לטפל בה.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
