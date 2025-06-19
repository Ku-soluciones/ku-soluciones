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
}

const servicesData: Service[] = [
  {
    id: 's1',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Desarrollo Web Moderno',
    description: 'Creamos aplicaciones web rápidas, seguras y escalables con las últimas tecnologías.',
    link: '#desarrollo-web',
    details: 'Incluye diseño responsivo, backend robusto y optimización SEO para soluciones integrales en la web.',
  },
  {
    id: 's2',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Aplicaciones Móviles Nativas',
    description: 'Desarrollamos apps para iOS y Android que ofrecen experiencias de usuario excepcionales.',
    link: '#apps-moviles',
    details: 'Utilizamos tecnologías nativas para asegurar alto rendimiento y usabilidad en cualquier dispositivo móvil.',
  },
  {
    id: 's3',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Consultoría Tecnológica',
    description: 'Te asesoramos para optimizar tu infraestructura y estrategias tecnológicas.',
    link: '#consultoria',
    details: 'Analizamos tu ecosistema digital y proponemos mejoras personalizadas para tu crecimiento tecnológico.',
  },
  {
    id: 's4',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Soluciones Cloud',
    description: 'Migramos y gestionamos tus servicios en la nube para mayor eficiencia y flexibilidad.',
    link: '#cloud',
    details: 'Configuramos y monitorizamos plataformas cloud seguras, optimizando recursos y disponibilidad.',
  },
  {
    id: 's5',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Microservicios y APIs',
    description: 'Diseñamos arquitecturas basadas en microservicios y APIs para mayor escalabilidad y control.',
    link: '#microservicios',
    details: 'Conectamos y orquestamos servicios independientes para aumentar la eficiencia y modularidad.',
  },
  {
    id: 's6',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Mantenimiento y Soporte Técnico',
    description: 'Ofrecemos soporte continuo y mantenimiento proactivo para tus sistemas y plataformas.',
    link: '#soporte',
    details: 'Resolvemos incidencias, actualizamos software y aseguramos la continuidad de tus operaciones.',
  },
];

const ServicesSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
      <SectionWrapper
          id="services"
          title="Nuestros Servicios"
          subtitle="Soluciones que potencian tu negocio"
          className="bg-gray-50 dark:bg-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
              <Card
                  key={service.id}
                  className="text-center hover:shadow-xl hover:scale-105 dark:hover:shadow-pomegranate-500/30"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="font-montserrat text-xl font-semibold text-gray-800 dark:text-white mb-3">{service.title}</h3>
                <p className="font-opensans text-gray-600 dark:text-gray-400 text-sm mb-2 leading-relaxed">{service.description}</p>
                <button
                    onClick={() => setExpanded(expanded === service.id ? null : service.id)}
                    className="font-notosans text-sm font-semibold text-pomegranate-600 dark:text-pomegranate-400 hover:underline"
                >
                  Saber más &rarr;
                </button>
                {expanded === service.id && (
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 transition-all duration-300">
                      {service.details}
                    </p>
                )}
              </Card>
          ))}
        </div>
      </SectionWrapper>
  );
};

export default ServicesSection;