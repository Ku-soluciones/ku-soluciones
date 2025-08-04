
import React, { Suspense } from 'react';
import { Header } from './components/layout/Header';
import Footer from './components/layout/Footer';
import SEO from './components/SEO';
import { useTheme } from './hooks/useTheme';

const HeroSection = React.lazy(() => import('./sections/HeroSection'));
const ServicesSection = React.lazy(() => import('./sections/ServicesSection'));
const AboutSection = React.lazy(() => import('./sections/AboutSection'));
const TechStackSection = React.lazy(() => import('./sections/TechStackSection'));
const PortfolioSection = React.lazy(() => import('./sections/PortfolioSection'));
const TestimonialsSection = React.lazy(() => import('./sections/TestimonialsSection'));
const BlogSection = React.lazy(() => import('./sections/BlogSection'));
const ContactSection = React.lazy(() => import('./sections/ContactSection'));

const LoadingFallback: React.FC = () => (
  <div className="flex justify-center items-center h-screen bg-white dark:bg-gray-900">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pomegranate-500"></div>
  </div>
);

const App: React.FC = () => {
  const { theme } = useTheme();

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
        title="KU Soluciones - Desarrollo Web y Tecnología Moderna"
        description="KU Soluciones es una empresa líder en desarrollo web, aplicaciones móviles y soluciones tecnológicas innovadoras. Transformamos ideas en realidad digital."
        keywords="desarrollo web, aplicaciones móviles, tecnología, software, React, TypeScript, soluciones digitales"
        url="https://kusoluciones.com"
      />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <TechStackSection />
            <PortfolioSection />
            <TestimonialsSection />
            <BlogSection />
            <ContactSection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
