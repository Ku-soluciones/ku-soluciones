
import React, { useEffect, useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const statsData: Stat[] = [
  { value: 10, label: 'Años de Experiencia', suffix: '+' },
  { value: 95, label: 'Clientes Satisfechos', suffix: '%' },
  { value: 200, label: 'Proyectos Completados', suffix: '+' },
];

const AnimatedNumber: React.FC<{ value: number; duration?: number; suffix?: string }> = ({ value, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver<HTMLSpanElement>({ triggerOnce: true });

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const incrementTime = (duration / end);
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};


const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="about" title="Sobre Nosotros" subtitle="Conoce nuestra historia y valores">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <h3 className="font-montserrat text-2xl font-semibold text-pomegranate-600 dark:text-pomegranate-400 mb-2">Nuestra Misión</h3>
            <p className="font-opensans text-gray-700 dark:text-gray-300 leading-relaxed">
              Empoderar a las empresas a través de soluciones tecnológicas innovadoras, personalizadas y de alta calidad que impulsen su crecimiento y eficiencia en el mundo digital.
            </p>
          </div>
          <div>
            <h3 className="font-montserrat text-2xl font-semibold text-pomegranate-600 dark:text-pomegranate-400 mb-2">Nuestra Visión</h3>
            <p className="font-opensans text-gray-700 dark:text-gray-300 leading-relaxed">
              Ser líderes reconocidos en la transformación digital, destacándonos por nuestra excelencia, compromiso con el cliente y adaptación constante a las nuevas tecnologías.
            </p>
          </div>
           <div>
            <h3 className="font-montserrat text-2xl font-semibold text-pomegranate-600 dark:text-pomegranate-400 mb-2">Valores</h3>
            <ul className="list-disc list-inside font-opensans text-gray-700 dark:text-gray-300 space-y-1">
                <li>Innovación Constante</li>
                <li>Compromiso con el Cliente</li>
                <li>Excelencia y Calidad</li>
                <li>Integridad y Transparencia</li>
                <li>Colaboración y Trabajo en Equipo</li>
            </ul>
          </div>
        </div>
        <div>
          <img 
            src="https://picsum.photos/seed/team/600/400" 
            alt="Equipo de TechCorp" 
            className="rounded-xl shadow-lg w-full h-auto object-cover" 
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {statsData.map((stat) => (
          <div key={stat.label} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="font-poppins text-4xl md:text-5xl font-bold text-pomegranate-600 dark:text-pomegranate-400 mb-2">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="font-opensans text-gray-600 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
