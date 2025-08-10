
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { Button } from '../components/ui/Button';
import { LinkedInIcon, TwitterIcon, GithubIcon } from '../components/ui/Icon';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '',
    service: '',
    message: '' 
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const socialLinks = [
    { Icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
    { Icon: TwitterIcon, href: '#', label: 'Twitter' },
    { Icon: GithubIcon, href: '#', label: 'GitHub' },
  ];

  const contactMethods = [
    {
      icon: '📞',
      title: 'Llámanos',
      description: 'Horario de atención: Lunes a Viernes 9:00 - 18:00',
      action: '+56 9 1234 5678'
    },
    {
      icon: '📧',
      title: 'Escríbenos',
      description: 'Respuesta en menos de 24 horas',
      action: 'contacto@ku-soluciones.cl'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Atención inmediata para consultas urgentes',
      action: '+56 9 1234 5678'
    }
  ];

  return (
    <SectionWrapper 
      id="contact" 
      title="¿Listo para Digitalizar tu Negocio?" 
      subtitle="Conversemos sobre cómo podemos ayudarte"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
          <h3 className="font-montserrat text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Solicita tu Consulta Gratuita
          </h3>
          {isSubmitted && (
            <div className="mb-4 p-3 rounded-md bg-green-100 dark:bg-green-700 text-green-700 dark:text-green-100">
              ¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto en menos de 24 horas.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-notosans">Nombre Completo *</label>
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
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-notosans">Empresa</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-pomegranate-500 focus:border-pomegranate-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-notosans">Correo Electrónico *</label>
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
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-notosans">Servicio de Interés</label>
                <select
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-pomegranate-500 focus:border-pomegranate-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="automatizacion">Automatización de Procesos</option>
                  <option value="sistemas-gestion">Sistemas de Gestión</option>
                  <option value="ecommerce">E-commerce y Tiendas Online</option>
                  <option value="apps-moviles">Aplicaciones Móviles</option>
                  <option value="migracion-cloud">Migración a la Nube</option>
                  <option value="soporte">Soporte y Mantenimiento</option>
                  <option value="personalizado">Solución Personalizada</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-notosans">Cuéntanos sobre tu proyecto *</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Describe brevemente tu necesidad o el problema que quieres resolver..."
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-pomegranate-500 focus:border-pomegranate-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              ></textarea>
            </div>
            <div>
              <Button type="submit" variant="primary" className="w-full">
                📞 Solicitar Consulta Gratuita
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Info & Methods */}
        <div className="space-y-8">
          <div>
            <h3 className="font-montserrat text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Múltiples Formas de Contacto
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{method.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{method.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{method.description}</p>
                      <a 
                        href={method.title === 'WhatsApp' ? `https://wa.me/56912345678` : `mailto:${method.action}`}
                        className="text-pomegranate-600 dark:text-pomegranate-400 hover:underline font-medium"
                      >
                        {method.action}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Información adicional */}
          <div className="bg-pomegranate-50 dark:bg-pomegranate-900/20 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">¿Por qué elegirnos?</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-pomegranate-500 mr-2">✓</span>
                <span>Consulta gratuita sin compromiso</span>
              </li>
              <li className="flex items-start">
                <span className="text-pomegranate-500 mr-2">✓</span>
                <span>Propuesta personalizada en 48 horas</span>
              </li>
              <li className="flex items-start">
                <span className="text-pomegranate-500 mr-2">✓</span>
                <span>Precios transparentes sin sorpresas</span>
              </li>
              <li className="flex items-start">
                <span className="text-pomegranate-500 mr-2">✓</span>
                <span>Soporte técnico en español</span>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-pomegranate-400 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
