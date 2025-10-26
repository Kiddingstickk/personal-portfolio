import React, { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/ui/Button';
import { projects, Project } from '../data/projects';

type FilterCategory = 'all' | 'web' | 'Machine Learning' | 'Ongoing';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const highlightedProject = projects.find(project => project.isHighlighted);
  const regularProjects = projects.filter(project => !project.isHighlighted);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(
    regularProjects.filter(project => project.featured)
  );
  const [showAll, setShowAll] = useState(false);
  
  const handleFilterChange = (filter: FilterCategory) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setVisibleProjects(showAll ? regularProjects : regularProjects.filter(project => project.featured));
    } else {
      setVisibleProjects(
        regularProjects.filter(project => 
          project.category === filter && (showAll || project.featured) && !project.isHighlighted
        )
      );
    }
  };
  
  const toggleShowAll = () => {
    setShowAll(!showAll);
    handleFilterChange(activeFilter);
  };
  
  const filters: { label: string; value: FilterCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Web', value: 'web' },
    { label: 'MAchine Learning', value: 'Machine Learning' },
    { label: 'Ongoing', value: 'Ongoing' },
  ];
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Explore a selection of my recent work, showcasing my skills and expertise."
          align="center"
        />
        
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => handleFilterChange(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Highlighted Project */}
        {highlightedProject && (
          <div className="mb-16">
            <ProjectCard project={highlightedProject} isHighlighted={true} />
          </div>
        )}
        
        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {visibleProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {regularProjects.length > visibleProjects.length && !showAll && (
          <div className="mt-12 text-center">
            <Button 
              onClick={toggleShowAll} 
              variant="outline"
            >
              View All Projects
            </Button>
          </div>
        )}
        
        {showAll && (
          <div className="mt-12 text-center">
            <Button 
              onClick={toggleShowAll} 
              variant="outline"
            >
              Show Featured Only
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;