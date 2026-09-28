import React from 'react';

export default function CtaBanner({ lang }) {
  const isHe = lang === 'he';

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    isHe 
      ? "היי צ'ילר! אני מתכנן את הטיול שלי ואשמח לעזרה עם..." 
      : "Hey Chiller! I'm planning my backpacking trip and would love some help with..."
  )}`;

  return (
    <section className="cta-banner-section">
      <div className="cta-banner-container">
        <div className="cta-banner-card">
          
          <div className="banner-badge">
            <span className="live-dot pulse"></span>
            <span>{isHe ? 'ללא הרשמה • ללא תשלום' : 'No Signup • 100% Free'}</span>
          </div>

          <h2 className="banner-heading">
            {isHe ? (
              <>המוצ'ילה כבר ארוזה?<br /><span className="text-gradient-mint">שים את צ'ילר בכיס שלך.</span></>
            ) : (
              <>Your bag is packed.<br /><span className="text-gradient-mint">Put Chiller in your pocket.</span></>
            )}
          </h2>

          <p className="banner-subtext">
            {isHe ? (
              'בפעם הבאה שתעמוד ב-3 בלילה בטרמינל אוטובוסים נידח, או כשהמעבורת שלך תתעכב באי במזרח — לא תצטרך לנחש או להילחץ. פשוט שלח הודעה לצ\'ילר.'
            ) : (
              'Next time you are stuck at a remote bus depot at 3 AM or your ferry gets delayed on an island, you won\'t have to guess. Just message Chiller on WhatsApp.'
            )}
          </p>

          <div className="banner-actions">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="banner-primary-btn"
              aria-label={isHe ? "התחל שיחה בווטסאפ עכשיו" : "Start chatting on WhatsApp now"}
            >
              <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.87-.442-1.488-.616-2.482-2.109-2.556-2.208-.073-.099-.607-.808-.607-1.543s.385-1.1.522-1.249c.143-.15.312-.187.416-.187.104 0 .208.002.298.006.096.004.225-.037.351.27.13.319.444 1.082.483 1.161.039.08.065.173.013.277-.052.104-.078.169-.156.26-.078.091-.163.203-.233.273-.078.077-.16.16-.069.316.091.156.403.664.864 1.074.593.528 1.093.691 1.249.769.156.078.247.065.338-.039.091-.104.39-.455.494-.611.104-.156.208-.13.351-.078.143.052.909.429 1.065.507.156.078.26.117.299.182.039.065.039.377-.105.782z"/>
              </svg>
              <span>{isHe ? "פתח שיחה בווטסאפ — חינם" : "Start Chatting on WhatsApp — Free"}</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="banner-micro-footer">
            <span>🛡️ {isHe ? 'דילים רק אם ביקשת • לא מוכרים את המידע שלך • חינם' : 'Deals only if you opt in • We never sell your data • Free'}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
