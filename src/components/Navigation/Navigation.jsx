import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Block scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Close menu when clicking a link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`nav-sticky ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-content">
        <div className="nav-logo">
          <a href="#hero" onClick={closeMenu}>HK<span>.</span></a>
        </div>

        <div className="nav-right">
          <div className="nav-links desktop-only">
            <a href="#about" className="nav-item">ABOUT</a>
            <a href="#projects" className="nav-item">PROJECTS</a>
            <a href="#skills" className="nav-item">SKILLS</a>
            <a href="#contact" className="nav-item">CONTACT</a>
          </div>

          <div className="nav-cta desktop-only">
            <a href="mailto:hello@hamedkhomjani.com" className="btn-nav">
              HIRE
            </a>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-links">
          <a href="#about" className="mobile-item" onClick={closeMenu}>ABOUT</a>
          <a href="#projects" className="mobile-item" onClick={closeMenu}>PROJECTS</a>
          <a href="#skills" className="mobile-item" onClick={closeMenu}>SKILLS</a>
          <a href="#contact" className="mobile-item" onClick={closeMenu}>CONTACT</a>
          <a href="mailto:hello@hamedkhomjani.com" className="mobile-item cta" onClick={closeMenu}>HIRE ME</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
