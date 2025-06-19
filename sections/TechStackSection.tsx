import React from 'react';
import SectionWrapper from './SectionWrapper';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiDocker
} from 'react-icons/si';

interface Tech {
  id: string;
  name: string;
  logo: React.ReactNode;
}

const techStackData: Tech[] = [
  {
    id: 'react',
    name: 'React',
    logo: <SiReact className="w-16 h-16 md:w-20 md:h-20 text-gray-500 dark:text-gray-400 group-hover:text-[#61DAFB]" />
  },
  {
    id: 'ts',
    name: 'TypeScript',
    logo: <SiTypescript className="w-16 h-16 md:w-20 md:h-20 text-gray-500 dark:text-gray-400 group-hover:text-[#3178C6]" />
  },
  {
    id: 'node',
    name: 'Node.js',
    logo: <SiNodedotjs className="w-16 h-16 md:w-20 md:h-20 text-gray-500 dark:text-gray-400 group-hover:text-[#339933]" />
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    logo: <SiTailwindcss className="w-16 h-16 md:w-20 md:h-20 text-gray-500 dark:text-gray-400 group-hover:text-[#06B6D4]" />
  },
  {
    id: 'docker',
    name: 'Docker',
    logo: <SiDocker className="w-16 h-16 md:w-20 md:h-20 text-gray-500 dark:text-gray-400 group-hover:text-[#2496ED]" />
  },
];

const TechStackSection: React.FC = () => {
  return (
      <SectionWrapper
          id="techstack"
          title="Nuestro Stack Tecnológico"
          subtitle="Herramientas que nos permiten construir el futuro"
          className="bg-gray-50 dark:bg-gray-800"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {techStackData.map((tech) => (
              <div
                  key={tech.id}
                  className="group flex flex-col items-center p-4 transition-all duration-300 hover:scale-110"
                  title={tech.name}
              >
                {tech.logo}
                <p className="mt-3 font-notosans text-sm text-gray-600 dark:text-gray-400 group-hover:text-pomegranate-600 dark:group-hover:text-pomegranate-400">
                  {tech.name}
                </p>
              </div>
          ))}
        </div>
      </SectionWrapper>
  );
};

export default TechStackSection;