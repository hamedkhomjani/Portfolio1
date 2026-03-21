import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  const containerRef = useScrollReveal();

  return (
    <div className="app-root" ref={containerRef}>
      <Navigation />
      
      <main className="main-content">
        <Hero />

        {/* Philosophy & Purpose - Reveal Enabled */}
        <section className="reveal">
          <About />
        </section>

        {/* Evidence & Flow - Reveal Enabled */}
        <section className="reveal">
          <Projects />
        </section>

        {/* Knowledge & Capabilities - Reveal Enabled */}
        <section className="reveal">
          <Skills />
        </section>

        {/* Effortless Closure - Reveal Enabled */}
        <section className="reveal">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
