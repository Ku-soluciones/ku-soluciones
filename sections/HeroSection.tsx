
import React from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';


const HeroSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  // Placeholder for animated shapes
  const AnimatedShapes: React.FC = () => (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pomegranate-500/30 dark:bg-pomegranate-400/20 rounded-full animate-pulse delay-100"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pomegranate-600/20 dark:bg-pomegranate-500/10 rounded-lg animate-pulse delay-300 transform rotate-45"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-pomegranate-500/50 dark:border-pomegranate-400/40 rounded-full animate-ping opacity-50"></div>
    </div>
  );
  
  return (
    <section 
      id="hero" 
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center text-center text-white 
                  bg-gradient-to-br from-pomegranate-500 to-pomegranate-600 
                  dark:from-gray-800 dark:to-black
                  py-20 md:py-32 overflow-hidden ${isVisible ? 'section-visible' : 'section-hidden'}`}
    >
      <AnimatedShapes />
      <Container className="relative z-10">
        <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 drop-shadow-md">
          Innovación Tecnológica a tu Alcance
        </h1>
        <p className="font-roboto text-xl md:text-2xl font-medium mb-10 max-w-3xl mx-auto drop-shadow-sm">
          Transformamos ideas en soluciones digitales de vanguardia que impulsan el crecimiento de tu negocio.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button variant="primary" className="px-10 py-4 text-lg" onClick={() => { const el = document.getElementById('services'); if(el) el.scrollIntoView({behavior: 'smooth'})}}>
            Nuestros Servicios
          </Button>
          <Button variant="secondary" className="px-10 py-4 text-lg border-white text-white hover:bg-white hover:text-pomegranate-600 dark:border-pomegranate-400 dark:text-pomegranate-400 dark:hover:bg-pomegranate-400 dark:hover:text-gray-900" onClick={() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({behavior: 'smooth'})}}>
            Contáctanos
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
