import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
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

  const handleViewChange = (mode) => {
    setViewMode(mode);
    try {
      localStorage.setItem('projects-view-mode', mode);
    } catch (err) {
      console.warn('Unable to persist view preference', err);
    }
  };
  const projectList = [
    {
      id: '01',
      variant: 'immersive',
      title: 'Softpos - Retail POS System',
      subtitle: 'UX/UI Designer & Frontend Contributor at Purspot AB',
      role: 'UX/UI DESIGNER & FRONTEND CONTRIBUTOR',
      tech: 'QUASAR FRAMEWORK (VUE.JS), JAVASCRIPT',
      link: 'https://softpos.purspot.com/pos/shop',
      image: 'softpos_kassa_port.png',
      description: 'Focused on real-world, high-pressure retail environments. Improved checkout speed and efficiency. Reduced user errors and friction. Contributed to frontend implementation using Quasar Framework (Vue.js).'
    },
    {
      id: '02',
      variant: 'asymmetrical-left',
      title: 'NordicRoll',
      subtitle: 'Personal Project Focused on UX & Dynamics',
      role: 'UX/UI DESIGNER & FRONTEND DEVELOPER',
      tech: 'VANILLA JAVASCRIPT, HTML, CSS',
      link: 'https://hamedkhomjani.github.io/Kvittorullar/index.html',
      image: 'NOrdicRoll.png',
      description: 'Focus on interactive UI and dynamic content management. Practice responsive layout and user-friendly interactions. Use vanilla JavaScript for frontend logic. Emphasize clean UX and design-driven approach.'
    }, 
    {
      id: '03',
      variant: 'asymmetrical-right',
      title: 'SkillCore',
      subtitle: 'Mobile repair price comparison platform in Sweden',
      role: 'UX/UI DESIGNER & FRONTEND DEVELOPER',
      tech: 'DJANGO, HTML, TAILWIND CSS, FLUENT UI, JS',
      link: 'https://hamedkhomjani.github.io/skillcore/',
      image: 'skilCore_portfolio.png',
      description: 'Search & compare mobile repair services by device model. Featuring verified shops and user reviews for trustworthy information, alongside a vendor dashboard for price management. High focus on UX/UI design first.'
    },
    {
      id: '04',
      variant: 'immersive',
      title: 'QRQuick — QR Scanner & Generator',
      subtitle: 'UX/UI Designer with Frontend Development Skills',
      role: 'UX/UI DESIGNER & DEVELOPER',
      tech: 'REACT, JAVASCRIPT, CSS',
      link: 'https://hamedkhomjani.github.io/qrquick/',
      image: 'qrquick.png',
      description: 'Problem: Cluttered interfaces. User Need: Seamless physical-to-digital bridge. Solution: Premium minimalist UX. Implementation: High-performance React frontend.'
    },
    {
      id: '05',
      variant: 'asymmetrical-left',
      title: 'Hamed Khomjani Portfolio V1',
      subtitle: 'Personal Brand & Design System Implementation',
      role: 'UX/UI DESIGNER & FRONTEND DEVELOPER',
      tech: 'REACT, VITE, CUSTOM CSS-VARS',
      link: '#',
      image: 'portfolio_v1.png',
      description: 'A study in "Industrial Premium" aesthetics. Built to showcase precision, minimalism, and a seamless bridge between design and code. Features a custom theme engine with zero-flicker system detection.'
    },
    {
      id: '06',
      variant: 'asymmetrical-right',
      title: 'Deldar Beauty — Luxury Salon & Booking',
      subtitle: 'Bilingual Web Experience & Interactive Booking Engine',
      role: 'UX/UI DESIGNER & FRONTEND DEVELOPER',
      tech: 'ASTRO, MODERN JS, TAILWIND CSS, NETLIFY',
      link: 'https://deldar.netlify.app/en/',
      image: 'deldar.png',
      description: 'A luxury editorial web experience for a premium beauty salon. Features full bilingual (LTR/RTL) architecture, dark/light theme switching, custom cursor micro-interactions, and a streamlined multi-step appointment booking engine.'
    },
    {
      id: '07',
      variant: 'immersive',
      title: 'AquaPro — Pool Equipment & Smart Solutions',
      subtitle: 'Bilingual E-Commerce, Comparison Engine & Interactive Calculator',
      role: 'UX/UI DESIGNER & FRONTEND DEVELOPER',
      tech: 'REACT, SUPABASE, I18N, CSS/TAILWIND, NETLIFY',
      link: 'https://manimirzaei.netlify.app/en/',
      image: 'aquapro.png',
      description: 'A modern e-commerce web platform inspired by Scandinavian minimalism. Incorporates bilingual (LTR/RTL) localization, dynamic dark/light theming, a custom pool volume calculation tool, real-time product comparison, and an interactive shopping cart.'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div className="projects-heading">
            <div className="eyebrow">
              <span className="refraction-line"></span>
              SELECTED WORKS
              <span className="projects-count">[{projectList.length.toString().padStart(2, '0')}]</span>
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
          {projectList.map((project) => (
            <ProjectItem key={project.id} {...project} viewMode={viewMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
