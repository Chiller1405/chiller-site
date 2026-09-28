import React from 'react';

// Rewritten 2026-09-23 (legal-checklist review). The previous version never mentioned WhatsApp
// (the primary channel) or phone numbers, named none of the third parties that actually receive
// data (OpenAI, Meta, Render, Netlify, Microsoft Clarity...), said nothing about servers being in
// the US, about retention, or about Israeli privacy law, and had only one generic line on
// cookies. Every processor listed below was checked against the real code (chiller-bot services
// + Chiller-site) — keep this list in sync if a provider is added or removed.
//
// Content is data-driven (one array per language) so the Hebrew and English versions stay
// structurally identical and can't drift apart section-by-section.

const CONTACT_EMAIL = 'chillerbot1405@gmail.com';

const Email = () => (
  <a href={`mailto:${CONTACT_EMAIL}`} className="legal-link">{CONTACT_EMAIL}</a>
);

const he = {
  title: 'מדיניות פרטיות',
  updated: 'עודכן לאחרונה: 24 בספטמבר 2026',
  intro:
    "צ'ילר (Chiller Travel) הוא עוזר נסיעות מבוסס בינה מלאכותית, שזמין בווטסאפ ובצ'אט באתר chiller-travel.com. במסמך הזה מוסבר איזה מידע אנחנו אוספים, למה, עם מי הוא משותף ומה הזכויות שלכם. המסמך מנוסח בלשון רבים ופונה לכל המגדרים.",
  sections: [
    {
      h: '1. איזה מידע אנחנו אוספים',
      items: [
        'בווטסאפ: מספר הטלפון שלכם (הוא המזהה שלכם אצלנו) ותוכן ההודעות שאתם שולחים — טקסט, הודעות קוליות (שמתומללות לטקסט) ותמונות.',
        "בצ'אט באתר: מזהה שיחה אקראי שנוצר בדפדפן ונמחק כשסוגרים את הלשונית, ותוכן ההודעות. אין צורך בהרשמה, שם או טלפון.",
        'פרופיל טיול: מתוך השיחות אנחנו שומרים סיכום קצר של העדפות הטיול שלכם (יעדים, תקציב, סגנון טיול) כדי לא לשאול אתכם שוב את אותם דברים.',
        'אם הגעתם לווטסאפ דרך מודעה, אנחנו מקבלים ממטא מזהה של המודעה, כדי לדעת איזו מודעה עבדה.',
        'לחיצות על קישורים לספקים: איזה ספק נבחר ומאיזה עמוד הגעתם. בלי פרטים מזהים.',
        'פנייה דרך "צור קשר": השם וההודעה שאתם כותבים. הטופס פותח את תיבת הדואר שלכם, והפנייה מגיעה אלינו כמייל רגיל.',
        'מידע טכני: כתובת IP, סוג דפדפן ומכשיר וזמני גישה, שנרשמים ביומני השרת לצורך אבטחה ותקלות.',
        'נתוני שימוש באתר (Microsoft Clarity): רק אם אישרתם עוגיות מדידה. ראו סעיף 8.',
      ],
    },
    {
      h: '2. מי אחראי על המידע, והאם חובה למסור אותו',
      items: [
        "המידע נשמר במאגר של Chiller Travel (צ'ילר), שאחראית עליו. פרטי יצירת קשר בסוף העמוד.",
        'אין חובה חוקית למסור לנו מידע. אתם מוסרים אותו מרצונכם ובהסכמתכם, אבל בלי תוכן ההודעות לא נוכל לענות לכם.',
        'השירות מיועד לבני 18 ומעלה. אם יתברר לנו שנאסף מידע על קטין, נמחק אותו.',
      ],
    },
    {
      h: '3. למה אנחנו משתמשים במידע',
      items: [
        'כדי לענות לכם ולמצוא עבורכם לינה, תחבורה, טיסות, אטרקציות ו-eSIM.',
        'כדי לזכור את ההקשר של השיחה ואת העדפות הטיול שלכם.',
        'כדי לשפר את השירות, לזהות תקלות ולמנוע שימוש לרעה (למשל הגבלת כמות הודעות).',
        'כדי למדוד אילו ספקים ומודעות עובדים, כולל עמלות שאנחנו מקבלים מספקים (ראו תנאי השימוש).',
        'כדי להציג בתוך השיחה, כשזה רלוונטי לשאלה שלכם, המלצות ממומנות של שותפים, שתמיד מסומנות "ממומן".',
        'כדי לשלוח לכם ביוזמתנו, מדי פעם, דילים ומבצעים בוואטסאפ, רק אם הסכמתם לכך במפורש. ההצעות מותאמות להעדפות הטיול שלכם. אפשר להפסיק בכל רגע בשליחת "הסר".',
        'כדי לתעד את אישור תנאי השימוש ואת ההסכמה לדיוור (או את ביטולה), כולל מועד וגרסה, כפי שנדרש לפי דין.',
      ],
      after: 'אנחנו לא מוכרים את המידע האישי שלכם, ולא משתמשים בו לשיווק בלי הסכמה מפורשת שלכם. פרופיל הטיול נוצר אוטומטית על ידי בינה מלאכותית ומשמש רק להתאמת התשובות (ואם הסכמתם, גם להתאמת הצעות). הוא לא משמש לשום החלטה בעלת השלכה משפטית עליכם.',
    },
    {
      h: '4. עם מי המידע משותף',
      text: 'כדי להפעיל את השירות אנחנו נעזרים בספקים חיצוניים, שמעבדים מידע בשבילנו:',
      items: [
        'OpenAI: תוכן ההודעות, ההקלטות והתמונות נשלחים ל-OpenAI כדי לנסח תשובות, לתמלל קול ולזהות תמונות.',
        'Meta (WhatsApp): הודעות הווטסאפ עוברות דרך השרתים של מטא, לפי תנאי השימוש של ווטסאפ.',
        'Render: אחסון השרת ומסד הנתונים שבו נשמרות השיחות ופרופיל הטיול.',
        'Netlify: אחסון האתר.',
        'Sentry: ניטור שגיאות טכניות בשרת.',
        'Microsoft Clarity: מדידת שימוש באתר, רק אם אישרתם.',
        'Google Fonts: טעינת הגופן של האתר. גוגל מקבלת את כתובת ה-IP שלכם.',
        'ספקי חיפוש ומידע נסיעות (כמו Tavily, Serper, SerpApi, Travelpayouts, Google Places): מקבלים שאילתות חיפוש שנגזרות מהשיחה, למשל יעד ותאריכים. הם לא מקבלים את מספר הטלפון שלכם.',
      ],
      after:
        'כשאתם לוחצים על קישור לספק (למשל Booking או Airalo) ועוברים לאתר שלו, הספק אוסף מידע לפי מדיניות הפרטיות שלו ועשוי להציב עוגיות משלו. אנחנו לא אחראים לאתרים אלה. נמסור מידע לרשויות רק אם נחויב בכך לפי דין.',
    },
    {
      h: '5. איפה המידע נשמר',
      text: 'השרתים ומסד הנתונים של צילר נמצאים בארצות הברית, וחלק מהספקים שלמעלה מעבדים מידע גם במדינות אחרות. השימוש בשירות כולל העברה של המידע אל מחוץ לישראל.',
    },
    {
      h: '6. כמה זמן המידע נשמר',
      items: [
        'היסטוריית השיחות ופרופיל הטיול נשמרים כל עוד אתם משתמשים בשירות, כדי שצילר יזכור את הטיול שלכם, ונמחקים כשאתם מבקשים.',
        "בצ'אט באתר, המזהה נמחק מהדפדפן כשסוגרים את הלשונית. ההודעות עצמן נשמרות אצלנו כמו בווטסאפ.",
        'יומני שרת ושגיאות נשמרים אצל ספקי האחסון והניטור לתקופה מוגבלת, לפי ההגדרות שלהם.',
      ],
    },
    {
      h: '7. אל תשתפו מידע רגיש',
      text: "התשובות נוצרות אוטומטית על ידי בינה מלאכותית. אל תשלחו לצילר מספרי דרכון, פרטי כרטיס אשראי, סיסמאות או מידע רפואי — הוא לא צריך את זה כדי לעזור לכם.",
    },
    {
      id: 'cookies',
      h: '8. עוגיות (Cookies) ואחסון בדפדפן',
      items: [
        "הכרחיים (תמיד פועלים): מזהה השיחה של הצ'אט (sessionStorage, נמחק בסגירת הלשונית) ושמירת הבחירה שלכם לגבי עוגיות (localStorage).",
        'מדידה (רק באישור): Microsoft Clarity מציב את העוגיות _clck (עד שנה) ו-_clsk (עד יום) ומתעד איך משתמשים באתר (לחיצות, גלילה, מעבר בין עמודים) כדי שנוכל לשפר אותו. הכלי לא נטען בכלל לפני שאישרתם, ואם לא אישרתם, עוגיות ישנות שלו נמחקות.',
        'אצל ספקים: אחרי שעוברים לאתר של ספק, הוא עשוי להציב עוגיות משלו, כולל עוגיות שיוך לתוכנית השותפים.',
      ],
      after: 'אפשר לשנות את הבחירה בכל רגע דרך הקישור "הגדרות עוגיות" בתחתית האתר.',
    },
    {
      h: '9. הזכויות שלכם',
      text:
        'לפי חוק הגנת הפרטיות, התשמ"א-1981, מותר לכם לעיין במידע שנשמר עליכם ולבקש לתקן אותו. בנוסף, אפשר לבקש שנמחק את היסטוריית השיחות ואת פרופיל הטיול שלכם. אם אתם באיחוד האירופי או בקליפורניה, ייתכן שעומדות לכם זכויות נוספות לפי GDPR או CCPA. כדי לממש זכות, כתבו לנו מאיזה מספר ווטסאפ פניתם (או שהפנייה הייתה מהאתר). נענה תוך 30 יום. להפסקת דיוור שיווקי אין צורך לפנות אלינו: מספיק לשלוח "הסר" בצ\'אט.',
      email: true,
    },
    {
      h: '10. אבטחה',
      text: 'התקשורת מוצפנת (HTTPS), הגישה למסד הנתונים מוגנת בסיסמה ומוגבלת, ואנחנו מצמצמים את המידע האישי שנכנס ליומני השרת. אף מערכת לא מאובטחת ב-100%, אבל אנחנו עושים מאמץ סביר להגן על המידע. אם יקרה אירוע אבטחה חמור, נדווח עליו לרשות להגנת הפרטיות ולמי שנפגע, כפי שהדין מחייב.',
    },
    {
      h: '11. שינויים ויצירת קשר',
      text: 'אם נשנה את המדיניות, נעדכן את התאריך בראש העמוד. לכל שאלה על פרטיות:',
      email: true,
    },
  ],
};

