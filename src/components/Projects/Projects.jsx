import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => {
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
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-grid">
          {projectList.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
