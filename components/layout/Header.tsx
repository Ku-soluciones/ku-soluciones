import React, { useState } from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

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
        className="group relative px-4 py-2 rounded-lg text-sm font-medium font-notosans transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 text-slate-200 dark:text-white hover:text-pomegranate-100 dark:hover:text-pomegranate-100 hover:bg-slate-800/70 dark:hover:bg-pomegranate-700/40"
    >
        <span className="absolute bottom-0 left-1/2 h-0.5 rounded-full transition-all duration-300 w-0 group-hover:w-full group-hover:left-0 bg-pomegranate-100 dark:bg-pomegranate-100" />
        {children}
    </a>
);

export const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Servicios', href: '#services' },
        { name: 'Nosotros', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Blog', href: '#blog' },
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
                                className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-pomegranate-500 hover:bg-pomegranate-400 dark:bg-pomegranate-700 dark:hover:bg-pomegranate-600 text-white shadow-lg shadow-pomegranate-600/30 hover:shadow-xl hover:shadow-pomegranate-600/40 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95"
                            >
                                Contacto
                            </Button>
                        </a>
                        <ThemeToggle />
                        <button
                            className="md:hidden p-2 rounded-lg text-slate-200 dark:text-white hover:bg-slate-800/70 dark:hover:bg-pomegranate-700/40 transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </Container>
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-slate-900/95 dark:bg-pomegranate-600/90 backdrop-blur-xl border border-slate-700/80 dark:border-pomegranate-700/80 rounded-xl shadow-2xl p-4 animate-in slide-in-from-top-2 duration-300">
                        <nav className="flex flex-col space-y-2">
                            {navItems.map(item => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 py-2 rounded-lg text-sm font-medium text-slate-200 dark:text-white hover:text-pomegranate-100 dark:hover:text-pomegranate-100 hover:bg-slate-800/70 dark:hover:bg-pomegranate-700/40 transition-all duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
};
