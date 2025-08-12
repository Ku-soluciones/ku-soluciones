
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Card } from '../components/ui/Card';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import FeatureIcon from '../components/ui/FeatureIcon';
import SocialIcon from '../components/ui/SocialIcon';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      position: 'CEO',
      company: 'Logística Express Chile',
      content: 'KU Soluciones transformó completamente nuestros procesos. El sistema de gestión logística que desarrollaron nos permitió reducir costos en un 30% y mejorar la eficiencia de nuestras rutas.',
      rating: 5,
      industry: 'Logística'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      position: 'Gerente General',
      company: 'Retail Nacional',
      content: 'La plataforma de e-commerce que crearon superó todas nuestras expectativas. Las ventas online aumentaron un 150% en el primer mes y la experiencia del cliente mejoró significativamente.',
      rating: 5,
      industry: 'Retail'
    },
    {
      id: 3,
      name: 'Ana Silva',
      position: 'Directora de Operaciones',
      company: 'Manufactura Industrial',
      content: 'La automatización de nuestros procesos productivos fue un antes y después para nuestra empresa. Redujimos defectos en un 50% y aumentamos la productividad en un 25%.',
      rating: 5,
      industry: 'Manufactura'
    }
  ];

  return (
    <SectionWrapper
      id="testimonials"
      title="Lo que Dicen Nuestros Clientes"
      subtitle="Testimonios de pymes chilenas que han transformado sus negocios"
    >
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Testimonios', url: '#testimonials' }
        ]}
        currentPage="Opiniones Clientes"
      />

      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Más de 50 pymes chilenas confían en nuestras soluciones digitales personalizadas. 
          Conoce las experiencias de algunos de nuestros clientes satisfechos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
            {/* Rating */}
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, index) => (
                <span key={index} className="text-yellow-400">
                  {/* Lucide "star" icon - Professional rating star */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
                  </svg>
                </span>
              ))}
            </div>
            
            {/* Content */}
            <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic">
              "{testimonial.content}"
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-pomegranate-500 to-pomegranate-700 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-800 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.position}, {testimonial.company}
                </div>
                <div className="text-xs text-pomegranate-600 dark:text-pomegranate-400 font-medium">
                  {testimonial.industry}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Estadísticas de satisfacción */}
      <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Nuestros Números Hablan por Sí Solos
        </h3>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-pomegranate-600 dark:text-pomegranate-400 mb-2">95%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Satisfacción Cliente</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pomegranate-600 dark:text-pomegranate-400 mb-2">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Clientes Satisfechos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pomegranate-600 dark:text-pomegranate-400 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Rating Promedio</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pomegranate-600 dark:text-pomegranate-400 mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos Entregados</div>
          </div>
        </div>
      </div>

      {/* Industrias atendidas */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Industrias que Atendemos
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { name: 'Logística', iconType: 'logistics' as const, clients: 15 },
            { name: 'Retail', iconType: 'retail' as const, clients: 12 },
            { name: 'Manufactura', iconType: 'manufacturing' as const, clients: 8 },
            { name: 'Servicios', iconType: 'services' as const, clients: 15 }
          ].map((industry, index) => (
            <div key={index} className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-2">
                <FeatureIcon type={industry.iconType} size="xl" className="text-pomegranate-600 dark:text-pomegranate-400" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                {industry.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {industry.clients} clientes
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          ¿Quieres ser nuestro próximo cliente satisfecho?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Únete a las más de 50 pymes chilenas que ya han transformado sus negocios con nuestras soluciones.
        </p>
        <button
          onClick={() => {
            const el = document.getElementById('final-cta');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-pomegranate-600 hover:bg-pomegranate-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto justify-center"
        >
          <SocialIcon type="phone" size="sm" variant="minimal" className="text-white" />
          Agendar consulta gratuita
        </button>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
