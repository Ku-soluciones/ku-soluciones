import React from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, currentPage }) => {
  // Generar datos estructurados para Schema.org
  const generateStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://kusoluciones.com/"
        },
        ...items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": item.name,
          "item": `https://kusoluciones.com${item.url}`
        })),
        {
          "@type": "ListItem",
          "position": items.length + 2,
          "name": currentPage,
          "item": `https://kusoluciones.com${items[items.length - 1]?.url || '/'}`
        }
      ]
    };

    return JSON.stringify(structuredData);
  };

  return (
    <>
      {/* Datos estructurados Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateStructuredData() }}
      />
      
      {/* Breadcrumbs visuales */}
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <li>
            <a 
              href="/" 
              className="hover:text-pomegranate-600 dark:hover:text-pomegranate-400 transition-colors duration-200"
            >
              Inicio
            </a>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <a 
                href={item.url}
                className="hover:text-pomegranate-600 dark:hover:text-pomegranate-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
          
          <li className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800 dark:text-gray-200 font-medium">
              {currentPage}
            </span>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs; 