const en = {
  title: 'Privacy Policy',
  updated: 'Last updated: September 24, 2026',
  intro:
    'Chiller (Chiller Travel) is an AI travel assistant available on WhatsApp and in the chat on chiller-travel.com. This policy explains what we collect, why, who we share it with, and your rights.',
  sections: [
    {
      h: '1. What we collect',
      items: [
        'On WhatsApp: your phone number (your identifier with us) and the content you send — text, voice messages (transcribed to text) and images.',
        'In the website chat: a random session ID created in your browser and deleted when you close the tab, plus your messages. No sign-up, name or phone number needed.',
        'Travel profile: a short summary of your travel preferences (destinations, budget, style) derived from your chats, so we don\'t ask the same things again.',
        'If you reached us on WhatsApp through an ad, Meta passes us an identifier for that ad.',
        'Clicks on provider links: which provider and which page you came from, without identifying details.',
        'Contact form: the name and message you write. The form opens your own email app and reaches us as a normal email.',
        'Technical data: IP address, browser/device type and access times in server logs, for security and troubleshooting.',
        'Site usage data (Microsoft Clarity): only if you accept analytics cookies. See section 8.',
      ],
    },
    {
      h: '2. Who controls the data, and whether you must provide it',
      items: [
        'Data is kept in a database owned and controlled by Chiller Travel. Contact details are at the bottom of this page.',
        'You are under no legal obligation to give us data. You provide it voluntarily and with your consent, but without your messages we cannot reply.',
        'The Service is for people aged 18 or over. If we learn we collected data about a minor, we will delete it.',
      ],
    },
    {
      h: '3. How we use it',
      items: [
        'To reply and to find accommodation, transport, flights, activities and eSIMs for you.',
        'To remember the context of your conversation and your travel preferences.',
        'To improve the service, fix problems and prevent abuse (e.g. message rate limits).',
        'To measure which providers and ads work, including commissions we earn (see Terms of Service).',
        'To show, within the conversation and when relevant to your question, sponsored recommendations from partners, always labeled "Sponsored".',
        'To send you occasional deals and promotions on WhatsApp on our own initiative, only if you explicitly agreed. Offers are tailored to your travel preferences. You can stop at any time by sending "הסר" (or "STOP").',
        'To keep a record of your acceptance of the Terms and of your marketing consent (or its withdrawal), including date and version, as required by law.',
      ],
      after: 'We do not sell your personal data, and we do not use it for marketing without your explicit consent. Your travel profile is generated automatically by AI and used only to tailor replies (and, if you opted in, offers). It is not used for any decision with legal effect on you.',
    },
    {
      h: '4. Who we share it with',
      text: 'We rely on third-party providers that process data on our behalf:',
      items: [
        'OpenAI: message content, recordings and images are sent to OpenAI to generate replies, transcribe audio and understand images.',
        'Meta (WhatsApp): WhatsApp messages pass through Meta\'s servers under WhatsApp\'s terms.',
        'Render: hosting of our server and the database where chats and travel profiles are stored.',
        'Netlify: website hosting.',
        'Sentry: technical error monitoring on our server.',
        'Microsoft Clarity: site analytics, only if you accept.',
        'Google Fonts: loads the site font; Google receives your IP address.',
        'Search and travel-data providers (e.g. Tavily, Serper, SerpApi, Travelpayouts, Google Places): receive search queries derived from the conversation, such as destination and dates — never your phone number.',
      ],
      after:
        'When you click a provider link (e.g. Booking or Airalo) and go to their site, that provider collects data under its own privacy policy and may set its own cookies. We are not responsible for those sites. We disclose data to authorities only when legally required.',
    },
    {
      h: '5. Where data is stored',
      text: 'Chiller\'s servers and database are in the United States, and some providers above process data in other countries. Using the service involves transferring data outside Israel.',
    },
    {
      h: '6. How long we keep it',
      items: [
        'Chat history and your travel profile are kept while you use the service, so Chiller remembers your trip, and are deleted on request.',
        'In the website chat, the session ID is removed from your browser when you close the tab; the messages themselves are stored like WhatsApp messages.',
        'Server and error logs are kept by our hosting and monitoring providers for a limited period under their settings.',
      ],
    },
    {
      h: '7. Don\'t share sensitive information',
      text: 'Replies are generated automatically by AI. Please don\'t send Chiller passport numbers, card details, passwords or medical information — it doesn\'t need them to help you.',
    },
    {
      id: 'cookies-en',
      h: '8. Cookies and browser storage',
      items: [
        'Essential (always on): the chat session ID (sessionStorage, cleared when the tab closes) and your cookie choice (localStorage).',
        'Analytics (only with consent): Microsoft Clarity sets the _clck (up to 1 year) and _clsk (up to 1 day) cookies and records how the site is used (clicks, scrolling, page views) so we can improve it. It does not load at all before you accept, and if you have not accepted, its old cookies are deleted.',
        'Providers: after you move to a provider\'s site, it may set its own cookies, including affiliate attribution cookies.',
      ],
      after: 'You can change your choice at any time via the "Cookie settings" link at the bottom of the site.',
    },
    {
      h: '9. Your rights',
      text:
        'Under the Israeli Protection of Privacy Law, 1981, you may access the data we hold about you and ask us to correct it. You may also ask us to delete your chat history and travel profile. If you are in the EU or California you may have additional rights under the GDPR or CCPA. To make a request, tell us which WhatsApp number you used (or that you used the website). We reply within 30 days. To stop marketing messages you don\'t need to contact us: just send "הסר" (or "STOP") in the chat.',
      email: true,
    },
    {
      h: '10. Security',
      text: 'Traffic is encrypted (HTTPS), database access is password-protected and restricted, and we limit the personal data that goes into server logs. No system is 100% secure, but we take reasonable measures to protect your data. If a serious security incident occurs, we will report it to the Privacy Protection Authority and to affected people as the law requires.',
    },
    {
      h: '11. Changes and contact',
      text: 'If we change this policy we will update the date at the top. For any privacy question:',
      email: true,
    },
  ],
};

