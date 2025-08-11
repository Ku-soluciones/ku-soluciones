import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../sections/HeroSection';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="KU Soluciones - Desarrollo Web y Tecnología Moderna"
        description="KU Soluciones es una empresa líder en desarrollo web, aplicaciones móviles y soluciones tecnológicas innovadoras. Transformamos ideas en realidad digital."
        keywords="desarrollo web, aplicaciones móviles, tecnología, software, React, TypeScript, soluciones digitales"
        url="https://www.ku-soluciones.cl"
      />
      <HeroSection />
    </>
  );
};

export default HomePage; 