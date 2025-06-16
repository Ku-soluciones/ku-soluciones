
import React, { useState } from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Logo: React.FC = () => (
  <a href="#hero" className="text-2xl font-bold font-poppins text-pomegranate-600 dark:text-pomegranate-400">
    TechCorp
  </a>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 rounded-md text-sm font-medium font-notosans text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-pomegranate-600 dark:hover:text-pomegranate-400 transition-colors"
  >
    {children}
  </a>
);

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(50);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'
      }`}
    >
      <Container className="py-4">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href}>{item.name}</NavLink>
            ))}
            <Button variant="primary" className="ml-4 text-xs px-4 py-2" onClick={() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({behavior: 'smooth'})}}>
              Empezar
            </Button>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2 p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pomegranate-500"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-xl">
            <nav className="flex flex-col space-y-1 px-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium font-notosans text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-pomegranate-600 dark:hover:text-pomegranate-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="primary" className="w-full mt-2" onClick={() => { setMobileMenuOpen(false); const el = document.getElementById('contact'); if(el) el.scrollIntoView({behavior: 'smooth'})}}>
                Empezar
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};
