export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export const skills: Skill[] = [
  // Frontend
  {
    name: 'React',
    icon: 'react',
    category: 'frontend',
  },
  {
    name: 'Angular',
    icon: 'code2',
    category: 'frontend',
  },
  {
    name: 'Vue.js',
    icon: 'code',
    category: 'frontend',
  },
  {
    name: 'JavaScript',
    icon: 'file-code',
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    icon: 'file-type',
    category: 'frontend',
  },
  {
    name: 'HTML5',
    icon: 'file-code-2',
    category: 'frontend',
  },
  {
    name: 'CSS3',
    icon: 'palette',
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: 'wind',
    category: 'frontend',
  },
  
  // Backend
  {
    name: 'Node.js',
    icon: 'server',
    category: 'backend',
  },
  {
    name: 'Express.js',
    icon: 'server-cog',
    category: 'backend',
  },
  {
    name: 'MongoDB',
    icon: 'database',
    category: 'backend',
  },
  {
    name: 'PostgreSQL',
    icon: 'database',
    category: 'backend',
  },
  {
    name: 'Firebase',
    icon: 'flame',
    category: 'backend',
  },
  {
    name: 'GraphQL',
    icon: 'git-branch',
    category: 'backend',
  },
  {
    name: 'REST API',
    icon: 'webhook',
    category: 'backend',
  },

  // Design
  {
    name: 'Figma',
    icon: 'figma',
    category: 'design',
  },
  {
    name: 'Adobe XD',
    icon: 'square-pen',
    category: 'design',
  },
  {
    name: 'Photoshop',
    icon: 'image',
    category: 'design',
  },

  // Other
  {
    name: 'Git',
    icon: 'git-branch',
    category: 'other',
  },
  {
    name: 'Docker',
    icon: 'container',
    category: 'other',
  },
  {
    name: 'AWS',
    icon: 'cloud',
    category: 'other',
  },
];