import React from 'react';
import useTheme from '../../hooks/useTheme';
import './Contact.css';

const SunIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4.5" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" />
    <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" />
    <line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
  </svg>
);

const SystemIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const BlueprintIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="1.5" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
  </svg>
);

const ThemeIcon = ({ mode }) => {
  if (mode === 'dark') return <MoonIcon />;
  if (mode === 'blueprint') return <BlueprintIcon />;
  if (mode === 'system') return <SystemIcon />;
  return <SunIcon />;
};

const THEME_OPTIONS = [
  { value: 'light', label: 'Light theme' },
  { value: 'system', label: 'System theme' },
  { value: 'dark', label: 'Dark theme' },
  { value: 'blueprint', label: 'Blueprint theme' },
];

const Contact = () => {
  const { themeMode, setThemeMode } = useTheme();

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
        <div className="footer-brand">
          <a href="#hero" className="footer-monogram" aria-label="HK. Back to top">
            HK<span>.</span>
          </a>
          <p className="footer-copyright">
            © {new Date().getFullYear()} HAMED KHOMJANI<br />
            ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="footer-theme">
          <span className="footer-theme-label">THEME</span>
          <div className="theme-switcher" role="group" aria-label="Color theme">
            {THEME_OPTIONS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                className={`theme-btn ${themeMode === value ? 'active' : ''}`}
                onClick={() => setThemeMode(value)}
                aria-label={label}
                aria-pressed={themeMode === value}
                title={label}
              >
                <ThemeIcon mode={value} />
              </button>
            ))}
          </div>
        </div>

        <div className="footer-meta">
          <p className="footer-role">
            UX/UI DESIGNER<br />
            FRONTEND DEVELOPER
          </p>
          <a href="#hero" className="footer-top">
            BACK TO TOP <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
