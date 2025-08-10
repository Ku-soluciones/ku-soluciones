
import React, { Suspense } from 'react';
import { Header } from './components/layout/Header';
import Footer from './components/layout/Footer';
import SEO from './components/SEO';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';

const HeroSection = React.lazy(() => import('./sections/HeroSection'));
const WhatWeDoSection = React.lazy(() => import('./sections/WhatWeDoSection'));
const ServicesSection = React.lazy(() => import('./sections/ServicesSection'));
const AboutSection = React.lazy(() => import('./sections/AboutSection'));
const TechStackSection = React.lazy(() => import('./sections/TechStackSection'));
const PortfolioSection = React.lazy(() => import('./sections/PortfolioSection'));
const TestimonialsSection = React.lazy(() => import('./sections/TestimonialsSection'));
const BlogSection = React.lazy(() => import('./sections/BlogSection'));
const FinalCTASection = React.lazy(() => import('./sections/FinalCTASection'));

const LoadingFallback: React.FC = () => (
  <div className="flex justify-center items-center h-screen bg-white dark:bg-gray-900">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pomegranate-500"></div>
  </div>
);

const App: React.FC = () => {
  const { theme } = useTheme();
  const activeSection = useActiveSection();

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <SEO 
        title="KU Soluciones - Software a Medida para Pymes en Chile"
        description="Especialistas en automatización de procesos en Chile y soluciones digitales personalizadas. Desarrollamos software a medida para pymes que quieren crecer con tecnología."
        keywords="software a medida para pymes, automatización de procesos en Chile, desarrolladores tecnológicos en Chile, soluciones digitales personalizadas"
        url="https://kusoluciones.com"
        showOrganizationData={true}
      />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <HeroSection />
            <WhatWeDoSection />
            <ServicesSection />
            <AboutSection />
            <TechStackSection />
            <PortfolioSection />
            <TestimonialsSection />
            <BlogSection />
            <FinalCTASection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
