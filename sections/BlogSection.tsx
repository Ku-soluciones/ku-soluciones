
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
    image: 'Blog1.jpg',
    category: 'Desarrollo Web',
    title: 'Tendencias en Diseño Web para 2025',
    excerpt: 'Descubre las tendencias que marcarán el diseño web este año: minimalismo, modo oscuro, y microinteracciones.',
    link: 'https://www.latevaweb.com/diseno-web-2025?utm_source=chatgpt.com',
  },
  {
    id: 'b2',
    image: 'BlogIA.jpg',
    category: 'Inteligencia Artificial',
    title: 'La IA que Transforma los Negocios en España',
    excerpt: 'Cómo la IA está mejorando la atención al cliente y eficiencia operativa en empresas ibéricas.',
    link: 'https://cadenaser.com/aragon/2025/05/22/la-ia-podra-aumentar-en-3000-millones-de-euros-el-pib-en-aragon-segun-microsoft-radio-zaragoza/',
  },
  {
    id: 'b3',
    image: 'BLOGCS.jpg',
    category: 'Ciberseguridad',
    title: 'Consejos de Ciberseguridad para PYMEs',
    excerpt: 'Recomendaciones de seguridad esenciales para pequeñas y medianas empresas.',
    link: 'https://cneris.com/es/protege-tu-pyme-consejos-esenciales-de-ciberseguridad/',
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
