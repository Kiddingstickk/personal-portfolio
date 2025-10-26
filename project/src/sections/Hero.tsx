import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';
import ParticleBackground from '../components/ui/ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Particle Animation Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>
      
      <div className="absolute top-20 right-[10%] w-80 h-80 bg-indigo-300 dark:bg-indigo-700 rounded-full filter blur-3xl opacity-30 animate-float z-0" />
      <div className="absolute bottom-20 left-[10%] w-60 h-60 bg-indigo-400 dark:bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-float-reverse z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="inline-block animate-fadeUp">Satyam S. Pandey</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fadeUp animation-delay-150">
            <span className="relative">
              Crafting sleek, scalable digital experiences
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeUp animation-delay-300">
            <a href="#projects">
              <Button 
                variant="primary" 
                size="lg"
              >
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button 
                variant="outline" 
                size="lg"
              >
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;