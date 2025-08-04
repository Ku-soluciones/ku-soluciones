import React from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const WhatWeDoSection: React.FC = () => {
  const services: ServiceCard[] = [
    {
      icon: '💻',
      title: 'Software a medida para pymes',
      description: 'Desarrollamos aplicaciones web personalizadas que se adaptan a tu flujo de trabajo en Chile.',
      features: ['Sistemas de gestión empresarial', 'Aplicaciones web a medida', 'APIs personalizadas para Chile']
    },
    {
      icon: '⚡',
      title: 'Automatización de procesos en Chile',
      description: 'Optimizamos tiempos con bots inteligentes, flujos automatizados e integraciones específicas para empresas chilenas.',
      features: ['Bots inteligentes para pymes', 'Flujos automatizados', 'Integraciones API para Chile']
    },
    {
      icon: '📊',
      title: 'Soluciones digitales personalizadas',
      description: 'Visualizamos tus métricas clave en tiempo real con dashboards adaptados a tu negocio.',
      features: ['Reportes en tiempo real', 'KPIs personalizados para Chile', 'Análisis predictivo empresarial']
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Desarrolladores Tecnológicos en Chile
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transformamos tu negocio con soluciones digitales personalizadas que se adaptan a las necesidades específicas de las empresas chilenas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              {/* Icono */}
              <div className="text-4xl mb-6 text-center">
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Características */}
              <div className="mb-8">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-pomegranate-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón de acción */}
              <div className="text-center">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    const el = document.getElementById('final-cta');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Cotizar
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action adicional optimizado */}
        <div className="text-center mt-16">
          <div className="bg-pomegranate-50 dark:bg-pomegranate-900/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Necesitas desarrolladores tecnológicos en Chile?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Desarrollamos soluciones digitales personalizadas para necesidades específicas de tu industria en Chile.
            </p>
            <Button
              variant="primary"
              onClick={() => {
                const el = document.getElementById('final-cta');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              📞 Hablar con un especialista
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDoSection; 