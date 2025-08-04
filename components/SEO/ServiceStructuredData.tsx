import React from 'react';

interface ServiceStructuredDataProps {
  serviceName: string;
  description: string;
  provider: {
    name: string;
    url: string;
    address: {
      addressCountry: string;
      addressLocality: string;
    };
  };
  areaServed: string;
  serviceType: string;
  priceRange?: string;
}

const ServiceStructuredData: React.FC<ServiceStructuredDataProps> = ({
  serviceName,
  description,
  provider,
  areaServed,
  serviceType,
  priceRange = "$$"
}) => {
  const generateStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": provider.name,
        "url": provider.url,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": provider.address.addressCountry,
          "addressLocality": provider.address.addressLocality
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": areaServed
      },
      "serviceType": serviceType,
      "priceRange": priceRange,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "CLP"
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

export default ServiceStructuredData; 