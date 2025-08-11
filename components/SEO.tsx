import React, { useEffect } from 'react';
import OrganizationStructuredData from './SEO/OrganizationStructuredData';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  showOrganizationData?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'KU Soluciones - Desarrollo Web y Tecnología Moderna',
  description = 'KU Soluciones es una empresa líder en desarrollo web, aplicaciones móviles y soluciones tecnológicas innovadoras. Ofrecemos servicios de alta calidad con tecnología de vanguardia.',
  keywords = 'desarrollo web, aplicaciones móviles, tecnología, software, React, TypeScript, soluciones digitales, programación, diseño web',
  image = 'https://www.ku-soluciones.cl/og-image.jpg',
  url = 'https://www.ku-soluciones.cl',
  type = 'website',
  author = 'KU Soluciones',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  showOrganizationData = true
}) => {
  useEffect(() => {
    // Actualizar el título de la página
    document.title = title;

    // Actualizar meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Meta tags básicos
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'es');
    updateMetaTag('geo.region', 'CL');
    updateMetaTag('geo.placename', 'Santiago, Chile');

    // Open Graph tags
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:type', type);
    updatePropertyTag('og:url', url);
    updatePropertyTag('og:image', image);
    updatePropertyTag('og:site_name', 'KU Soluciones');
    updatePropertyTag('og:locale', 'es_CL');

    // Twitter Card tags
    updatePropertyTag('twitter:title', title);
    updatePropertyTag('twitter:description', description);
    updatePropertyTag('twitter:image', image);
    updatePropertyTag('twitter:card', 'summary_large_image');
    updatePropertyTag('twitter:site', '@kusoluciones');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Datos estructurados adicionales para la página
    const generatePageStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "description": description,
        "url": url,
        "inLanguage": "es-CL",
        "isPartOf": {
          "@type": "WebSite",
          "name": "KU Soluciones",
          "url": "https://www.ku-soluciones.cl"
        },
        "about": {
          "@type": "Organization",
          "name": "KU Soluciones",
          "description": "Especialistas en automatización de procesos en Chile y soluciones digitales personalizadas para pymes chilenas."
        }
      };

      return JSON.stringify(structuredData);
    };

    // Agregar datos estructurados de la página
    let pageStructuredData = document.querySelector('script[data-structured="page"]') as HTMLScriptElement;
    if (!pageStructuredData) {
      pageStructuredData = document.createElement('script');
      pageStructuredData.type = 'application/ld+json';
      pageStructuredData.setAttribute('data-structured', 'page');
      document.head.appendChild(pageStructuredData);
    }
    pageStructuredData.innerHTML = generatePageStructuredData();

  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, section, tags]);

  return (
    <>
      {showOrganizationData && <OrganizationStructuredData />}
    </>
  );
};

export default SEO; 