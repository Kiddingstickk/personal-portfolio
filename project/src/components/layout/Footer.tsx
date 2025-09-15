import React from 'react';
import { Github as GitHub, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: <GitHub size={20} />, href: 'https://github.com/Kiddingstickk' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com/' },
  { name: 'Twitter', icon: <Twitter size={20} />, href: 'https://x.com/kiddingstickk?t=HrHsGHusVDJGXIgfxcxkMQ&s=09' },
  { name: 'Email', icon: <Mail size={20} />, href: 'mailto:satypanday@gmail.com' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Satyam S.<span className="text-indigo-600">Pandey</span>
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Crafting exceptional digital experiences with a focus on user experience, performance, and scalability.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;