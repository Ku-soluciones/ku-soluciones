
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Card } from '../components/ui/Card';
import { ServiceIconExample } from '../components/ui/Icon'; // Placeholder icon

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const servicesData: Service[] = [
  {
    id: 's1',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Desarrollo Web Moderno',
    description: 'Creamos aplicaciones web rápidas, seguras y escalables con las últimas tecnologías.',
    link: '#',
  },
  {
    id: 's2',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Aplicaciones Móviles Nativas',
    description: 'Desarrollamos apps para iOS y Android que ofrecen experiencias de usuario excepcionales.',
    link: '#',
  },
  {
    id: 's3',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Consultoría Tecnológica',
    description: 'Te asesoramos para optimizar tu infraestructura y estrategias tecnológicas.',
    link: '#',
  },
   {
    id: 's4',
    icon: <ServiceIconExample className="w-10 h-10 text-pomegranate-600 dark:text-pomegranate-400 mb-4" />,
    title: 'Soluciones Cloud',
    description: 'Migramos y gestionamos tus servicios en la nube para mayor eficiencia y flexibilidad.',
    link: '#',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <SectionWrapper 
      id="services" 
      title="Nuestros Servicios"
      subtitle="Soluciones que potencian tu negocio"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <Card key={service.id} className="text-center hover:shadow-xl hover:scale-105 dark:hover:shadow-pomegranate-500/30">
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="font-montserrat text-xl font-semibold text-gray-800 dark:text-white mb-3">{service.title}</h3>
            <p className="font-opensans text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
            <a
              href={service.link}
              className="font-notosans text-sm font-semibold text-pomegranate-600 dark:text-pomegranate-400 hover:underline"
            >
              Saber más &rarr;
            </a>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
