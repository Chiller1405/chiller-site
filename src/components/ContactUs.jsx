import React, { useState } from 'react';

function ContactUs({ onBack }) {
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!fullName.trim() || !message.trim()) {
      alert("Please fill in all fields / אנא מלא את כל השדות");
      return;
    }
    
    const subject = encodeURIComponent('Contact from ' + fullName);
    const bodyText = encodeURIComponent(message);
    
    // Universal Gmail Web URL instead of OS-dependent mailto
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=chillerbot1405@gmail.com&su=${subject}&body=${bodyText}`;
    
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="legal-container">
      <button className="back-btn" onClick={onBack} aria-label="Back to Home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Back to Home</span>
      </button>

      <div className="rtl-container" dir="rtl" style={{ width: '100%' }}>
        <header className="legal-header" style={{ borderBottomColor: 'rgba(255, 255, 255, 0.08)', textAlign: 'right' }}>
          <h1 className="legal-title" style={{ fontSize: '2.4rem' }}>יצירת קשר / Contact Us</h1>
          <div className="legal-meta">אנו משיבים בהקדם האפשרי. / We reply as soon as possible.</div>
        </header>

        <div className="contact-form" style={{ textAlign: 'right' }}>
          <div className="form-group" style={{ alignItems: 'flex-start' }}>
            <label htmlFor="fullName" className="form-label" style={{ display: 'block', width: '100%', textAlign: 'right' }}>
              שם מלא / Full Name <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              className="form-input"
              placeholder="הכנס שם מלא / Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              dir="auto"
            />
          </div>

          <div className="form-group" style={{ alignItems: 'flex-start' }}>
            <label htmlFor="message" className="form-label" style={{ display: 'block', width: '100%', textAlign: 'right' }}>
              הודעה / Message <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <textarea
              id="message"
              className="form-textarea"
              placeholder="כתוב את הודעתך כאן / Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              dir="auto"
            />
          </div>

          <button
            type="button"
            className="submit-btn"
            style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', flexDirection: 'row-reverse' }}
            onClick={handleSend}
          >
            <span>שלח הודעה / Send Message</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'scaleX(-1)' }}>
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
