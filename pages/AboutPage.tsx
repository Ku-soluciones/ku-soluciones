import React from 'react';
import SEO from '../components/SEO';
import AboutSection from '../sections/AboutSection';
import TechStackSection from '../sections/TechStackSection';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Sobre Nosotros - KU Soluciones"
        description="Conoce nuestro equipo, misión y valores. Somos expertos en desarrollo web y tecnología, comprometidos con la excelencia y la innovación."
        keywords="equipo desarrollo web, misión empresa, valores empresa, expertos tecnología, innovación digital"
        url="https://kusoluciones.com/sobre-nosotros"
      />
      <div className="pt-20">
        <AboutSection />
        <TechStackSection />
      </div>
    </>
  );
};

export default AboutPage; 