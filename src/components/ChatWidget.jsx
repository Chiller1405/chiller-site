import React, { useState, useEffect, useRef } from 'react';
import './ChatWidget.css';

const renderMessageText = (text) => {
  if (!text) return null;

  // Match either [text](url) markdown link or raw URL starting with http(s):// or www.
  const combinedRegex = /(\[[^\]]+\]\([^)]+\)|\b(?:https?:\/\/|www\.)[^\s()<>]+(?:\([\w\d]+\)|[^\s`!()\x5b\x5d{};:'".,<>?«»“”‘’]))/gi;
  const parts = text.split(combinedRegex);

  return parts.map((part, index) => {
    // Markdown link pattern: [text](url)
    const markdownMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (markdownMatch) {
      const [_, linkText, linkUrl] = markdownMatch;
      let href = linkUrl;
      if (!/^https?:\/\//i.test(href) && !href.startsWith('/') && !href.startsWith('#')) {
        href = 'https://' + href;
      }
      return (
        <a 
          key={index} 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      );
    }

    // Raw URL pattern
    const rawUrlMatch = part.match(/^(\b(?:https?:\/\/|www\.)[^\s()<>]+(?:\([\w\d]+\)|[^\s`!()\x5b\x5d{};:'".,<>?«»“”‘’]))$/i);
    if (rawUrlMatch) {
      let href = part;
      if (href.toLowerCase().startsWith('www.')) {
        href = 'https://' + href;
      }
      return (
        <a 
          key={index} 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {part}
        </a>
      );
    }

    return part;
  });
};

export default function ChatWidget({ externalIsOpen, setExternalIsOpen }) {
  const [localIsOpen, setLocalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : localIsOpen;
  const setIsOpen = setExternalIsOpen !== undefined ? setExternalIsOpen : setLocalIsOpen;
  const sessionId = useRef(
    (() => {
      let storedId = sessionStorage.getItem('chiller_session_id');
      if (!storedId) {
        storedId = 'web-' + Math.random().toString(36).substring(2, 15);
        sessionStorage.setItem('chiller_session_id', storedId);
      }
      return storedId;
    })()
  );
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      text: "היי! 🎒 אני צ'ילר, הסוכן החכם שלך לטיולים. איך אפשר לעזור לך לתכנן את ההרפתקה הבאה?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const isFirstRender = useRef(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (messages.length > 1) {
      setIsOpen(true);
    }
  }, [messages.length, setIsOpen]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!isLoading && isOpen) {
      inputRef.current?.focus();
    }
  }, [isLoading, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessageText = inputValue.trim();
    const userMessage = {
      id: Date.now().toString(),
      text: userMessageText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    inputRef.current?.focus();

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch('https://chiller-bot-server.onrender.com/simulate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: sessionId.current, message: userMessageText }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      const botResponseText = data.response || data.message || data.reply || JSON.stringify(data);

      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    } catch {
      clearTimeout(timeoutId);
      // Catch connection errors and show a connection error message
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: "השרת מתעורר כעת, אנא שלח שוב בעוד מספר שניות...",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setTimeout(() => {
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <div className="chiller-widget-container">
      {/* Chat Window (History Panel) */}
      <div className={`chiller-window ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="chiller-header">
          <div className="chiller-header-profile">
            <div className="chiller-avatar">
              <span>C</span>
              <span className="chiller-avatar-dot"></span>
            </div>
            <div className="chiller-header-info">
              <h3>Chiller</h3>
              <div className="chiller-status">
                <span className="chiller-status-dot"></span>
                <span>Online Companion</span>
              </div>
            </div>
          </div>
          <button className="chiller-header-close" onClick={() => setIsOpen(false)} aria-label="Minimize Chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 14 10 14 10 20"></polyline>
              <polyline points="20 10 14 10 14 4"></polyline>
              <line x1="14" y1="10" x2="21" y2="3"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div>

        {/* Message List */}
        <div className="chiller-messages-container">
          {messages.map((msg) => (
            <div key={msg.id} className={`chiller-message-row ${msg.sender}`}>
              {msg.sender === 'bot' && (
                <div className="chiller-msg-avatar">C</div>
              )}
              <div className="chiller-message-wrapper">
                <div className="chiller-message-bubble" dir="auto">
                  <p dir="auto">{renderMessageText(msg.text)}</p>
                  {msg.isFallback && (
                    <span className="chiller-fallback-badge">Simulated</span>
                  )}
                </div>
                <span className="chiller-message-time">{msg.timestamp}</span>
              </div>
            </div>
          ))}

          {/* Loading / Typing Indicator */}
          {isLoading && (
            <div className="chiller-message-row bot loading">
              <div className="chiller-msg-avatar">C</div>
              <div className="chiller-message-wrapper">
                <div className="chiller-message-bubble typing">
                  <div className="chiller-typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Integrated Full-Width Bottom Bar */}
      <div className="chiller-bottom-bar">
        <form className="chiller-input-panel" onSubmit={handleSend}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsOpen(true)}
            dir="auto"
            placeholder="Ask Chiller about flights, hostels..."
            disabled={isLoading}
          />
          <button type="submit" disabled={!inputValue.trim() || isLoading} aria-label="Send Message">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
