import React, { useCallback, useState } from 'react';
import ProjectItem from './ProjectItem';
import CaseStudyModal from './CaseStudyModal';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [viewMode, setViewMode] = useState(() => {
    try {
      return localStorage.getItem('projects-view-mode') || 'detailed';
    } catch (err) {
      console.warn('Unable to read view preference', err);
      return 'detailed';
    }
  });
  const [activeProject, setActiveProject] = useState(null);
  const closeCaseStudy = useCallback(() => setActiveProject(null), []);

  const handleViewChange = (mode) => {
    setViewMode(mode);
    try {
      localStorage.setItem('projects-view-mode', mode);
    } catch (err) {
      console.warn('Unable to persist view preference', err);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div className="projects-heading">
            <div className="eyebrow">
              <span className="refraction-line"></span>
              SELECTED WORKS
              <span className="projects-count">[{projects.length.toString().padStart(2, '0')}]</span>
            </div>
            <h2 className="projects-section-title">
              Engineered with precision. <br />Driven by design.
            </h2>
          </div>

          <div className="view-toggle" role="group" aria-label="Projects view mode">
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'detailed' ? 'active' : ''}`}
              onClick={() => handleViewChange('detailed')}
              aria-pressed={viewMode === 'detailed'}
            >
              <svg className="toggle-icon" width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="2.5" width="12" height="2" rx="0.5" />
                <rect x="2" y="7" width="12" height="2" rx="0.5" />
                <rect x="2" y="11.5" width="12" height="2" rx="0.5" />
              </svg>
              <span>Detailed</span>
            </button>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => handleViewChange('grid')}
              aria-pressed={viewMode === 'grid'}
            >
              <svg className="toggle-icon" width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="2" width="5" height="5" rx="1" />
                <rect x="9" y="2" width="5" height="5" rx="1" />
                <rect x="2" y="9" width="5" height="5" rx="1" />
                <rect x="9" y="9" width="5" height="5" rx="1" />
              </svg>
              <span>Grid</span>
            </button>
          </div>
        </div>

        <div className={`projects-grid mode-${viewMode}`}>
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              viewMode={viewMode}
              onOpenCaseStudy={setActiveProject}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={closeCaseStudy} />
      )}
    </section>
  );
};

export default Projects;
