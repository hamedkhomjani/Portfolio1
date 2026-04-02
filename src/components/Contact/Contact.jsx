import React from 'react';
import useTheme from '../../hooks/useTheme';
import './Contact.css';

const Contact = () => {
  const [themeMode, setThemeMode] = useTheme();

  return (
    <section id="contact" className="contact-section container">
      <div className="contact-content fade-in-up">
        <div className="eyebrow">
          <span className="refraction-line"></span>
          GET IN TOUCH
        </div>
        
        <h2 className="contact-title">
          Let’s build something <br />
          exceptional together.
        </h2>

        <div className="contact-details">
          <p className="contact-pill">Currently available for collaborations</p>
          <a href="mailto:eng.h.khomjani@gmail.com" className="email-link">
            eng.h.khomjani@gmail.com
          </a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/hamed-khomjani/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <span className="dot"></span>
          <a href="https://github.com/hamedkhomjani" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <span className="dot"></span>
          <a href="https://www.behance.net/hamedkhomjanidesign" target="_blank" rel="noopener noreferrer">BEHANCE</a>
        </div>
      </div>
      
      <footer className="footer-mini">
        <p>© {new Date().getFullYear()} HAMED KHOMJANI. ALL RIGHTS RESERVED.</p>
        
        <div className="theme-switcher">
          <button 
            className={`theme-btn ${themeMode === 'light' ? 'active' : ''}`} 
            onClick={() => setThemeMode('light')}
            aria-label="Light Mode"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
          
          <button 
            className={`theme-btn ${themeMode === 'system' ? 'active' : ''}`} 
            onClick={() => setThemeMode('system')}
            aria-label="System Theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </button>

          <button 
            className={`theme-btn ${themeMode === 'dark' ? 'active' : ''}`} 
            onClick={() => setThemeMode('dark')}
            aria-label="Dark Mode"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
        </div>

        <p>DESIGNED & ENGINEERED WITH PRECISION. // V1.0</p>
      </footer>
    </section>
  );
};

export default Contact;
