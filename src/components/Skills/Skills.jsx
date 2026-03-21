import React from 'react';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: "The Architect",
      subtitle: "DESIGN & UX STRATEGY",
      skills: [
        "User Experience Design",
        "Interface Design (UI)",
        "Design Systems",
        "Wireframing & Prototyping",
        "Visual Language",
        "Product Aesthetics"
      ],
      tools: "Figma, Adobe Suite, Framer"
    },
    {
      title: "The Engineer",
      subtitle: "FRONTEND CAPABILITIES",
      skills: [
        "React (Hooks, Context, API)",
        "Advanced CSS & SCSS",
        "JavaScript (ES6+)",
        "Component Architecture",
        "Responsive & Adaptive Dev",
        "Performance Optimization"
      ],
      tools: "Git, Vite, NPM, Chrome DevTools"
    }
  ];

  return (
    <section id="skills" className="skills-section container">
      <div className="section-header">
        <div className="eyebrow">
          <span className="refraction-line"></span>
          KNOWLEDGE & CAPABILITIES
        </div>
        <h2 className="section-title">Design with intent, <br />built with precision.</h2>
      </div>

      <div className="skills-grid">
        {categories.map((cat, index) => (
          <div key={index} className="skill-category">
            <div className="cat-header">
              <h3 className="cat-title">{cat.title}</h3>
              <span className="cat-subtitle">{cat.subtitle}</span>
            </div>
            
            <ul className="skill-list">
              {cat.skills.map((skill, si) => (
                <li key={si} className="skill-item">
                  <span className="skill-dot"></span>
                  {skill}
                </li>
              ))}
            </ul>

            <div className="cat-tools">
              <span className="tools-label">CORE TOOLS:</span>
              <span className="tools-value">{cat.tools}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
