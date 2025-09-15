export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'Product Manager',
    company: 'TechSolutions Inc',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Working with this developer was an incredible experience. Their attention to detail and ability to translate complex requirements into elegant solutions made our project a success. The code quality was exceptional, and they consistently delivered ahead of schedule.',
  },
  {
    id: '2',
    name: 'Sarah Williams',
    role: 'CEO',
    company: 'Digital Innovators',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'I was thoroughly impressed with the level of expertise and professionalism. The developer not only met our technical requirements but also provided valuable insights that improved our product. Their communication was clear and timely throughout the project.',
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'NextGen Startups',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'An exceptional full-stack developer who can tackle any challenge. Their technical skills across both frontend and backend are remarkable, and they consistently delivered high-quality code that was well-structured and thoroughly tested. Would definitely work with them again.',
  },
];