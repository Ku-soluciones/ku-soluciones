import React from 'react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import ServicesSection from '../../sections/ServicesSection';

const WebDevelopmentPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Desarrollo Web - KU Soluciones"
        description="Desarrollo web profesional con tecnologías modernas. Creamos sitios web responsivos, rápidos y optimizados para SEO. React, TypeScript y más."
        keywords="desarrollo web, sitios web, React, TypeScript, diseño web, SEO, responsivo"
        url="https://kusoluciones.com/servicios/desarrollo-web"
      />
      <div className="pt-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Desarrollo Web Profesional
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Creamos sitios web modernos, rápidos y optimizados que convierten visitantes en clientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                ¿Por qué elegir nuestro desarrollo web?
              </h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-pomegranate-500 mr-3">✓</span>
                  <span>Sitios web responsivos que se ven perfectos en todos los dispositivos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pomegranate-500 mr-3">✓</span>
                  <span>Optimización SEO para mejorar el posicionamiento en buscadores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pomegranate-500 mr-3">✓</span>
                  <span>Velocidad de carga optimizada para mejor experiencia de usuario</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pomegranate-500 mr-3">✓</span>
                  <span>Tecnologías modernas: React, TypeScript, Next.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pomegranate-500 mr-3">✓</span>
                  <span>Mantenimiento y soporte continuo</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tecnologías que utilizamos
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Frontend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">React, TypeScript, Tailwind CSS</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Backend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Node.js, Python, PHP</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Bases de Datos</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">PostgreSQL, MongoDB, MySQL</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Deployment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Vercel, Netlify, AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ServicesSection />
      </div>
    </>
  );
};

export default WebDevelopmentPage; 