
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Card } from '../components/ui/Card';

interface Testimonial {
  id: string;
  photo: string;
  name: string;
  company: string;
  text: string;
  rating: number; // 1-5 stars
}

const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    photo: 'https://picsum.photos/seed/client1/100/100',
    name: 'Ana Pérez',
    company: 'CEO, Innovatech Solutions',
    text: 'El equipo de TechCorp superó nuestras expectativas. Su profesionalismo y conocimiento técnico son impresionantes. ¡Altamente recomendados!',
    rating: 5,
  },
  {
    id: 't2',
    photo: 'https://picsum.photos/seed/client2/100/100',
    name: 'Carlos López',
    company: 'CTO, Future Systems',
    text: 'Trabajar con TechCorp fue una experiencia transformadora. Entendieron nuestras necesidades a la perfección y entregaron un producto de calidad excepcional.',
    rating: 5,
  },
  {
    id: 't3',
    photo: 'https://picsum.photos/seed/client3/100/100',
    name: 'Laura Gómez',
    company: 'Marketing Manager, Connecta Global',
    text: 'Su enfoque en la experiencia de usuario y la atención al detalle marcaron la diferencia. Nuestro nuevo sitio web es un éxito.',
    rating: 4,
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth={i < rating ? 0 : 1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.82.61l-4.725-2.885a.562.562 0 0 0-.652 0l-4.725 2.885a.562.562 0 0 1-.82-.61l1.285-5.385a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ))}
  </div>
);


const TestimonialsSection: React.FC = () => {
  return (
    <SectionWrapper 
      id="testimonials" 
      title="Lo que Dicen Nuestros Clientes"
      subtitle="La satisfacción de nuestros clientes es nuestra mayor recompensa"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="flex overflow-x-auto space-x-6 pb-8 scrollbar-thin scrollbar-thumb-pomegranate-500 scrollbar-track-pomegranate-200 dark:scrollbar-thumb-pomegranate-400 dark:scrollbar-track-gray-700">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="flex-shrink-0 w-80 md:w-96">
            <Card className="h-full flex flex-col items-center text-center hover:shadow-xl dark:hover:shadow-pomegranate-500/30">
              <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover mb-4 shadow-md" loading="lazy" />
              <h3 className="font-montserrat text-lg font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
              <p className="font-notosans text-sm text-pomegranate-600 dark:text-pomegranate-400 mb-2">{testimonial.company}</p>
              <StarRating rating={testimonial.rating} />
              <p className="font-opensans text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>
            </Card>
          </div>
        ))}
      </div>
      <p className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
        Desliza para ver más testimonios &rarr;
      </p>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
