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
      title: 'Precision-Engineered Dashboard',
      subtitle: 'UX/UI Design & Frontend Implementation',
      role: 'LEAD UX/UI DESIGNER',
      tech: 'FIGMA, REACT, SCSS',
      description: 'A study in solving complex data visualization problems for a premium automotive brand. The goal was to simplify a multi-layer information architecture into a single High-Fidelity experience that maintains 100% design integrity through a React implementation.'
    }, 
    {
      id: '03',
      variant: 'asymmetrical-right',
      title: 'Structural Design System',
      subtitle: 'Architecting Scalability & Consistency',
      role: 'DESIGN SYSTEMS LEAD',
      tech: 'FIGMA, STORYBOOK, REACT',
      description: 'Building a modular components library from the ground up, focusing on precision, accessibility, and designer-developer handoff. I designed the entire visual language and implementation logic to ensure a unified user experience.'
    },
    {
      id: '04',
      variant: 'asymmetrical-left',
      title: 'Immersive Product Experience',
      subtitle: 'E-commerce Redefinition',
      role: 'UI DESIGNER & DEVELOPER',
      tech: 'FIGMA, THREE.JS, REACT',
      description: 'Bridging the gap between 3D product visuals and high-performance React frontends. I focused on the "User Flow" of purchasing luxury goods and delivered a finished, polished implementation that reflects the premium soul of the brand.'
    },
    {
      id: '05',
      variant: 'immersive',
      title: 'QRQuick — QR Scanner & Generator',
      subtitle: 'UX/UI Designer with Frontend Development Skills',
      role: 'UX/UI DESIGNER & DEVELOPER',
      tech: 'REACT, JAVASCRIPT, CSS',
      link: 'https://hamedkhomjani.github.io/qrquick/',
      image: 'qrquick.png',
      description: 'Problem: Cluttered interfaces. User Need: Seamless physical-to-digital bridge. Solution: Premium minimalist UX. Implementation: High-performance React frontend.'
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
