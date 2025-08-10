import React from 'react';
import SEO from '../components/SEO';
import ContactSection from '../sections/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contacto - KU Soluciones"
        description="Contáctanos para discutir tu proyecto. Estamos listos para ayudarte a transformar tus ideas en soluciones digitales innovadoras."
        keywords="contacto desarrollo web, consulta proyectos, cotización servicios, soporte técnico"
        url="https://kusoluciones.com/contacto"
      />
      <div className="pt-20">
        <ContactSection />
      </div>
    </>
  );
};

export default ContactPage; 