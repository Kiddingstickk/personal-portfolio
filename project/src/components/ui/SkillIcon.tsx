import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Skill } from '../../data/skills';

// Helper function to convert kebab-case to PascalCase
const toPascalCase = (str: string): string => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

interface SkillIconProps {
  skill: Skill;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill }) => {
  const iconName = toPascalCase(skill.icon);
  // @ts-ignore - Dynamically access icons from lucide-react
  const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] || LucideIcons.Code;
  
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 bg-white dark:bg-gray-800 hover:shadow-lg hover:scale-105">
      <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
        <IconComponent size={24} />
      </div>
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
    </div>
  );
};

export default SkillIcon;