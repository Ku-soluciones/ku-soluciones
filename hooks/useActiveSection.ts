import { useState, useEffect } from 'react';
import { useSectionSEO } from './useSectionSEO';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  
  // Aplicar SEO dinámico basado en la sección activa
  useSectionSEO(activeSection);

  useEffect(() => {
    const sections = [
      'hero',
      'what-we-do', 
      'services',
      'about',
      'tech-stack',
      'portfolio',
      'testimonials',
      'blog',
      'final-cta'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Sección activa cuando está en el centro de la pantalla
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sections.includes(sectionId)) {
            setActiveSection(sectionId);
          }
        }
      });
    }, observerOptions);

    // Observar todas las secciones
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return activeSection;
}; 