import React from 'react';
import './Projects.css';

const ProjectItem = ({ project, viewMode = 'detailed', onOpenCaseStudy }) => {
  const { id, title, subtitle, role, tech, description, variant, link, image, caseStudy } = project;

  return (
    <div className={`project-item ${variant} item-${viewMode}`}>
      <div className="project-meta">
        <span className="project-number">{id}</span>
        <div className="project-specs">
          {viewMode === 'grid' ? (
            <span className="grid-tech-badge" title={tech}>{tech}</span>
          ) : (
            <>
              <span className="spec-label">ROLE:</span>
              <span className="spec-value">{role}</span>
              <span className="spec-separator">|</span>
              <span className="spec-label">TECH:</span>
              <span className="spec-value">{tech}</span>
            </>
          )}
        </div>
      </div>
      
      <div className="project-layout">
        <div className="project-media">
          {image ? (
            <picture>
              <source
                type="image/avif"
                sizes="(max-width: 900px) 100vw, 800px"
                srcSet={`projects/${image}-640.avif 640w, projects/${image}-1024.avif 1024w, projects/${image}-1400.avif 1400w`}
              />
              <source
                type="image/webp"
                sizes="(max-width: 900px) 100vw, 800px"
                srcSet={`projects/${image}-640.webp 640w, projects/${image}-1024.webp 1024w, projects/${image}-1400.webp 1400w`}
              />
              <img
                src={`projects/${image}-1024.webp`}
                alt={title}
                className="project-image"
                width="1400"
                height="788"
                loading="lazy"
                decoding="async"
              />
            </picture>
          ) : (
            <div className="media-placeholder">
              <span className="media-overlay">HIGH-FIDELITY CASE STUDY</span>
            </div>
          )}
        </div>
        
        <div className="project-content">
          <h2 className="project-title">{title}</h2>
          <h3 className="project-subtitle">{subtitle}</h3>
          
          <div className="project-narrative">
            <p>{description}</p>
          </div>

          <div className="project-actions">
            {caseStudy && (
              <button
                type="button"
                className="project-link project-case-study-btn"
                onClick={() => onOpenCaseStudy(project)}
              >
                Read case study <span aria-hidden="true">→</span>
              </button>
            )}

            {link && (
              <a
                href={link}
                className="project-link project-live-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View live project <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
