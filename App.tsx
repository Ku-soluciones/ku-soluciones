
import React, { Suspense } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Chatbot } from './components/ui/Chatbot';
import { useTheme } from './hooks/useTheme';

// Lazy load sections for better performance
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
      <Chatbot />
    </div>
  );
};

export default App;
