
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Card } from '../components/ui/Card';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Desarrolladores Tecnológicos en Chile',
      description: 'Entendemos los desafíos específicos de las pequeñas y medianas empresas chilenas.'
    },
    {
      icon: '⚡',
      title: 'Implementación Rápida',
      description: 'Entregamos resultados en semanas, no meses. Tu tiempo es valioso.'
    },
    {
      icon: '💰',
      title: 'Precios Accesibles',
      description: 'Soluciones digitales personalizadas de calidad sin el precio de las grandes consultoras.'
    },
    {
      icon: '🤝',
      title: 'Soporte Local',
      description: 'Atención en español, horario chileno y acompañamiento continuo.'
    }
  ];

  const industries = [
    { name: 'Logística Chile', icon: '🚚', description: 'Sistemas de tracking y gestión de flotas' },
    { name: 'Retail Nacional', icon: '🛍️', description: 'E-commerce y gestión de inventarios' },
    { name: 'Manufactura', icon: '🏭', description: 'Automatización de procesos productivos' },
    { name: 'Servicios', icon: '💼', description: 'Software de gestión empresarial' }
  ];

  return (
    <SectionWrapper
      id="about"
      title="Somos Desarrolladores Tecnológicos Especializados en Pymes Chilenas"
      subtitle="Tecnología que entiende tu negocio en Chile"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            ¿Por qué elegirnos?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Somos un equipo de desarrolladores tecnológicos especializados en 
            <span className="font-semibold text-pomegranate-600 dark:text-pomegranate-400"> soluciones digitales personalizadas para pymes chilenas</span>. 
            Entendemos que cada negocio es único y por eso desarrollamos software a medida.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Nuestra misión es democratizar la tecnología para que las pymes chilenas puedan competir 
            en igualdad de condiciones con las grandes empresas, sin los costos exorbitantes 
            de las consultoras tradicionales.
          </p>
          
          {/* Estadísticas */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-pomegranate-600 dark:text-pomegranate-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pymes chilenas atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pomegranate-600 dark:text-pomegranate-400">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pomegranate-600 dark:text-pomegranate-400">2-4</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Semanas entrega</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6">
              <div className="text-3xl mb-3">{value.icon}</div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{value.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Industrias que atendemos */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Industrias que atendemos en Chile
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Tenemos experiencia en diversos sectores de la economía chilena
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {industries.map((industry, index) => (
          <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">{industry.icon}</div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{industry.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{industry.description}</p>
          </Card>
        ))}
      </div>

      {/* Proceso de trabajo */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Nuestro Proceso para Desarrolladores Tecnológicos en Chile
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-pomegranate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Diagnóstico</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Analizamos tus procesos y necesidades específicas</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-pomegranate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Propuesta</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Diseñamos una solución digital personalizada para tu negocio</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-pomegranate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Desarrollo</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Construimos tu solución con las mejores tecnologías</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-pomegranate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Soporte</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Acompañamiento continuo y mantenimiento</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
