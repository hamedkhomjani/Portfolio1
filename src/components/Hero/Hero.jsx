import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content fade-in-up">
        {/* Identity Anchor */}
        <div className="hero-identity">
          <span className="name">Hamed Khomjani</span>
          <span className="separator"></span>
          <span className="title">UX/UI DESIGNER WITH FRONTEND DEVELOPMENT SKILLS</span>
        </div>
        
        <h1 className="hero-title">
          Designing with a developer’s mindset. <br />
          Building with a designer’s eye.
        </h1>

        <p className="hero-description">
          I am a specialized product builder bridging the gap between 
          pixel-perfect aesthetics and robust technical implementation.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            View selected work
          </a>
          <a href="#contact" className="btn-secondary">
            Let's talk
          </a>
        </div>
      </div>
      
      {/* Whisper-thin background glow */}
      <div className="hero-glow"></div>
    </section>
  );
};

export default Hero;
