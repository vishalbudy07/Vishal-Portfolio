import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import BackgroundGradientAnimation from './components/BackgroundGradientAnimation';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-gray-900 dark:text-gray-100 dark:bg-gray-950 transition-colors duration-300">
        {/* Global animated background (Aceternity UI - Background Gradient Animation) */}
        <BackgroundGradientAnimation containerClassName="fixed inset-0 -z-10 dark:hidden" />
        {/* Richer dark-only background */}
        <div className="fixed inset-0 -z-10 hidden dark:block">
          <ParticleBackground />
        </div>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
