import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbMap: { [key: string]: string } = {
    servicios: 'Servicios',
    'sobre-nosotros': 'Sobre Nosotros',
    portafolio: 'Portafolio',
    blog: 'Blog',
    contacto: 'Contacto',
    'desarrollo-web': 'Desarrollo Web',
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
  ];

  let currentPath = '';
  pathnames.forEach((name) => {
    currentPath += `/${name}`;
    const label = breadcrumbMap[name] || name.charAt(0).toUpperCase() + name.slice(1);
    breadcrumbs.push({ label, path: currentPath });
  });

  // No mostrar breadcrumbs en la página de inicio
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="bg-gray-50 dark:bg-gray-800 py-3 px-4 rounded-lg mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && (
              <svg
                className="w-4 h-4 text-gray-400 mx-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-900 dark:text-white font-medium">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="text-gray-500 dark:text-gray-400 hover:text-pomegranate-600 dark:hover:text-pomegranate-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 