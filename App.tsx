
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/ProjectDetails';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { Theme } from './types';

// Scroll to top component on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('bg-black', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
    } else {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-black', 'text-white');
    }
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <div className={`transition-colors duration-500`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/portfolio" element={<Portfolio theme={theme} />} />
            <Route path="/portfolio/:id" element={<ProjectDetails theme={theme} />} />
            <Route path="/gallery" element={<Gallery theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className={`py-20 px-6 md:px-24 border-t ${theme === 'dark' ? 'border-white/10 bg-black' : 'border-black/5 bg-white'}`}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
            <div>
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center font-sans text-white font-bold text-2xl mb-6">M</div>
              <p className={`opacity-50 max-w-xs font-sans text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                MESMER Architecturals excellence through radical minimalism and dramatic spatial storytelling.
              </p>
            </div>
            <div>
              <h4 className="text-red-600 uppercase tracking-widest font-bold text-xs mb-6">Navigation</h4>
              <ul className={`space-y-4 font-serif text-xl italic opacity-80 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                <li><a href="#/" className="hover:text-red-600 transition-colors">Home</a></li>
                <li><a href="#/portfolio" className="hover:text-red-600 transition-colors">Portfolio</a></li>
                <li><a href="#/about" className="hover:text-red-600 transition-colors">Firm</a></li>
                <li><a href="#/contact" className="hover:text-red-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-600 uppercase tracking-widest font-bold text-xs mb-6">Connect</h4>
              <ul className={`space-y-4 font-sans uppercase tracking-tighter text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                <li><a href="#" className="hover:text-red-600 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Tiktok</a></li>
              </ul>
            </div>
          </div>
          <div className={`mt-20 pt-10 border-t ${theme === 'dark' ? 'border-white/5' : 'border-black/5'} flex flex-col md:flex-row justify-between opacity-30 text-xs uppercase tracking-widest font-bold`}>
            <p>© 2024 MESMER Architecture Studio</p>
            <p>Designed with Intent</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
