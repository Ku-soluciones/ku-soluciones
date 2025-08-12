
import React from 'react';
import { Container } from './Container';
import SocialIconGroup from '../ui/SocialIconGroup';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a
        href={href}
        className="text-gray-400 hover:text-pomegranate-400 transition-colors duration-200"
    >
        {children}
    </a>
);

const Footer: React.FC = () => {
    const socialLinks = [
        { type: 'instagram' as const, href: 'https://instagram.com/ku-soluciones' },
        { type: 'facebook' as const, href: 'https://facebook.com/kusoluciones' },
        { type: 'linkedin' as const, href: 'https://linkedin.com/company/ku-soluciones' }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <Container className="py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <img
                                src="https://res.cloudinary.com/dddfx1xwt/image/upload/v1750340412/logoku_wg4bgn.webp"
                                alt="KU Soluciones"
                                className="w-8 h-8"
                            />
                            <span className="text-xl font-bold">KU Soluciones</span>
                        </div>
                        <p className="text-gray-400 mb-4 max-w-md">
                            Transformamos ideas en realidad digital. Especialistas en desarrollo web, 
                            aplicaciones móviles y soluciones tecnológicas innovadoras.
                        </p>
                        <SocialIconGroup
                            links={socialLinks}
                            size="md"
                            variant="minimal"
                            spacing="normal"
                            className="text-gray-400 hover:text-gray-300"
                        />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li><FooterLink href="#hero">Inicio</FooterLink></li>
                            <li><FooterLink href="#services">Servicios</FooterLink></li>
                            <li><FooterLink href="#about">Nosotros</FooterLink></li>
                            <li><FooterLink href="#contact">Contacto</FooterLink></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><FooterLink href="#">Política de Privacidad</FooterLink></li>
                            <li><FooterLink href="#">Términos de Servicio</FooterLink></li>
                            <li><FooterLink href="#">Política de Cookies</FooterLink></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 KU Soluciones. Todos los derechos reservados.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
