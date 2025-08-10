import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';

const FinalCTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Final CTA form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="final-cta" className="py-20 bg-gradient-to-br from-pomegranate-600 via-pomegranate-700 to-pomegranate-800 text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Necesitas desarrolladores tecnológicos en Chile?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Completa el formulario y nuestros especialistas en software a medida para pymes se pondrán en contacto en menos de 24 horas.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {isSubmitted && (
            <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-400/30">
              <p className="text-green-100">
                ¡Gracias! Tu mensaje ha sido enviado. Nuestros desarrolladores tecnológicos se pondrán en contacto en menos de 24 horas.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Empresa
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                placeholder="Nombre de tu empresa"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Cuéntanos sobre tu proyecto de automatización de procesos *
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 resize-none"
                placeholder="Describe brevemente tu necesidad de soluciones digitales personalizadas o el proyecto que tienes en mente..."
              ></textarea>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                className="px-8 py-4 text-lg font-semibold bg-white dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-pomegranate-600 hover:text-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-gray-300 dark:border-gray-600"
              >
                Enviar mensaje
              </Button>
            </div>
          </form>

          {/* Información adicional optimizada */}
          <div className="mt-12 text-center">
            <p className="text-white/80 mb-4">¿Prefieres contactar directamente a nuestros desarrolladores tecnológicos en Chile?</p>
            <div className="flex justify-center space-x-4">
              <a
                href="tel:+56983620169"
                className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                📞 +56 9 8362 0169
              </a>
              <a
                href="mailto:contacto@ku-soluciones.cl"
                className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-white/20"
              >
                📧 Email
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTASection; 