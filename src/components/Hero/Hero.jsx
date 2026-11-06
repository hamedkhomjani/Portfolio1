import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const spotlightRef = useRef(null);
  const frameRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0 });
  const renderedRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hero = heroRef.current;
    const spotlight = spotlightRef.current;
    if (!hero || !spotlight) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const hasFinePointer = window.matchMedia('(pointer: fine)');
    if (prefersReducedMotion.matches || !hasFinePointer.matches) return undefined;

    let hasPosition = false;

    const renderFrame = () => {
      const target = pointerRef.current;
      const rendered = renderedRef.current;

      // Ease toward the cursor for a soft, trailing glow
      rendered.x += (target.x - rendered.x) * 0.12;
      rendered.y += (target.y - rendered.y) * 0.12;

      spotlight.style.setProperty('--spotlight-x', `${rendered.x}px`);
      spotlight.style.setProperty('--spotlight-y', `${rendered.y}px`);

      const isSettled =
        Math.abs(target.x - rendered.x) < 0.5 && Math.abs(target.y - rendered.y) < 0.5;

      frameRef.current = isSettled ? 0 : requestAnimationFrame(renderFrame);
    };

    const handlePointerMove = (event) => {
      const rect = hero.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      pointerRef.current = { x, y };

      if (!hasPosition) {
        // Avoid the glow flying in from the corner on first move
        renderedRef.current = { x, y };
        hasPosition = true;
        hero.classList.add('is-spotlight-active');
      }

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(renderFrame);
      }
    };

    const showSpotlight = () => {
      if (hasPosition) hero.classList.add('is-spotlight-active');
    };

    const hideSpotlight = () => {
      hero.classList.remove('is-spotlight-active');
    };

    hero.addEventListener('pointermove', handlePointerMove, { passive: true });
    hero.addEventListener('pointerenter', showSpotlight);
    hero.addEventListener('pointerleave', hideSpotlight);

    return () => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerenter', showSpotlight);
      hero.removeEventListener('pointerleave', hideSpotlight);
      hero.classList.remove('is-spotlight-active');
    };
  }, []);

  return (
    <section id="hero" className="hero container" ref={heroRef}>
      {/* Ambient background: drifting grid + cursor spotlight */}
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-grid"></div>
        <div className="hero-spotlight" ref={spotlightRef}></div>
      </div>

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
