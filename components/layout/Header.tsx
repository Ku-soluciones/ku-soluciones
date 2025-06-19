import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Logo = () => (
    <a
        href="#hero"
        className="flex items-center space-x-2 text-2xl font-bold font-poppins text-pomegranate-600 dark:text-pomegranate-400"
    >
        <img
            src="/logo1.png" // Reemplaza si tiene otro nombre
            alt="Logo"
            className="w-6 h-6 object-contain" // Ajusta el tamaño visual (24x24 px)
        />
        <span>KÜ</span>
    </a>
);

const NavLink: React.FC<{ href: string }> = ({ href, children }) => (
    <a href={href}
       className="px-3 py-2 rounded-md text-sm font-medium font-notosans text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-pomegranate-600 dark:hover:text-pomegranate-400 transition-colors">
      {children}
    </a>
);

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollOffset = useScrollPosition(0);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
      <>
        {mobileMenuOpen && (
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
            />
        )}

        <header
            className="
          fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50
          bg-white/90 dark:bg-gray-900/90
          shadow-xl rounded-full
          backdrop-blur-lg border border-gray-200 dark:border-gray-700
          transition-transform duration-300 ease-out"
            style={{ transform: `translateY(${scrollOffset}px) translateX(-50%)` }}
        >
          <Container className="py-2 px-4 flex items-center space-x-2">
            <Logo />
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map(item => (
                  <NavLink key={item.name} href={item.href}>{item.name}</NavLink>
              ))}
            </nav>
            <Button
                variant="primary"
                className="ml-auto text-xs px-4 py-2 rounded-full"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
            >
              Empezar
            </Button>
            <ThemeToggle className="ml-2" />
            <button
                className="md:hidden ml-2 p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pomegranate-500"
                onClick={() => setMobileMenuOpen(o => !o)}
                aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                  <span>✕</span>
              ) : (
                  <span>☰</span>
              )}
            </button>
          </Container>

          {mobileMenuOpen && (
              <div className="md:hidden mt-2 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                <nav className="flex flex-col space-y-1 px-4">
                  {navItems.map(item => (
                      <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}
                         className="px-3 py-2 rounded-md text-base font-medium font-notosans text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-pomegranate-600 dark:hover:text-pomegranate-400">
                        {item.name}
                      </a>
                  ))}
                  <Button
                      variant="primary"
                      className="w-full mt-2 rounded-full"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                  >
                    Empezar
                  </Button>
                </nav>
              </div>
          )}
        </header>
      </>
  );
};
