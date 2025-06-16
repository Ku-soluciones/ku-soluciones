
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

interface Article {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  link: string;
}

const blogData: Article[] = [
  {
    id: 'b1',
    image: 'https://picsum.photos/seed/blog1/400/250',
    category: 'Desarrollo Web',
    title: 'Las 5 Tendencias Clave en Desarrollo Web para 2024',
    excerpt: 'Explora las tecnologías y enfoques que están definiendo el futuro del desarrollo web este año.',
    link: '#',
  },
  {
    id: 'b2',
    image: 'https://picsum.photos/seed/blog2/400/250',
    category: 'Inteligencia Artificial',
    title: 'Cómo la IA está Transformando los Negocios Modernos',
    excerpt: 'Un análisis profundo de las aplicaciones prácticas de la IA y su impacto en diversas industrias.',
    link: '#',
  },
  {
    id: 'b3',
    image: 'https://picsum.photos/seed/blog3/400/250',
    category: 'Ciberseguridad',
    title: 'Guía Esencial de Ciberseguridad para Pequeñas Empresas',
    excerpt: 'Consejos prácticos para proteger tu negocio de las crecientes amenazas cibernéticas.',
    link: '#',
  },
];

const BlogSection: React.FC = () => {
  return (
    <SectionWrapper id="blog" title="Nuestro Blog" subtitle="Mantente al día con las últimas noticias y tendencias tecnológicas">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((article) => (
          <Card key={article.id} className="flex flex-col hover:shadow-xl dark:hover:shadow-pomegranate-500/30 transition-all duration-300 hover:scale-105">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-t-lg mb-4" loading="lazy" />
            <span className="font-notosans text-xs font-semibold text-pomegranate-600 dark:text-pomegranate-400 uppercase tracking-wide mb-1">{article.category}</span>
            <h3 className="font-montserrat text-xl font-semibold text-gray-800 dark:text-white mb-2 flex-grow">{article.title}</h3>
            <p className="font-opensans text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{article.excerpt}</p>
            <a
              href={article.link}
              className="font-notosans text-sm font-semibold text-pomegranate-600 dark:text-pomegranate-400 hover:underline self-start"
            >
              Leer más &rarr;
            </a>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="secondary">Ver más artículos</Button>
      </div>
    </SectionWrapper>
  );
};

export default BlogSection;
