import React, { useState, useEffect, useRef } from 'react';
import useTheme from '../../hooks/useTheme';
import './Navigation.css';

const SECTION_IDS = ['hero', 'about', 'projects', 'skills', 'contact'];
const THEME_SEQUENCE = ['system', 'light', 'dark', 'blueprint'];

const THEME_LABELS = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
  blueprint: 'Blueprint',
};

const ThemeIcon = ({ mode }) => {
  if (mode === 'light') {
    return (
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
  }

  if (mode === 'dark') {
    return (
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
  }

  if (mode === 'blueprint') {
    return (
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
  }

  return (
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
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { themeMode, setThemeMode } = useTheme();
  const drawerRef = useRef(null);

  // Block scroll, trap focus, and support Escape while the mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll('a[href], button:not([disabled])')
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const focusFrame = requestAnimationFrame(() => {
      drawerRef.current?.querySelector('a[href]')?.focus();
    });

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';

      if (previouslyFocused instanceof HTMLElement && previouslyFocused !== document.body) {
        previouslyFocused.focus();
      }
    };
  }, [isMenuOpen]);

  // Close the drawer if the viewport grows past the mobile breakpoint
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px)');
    const handleBreakpointChange = () => {
      if (desktop.matches) setIsMenuOpen(false);
    };

    desktop.addEventListener('change', handleBreakpointChange);
    return () => desktop.removeEventListener('change', handleBreakpointChange);
  }, []);

  // Track the section currently in view for nav highlighting
  useEffect(() => {
    const updateActiveSection = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = SECTION_IDS[0];

      SECTION_IDS.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= probe) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const nextThemeMode =
    THEME_SEQUENCE[(THEME_SEQUENCE.indexOf(themeMode) + 1) % THEME_SEQUENCE.length];

  const isActive = (id) => activeSection === id;

  return (
    <nav className={`nav-sticky ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-content">
        <div className="nav-logo">
          <a href="#hero" onClick={closeMenu}>HK<span>.</span></a>
        </div>

        <div className="nav-right">
          <div className="nav-links desktop-only">
            <a
              href="#about"
              className={`nav-item ${isActive('about') ? 'active' : ''}`}
              aria-current={isActive('about') ? 'location' : undefined}
            >
              ABOUT
            </a>
            <a
              href="#projects"
              className={`nav-item ${isActive('projects') ? 'active' : ''}`}
              aria-current={isActive('projects') ? 'location' : undefined}
            >
              PROJECTS
            </a>
            <a
              href="#skills"
              className={`nav-item ${isActive('skills') ? 'active' : ''}`}
              aria-current={isActive('skills') ? 'location' : undefined}
            >
              SKILLS
            </a>
            <a
              href="#contact"
              className={`nav-item ${isActive('contact') ? 'active' : ''}`}
              aria-current={isActive('contact') ? 'location' : undefined}
            >
              CONTACT
            </a>
          </div>

          <div className="nav-cta desktop-only">
            <a href="mailto:eng.h.khomjani@gmail.com" className="btn-nav">
              HIRE
            </a>
          </div>

          <button
            type="button"
            className="nav-theme-toggle"
            onClick={() => setThemeMode(nextThemeMode)}
            aria-label={`Theme: ${THEME_LABELS[themeMode]}. Switch to ${THEME_LABELS[nextThemeMode]}.`}
            title={`Theme: ${THEME_LABELS[themeMode]} — switch to ${THEME_LABELS[nextThemeMode]}`}
          >
            <ThemeIcon mode={themeMode} />
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-drawer ${isMenuOpen ? 'active' : ''}`}
        ref={drawerRef}
      >
        <div className="mobile-links">
          <a
            href="#about"
            className={`mobile-item ${isActive('about') ? 'active' : ''}`}
            onClick={closeMenu}
            aria-current={isActive('about') ? 'location' : undefined}
          >
            ABOUT
          </a>
          <a
            href="#projects"
            className={`mobile-item ${isActive('projects') ? 'active' : ''}`}
            onClick={closeMenu}
            aria-current={isActive('projects') ? 'location' : undefined}
          >
            PROJECTS
          </a>
          <a
            href="#skills"
            className={`mobile-item ${isActive('skills') ? 'active' : ''}`}
            onClick={closeMenu}
            aria-current={isActive('skills') ? 'location' : undefined}
          >
            SKILLS
          </a>
          <a
            href="#contact"
            className={`mobile-item ${isActive('contact') ? 'active' : ''}`}
            onClick={closeMenu}
            aria-current={isActive('contact') ? 'location' : undefined}
          >
            CONTACT
          </a>
          <a href="mailto:eng.h.khomjani@gmail.com" className="mobile-item cta" onClick={closeMenu}>
            HIRE ME
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
