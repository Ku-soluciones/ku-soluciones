
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Card } from '../components/ui/Card';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Automatización de Procesos en Chile: Guía Completa para Pymes',
      excerpt: 'Descubre cómo la automatización puede transformar tu negocio y aumentar la eficiencia operativa en un 40%.',
      category: 'Automatización',
      date: '15 Enero 2024',
      readTime: '5 min',
      image: '/public/BlogIA.jpg',
      tags: ['automatización', 'pymes', 'Chile', 'eficiencia']
    },
    {
      id: 2,
      title: 'Software a Medida vs Soluciones Estándar: ¿Cuál Elegir?',
      excerpt: 'Análisis comparativo de las ventajas y desventajas de cada enfoque para empresas chilenas.',
      category: 'Desarrollo',
      date: '12 Enero 2024',
      readTime: '7 min',
      image: '/public/BLOGCS.jpg',
      tags: ['software a medida', 'soluciones estándar', 'desarrollo', 'pymes']
    },
    {
      id: 3,
      title: 'Tendencias Tecnológicas 2024 para Pymes Chilenas',
      excerpt: 'Las tecnologías que están transformando el mercado y cómo las pymes pueden aprovecharlas.',
      category: 'Tendencias',
      date: '10 Enero 2024',
      readTime: '6 min',
      image: '/public/Blog1.jpg',
      tags: ['tendencias', 'tecnología', '2024', 'innovación']
    }
  ];

  return (
    <SectionWrapper
      id="blog"
      title="Blog - Tecnología y Automatización para Pymes"
      subtitle="Contenido técnico y casos de uso para empresas chilenas"
    >
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Blog', url: '#blog' }
        ]}
        currentPage="Artículos"
      />

      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Compartimos conocimiento sobre automatización de procesos en Chile, 
          desarrollo de software a medida y soluciones digitales personalizadas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <div className="text-4xl">📄</div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-pomegranate-600 dark:text-pomegranate-400">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{post.date}</span>
                <button className="text-pomegranate-600 dark:text-pomegranate-400 text-sm font-semibold hover:underline">
                  Leer más →
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Categorías populares */}
      <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Categorías Populares
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { name: 'Automatización', count: 12, icon: '⚡' },
            { name: 'Desarrollo', count: 8, icon: '💻' },
            { name: 'Tendencias', count: 6, icon: '📈' },
            { name: 'Casos de Éxito', count: 10, icon: '🏆' }
          ].map((category, index) => (
            <div key={index} className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-2">{category.icon}</div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                {category.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {category.count} artículos
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-12 bg-gradient-to-r from-pomegranate-600 to-pomegranate-700 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">
          ¿Quieres recibir contenido exclusivo?
        </h3>
        <p className="mb-6 opacity-90">
          Suscríbete a nuestro newsletter y recibe las últimas tendencias en tecnología para pymes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Tu email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button className="px-6 py-3 bg-white text-pomegranate-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
            Suscribirse
          </button>
        </div>
      </div>

      {/* Call-to-action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          ¿Necesitas ayuda con tu proyecto?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Nuestros especialistas están listos para ayudarte a implementar las mejores soluciones tecnológicas.
        </p>
        <button
          onClick={() => {
            const el = document.getElementById('final-cta');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-pomegranate-600 hover:bg-pomegranate-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          📞 Consultar con especialistas
        </button>
      </div>
    </SectionWrapper>
  );
};

export default BlogSection;
