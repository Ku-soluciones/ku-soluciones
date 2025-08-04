import React, { useEffect } from 'react';

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
}

const SEO: React.FC<SEOProps> = ({
  title = 'KU Soluciones - Desarrollo Web y Tecnología Moderna',
  description = 'KU Soluciones es una empresa líder en desarrollo web, aplicaciones móviles y soluciones tecnológicas innovadoras. Ofrecemos servicios de alta calidad con tecnología de vanguardia.',
  keywords = 'desarrollo web, aplicaciones móviles, tecnología, software, React, TypeScript, soluciones digitales, programación, diseño web',
  image = 'https://kusoluciones.com/og-image.jpg',
  url = 'https://kusoluciones.com',
  type = 'website',
  author = 'KU Soluciones',
  publishedTime,
  modifiedTime,
  section,
  tags = []
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

    // Open Graph tags
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:type', type);
    updatePropertyTag('og:url', url);
    updatePropertyTag('og:image', image);
    updatePropertyTag('og:site_name', 'KU Soluciones');

    // Twitter Card tags
    updatePropertyTag('twitter:title', title);
    updatePropertyTag('twitter:description', description);
    updatePropertyTag('twitter:image', image);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, section, tags]);

  return null; // Este componente no renderiza nada
};

export default SEO; 