import React, { useState } from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Logo = () => (
    <a
        href="#hero"
        className="flex items-center space-x-2 text-2xl font-bold font-poppins text-amber-900 dark:text-amber-50 hover:text-pomegranate-300 dark:hover:text-pomegranate-200 transition-all duration-300 hover:scale-105"
    >
        <img
            src="https://res.cloudinary.com/dddfx1xwt/image/upload/v1750340412/logoku_wg4bgn.webp"
            alt="Logo KÜ"
            className="w-6 h-6 object-contain filter drop-shadow-sm"
        />
        <span className="tracking-wide">KÜ</span>
    </a>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a
        href={href}
        className="group relative px-4 py-2 rounded-lg text-sm font-medium font-notosans
               text-slate-200 dark:text-white
               hover:text-pomegranate-100 dark:hover:text-pomegranate-100
               hover:bg-slate-800/70 dark:hover:bg-pomegranate-700/40
               transition-all duration-300 ease-out
               hover:scale-105 hover:-translate-y-0.5"
    >
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-pomegranate-100 dark:bg-pomegranate-100
                     group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full" />
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
    ];

    return (
        <>
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden animate-in fade-in duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            <header
                className="
          fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50
          bg-slate-900/95 dark:bg-pomegranate-600/90
          border border-slate-700/80 dark:border-pomegranate-700/80
          backdrop-blur-xl shadow-2xl shadow-slate-900/40 dark:shadow-pomegranate-900/20
          rounded-2xl transition-all duration-500 ease-out
          hover:shadow-3xl hover:scale-[1.02]
          max-w-4xl w-[95vw] md:w-auto
        "
                style={{
                    transform: `translateY(${scrollOffset}px) translateX(-50%)`,
                    boxShadow: `
            0 25px 50px -12px rgba(30, 41, 59, 0.15),
            0 0 0 1px rgba(30, 41, 59, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `
                }}
            >
                <Container className="py-3 px-6 flex items-center justify-between space-x-4">
                    <Logo />

                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map(item => (
                            <NavLink key={item.name} href={item.href}>
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-3">
                        <a href="#contact">
                            <Button
                                variant="primary"
                                className="
                  px-5 py-2.5 text-sm font-semibold rounded-xl
                  bg-pomegranate-500 hover:bg-pomegranate-400
                  dark:bg-pomegranate-700 dark:hover:bg-pomegranate-600
                  text-white
                  shadow-lg shadow-pomegranate-600/30
                  hover:shadow-xl hover:shadow-pomegranate-600/40
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:-translate-y-1
                  active:scale-95
                  relative overflow-hidden
                  before:absolute before:inset-0
                  before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                  before:translate-x-[-100%] hover:before:translate-x-[100%]
                  before:transition-transform before:duration-700
                "
                            >
                                <span className="relative z-10">Empezar</span>
                            </Button>
                        </a>

                        <ThemeToggle
                            className="
                p-2.5 rounded-xl
                text-slate-200 dark:text-white
                hover:text-pomegranate-200 dark:hover:text-pomegranate-200
                transition-all duration-300 ease-out
                hover:scale-110 hover:rotate-12
                active:scale-95
                bg-transparent hover:bg-transparent
              "
                            disableVisualClickEffect
                        />

                        <button
                            className="
                md:hidden p-2.5 rounded-xl
                text-slate-200 dark:text-white
                hover:text-pomegranate-200 dark:hover:text-pomegranate-200
                hover:bg-slate-800/60 dark:hover:bg-pomegranate-700/40
                transition-all duration-300 ease-out
                hover:scale-110 active:scale-95
                focus:outline-none focus:ring-2 focus:ring-pomegranate-500/50
              "
                            onClick={() => setMobileMenuOpen(prev => !prev)}
                            aria-label="Toggle menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            <div className="relative w-5 h-5">
                                <svg
                                    className={`absolute inset-0 transition-all duration-300 ${
                                        mobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg
                                    className={`absolute inset-0 transition-all duration-300 ${
                                        mobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </Container>

                {mobileMenuOpen && (
                    <div className="
            md:hidden mt-3 mx-3 mb-3 py-4 px-2
            bg-slate-900/98 dark:bg-pomegranate-600/95
            border border-slate-700/60 dark:border-pomegranate-700/60
            backdrop-blur-xl rounded-xl shadow-xl
            animate-in slide-in-from-top-2 fade-in duration-300
          ">
                        <nav className="flex flex-col space-y-2">
                            {navItems.map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="
                    group px-4 py-3 rounded-lg text-base font-medium font-notosans
                    text-slate-200 dark:text-white
                    hover:text-pomegranate-100 dark:hover:text-pomegranate-100
                    hover:bg-slate-800/70 dark:hover:bg-pomegranate-700/40
                    transition-all duration-300 ease-out
                    hover:translate-x-2 hover:scale-[1.02]
                    animate-in slide-in-from-left fade-in
                  "
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        animationFillMode: 'both'
                                    }}
                                >
                  <span className="flex items-center justify-between">
                    {item.name}
                      <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
};
