import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { COLORS } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Quem Somos', path: '/quem-somos' },
    { name: 'Atuação', path: '/atuacao' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Governança', path: '/governanca' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3 group">
          <Logo className="h-10 w-10 md:h-12 md:w-12 group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold leading-tight" style={{ color: COLORS.deepBlue }}>
              Instituto Ecos
            </span>
            <span className="text-xs font-medium tracking-wide text-gray-500 hidden sm:block">
              Sustentabilidade & Desenvolvimento
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                text-sm font-medium transition-colors duration-200 relative py-1
                ${isActive ? 'text-[#234568] font-bold' : 'text-gray-600 hover:text-[#234568]'}
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#6DA89B] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left
                ${isActive ? 'after:scale-x-100' : ''}
              `}
            >
              {link.name}
            </NavLink>
          ))}
          <Button 
            variant="secondary" 
            className="text-sm px-4 py-2"
            onClick={() => window.location.hash = '#/contato'} // Simple redirect to contact
          >
            Contribua
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col py-4 px-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  block py-2 text-lg font-medium border-b border-gray-50 last:border-0
                  ${isActive ? 'text-[#234568]' : 'text-gray-600'}
                `}
              >
                {link.name}
              </NavLink>
            ))}
            <Button className="w-full mt-2" variant="primary">
              Seja um Doador
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};