import { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { isDark } = useTheme();
  const [loading, setLoading] = useState(true);

  /* ── Loader: hide after 2 seconds ── */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      {/* Loading screen */}
      <Loader isLoading={loading} />

      {/* Custom cursor (desktop only — hidden via CSS on mobile) */}
      <CustomCursor />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Main layout */}
      <div className="dark:bg-[#07070f] bg-gray-50 min-h-screen transition-colors duration-300">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
