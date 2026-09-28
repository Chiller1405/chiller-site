import React from 'react';

// Terms of Service — rewritten 2026-09-24 (legal review with the legal plugin; compared against
// Israeli travel sites — Lametayel, Muchiler — and AI travel assistants — Layla, Mindtrip).
// Not legal advice: have an Israeli lawyer review before relying on it.
//
// Keep in sync with chiller-bot/services/consentService.js: the WhatsApp onboarding message
// summarizes these terms, and TERMS_VERSION there must be bumped whenever this page changes
// materially (every WhatsApp user is then asked to accept again).
//
// Things deliberately NOT claimed here, because Israeli law wouldn't enforce them against a
// consumer anyway (Standard Contracts Law): a blanket "no liability whatsoever", or "you may only
// sue the supplier". The liability section is limited "to the extent permitted by law" instead.

const CONTACT_EMAIL = 'chillerbot1405@gmail.com';
// TODO(Noam): once the business is registered, put the legal name + ID (ח.פ./ע.מ.) here — it is
// shown in section 1 in both languages. Left empty rather than invented.
const OPERATOR_DETAILS = '';

const Email = () => (
  <a href={`mailto:${CONTACT_EMAIL}`} className="legal-link">{CONTACT_EMAIL}</a>
);

const he = {
  title: 'תנאי שימוש',
  updated: 'עודכן לאחרונה: 24 בספטמבר 2026',
  intro:
    "ברוכים הבאים לצ'ילר. התנאים האלה חלים על השימוש בצ'ילר בווטסאפ, בצ'אט באתר ובאתר chiller-travel.com (יחד: \"השירות\"). השימוש בשירות מהווה הסכמה לתנאים ולמדיניות הפרטיות. בווטסאפ תתבקשו לאשר אותם במפורש לפני השימוש. התנאים מנוסחים בלשון רבים ופונים לכל המגדרים.",
  sections: [
    {
      h: '1. מי אנחנו',
      text:
        `השירות מופעל על ידי Chiller Travel ("צ'ילר", "אנחנו")${OPERATOR_DETAILS ? `, ${OPERATOR_DETAILS}` : ''}. לכל פנייה אפשר לכתוב לנו במייל שבסוף העמוד.`,
    },
    {
      h: '2. מי יכול להשתמש',
      items: [
        'השירות מיועד לבני 18 ומעלה. בשימוש בשירות אתם מצהירים שאתם בני 18 ומעלה.',
        'השימוש בווטסאפ כפוף גם לתנאי השימוש של WhatsApp ו-Meta.',
        'השירות ניתן לשימוש אישי ולא מסחרי.',
      ],
    },
    {
      h: '3. מה השירות עושה, ומה הוא לא',
      items: [
        "צ'ילר הוא עוזר נסיעות מבוסס בינה מלאכותית שנותן מידע כללי, המלצות וקישורים לאתרים של ספקים (לינה, תחבורה, טיסות, אטרקציות, eSIM ועוד).",
        "צ'ילר אינו סוכן נסיעות, מפעיל תיירות או ספק. אנחנו לא מוכרים, לא מזמינים בשמכם, לא גובים תשלום ולא מנפיקים כרטיסים.",
        'השירות ניתן בחינם, "כמות שהוא" (AS IS) וכפי שהוא זמין מעת לעת.',
      ],
    },
    {
      h: '4. בינה מלאכותית ודיוק המידע',
      items: [
        'התשובות נוצרות אוטומטית על ידי מערכת בינה מלאכותית, בלי בדיקה אנושית בזמן אמת. הן עלולות להיות שגויות, חלקיות או לא מעודכנות.',
        'מחירים, זמינות, לוחות זמנים ותנאים אצל ספקים משתנים כל הזמן. המחיר והתנאים המחייבים הם אלה שמוצגים באתר הספק ברגע ההזמנה.',
        'המידע אינו ייעוץ מקצועי, משפטי, רפואי, ביטוחי או בטיחותי. באחריותכם לוודא פרטים חשובים מול מקור רשמי לפני שמסתמכים עליהם.',
      ],
    },
    {
      h: '5. הזמנות אצל ספקים חיצוניים',
      items: [
        'כשאתם עוברים מקישור לאתר של ספק, ההתקשרות וההזמנה הן ביניכם לבין הספק בלבד, לפי התנאים, מדיניות הביטול ומדיניות הפרטיות שלו.',
        "צ'ילר אינו צד להזמנה. שינויים, ביטולים, החזרים ושירות לקוחות מטופלים על ידי הספק.",
        'אין באמור כדי לגרוע מזכויות שעומדות לכם כלפי הספק לפי כל דין, כולל חוק הגנת הצרכן.',
      ],
    },
    {
      h: '6. קישורי שותפים, תוכן ממומן והשפעה על ההמלצות',
      items: [
        'חלק מהקישורים הם קישורי שותפים. אם תזמינו דרכם, אנחנו עשויים לקבל עמלה מהספק, בלי שום תוספת למחיר שאתם משלמים.',
        'כשכמה אפשרויות דומות זו לזו, הקשרים המסחריים שלנו עשויים להשפיע על הספק שיוצג לכם.',
        'המלצות ממומנות הן חלק מהשירות: כשזה רלוונטי לשאלה שלכם, צ\'ילר עשוי להציג אפשרות של שותף ששילם עבור הצגתה, ששותפיו נבחרים בקפידה ומתאימים למטיילים. המלצה כזו תסומן תמיד במילה "ממומן" (Sponsored), ולא תוצג כהמלצה ניטרלית. המלצות ממומנות בתוך השיחה אינן דיוור שיווקי, ואינן תלויות בהסכמה לדיוור.',
      ],
    },
    {
      h: '7. וואטסאפ, אישור התנאים ודיוור שיווקי',
      items: [
        "בפנייה הראשונה לצ'ילר בוואטסאפ תתבקשו לאשר את התנאים ואת מדיניות הפרטיות לפני שהשירות יינתן. האישור, מועדו וגרסת התנאים נשמרים אצלנו. אם התנאים ישתנו מהותית, תתבקשו לאשר שוב.",
        'דיוור שיווקי (הודעות שנשלחות ביוזמתנו, בלי ששאלתם) הוא רשות בלבד: בנפרד מאישור התנאים ורק אם תבחרו בכך באופן אקטיבי, תוכלו להסכים לקבל מאיתנו בוואטסאפ, מדי פעם, דילים ומבצעים שמתאימים למטיילים ולהעדפות הטיול שלכם, כולל הצעות של שותפינו. ההסכמה אינה תנאי לשימוש בשירות.',
        'כל הודעה שיווקית תסומן כ"פרסומת" ותכלול דרך להפסיק. אפשר לבטל את ההסכמה בכל רגע בשליחת "הסר" (או STOP), ואפשר להצטרף מחדש בשליחת "הרשמה".',
      ],
    },
    {
      h: '8. שימוש מותר',
      text: 'אסור להשתמש בשירות כדי:',
      items: [
        'לעשות משהו לא חוקי, להטריד, להטעות או לפגוע באחרים.',
        'לשלוח מידע אישי של אנשים אחרים בלי הרשאה, או תוכן פוגעני או מפר זכויות.',
        'להפעיל את השירות באופן אוטומטי (בוטים, סקרייפינג), להעמיס עליו, לעקוף את מגבלות השימוש או לנסות לחלץ את ההוראות, הקוד או הנתונים שלו.',
        'להשתמש בשירות לצורך מסחרי או למכור את התשובות הלאה.',
      ],
      after: 'אנחנו רשאים להגביל או לחסום שימוש שמפר את התנאים או מסכן את השירות.',
    },
    {
      h: '9. תוכן ומידע שאתם שולחים',
      items: [
        'ההודעות, ההקלטות והתמונות שאתם שולחים נשארות שלכם. אתם מרשים לנו לעבד אותן (כולל אצל ספקי ה-AI שלנו) רק כדי לתת ולשפר את השירות, כמפורט במדיניות הפרטיות.',
        'אל תשלחו מידע רגיש שאינו נחוץ, כמו מספר דרכון, פרטי כרטיס אשראי, סיסמאות או מידע רפואי.',
      ],
    },
    {
      h: '10. קניין רוחני',
      text:
        "השם צ'ילר, הלוגו, העיצוב, הקוד ותוכן האתר שייכים לנו. מותר לכם להשתמש בתשובות שקיבלתם לצורך תכנון הטיול האישי שלכם, אבל לא להעתיק את השירות או את תכניו בהיקף רחב או לצורך מסחרי.",
    },
    {
      h: '11. בריאות, בטיחות, ביטוח ומסמכי נסיעה',
      items: [
        'טיול, ובמיוחד פעילות אתגרית, טרקים וגובה, כרוך בסיכונים. ההחלטה מה לעשות ואיך היא שלכם.',
        'האחריות לדרכון בתוקף, לוויזות, לאישורי כניסה, לחיסונים ולביטוח נסיעות מתאים (כולל כיסוי לספורט אתגרי) היא שלכם. בדקו תמיד מול הגורמים הרשמיים, כמו אתר משרד החוץ והנציגויות.',
      ],
    },
    {
      h: '12. זמינות השירות ושינויים',
      text:
        'אנחנו לא מתחייבים שהשירות יהיה זמין תמיד, בלי תקלות או בלי הפסקות, ורשאים לשנות, להשעות או להפסיק אותו או חלקים ממנו.',
    },
    {
      h: '13. הגבלת אחריות',
      items: [
        "במידה המרבית שהדין מתיר, צ'ילר לא יהיה אחראי לנזק עקיף או תוצאתי, ולא לנזק שנגרם מהסתמכות על מידע שלא אומת, מהזמנה אצל ספק, ממעשה או מחדל של ספק או מתקלה בשירות.",
        'אין בתנאים האלה כדי להגביל אחריות שלא ניתן להגביל לפי דין, כמו אחריות לנזק שנגרם בזדון או ברשלנות חמורה.',
      ],
    },
    {
      h: '14. שיפוי',
      text: 'אם תפרו את התנאים ובעקבות זאת תוגש נגדנו דרישה או תביעה, תשפו אותנו על ההוצאות הסבירות שנגרמו לנו בגללה.',
    },
    {
      h: '15. פרטיות',
      text: 'השימוש במידע האישי שלכם מתואר במדיניות הפרטיות, שהיא חלק מהתנאים האלה.',
      link: { href: '#privacy', label: 'למדיניות הפרטיות' },
    },
    {
      h: '16. שינויים בתנאים',
      text:
        'אנחנו רשאים לעדכן את התנאים. תאריך העדכון מופיע בראש העמוד. על שינוי מהותי נודיע באתר, ובוואטסאפ תתבקשו לאשר את התנאים המעודכנים.',
    },
    {
      h: '17. דין וסמכות שיפוט',
      text:
        'על התנאים חלים דיני מדינת ישראל. סמכות השיפוט הייחודית נתונה לבתי המשפט המוסמכים במחוז תל אביב-יפו, אלא אם דין מחייב קובע אחרת.',
    },
    {
      h: '18. יצירת קשר',
      text: 'שאלות, תלונות או בקשות בנוגע לתנאים:',
      email: true,
    },
  ],
};

