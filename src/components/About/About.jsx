import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section container">
      <div className="about-grid">
        {/* The Philosophical Anchor (Shifted Grid) */}
        <div className="about-anchor">
          <div className="eyebrow">
            <span className="refraction-line"></span>
            DESIGN PHILOSOPHY
          </div>
          <h2 className="anchor-title">Problem solving <br />by design.</h2>
        </div>

        {/* The Narrative (Conversational & Personal) */}
        <div className="about-content">
          <p className="narrative-main">
            I believe that great design starts with an obsession for how people experience 
            the world. My background in automotive design taught me that every detail 
            must have a purpose—one that balances form, function, and emotion.
          </p>

          <div className="narrative-details">
            <p>
              As a UX/UI Designer, I prioritize empathy and clarity above all else. 
              I don’t just sketch interfaces; I architect solutions that solve real 
              human problems. By maintaining a deep understanding of frontend 
              development, I can ensure that every pixel and interaction I design 
              is built with the highest possible fidelity and performance.
            </p>
            <p>
              My coding skills are my most powerful prototyping tools. Being able 
              to bring my own ideas to life in React allows me to bridge the gap 
              between a design mockup and a finished product without losing 
              the soul of the original concept. I design with a developer's mindset, 
              ensuring that my work is as functional as it is beautiful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
