import React from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HeroSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  const AnimatedShapes: React.FC = () => (
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-pomegranate-500 via-pomegranate-400 to-pomegranate-600 opacity-30 dark:opacity-20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-tl from-pomegranate-600 via-pomegranate-500 to-pomegranate-700 opacity-25 dark:opacity-15 rounded-lg blur-lg animate-pulse rotate-45" />
        <div className="absolute top-1/2 left-1/3 w-28 h-28 border-4 border-pomegranate-400 dark:border-pomegranate-300 rounded-full animate-ping opacity-40 blur-sm" />
      </div>
  );

  return (
      <section
          id="hero"
          ref={ref}
          className={`relative min-h-screen flex items-center justify-center text-center text-white 
                  bg-gradient-to-br from-pomegranate-600 via-pomegranate-700 to-pomegranate-800
                  dark:from-gray-900 dark:via-black dark:to-gray-950
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
            <Button
                variant="primary"
                className="px-10 py-4 text-lg"
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
            >
              Nuestros Servicios
            </Button>
            <Button
                variant="secondary"
                className="px-10 py-4 text-lg border-white text-white hover:bg-white hover:text-pomegranate-600 dark:border-pomegranate-400 dark:text-pomegranate-400 dark:hover:bg-pomegranate-400 dark:hover:text-gray-900"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
            >
              Contáctanos
            </Button>
          </div>
        </Container>
      </section>
  );
};

export default HeroSection;
