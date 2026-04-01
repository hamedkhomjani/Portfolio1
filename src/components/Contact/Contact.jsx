import React from 'react';
import './Contact.css';

const Contact = () => {
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
          <a href="mailto:hello@hamedkhomjani.com" className="email-link">
            hello@hamedkhomjani.com
          </a>
        </div>

        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <span className="dot"></span>
          <a href="https://github.com/hamedkhomjani" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <span className="dot"></span>
          <a href="https://www.behance.net/hamedkhomjanidesign" target="_blank" rel="noopener noreferrer">BEHANCE</a>
        </div>
      </div>
      
      <footer className="footer-mini">
        <p>© {new Date().getFullYear()} HAMED KHOMJANI. ALL RIGHTS RESERVED.</p>
        <p>DESIGNED & ENGINEERED WITH PRECISION.</p>
      </footer>
    </section>
  );
};

export default Contact;
