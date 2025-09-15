import React from 'react';
import { skills } from '../data/skills';
import SkillIcon from '../components/ui/SkillIcon';
import SectionHeading from '../components/ui/SectionHeading';

const Skills: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const otherSkills = skills.filter(skill => skill.category === 'other');
  
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Tech Stack" 
          subtitle="The technologies, frameworks, and tools I use to bring ideas to life."
          align="center"
        />
        
        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white text-center">
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {frontendSkills.map(skill => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white text-center">
              Backend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {backendSkills.map(skill => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;