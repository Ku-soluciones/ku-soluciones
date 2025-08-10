import React from 'react';
import SEO from '../components/SEO';
import PortfolioSection from '../sections/PortfolioSection';
import TestimonialsSection from '../sections/TestimonialsSection';

const PortfolioPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Portafolio de Proyectos - KU Soluciones"
        description="Explora nuestros proyectos de desarrollo web, aplicaciones móviles y soluciones tecnológicas. Casos de éxito que demuestran nuestra experiencia."
        keywords="portafolio proyectos, casos éxito, desarrollo web, aplicaciones móviles, proyectos tecnología"
        url="https://kusoluciones.com/portafolio"
      />
      <div className="pt-20">
        <PortfolioSection />
        <TestimonialsSection />
      </div>
    </>
  );
};

export default PortfolioPage; 