function PolicyBody({ data, rtl }) {
  const boxStyle = rtl
    ? { borderLeft: 'none', borderRight: '4px solid #38bdf8', borderRadius: '12px 0 0 12px' }
    : undefined;
  const listStyle = rtl ? { paddingRight: '24px', paddingLeft: 0 } : undefined;
  return (
    <>
      <header className="legal-header">
        <h1 className="legal-title" style={rtl ? { fontSize: '2.4rem' } : undefined}>{data.title}</h1>
        <div className="legal-meta">{data.updated}</div>
      </header>
      <section className="legal-section">
        <p className="legal-text">{data.intro}</p>
      </section>
      {data.sections.map((s) => (
        <section className="legal-section" key={s.h} id={s.id}>
          <h2>{s.h}</h2>
          {s.text && <p className="legal-text">{s.text}</p>}
          {s.items && (
            <ul className="legal-list" style={listStyle}>
              {s.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
          {s.after && <p className="legal-text">{s.after}</p>}
          {s.email && (
            <div className="legal-highlight-box" style={boxStyle}>
              <p><Email /></p>
            </div>
          )}
        </section>
      ))}
    </>
  );
}

const goHome = () => { window.location.hash = 'home'; };

function PrivacyPolicy({ onBack = goHome }) {
  return (
    <div className="legal-container">
      <button type="button" className="back-btn" onClick={onBack}>
        <span>חזרה לדף הבית / Back to Home</span>
      </button>

      <div dir="rtl" lang="he" style={{ width: '100%', textAlign: 'right' }}>
        <PolicyBody data={he} rtl />
      </div>

      <hr className="legal-divider" />

      <div dir="ltr" lang="en" style={{ width: '100%' }}>
        <PolicyBody data={en} rtl={false} />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
