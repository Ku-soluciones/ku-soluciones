import { useEffect } from 'react';

interface SectionSEO {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  url: string;
}

const sectionsSEO: Record<string, SectionSEO> = {
  'hero': {
    title: 'KU Soluciones - Software a Medida para Pymes en Chile | Desarrolladores Tecnológicos',
    description: 'Especialistas en automatización de procesos en Chile y soluciones digitales personalizadas. Desarrollamos software a medida para pymes que quieren crecer con tecnología.',
    keywords: 'software a medida para pymes, automatización de procesos en Chile, desarrolladores tecnológicos en Chile, soluciones digitales personalizadas',
    h1: 'Software a medida para pymes en Chile',
    url: 'https://www.ku-soluciones.cl/'
  },
  'what-we-do': {
    title: 'Qué Hacemos - Desarrolladores Tecnológicos en Chile | KU Soluciones',
    description: 'Transformamos tu negocio con soluciones digitales personalizadas. Software a medida, automatización de procesos y dashboards para pymes chilenas.',
    keywords: 'desarrolladores tecnológicos en Chile, soluciones digitales personalizadas, software a medida pymes, automatización procesos Chile',
    h1: 'Desarrolladores Tecnológicos en Chile',
    url: 'https://www.ku-soluciones.cl/#what-we-do'
  },
  'services': {
    title: 'Servicios - Soluciones Digitales Personalizadas para Pymes Chilenas | KU Soluciones',
    description: 'Ofrecemos automatización de procesos en Chile, software a medida para pymes, aplicaciones móviles y soluciones digitales personalizadas. Especialistas en tecnología para empresas.',
    keywords: 'automatización de procesos en Chile, software a medida para pymes, soluciones digitales personalizadas, desarrolladores tecnológicos en Chile, servicios tecnológicos pymes',
    h1: 'Soluciones Digitales Personalizadas para Pymes Chilenas',
    url: 'https://www.ku-soluciones.cl/#services'
  },
  'about': {
    title: 'Nosotros - Desarrolladores Tecnológicos Especializados en Pymes Chilenas | KU Soluciones',
    description: 'Somos desarrolladores tecnológicos especializados en pymes chilenas. Más de 50 empresas confían en nuestras soluciones digitales personalizadas. Conoce nuestro equipo y experiencia.',
    keywords: 'desarrolladores tecnológicos en Chile, pymes chilenas, soluciones digitales personalizadas, software a medida Chile, equipo desarrollo tecnología',
    h1: 'Somos Desarrolladores Tecnológicos Especializados en Pymes Chilenas',
    url: 'https://www.ku-soluciones.cl/#about'
  },
  'tech-stack': {
    title: 'Tecnologías - Stack Tecnológico para Desarrollo de Software | KU Soluciones',
    description: 'Utilizamos las mejores tecnologías para desarrollar software a medida: React, TypeScript, Node.js, Python y más. Stack tecnológico moderno para pymes chilenas.',
    keywords: 'stack tecnológico, React TypeScript, desarrollo software Chile, tecnologías modernas, Node.js Python, desarrollo web pymes',
    h1: 'Stack Tecnológico Moderno para Pymes',
    url: 'https://www.ku-soluciones.cl/#tech-stack'
  },
  'portfolio': {
    title: 'Portfolio - Casos de Éxito y Proyectos de Software a Medida | KU Soluciones',
    description: 'Conoce nuestros casos de éxito en desarrollo de software a medida para pymes chilenas. Proyectos de logística, retail, manufactura y servicios con resultados comprobados.',
    keywords: 'casos de éxito software a medida, proyectos pymes Chile, logística Chile, retail nacional, manufactura, portfolio desarrollo software',
    h1: 'Casos de Éxito - Proyectos de Software a Medida',
    url: 'https://www.ku-soluciones.cl/#portfolio'
  },
  'testimonials': {
    title: 'Testimonios - Lo que Dicen Nuestros Clientes | KU Soluciones',
    description: 'Testimonios de clientes satisfechos con nuestras soluciones digitales personalizadas. Pymes chilenas que han transformado sus procesos con nuestra tecnología.',
    keywords: 'testimonios clientes, pymes chilenas satisfechas, casos éxito software, opiniones clientes Chile, referencias desarrollo software',
    h1: 'Lo que Dicen Nuestros Clientes',
    url: 'https://www.ku-soluciones.cl/#testimonials'
  },
  'blog': {
    title: 'Blog - Tecnología y Automatización para Pymes Chilenas | KU Soluciones',
    description: 'Artículos sobre automatización de procesos en Chile, software a medida para pymes y soluciones digitales personalizadas. Contenido técnico y casos de uso.',
    keywords: 'blog tecnología Chile, automatización de procesos, software a medida pymes, soluciones digitales, artículos desarrollo software',
    h1: 'Blog - Tecnología y Automatización para Pymes',
    url: 'https://www.ku-soluciones.cl/#blog'
  },
  'final-cta': {
    title: 'Contacto - Desarrolladores Tecnológicos en Chile | KU Soluciones',
    description: '¿Necesitas desarrolladores tecnológicos en Chile? Contacta con nuestros especialistas en software a medida para pymes. Agenda una reunión gratuita.',
    keywords: 'contacto desarrolladores tecnológicos Chile, software a medida pymes, automatización procesos Chile, cotizar desarrollo software',
    h1: '¿Necesitas Desarrolladores Tecnológicos en Chile?',
    url: 'https://www.ku-soluciones.cl/#contact'
  }
};

export const useSectionSEO = (sectionId: string) => {
  useEffect(() => {
    const sectionData = sectionsSEO[sectionId];
    
    if (sectionData) {
      // Actualizar título de la página
      document.title = sectionData.title;

      // Actualizar meta description
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = sectionData.description;

      // Actualizar meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = sectionData.keywords;

      // Actualizar Open Graph
      const updateOGTag = (property: string, content: string) => {
        let ogTag = document.querySelector(`meta[property="og:${property}"]`) as HTMLMetaElement;
        if (!ogTag) {
          ogTag = document.createElement('meta');
          ogTag.setAttribute('property', `og:${property}`);
          document.head.appendChild(ogTag);
        }
        ogTag.content = content;
      };

      updateOGTag('title', sectionData.title);
      updateOGTag('description', sectionData.description);
      updateOGTag('url', sectionData.url);

      // Actualizar Twitter Cards
      const updateTwitterTag = (name: string, content: string) => {
        let twitterTag = document.querySelector(`meta[name="twitter:${name}"]`) as HTMLMetaElement;
        if (!twitterTag) {
          twitterTag = document.createElement('meta');
          twitterTag.name = `twitter:${name}`;
          document.head.appendChild(twitterTag);
        }
        twitterTag.content = content;
      };

      updateTwitterTag('title', sectionData.title);
      updateTwitterTag('description', sectionData.description);

      // Actualizar canonical URL
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = sectionData.url;

      // Actualizar la URL en el navegador sin recargar
      if (sectionId !== 'hero') {
        window.history.replaceState(null, '', `#${sectionId}`);
      }
    }
  }, [sectionId]);

  return sectionsSEO[sectionId] || sectionsSEO['hero'];
}; 