import React from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import Button from './Button';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  isHighlighted?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isHighlighted = false }) => {
  if (isHighlighted) {
    return (
      <div className="group relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl bg-white dark:bg-gray-800 hover:scale-[1.01] mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative h-80 lg:h-96 overflow-hidden order-2 lg:order-1">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full mb-4">
                ⭐ Featured Project
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button 
                  variant="primary" 
                  size="lg" 
                  icon={<ExternalLink size={18} />}
                  fullWidth
                >
                  View Live Demo
                </Button>
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button 
                  variant="outline" 
                  size="lg" 
                  icon={<GitHub size={18} />}
                  fullWidth
                >
                  View Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl bg-white dark:bg-gray-800 hover:scale-[1.02]">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.techStack.slice(0, 3).map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-md rounded text-white"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-md rounded text-white">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>
            <div className="flex space-x-2">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-white">
                <Button 
                  variant="primary" 
                  size="sm" 
                  icon={<ExternalLink size={14} />}
                >
                  View Demo
                </Button>
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-white">
                <Button 
                  variant="outline" 
                  size="sm" 
                  icon={<GitHub size={14} />}
                  className="border-white text-white hover:bg-white/20"
                >
                  Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;