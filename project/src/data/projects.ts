import { StaticImageData } from '../types';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demoLink: string;
  repoLink: string;
  category: 'web' | 'mobile' | 'design';
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
    id: 'anime-project',
    title: 'Anime Explorer',
    description: 'A visually rich anime database with subtle animated backgrounds and parallax effects. Browse, search, and discover new anime titles with detailed information.',
    image: 'https://ik.imagekit.io/kiddingstick/Screenshot%20(167).png?updatedAt=1752162650965',
    demoLink: 'https://anime-school.netlify.app/',
    repoLink: 'https://github.com/username/anime-explorer',
    category: 'web',
    featured: true,
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GraphQL'],
  },
  {
    id: 'marketplace-app',
    title: 'Digital Marketplace',
    description: 'A clean, modern marketplace platform with advanced filtering UI, responsive product grids, and seamless checkout process.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoLink: 'https://creative-salmiakki-4347bd.netlify.app/',
    repoLink: 'https://github.com/Kiddingstickk/animaxx.git',
    category: 'web',
    featured: true,
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
  },
  {
    id: 'cafe',
    title: 'Baked in paravati',
    description: 'A travel planning app with fullscreen images, interactive map integrations, itinerary tools, and booking mockups.',
    image: 'https://ik.imagekit.io/kiddingstick/Screenshot%20(166).png?updatedAt=1752162291041',
    demoLink: 'https://bip-wheat.vercel.app/',
    repoLink: 'https://github.com/username/wanderlust',
    category: 'mobile',
    featured: true,
    techStack: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Google Maps API'],
  },
  {
    id: 'Video streaming webapp',
    title: 'VibeSpace',
    description: 'A minimalist yet elegant video streaming platform designed for directors to shocase thier raw work .',
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoLink: 'https://vibe-space.netlify.app/',
    repoLink: 'https://github.com/username/portfolio',
    category: 'web',
    featured: false,
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
];