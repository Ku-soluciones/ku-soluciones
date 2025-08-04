import React from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';

const HeroSection: React.FC = () => {
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
          className="relative min-h-screen flex items-center justify-center text-center text-white 
                  bg-gradient-to-br from-pomegranate-600 via-pomegranate-700 to-pomegranate-800
                  dark:from-gray-900 dark:via-black dark:to-gray-950
                  py-20 md:py-32 overflow-hidden"
      >
        <AnimatedShapes />
        <Container className="relative z-10">
          {/* Badge de identificación */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-sm font-medium">🚀 Soluciones Tecnológicas para Pymes</span>
          </div>

          {/* Título principal más específico */}
          <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-md">
            Digitalizamos tu
            <span className="block text-pomegranate-200">negocio</span>
          </h1>

          {/* Subtítulo más claro y específico */}
          <p className="font-roboto text-lg md:text-xl lg:text-2xl font-medium mb-8 max-w-4xl mx-auto drop-shadow-sm">
            Automatizamos procesos, creamos aplicaciones web y optimizamos operaciones para 
            <span className="text-pomegranate-200 font-semibold"> pymes chilenas</span> que quieren crecer.
          </p>

          {/* Beneficios rápidos */}
          <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold mb-1">Automatización</h3>
              <p className="text-sm opacity-90">Procesos más eficientes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🌐</div>
              <h3 className="font-semibold mb-1">Aplicaciones Web</h3>
              <p className="text-sm opacity-90">Sistemas a medida</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="font-semibold mb-1">Optimización</h3>
              <p className="text-sm opacity-90">Mayor productividad</p>
            </div>
          </div>

          {/* Call-to-action más específico */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
                variant="primary"
                className="px-10 py-4 text-lg font-semibold"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
            >
              📞 Cotizar Solución
            </Button>
            <Button
                variant="secondary"
                className="px-10 py-4 text-lg border-white text-white hover:bg-white hover:text-pomegranate-600 dark:border-pomegranate-400 dark:text-pomegranate-400 dark:hover:bg-pomegranate-400 dark:hover:text-gray-900"
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
            >
              🔍 Ver Servicios
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm opacity-80 mb-4">Empresas que confían en nosotros:</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <span className="text-sm">🏢 Logística</span>
              <span className="text-sm">🛍️ Retail</span>
              <span className="text-sm">🏭 Manufactura</span>
              <span className="text-sm">💼 Servicios</span>
            </div>
          </div>
        </Container>
      </section>
  );
};

export default HeroSection;
