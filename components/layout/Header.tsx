import React, { useState } from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Logo = () => (
    <a
        href="#hero"
        className="flex items-center space-x-2 text-lg font-bold font-poppins text-white hover:text-pomegranate-200 transition-all duration-300"
    >
        <img
            src="https://res.cloudinary.com/dddfx1xwt/image/upload/v1750340412/logoku_wg4bgn.webp"
            alt="Logo KÜ"
            className="w-5 h-5 object-contain"
        />
        <span className="tracking-wide">KÜ</span>
    </a>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a
        href={href}
        className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
    >
        {children}
    </a>
);

export const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrollOffset = useScrollPosition(0);

    const navItems = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Qué hacemos', href: '#what-we-do' },
        { name: 'Servicios', href: '#services' },
        { name: 'Nosotros', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Blog', href: '#blog' },
    ];

    return (
        <>
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden animate-in fade-in duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            <header
                className="
          fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50
          bg-black/80 backdrop-blur-xl
          border border-white/10
          rounded-full shadow-2xl
          transition-all duration-500 ease-out
          max-w-4xl w-[95vw] md:w-auto
        "
                style={{
                    transform: `translateY(${scrollOffset}px) translateX(-50%)`,
                }}
            >
                <Container className="py-3 px-6 flex items-center justify-between">
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center">
                        {navItems.map(item => (
                            <NavLink key={item.name} href={item.href}>
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <a href="#final-cta">
                            <Button
                                variant="primary"
                                className="px-6 py-2 text-sm font-semibold rounded-full bg-pomegranate-500 hover:bg-pomegranate-600 text-white transition-all duration-300"
                            >
                                Agenda reunión
                            </Button>
                        </a>

                        <ThemeToggle />
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex lg:hidden items-center space-x-3">
                        <a href="#final-cta">
                            <Button
                                variant="primary"
                                className="px-4 py-2 text-xs font-semibold rounded-full bg-pomegranate-500 hover:bg-pomegranate-600 text-white transition-all duration-300"
                            >
                                Agenda
                            </Button>
                        </a>

                        <ThemeToggle />

                        {/* Mobile menu button */}
                        <button
                            className="p-2 text-white/80 hover:text-white transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <svg
                                className="w-5 h-5"
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

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 animate-in slide-in-from-top-2 duration-300">
                        <nav className="flex flex-col space-y-2 mb-4">
                            {navItems.map(item => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                        
                        {/* Mobile CTAs */}
                        <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                            <a href="#final-cta">
                                <Button
                                    variant="primary"
                                    className="w-full px-4 py-2 text-sm font-semibold rounded-full"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Agenda tu reunión
                                </Button>
                            </a>
                            <a 
                                href="https://wa.me/56912345678" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="secondary"
                                    className="w-full px-4 py-2 text-sm font-semibold rounded-full border-white/20 text-white hover:bg-white/10"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};
