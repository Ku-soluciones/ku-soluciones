import React from 'react';
import SEO from '../components/SEO';
import BlogSection from '../sections/BlogSection';

const BlogPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Blog - KU Soluciones"
        description="Mantente actualizado con las últimas tendencias en desarrollo web, tecnología y mejores prácticas. Artículos técnicos y casos de estudio."
        keywords="blog tecnología, desarrollo web, tendencias tecnología, artículos técnicos, casos estudio"
        url="https://kusoluciones.com/blog"
      />
      <div className="pt-20">
        <BlogSection />
      </div>
    </>
  );
};

export default BlogPage; 