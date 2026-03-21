import React from 'react';
import './Projects.css';

const ProjectItem = ({ id, title, subtitle, role, tech, description, variant }) => {
  return (
    <div className={`project-item ${variant}`}>
      <div className="project-meta">
        <span className="project-number">{id}</span>
        <div className="project-specs">
          <span className="spec-label">ROLE:</span>
          <span className="spec-value">{role}</span>
          <span className="spec-separator">|</span>
          <span className="spec-label">TECH:</span>
          <span className="spec-value">{tech}</span>
        </div>
      </div>
      
      <div className="project-layout">
        <div className="project-media">
          <div className="media-placeholder">
            {/* Visual content goes here */}
            <span className="media-overlay">HIGH-FIDELITY CASE STUDY</span>
          </div>
        </div>
        
        <div className="project-content">
          <h2 className="project-title">{title}</h2>
          <h3 className="project-subtitle">{subtitle}</h3>
          
          <div className="project-narrative">
            <p>{description}</p>
          </div>
          
          <a href={`/project/${id}`} className="project-link">
            Explore Study <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
