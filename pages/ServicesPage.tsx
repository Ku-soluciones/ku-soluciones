import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ServicesSection from '../sections/ServicesSection';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Servicios de Desarrollo Web y Tecnología - KU Soluciones"
        description="Ofrecemos servicios completos de desarrollo web, aplicaciones móviles, consultoría tecnológica y soluciones cloud. Tecnología de vanguardia para tu negocio."
        keywords="desarrollo web, aplicaciones móviles, consultoría tecnológica, cloud computing, microservicios, soporte técnico"
        url="https://www.ku-soluciones.cl/servicios"
      />
      <div className="pt-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>
        <ServicesSection />
      </div>
    </>
  );
};

export default ServicesPage; 