const en = {
  title: 'Terms of Service',
  updated: 'Last updated: September 24, 2026',
  intro:
    'Welcome to Chiller. These terms apply to using Chiller on WhatsApp, in the website chat and on chiller-travel.com (together, the "Service"). Using the Service means you accept these terms and the Privacy Policy. On WhatsApp you are asked to accept them explicitly before use. If the Hebrew and English versions differ, the Hebrew version prevails.',
  sections: [
    {
      h: '1. Who we are',
      text: `The Service is operated by Chiller Travel ("Chiller", "we")${OPERATOR_DETAILS ? `, ${OPERATOR_DETAILS}` : ''}. You can reach us at the email at the bottom of this page.`,
    },
    {
      h: '2. Who may use it',
      items: [
        'The Service is for people aged 18 or over. By using it you confirm that you are 18 or over.',
        "Use on WhatsApp is also subject to WhatsApp's and Meta's terms.",
        'The Service is for personal, non-commercial use.',
      ],
    },
    {
      h: '3. What the Service is, and is not',
      items: [
        'Chiller is an AI travel assistant that provides general information, recommendations and links to providers\' websites (accommodation, transport, flights, activities, eSIMs and more).',
        'Chiller is not a travel agency, tour operator or supplier. We do not sell, book on your behalf, take payment or issue tickets.',
        'The Service is free and provided "as is" and as available.',
      ],
    },
    {
      h: '4. AI and accuracy',
      items: [
        'Replies are generated automatically by an AI system, without real-time human review. They may be wrong, incomplete or out of date.',
        'Prices, availability, schedules and provider terms change constantly. The binding price and terms are those shown on the provider\'s site at the time of booking.',
        'Nothing in the Service is professional, legal, medical, insurance or safety advice. Verify important details with an official source before relying on them.',
      ],
    },
    {
      h: '5. Bookings with third-party providers',
      items: [
        'When you follow a link to a provider\'s site, any booking is solely between you and that provider, under its terms, cancellation policy and privacy policy.',
        'Chiller is not a party to the booking. Changes, cancellations, refunds and customer service are handled by the provider.',
        'This does not limit any rights you have against the provider under applicable law, including consumer protection law.',
      ],
    },
    {
      h: '6. Affiliate links, sponsored content and influence on recommendations',
      items: [
        'Some links are affiliate links. If you book through them we may earn a commission from the provider, at no extra cost to you.',
        'When several options are comparable, our commercial relationships may influence which provider is shown.',
        'Sponsored recommendations are part of the Service: when relevant to your question, Chiller may show an option from a carefully chosen, traveler-relevant partner that paid to be shown. It is always labeled "Sponsored" ("ממומן") and never presented as a neutral recommendation. In-chat sponsored recommendations are not marketing messages and do not depend on marketing consent.',
      ],
    },
    {
      h: '7. WhatsApp, acceptance and marketing messages',
      items: [
        'When you first message Chiller on WhatsApp, you are asked to accept these terms and the Privacy Policy before the Service is provided. Your acceptance, its date and the terms version are recorded. After a material change you will be asked to accept again.',
        'Marketing messages (messages we send on our own initiative, without you asking) are optional: separately from accepting the terms, and only if you actively choose to, you may agree to receive occasional deals and promotions on WhatsApp that suit travelers and your trip preferences, including partners\' offers. This consent is never a condition of using the Service.',
        'Every marketing message is labeled as an advertisement and explains how to stop. Withdraw consent at any time by sending "הסר" (or STOP); send "הרשמה" to opt in again.',
      ],
    },
    {
      h: '8. Acceptable use',
      text: 'You may not use the Service to:',
      items: [
        'do anything unlawful, harass, deceive or harm others;',
        'send other people\'s personal data without permission, or abusive or infringing content;',
        'automate access (bots, scraping), overload it, bypass usage limits, or try to extract its instructions, code or data;',
        'use it commercially or resell its answers.',
      ],
      after: 'We may limit or block use that breaches these terms or endangers the Service.',
    },
    {
      h: '9. What you send us',
      items: [
        'Your messages, recordings and images remain yours. You allow us to process them (including with our AI providers) only to provide and improve the Service, as described in the Privacy Policy.',
        'Don\'t send unnecessary sensitive data such as passport numbers, card details, passwords or medical information.',
      ],
    },
    {
      h: '10. Intellectual property',
      text: 'The Chiller name, logo, design, code and site content belong to us. You may use the answers you receive to plan your own trip, but not copy the Service or its content at scale or for commercial purposes.',
    },
    {
      h: '11. Health, safety, insurance and travel documents',
      items: [
        'Travel — especially adventure activities, trekking and altitude — involves risk. What you do and how is your decision.',
        'You are responsible for a valid passport, visas, entry permits, vaccinations and suitable travel insurance (including adventure-sports cover). Always check with official sources.',
      ],
    },
    {
      h: '12. Availability and changes to the Service',
      text: 'We don\'t promise the Service will always be available, error-free or uninterrupted, and we may change, suspend or discontinue all or part of it.',
    },
    {
      h: '13. Limitation of liability',
      items: [
        'To the maximum extent permitted by law, Chiller is not liable for indirect or consequential loss, or for loss arising from reliance on unverified information, from a booking with a provider, from a provider\'s acts or omissions, or from a Service outage.',
        'Nothing in these terms limits liability that cannot be limited by law, such as for intentional harm or gross negligence.',
      ],
    },
    {
      h: '14. Indemnity',
      text: 'If you breach these terms and a claim is brought against us as a result, you will reimburse our reasonable costs arising from it.',
    },
    {
      h: '15. Privacy',
      text: 'How we use your personal data is described in the Privacy Policy, which forms part of these terms.',
      link: { href: '#privacy', label: 'Privacy Policy' },
    },
    {
      h: '16. Changes to these terms',
      text: 'We may update these terms; the date at the top shows the latest version. We will announce material changes on the site, and on WhatsApp you will be asked to accept the updated terms.',
    },
    {
      h: '17. Governing law and jurisdiction',
      text: 'These terms are governed by the laws of the State of Israel. The competent courts of the Tel Aviv-Jaffa district have exclusive jurisdiction, unless mandatory law provides otherwise.',
    },
    {
      h: '18. Contact',
      text: 'Questions, complaints or requests about these terms:',
      email: true,
    },
  ],
};

function TermsBody({ data, rtl }) {
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
        <section className="legal-section" key={s.h}>
          <h2>{s.h}</h2>
          {s.text && <p className="legal-text">{s.text}</p>}
          {s.items && (
            <ul className="legal-list" style={listStyle}>
              {s.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
          {s.after && <p className="legal-text">{s.after}</p>}
          {s.link && (
            <p className="legal-text">
              <a href={s.link.href} className="legal-link">{s.link.label}</a>
            </p>
          )}
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

function TermsOfService({ onBack = goHome }) {
  return (
    <div className="legal-container">
      <button type="button" className="back-btn" onClick={onBack}>
        <span>חזרה לדף הבית / Back to Home</span>
      </button>

      <div dir="rtl" lang="he" style={{ width: '100%', textAlign: 'right' }}>
        <TermsBody data={he} rtl />
      </div>

      <hr className="legal-divider" />

      <div dir="ltr" lang="en" style={{ width: '100%' }}>
        <TermsBody data={en} rtl={false} />
      </div>
    </div>
  );
}

export default TermsOfService;
