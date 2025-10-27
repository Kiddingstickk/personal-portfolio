import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Learn more about my background, skills, and what drives me as a developer."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://ik.imagekit.io/kiddingstick/animated_profile.png?updatedAt=1752161262523" 
                alt="Profile" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-1/3 h-1/3 bg-indigo-500 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-1/4 h-1/4 border-4 border-indigo-500 rounded-2xl -z-10"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Full-Stack Developer with a Passion for Beautiful UI
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300">
              Hi, I’m Satyam S. Pandey — a self-taught full-stack developer and machine learning enthusiast who thrives on building purposeful tech from the ground up. I’ve built global platforms solo, including Rate My Management , SBERT-based semantic models, RAG pipelines, and MiDaS-powered 3D reconstruction,. 

            </p>
            <p className="text-gray-600 dark:text-gray-300">
            I love transforming ideas into production-ready applications — from architecting robust backends to crafting intuitive user interfaces that make complex systems simple to use.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
              My journey started with the drive to solve real-world problems, and today I’m focused on crafting scalable, user-centric products that blend elegant design with intelligent architecture.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
          I’m always exploring new technologies, especially at the intersection of AI and the web. Whether it’s refining frontend UX or engineering robust backend flows, I value clear structure, high performance, and meaningful user impact.
            </p>  
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">My Approach</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600 dark:text-gray-300">Human-centered systems with intelligent feedback loops</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600 dark:text-gray-300">Modular, maintainable architecture that scales gracefully</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600 dark:text-gray-300">Performance, accessibility, and real-world impact over complexity</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600 dark:text-gray-300">Collaborative problem-solving</span>
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">My Current Focus</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600 dark:text-gray-300">Building AI-driven web products that combine semantic understanding, retrieval, and generation</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600 dark:text-gray-300">Designing efficient, maintainable backend systems with secure data flow</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600 dark:text-gray-300">Exploring the convergence of AI, UX, and automation to build next-gen digital tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;