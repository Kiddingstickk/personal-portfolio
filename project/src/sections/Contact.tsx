import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

const contactInfo = [
  { 
    icon: <Mail size={24} />, 
    title: 'Email', 
    value: 'satypanday@gmail.com',
    href: 'mailto:satypanday@gmail.com'
  },
  { 
    icon: <Phone size={24} />, 
    title: 'Phone', 
    value: '+918815002502',
    href: 'tel:+11234567890'
  },
  { 
    icon: <MapPin size={24} />, 
    title: 'Location', 
    value: 'Shahdol , MP ',
    href: null
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or want to discuss potential opportunities? I'd love to hear from you."
          align="center"
        />
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  {info.icon}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                  {info.href ? (
                    <a 
                      href={info.href} 
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;