import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { Card } from '../components/ui/Card';
import { ServiceIconExample } from '../components/ui/Icon';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  details: string;
  benefits: string[];
}

const servicesData: Service[] = [
  {
    id: 's1',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Automatización de Procesos',
    description: 'Eliminamos tareas repetitivas y optimizamos flujos de trabajo para pymes.',
    link: '#automatizacion',
    details: 'Desarrollamos sistemas que automatizan procesos internos como facturación, inventario, reportes y gestión de clientes.',
    benefits: ['Reducción de errores', 'Ahorro de tiempo', 'Mayor eficiencia']
  },
  {
    id: 's2',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Sistemas de Gestión',
    description: 'Creamos software a medida para administrar tu negocio de forma integral.',
    link: '#sistemas-gestion',
    details: 'Desarrollamos sistemas completos que integran ventas, inventario, clientes y finanzas en una sola plataforma.',
    benefits: ['Control total', 'Datos centralizados', 'Reportes automáticos']
  },
  {
    id: 's3',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'E-commerce y Tiendas Online',
    description: 'Convertimos tu negocio físico en una plataforma digital de ventas.',
    link: '#ecommerce',
    details: 'Creamos tiendas online completas con pasarelas de pago, gestión de inventario y análisis de ventas.',
    benefits: ['Ventas 24/7', 'Alcance nacional', 'Menos costos fijos']
  },
  {
    id: 's4',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Aplicaciones Móviles',
    description: 'Apps para que tus clientes y empleados accedan desde cualquier lugar.',
    link: '#apps-moviles',
    details: 'Desarrollamos aplicaciones nativas para iOS y Android que conectan con tus sistemas existentes.',
    benefits: ['Acceso móvil', 'Mejor experiencia', 'Mayor engagement']
  },
  {
    id: 's5',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Migración a la Nube',
    description: 'Movemos tus sistemas a la nube para mayor seguridad y flexibilidad.',
    link: '#cloud',
    details: 'Migramos tus aplicaciones y datos a servidores cloud con respaldos automáticos y alta disponibilidad.',
    benefits: ['Seguridad mejorada', 'Escalabilidad', 'Menos mantenimiento']
  },
  {
    id: 's6',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Soporte y Mantenimiento',
    description: 'Acompañamiento continuo para que tus sistemas funcionen perfectamente.',
    link: '#soporte',
    details: 'Ofrecemos soporte técnico, actualizaciones de seguridad y mantenimiento preventivo de tus sistemas.',
    benefits: ['Funcionamiento 24/7', 'Actualizaciones automáticas', 'Soporte técnico']
  },
];

const ServicesSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
      <SectionWrapper
          id="services"
          title="Soluciones para Pymes Chilenas"
          subtitle="Tecnología que se adapta a tu negocio"
          className="bg-gray-50 dark:bg-gray-800"
      >
        {/* Introducción específica */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Entendemos los desafíos de las pymes chilenas. Por eso desarrollamos 
            <span className="font-semibold text-pomegranate-600 dark:text-pomegranate-400"> soluciones tecnológicas</span> 
            que se adaptan a tu presupuesto y necesidades específicas.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <div className="text-2xl mb-2">💰</div>
              <h4 className="font-semibold mb-1">Precios Pymes</h4>
              <p className="text-gray-600 dark:text-gray-400">Soluciones accesibles sin comprometer calidad</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold mb-1">Implementación Rápida</h4>
              <p className="text-gray-600 dark:text-gray-400">Resultados en semanas, no meses</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-semibold mb-1">Soporte Local</h4>
              <p className="text-gray-600 dark:text-gray-400">Atención en español, horario chileno</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
              <Card
                  key={service.id}
                  className="text-center hover:shadow-xl hover:scale-105 dark:hover:shadow-pomegranate-500/30"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="font-montserrat text-xl font-semibold text-gray-800 dark:text-white mb-3">{service.title}</h3>
                <p className="font-opensans text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                
                {/* Beneficios rápidos */}
                <div className="mb-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span className="text-pomegranate-500 mr-2">✓</span>
                      {benefit}
                    </div>
                  ))}
                </div>

                <button
                    onClick={() => setExpanded(expanded === service.id ? null : service.id)}
                    className="font-notosans text-sm font-semibold text-pomegranate-600 dark:text-pomegranate-400 hover:underline"
                >
                  {expanded === service.id ? 'Ver menos' : 'Saber más'} &rarr;
                </button>
                {expanded === service.id && (
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        {service.details}
                      </p>
                      <button
                        onClick={() => {
                          const el = document.getElementById('contact');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full bg-pomegranate-600 hover:bg-pomegranate-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        Cotizar este servicio
                      </button>
                    </div>
                )}
              </Card>
          ))}
        </div>

        {/* Call-to-action específico */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Desarrollamos soluciones personalizadas para necesidades específicas de tu industria.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-pomegranate-600 hover:bg-pomegranate-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            📞 Hablar con un especialista
          </button>
        </div>
      </SectionWrapper>
  );
};

export default ServicesSection;