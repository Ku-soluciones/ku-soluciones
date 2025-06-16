
import React from 'react';
import { Container } from './Container';
import { LinkedInIcon, TwitterIcon, GithubIcon } from '../ui/Icon';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-400 hover:text-pomegranate-400 transition-colors duration-300 text-sm">
    {children}
  </a>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
    { Icon: TwitterIcon, href: '#', label: 'Twitter' },
    { Icon: GithubIcon, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-black text-gray-300 dark:from-gray-800 dark:to-black py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold font-poppins text-pomegranate-400 mb-4">TechCorp</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Impulsando el futuro con soluciones tecnológicas innovadoras y personalizadas.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-montserrat text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#hero">Inicio</FooterLink></li>
              <li><FooterLink href="#services">Servicios</FooterLink></li>
              <li><FooterLink href="#about">Nosotros</FooterLink></li>
              <li><FooterLink href="#contact">Contacto</FooterLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-montserrat text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#">Política de Privacidad</FooterLink></li>
              <li><FooterLink href="#">Términos de Servicio</FooterLink></li>
              <li><FooterLink href="#">Política de Cookies</FooterLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-montserrat text-white mb-4">Contacto</h4>
            <p className="text-sm text-gray-400">Email: info@techcorp.example</p>
            <p className="text-sm text-gray-400">Teléfono: +123 456 7890</p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="text-gray-400 hover:text-pomegranate-400 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">&copy; {currentYear} TechCorp. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};
