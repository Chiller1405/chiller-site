import React, { useState } from 'react';

export default function FaqSection({ lang }) {
  const isHe = lang === 'he';
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: isHe ? 'האם השימוש בצ\'ילר בווטסאפ כרוך בתשלום?' : 'Is using Chiller on WhatsApp completely free?',
      a: isHe 
        ? 'כן! השיחה עם צ\'ילר בווטסאפ היא בחינם לחלוטין. תוכלו לשאול שאלות, להשוות מחירים, לקבל המלצות ולתכנן מעברים ללא שום עלות מצידכם. אנו מקבלים עמלה קטנה מחברות הנסיעות המובילות (כמו Booking או Busbud) רק כשאתם מחליטים להזמין כרטיס או חדר דרך הקישור שלנו — ללא תוספת מחיר עבורכם.'
        : 'Yes! Chatting with Chiller on WhatsApp is 100% free. You can ask unlimited questions, compare transit fares, and find hostels at zero cost. We may receive a small affiliate referral fee from partner providers (like Booking.com or Busbud) if you choose to book through our verified links, at zero extra cost to you.'
    },
    {
      q: isHe ? 'במה צ\'ילר שונה מ-ChatGPT רגיל או מ-Google Maps?' : 'How is Chiller different from ChatGPT or Google Maps?',
      a: isHe 
        ? 'צ\'אטבוט כללי עונה בעיקר מהידע שעליו אומן, בלי חיבור לספקי נסיעות. צ\'ילר נבנה ספציפית לתרמילאים: הוא מחפש מחירים ומידע בזמן אמת במקורות שמחוברים אליו, מכיר את המסלולים של הטיול הגדול, ושולח קישור ישיר לאתר הספק. כמו כל מערכת AI, גם הוא עלול לטעות, ולכן כדאי לוודא פרטים חשובים מול הספק.'
        : 'A general chatbot mostly answers from its training data, without connections to travel providers. Chiller is built for backpackers: it searches its connected sources in real time, knows the Big Trip routes, and sends a direct link to the provider. Like any AI, it can make mistakes, so verify important details with the provider.'
    },
    {
      q: isHe ? 'האם אפשר לדבר עם צ\'ילר בעברית וגם באנגלית?' : 'Does Chiller support both English and Hebrew seamlessly?',
      a: isHe 
        ? 'באופן שוטף וטבעי לחלוטין! צ\'ילר מבין עברית חופשית, סלנג של מוצ\'ילרים ישראלים ("כמה זמן הפיקדוש?", "איפה יש אווירה חברתית?", "איך המעבר גבול?"), וגם אנגלית מלאה עם שמות יעדים ומפעילים מקומיים.'
        : 'Absolutely. Chiller understands natural conversational English and Hebrew, including backpacker slang, transit abbreviations, and local destination spellings in Spanish, Thai, Vietnamese, or Hindi.'
    },
    {
      q: isHe ? 'האם אני יכול לשלוח לצ\'ילר הודעה קולית?' : 'Can I send Chiller voice notes while on the move?',
      a: isHe 
        ? 'כן! כשאתם צועדים עם מוצ\'ילה כבדה, יושבים בטוק-טוק מקפיץ או ממהרים לרציף, אתם לא צריכים להקליד — פשוט שלחו הודעה קולית וצ\'ילר יקשיב, יפענח ויענה במהירות.'
        : 'Yes! When you\'re carrying a heavy pack, riding a bumpy tuk-tuk, or rushing between platforms, just record a quick voice note in WhatsApp. Chiller listens, analyzes, and replies in seconds.'
    },
    {
      q: isHe ? 'האם צ\'ילר גובה כסף ישירות על כרטיסים?' : 'Does Chiller charge my credit card directly?',
      a: isHe 
        ? 'לא. צ\'ילר אינו גובה מכם תשלום. כשאתם בוחרים הוסטל, אוטובוס או טיסה, צ\'ילר שולח לכם קישור ישיר ומאובטח לאתר הספק המקורי והמורשה (Booking.com, Busbud, Airalo וכו\') שם מתבצע התשלום באבטחה מלאה.'
        : 'No. Chiller never collects or stores your payment credentials. When you choose a hostel, bus, or eSIM, Chiller gives you a verified link directly to the reputable provider (Booking.com, Busbud, Airalo, etc.) where you complete the booking securely.'
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        
        <div className="section-head text-center">
          <div className="section-badge">
            {isHe ? 'שאלות ותשובות' : 'Common Questions'}
          </div>
          <h2 className="section-heading">
            {isHe ? (
              <>כל מה שרציתם לדעת על צ'ילר.<br /><span className="text-highlight">בלי אותיות קטנות.</span></>
            ) : (
              <>Everything you need to know about Chiller.<br /><span className="text-highlight">Honest, direct, transparent.</span></>
            )}
          </h2>
        </div>

        <div className="faq-accordion">
          {faqs.map((f, i) => {
            const isOpen = i === openIdx;
            return (
              <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{f.q}</span>
                  <span className="faq-icon-chevron">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d={isOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}/>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-panel animate-fade-in">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
