import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="absolute top-4 right-4 text-indigo-200 dark:text-indigo-800 opacity-50">
        <Quote size={40} />
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6 z-10 relative">"{testimonial.content}"</p>
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;