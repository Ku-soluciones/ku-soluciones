import React from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import AnimatedShapes from '../components/ui/AnimatedShapes';
import SocialIcon from '../components/ui/SocialIcon';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center text-white 
              bg-gradient-to-br from-pomegranate-600 via-pomegranate-700 to-pomegranate-800
              dark:from-gray-900 dark:via-black dark:to-gray-950
              py-20 md:py-32 overflow-hidden"
    >
      <AnimatedShapes />
      <Container className="relative z-10">
        {/* Badge de identificación */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
          <span className="text-sm font-medium">Desarrolladores Tecnológicos en Chile</span>
        </div>

        {/* Título principal optimizado para SEO */}
        <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-md">
          Software a medida
          <span className="block text-pomegranate-200">para pymes en Chile</span>
        </h1>

        {/* Subtítulo optimizado con keywords */}
        <p className="font-roboto text-lg md:text-xl lg:text-2xl font-medium mb-8 max-w-4xl mx-auto drop-shadow-sm">
          Especialistas en automatización de procesos en Chile y soluciones digitales personalizadas
          para empresas que quieren crecer con tecnología.
        </p>

        {/* Pregunta directa */}
        <p className="font-roboto text-lg md:text-xl font-medium mb-10 max-w-3xl mx-auto drop-shadow-sm text-pomegranate-200">
          ¿Necesitas una solución tecnológica a medida? Hablemos.
        </p>

        {/* Call-to-action específico */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button
              variant="primary"
              className="px-10 py-4 text-lg font-semibold border-2 border-white dark:border-gray-300"
              onClick={() => {
                const el = document.getElementById('final-cta');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
          >
            Agenda una reunión
          </Button>
          <Button
              variant="secondary"
              className="px-10 py-4 text-lg font-semibold bg-pomegranate-200 text-pomegranate-800 border-2 border-white hover:text-white transition-all duration-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-300 dark:hover:text-white flex items-center gap-2"
              onClick={() => {
                window.open('https://wa.me/56983620169', '_blank');
              }}
          >
            <SocialIcon type="whatsapp" size="sm" variant="minimal" className="text-current" />
            Escríbenos por WhatsApp
          </Button>
        </div>

        {/* Trust indicators optimizados */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm opacity-80 mb-4">Empresas chilenas que confían en nuestros desarrolladores tecnológicos:</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <span className="text-sm">Logística Chile</span>
            <span className="text-sm">Retail Nacional</span>
            <span className="text-sm">Manufactura</span>
            <span className="text-sm">Servicios</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
