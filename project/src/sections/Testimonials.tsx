import React from 'react';
import { testimonials } from '../data/testimonials';
import TestimonialCard from '../components/ui/TestimonialCard';
import SectionHeading from '../components/ui/SectionHeading';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Testimonials" 
          subtitle="What clients and colleagues have to say about working with me."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;