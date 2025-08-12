
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SocialIcon from '../components/ui/SocialIcon';

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Logística',
      category: 'Logística Chile',
      description: 'Software a medida para optimizar rutas de entrega y gestión de flotas',
      image: '/public/CE1.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      results: ['Reducción 30% costos operativos', 'Mejora 40% eficiencia rutas', 'Tracking en tiempo real']
    },
    {
      id: 2,
      title: 'E-commerce Retail Nacional',
      category: 'Retail',
      description: 'Plataforma completa de ventas online con gestión de inventario',
      image: '/public/CE2.jpg',
      technologies: ['Next.js', 'TypeScript', 'MongoDB'],
      results: ['Ventas 24/7', 'Integración múltiples pasarelas', 'Analytics avanzado']
    },
    {
      id: 3,
      title: 'Automatización Manufactura',
      category: 'Manufactura',
      description: 'Sistema de control de calidad y automatización de procesos productivos',
      image: '/public/CE3.jpg',
      technologies: ['Python', 'IoT', 'Machine Learning'],
      results: ['Reducción 50% defectos', 'Ahorro 25% tiempo producción', 'Predicción mantenimiento']
    }
  ];

  return (
    <SectionWrapper
      id="portfolio"
      title="Casos de Éxito - Proyectos de Software a Medida"
      subtitle="Conoce cómo hemos transformado negocios con tecnología"
    >
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Portfolio', url: '#portfolio' }
        ]}
        currentPage="Casos de Éxito"
      />

      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Estos son algunos de los proyectos donde hemos aplicado nuestro expertise en 
          desarrollo de software a medida para pymes chilenas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="aspect-video bg-gradient-to-br from-pomegranate-500 to-pomegranate-700 flex items-center justify-center">
              <div className="text-white text-4xl">🏢</div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-pomegranate-600 dark:text-pomegranate-400">
                  {project.category}
                </span>
                <span className="text-xs text-gray-500">Proyecto #{project.id}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm">
                  Tecnologías utilizadas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm">
                  Resultados obtenidos:
                </h4>
                <ul className="space-y-1">
                  {project.results.map((result, index) => (
                    <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-pomegranate-500 mr-2 mt-1">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Estadísticas */}
      <div className="mt-16 bg-gradient-to-r from-pomegranate-600 to-pomegranate-700 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold text-center mb-8">
          Impacto en Pymes Chilenas
        </h3>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-90">Proyectos Completados</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-sm opacity-90">Satisfacción Cliente</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">30%</div>
            <div className="text-sm opacity-90">Ahorro Promedio</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">2-4</div>
            <div className="text-sm opacity-90">Semanas Entrega</div>
          </div>
        </div>
      </div>

      {/* Call-to-action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          ¿Quieres ser nuestro próximo caso de éxito?
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
          className="px-10 py-4 text-lg font-semibold border-2 border-pomegranate-600 hover:border-pomegranate-700 transition-all duration-300 flex items-center gap-2 mx-auto justify-center"
        >
          <SocialIcon type="phone" size="sm" variant="minimal" className="text-white" />
          Cotizar mi proyecto
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default PortfolioSection;
