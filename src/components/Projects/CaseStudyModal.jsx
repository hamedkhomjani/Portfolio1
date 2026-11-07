import React, { useEffect, useRef } from 'react';
import './Projects.css';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

const CaseStudyModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const titleId = `case-study-title-${project.id}`;

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR));
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

    // Keep focus inside the dialog even if something behind it is clicked
    const handleFocusIn = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        closeRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="case-study-overlay" onClick={handleOverlayClick}>
      <div
        className="case-study-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
      >
        <button
          type="button"
          className="case-study-close"
          aria-label="Close case study"
          onClick={onClose}
          ref={closeRef}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="3" y1="3" x2="15" y2="15" />
            <line x1="15" y1="3" x2="3" y2="15" />
          </svg>
        </button>

        <div className="case-study-scroll">
          <div className="case-study-eyebrow">
            <span className="refraction-line"></span>
            CASE STUDY {project.id}
          </div>

          <h2 id={titleId} className="case-study-title">{project.title}</h2>
          <p className="case-study-subtitle">{project.subtitle}</p>

          <dl className="case-study-meta">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Tech</dt>
              <dd>{project.tech}</dd>
            </div>
          </dl>

          <section className="case-study-section">
            <h3>Overview</h3>
            <p>{project.description}</p>
          </section>

          <section className="case-study-section">
            <h3>What I did</h3>
            <ul className="case-study-list">
              {project.caseStudy.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="case-study-section">
            <h3>Outcome</h3>
            <ul className="case-study-list">
              {project.caseStudy.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {project.link && (
            <a
              href={project.link}
              className="case-study-live"
              target="_blank"
              rel="noopener noreferrer"
            >
              View live project <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
