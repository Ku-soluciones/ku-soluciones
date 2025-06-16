
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ReactLogoIcon, PlaceholderIcon } from '../components/ui/Icon'; // Using placeholder for others

interface Tech {
  id: string;
  name: string;
  logo: React.ReactNode;
}

// Replace PlaceholderIcon with actual SVGs or components for each technology
const techStackData: Tech[] = [
  { id: 'react', name: 'React', logo: <ReactLogoIcon className="w-16 h-16 md:w-20 md:h-20 text-gray-500 dark:text-gray-400 group-hover:text-[#61DAFB]" /> },
  { id: 'ts', name: 'TypeScript', logo: <PlaceholderIcon className="w-16 h-16 md:w-20 md:h-20 text-gray-500 dark:text-gray-400 group-hover:text-blue-500" /> },
  { id: 'node', name: 'Node.js', logo: <PlaceholderIcon className="w-16 h-16 md:w-20 md:h-20 text-gray-500 dark:text-gray-400 group-hover:text-green-500" /> },
  { id: 'tailwind', name: 'Tailwind CSS', logo: <PlaceholderIcon className="w-16 h-16 md:w-20 md:h-20 text-gray-500 dark:text-gray-400 group-hover:text-teal-500" /> },
  { id: 'aws', name: 'AWS', logo: <PlaceholderIcon className="w-16 h-16 md:w-20 md:h-20 text-gray-500 dark:text-gray-400 group-hover:text-orange-500" /> },
  { id: 'docker', name: 'Docker', logo: <PlaceholderIcon className="w-16 h-16 md:w-20 md:h-20 text-gray-500 dark:text-gray-400 group-hover:text-blue-600" /> },
];

const TechStackSection: React.FC = () => {
  return (
    <SectionWrapper 
      id="techstack" 
      title="Nuestro Stack Tecnológico"
      subtitle="Herramientas que nos permiten construir el futuro"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {techStackData.map((tech) => (
          <div key={tech.id} className="group flex flex-col items-center p-4 transition-all duration-300 hover:scale-110" title={tech.name}>
            {React.cloneElement(tech.logo as React.ReactElement, { className: "w-16 h-16 md:w-20 md:h-20 text-gray-500 dark:text-gray-400 filter grayscale group-hover:filter-none transition-all duration-300"})}
            <p className="mt-3 font-notosans text-sm text-gray-600 dark:text-gray-400 group-hover:text-pomegranate-600 dark:group-hover:text-pomegranate-400">{tech.name}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TechStackSection;
