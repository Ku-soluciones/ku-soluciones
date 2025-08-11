import React from 'react';

const OrganizationStructuredData: React.FC = () => {
  const generateStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "KU Soluciones",
      "url": "https://www.ku-soluciones.cl",
      "logo": "https://res.cloudinary.com/dddfx1xwt/image/upload/v1750340412/logoku_wg4bgn.webp",
      "description": "Especialistas en automatización de procesos en Chile y soluciones digitales personalizadas para pymes chilenas.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CL",
        "addressLocality": "Santiago",
        "addressRegion": "Región Metropolitana"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+56-9-1234-5678",
        "email": "contacto@ku-soluciones.cl",
        "availableLanguage": "Spanish"
      },
      "sameAs": [
        "https://www.linkedin.com/company/ku-soluciones",
        "https://www.facebook.com/kusoluciones",
        "https://www.instagram.com/kusoluciones"
      ],
      "foundingDate": "2023",
      "numberOfEmployees": "5-10",
      "serviceArea": {
        "@type": "Country",
        "name": "Chile"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios Tecnológicos",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Software a Medida para Pymes",
              "description": "Desarrollo de software personalizado para pequeñas y medianas empresas en Chile"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automatización de Procesos",
              "description": "Automatización de procesos empresariales con bots inteligentes y flujos automatizados"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Soluciones Digitales Personalizadas",
              "description": "Dashboards y analítica de datos en tiempo real para toma de decisiones"
            }
          }
        ]
      }
    };

    return JSON.stringify(structuredData);
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: generateStructuredData() }}
    />
  );
};

export default OrganizationStructuredData; 