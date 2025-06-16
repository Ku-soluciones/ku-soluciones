
import React from 'react';
import { Container } from '../components/layout/Container';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  children, 
  className = '', 
  title, 
  subtitle,
  titleClassName = "font-montserrat text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white",
  subtitleClassName = "font-roboto text-xl md:text-2xl font-medium text-pomegranate-600 dark:text-pomegranate-400 mt-2"
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-16 md:py-24 bg-white dark:bg-gray-900 ${isVisible ? 'section-visible' : 'section-hidden'} ${className}`}
    >
      <Container>
        {title && (
          <div className="text-center mb-12 md:mb-16">
            <h2 className={titleClassName}>{title}</h2>
            {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default SectionWrapper;
