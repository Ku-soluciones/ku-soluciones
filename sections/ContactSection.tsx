
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { Button } from '../components/ui/Button';
import { LinkedInIcon, FacebookIcon, InstagramIcon } from '../components/ui/Icon';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    // Reset submitted message after a few seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const socialLinks = [
    { Icon: FacebookIcon, href: '#', label: 'Facebook' },
    { Icon: InstagramIcon, href: 'https://www.instagram.com/ku_soluciones/', label: 'Instagram' },
    { Icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
  ];

  return (
    <SectionWrapper 
      id="contact" 
      title="Ponte en Contacto" 
      subtitle="Estamos listos para ayudarte a alcanzar tus metas"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
          <h3 className="font-montserrat text-2xl font-semibold text-gray-800 dark:text-white mb-6">Envíanos un Mensaje</h3>
          {isSubmitted && (
            <div className="mb-4 p-3 rounded-md bg-green-100 dark:bg-green-700 text-green-700 dark:text-green-100">
              ¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-notosans">Nombre Completo</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-pomegranate-500 focus:border-pomegranate-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-notosans">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-pomegranate-500 focus:border-pomegranate-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-notosans">Mensaje</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-pomegranate-500 focus:border-pomegranate-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              ></textarea>
            </div>
            <div>
              <Button type="submit" variant="primary" className="w-full">
                Enviar Mensaje
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div>
            <h3 className="font-montserrat text-2xl font-semibold text-gray-800 dark:text-white mb-4">Información de Contacto</h3>
            <div className="space-y-3 font-opensans text-gray-700 dark:text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:info@techcorp.example" className="text-pomegranate-600 dark:text-pomegranate-400 hover:underline">contacto@ku-soluciones.cl</a></p>
              <p><strong>Teléfono:</strong> <a href="tel:+56983620169" className="text-pomegranate-600 dark:text-pomegranate-400 hover:underline">+56 9 8362 0169</a></p>
              <p><strong>Dirección:</strong> Palqui 2916, Ñuñoa</p>
            </div>
            <div className="mt-6">
                <h4 className="font-montserrat text-lg font-semibold text-gray-800 dark:text-white mb-3">Síguenos</h4>
                <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, label }) => (
                    <a key={label} href={href} aria-label={label} className="text-gray-500 dark:text-gray-400 hover:text-pomegranate-500 dark:hover:text-pomegranate-400 transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                    </a>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
