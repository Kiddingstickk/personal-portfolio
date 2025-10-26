export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'Machine Learning' | 'other';
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
    name: 'Matplotlib',
    icon: 'chart-bar-square',
    category: 'Machine Learning',
  },
  { name: 'Pandas', icon: 'table-cells', category: 'Machine Learning' },
  { name: 'NumPy', icon: 'square-root-variable', category: 'Machine Learning' },
  { name: 'Scikit-learn', icon: 'robot', category: 'Machine Learning' },
  { name: 'PyTorch', icon: 'fire', category: 'Machine Learning' },
  { name: 'TensorFlow', icon: 'brain', category: 'Machine Learning' },
  { name: 'Keras', icon: 'layer-group', category: 'Machine Learning' },
  { name: 'XGBoost', icon: 'chart-line', category: 'Machine Learning' },
  { name: 'LightGBM', icon: 'bolt', category: 'Machine Learning' },
  { name: 'OpenCV', icon: 'camera', category: 'Machine Learning' },
  { name: 'Seaborn', icon: 'palette', category: 'Machine Learning' },
  //{ name: 'Statsmodels', icon: 'calculator', category: 'Machine Learning' },
  { name: 'FastAI', icon: 'rocket', category: 'Machine Learning' },
  { name: 'Hugging Face Transformers', icon: 'comments', category: 'Machine Learning' },
  //{ name: 'spaCy', icon: 'language', category: 'Machine Learning' },
  //{ name: 'NLTK', icon: 'book-open', category: 'Machine Learning' },
  //{ name: 'DVC', icon: 'code-branch', category: 'Machine Learning' },
  { name: 'MLflow', icon: 'flask', category: 'Machine Learning' },
  //{ name: 'Optuna', icon: 'sliders', category: 'Machine Learning' },
  //{ name: 'Ray', icon: 'cloud', category: 'Machine Learning' },
  //{ name: 'ONNX', icon: 'cube', category: 'Machine Learning' },


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