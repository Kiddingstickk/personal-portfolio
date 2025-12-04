import { StaticImageData } from '../types';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demoLink: string;
  repoLink: string;
  category: 'web' | 'Machine Learning' | 'Ongoing';
  featured: boolean;
  isHighlighted?: boolean;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: 'rate-my-management',
    title: 'Rate My Management',
    description: 'A comprehensive platform for job seekers to rate and review their interview experiences. Features real-time feedback, company insights, and community-driven content to help candidates make informed decisions about potential employers.',
    image: 'https://ik.imagekit.io/kiddingstick/Screenshot%20(198).png?updatedAt=1757918983806',
    demoLink: 'https://ratemymanagement.com/',
    repoLink: 'https://github.com/Kiddingstickk/rmi-rmm-frontend.git',
    category: 'web',
    featured: true,
    isHighlighted: true,
    techStack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'JWT Authentication'],
  },
  {
    id: 'Sentiment Analyzer',
    title: 'Sentiment Analyzer',
    description: ' Sentiment Analyzer – Classifies text reviews for insights . Trained on Yelp dataset using Python and Scikit-Learn. Deployable via Streamlit with interactive UI for real-time testing.',
    image: 'https://ik.imagekit.io/kiddingstick/Screenshot%20(207).png?updatedAt=1761502761065',
    demoLink: 'https://sentiment-analysis-kiddingstick.streamlit.app/',
    repoLink: 'https://github.com/Kiddingstickk/sentiment_analysis',
    category: 'Machine Learning',
    featured: true,
    techStack: ['Python' , 'Scikit_learn' , 'Streamlit' , 'XGBoost' , 'Pandas' , 'Numpy' , 'Catboost' ],
  },
  {
    id: 'Employee-Attrition',
    title: 'Employee-Attrition',
    description: "Employee Attrition Predictor Predicts employee turnover using IBM HR dataset , Implemented classification models with Python & Scikit-Learn ,Deployed via Streamlit with interactive sliders for exploring predictions (basic deployment)",
    image: 'https://ik.imagekit.io/kiddingstick/Screenshot%20(206).png?updatedAt=1761501763108',
    demoLink: 'https://employee-attrition-kiddingstick.streamlit.app/',
    repoLink: 'https://github.com/Kiddingstickk/employee-prediction',
    category: 'Machine Learning',
    featured: true,
    techStack: [  "Python",
  "Pandas",
  "NumPy",
  "CatBoost",
  "Scikit-learn",
  "Matplotlib",
  "SHAP",
  "Streamlit",
  "Jupyter Notebook",
  "Pickle",
  "Git",
  "GitHub"
],
  },
  {
    id: 'Tomato Leaf Disease Identifier',
    title: 'Tomato Leaf Disease Identifier',
    description: 'Tomato Leaf Disease Identifier – Detects plant diseases from leaf images . – Built using FastAI, trained on custom dataset.– Deployed via Gradio for easy web access.',
    image: 'https://ik.imagekit.io/kiddingstick/Screenshot%20(208).png?updatedAt=1761502672075',
    demoLink: 'https://www.kaggle.com/code/kiddingstick/plant-diesease',
    repoLink: 'https://www.kaggle.com/code/kiddingstick/plant-diesease',
    category: 'Machine Learning',
    featured: true,
    techStack: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Google Maps API'],
  },
  {
    id: 'Career Companion AI',
    title: 'Career Companion AI',
    description: 'Career Companion AI: SBERT → Matches user skills to the best career roles. RAG → Helps you prep for interviews with context-aware answers. Even though it’s still running in a notebook, it’s already giving real predictions, like identifying a resume as a Java Developer with high confidence.',
    image: 'https://ik.imagekit.io/kiddingstick/half_linedin.png?updatedAt=1761503142636',
    demoLink: 'https://github.com/Kiddingstickk/Career_companion',
    repoLink: 'https://github.com/Kiddingstickk/Career_companion',
    category: 'Ongoing',
    featured: true,
    techStack: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Google Maps API'],
  },
  {
    id: 'ShopHub E-commerce Frontend',
    title: 'ShopHub – E-commerce Frontend',
    description: 'ShopHub is a basic frontend dummy for an e-commerce website. – Built with React and styled components. – Features product listings, cart functionality, and responsive design. – Deployed via Netlify for easy access.',
    image: 'https://ik.imagekit.io/kiddingstick/Screenshot%20(224).png', // replace with an actual screenshot URL if you have one
    demoLink: 'https://ecommerce-frontendclone.netlify.app/',
    repoLink: 'https://github.com/yourusername/shophub-frontend', // replace with your actual repo link
    category: 'web',
    featured: true,
    techStack: ['React', 'JavaScript', 'CSS', 'Netlify'],
},


];