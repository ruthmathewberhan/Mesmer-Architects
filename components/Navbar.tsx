
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-transparent`}>
      {/* Top Gradient Overlay for readability on light images */}
      <div className={`absolute inset-0 h-32 pointer-events-none opacity-40 ${theme === 'dark' ? 'bg-gradient-to-b from-black to-transparent' : 'bg-gradient-to-b from-gray-200 to-transparent'}`}></div>
      
      <div className="fixed top-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-transparent backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-red-600"></div>
          <span className={`font-serif font-bold text-2xl tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            MESMER
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`uppercase text-sm tracking-[0.3em] font-semibold hover:text-primary transition-colors ${
                  isActive(link.path) ? 'text-red-600' : theme === 'dark' ? 'text-white hover:text-red-600' : 'text-black hover:text-red-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className={`p-2 transition-transform hover:scale-110 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden text-2xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
          <button className="absolute top-8 right-8 text-3xl" onClick={() => setIsOpen(false)}>✕</button>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-serif text-4xl ${isActive(link.path) ? 'text-red-600' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-12 py-4 bg-red-600 text-white font-bold text-xl mt-4"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
