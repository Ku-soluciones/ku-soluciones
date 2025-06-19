
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Card } from '../components/ui/Card';

interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  results: string;
}

const portfolioData: Project[] = [
  {
    id: 'p1',
    image: 'CE1.jpg',
    title: 'E-commerce Plataforma X',
    description: 'Desarrollo completo de una plataforma de e-commerce escalable con integraciones de pago y logística.',
    results: '+30% Conversión, +50% Ventas',
  },
  {
    id: 'p2',
    image: 'CE2.jpg',
    title: 'App Móvil Financiera Y',
    description: 'Aplicación móvil intuitiva para gestión de finanzas personales, con altos estándares de seguridad.',
    results: '4.8 Estrellas Rating, 100K+ Descargas',
  },
  {
    id: 'p3',
    image: 'CE3.jpg',
    title: 'Sistema de Gestión Interna Z',
    description: 'Solución SaaS para optimizar procesos internos y mejorar la productividad del equipo.',
    results: '-40% Tiempo en Tareas, +25% Eficiencia',
  },
  {
    id: 'p4',
    image: 'https://picsum.photos/seed/project4/400/300',
    title: 'Web Corporativa Innovadora W',
    description: 'Diseño y desarrollo de una web moderna y responsiva para una startup tecnológica.',
    results: '+200% Tráfico Orgánico, Mejor UX',
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <SectionWrapper id="portfolio" title="Casos de Éxito" subtitle="Proyectos que hablan por nosotros">
      <div className="flex overflow-x-auto space-x-6 pb-8 scrollbar-thin scrollbar-thumb-pomegranate-500 scrollbar-track-pomegranate-200 dark:scrollbar-thumb-pomegranate-400 dark:scrollbar-track-gray-700">
        {portfolioData.map((project) => (
          <div key={project.id} className="flex-shrink-0 w-80 md:w-96">
            <Card className="h-full flex flex-col hover:shadow-xl dark:hover:shadow-pomegranate-500/30">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" loading="lazy" />
              <h3 className="font-montserrat text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
              <p className="font-opensans text-sm text-gray-600 dark:text-gray-400 mb-3 flex-grow">{project.description}</p>
              <p className="font-notosans text-xs font-semibold text-pomegranate-600 dark:text-pomegranate-400 uppercase tracking-wide">{project.results}</p>
            </Card>
          </div>
        ))}
      </div>
       <p className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
        Desliza para ver más proyectos &rarr;
      </p>
    </SectionWrapper>
  );
};

export default PortfolioSection;
