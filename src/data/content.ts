export interface Project {
  title: string;
  name: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: { label: string; url: string }[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface EducationItem {
  period: string;
  place: string;
  field: string;
}

export interface Contact {
  label: string;
  value: string;
  url: string;
}

export const profile = {
  name: 'Artem Illiushchenko',
  role: 'Fullstack Developer',
  location: 'Kyiv, Ukraine',
  photo: `${import.meta.env.BASE_URL}photo.png`,
  summary:
    'Junior Fullstack Developer with hands-on experience in building scalable, responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js. Proficient in designing RESTful APIs, managing secure user authentication, and developing dynamic user interfaces. Experienced in Agile team environments, collaborating via Git/GitHub, and delivering maintainable, production-ready code.',
};

export const projects: Project[] = [
  {
    title: 'Pregnancy Tracker App',
    name: 'Leleka',
    role: 'Fullstack Developer (Team Project)',
    description:
      'An interactive web application that supports pregnant women with week-by-week fetal development tracking, personalized daily health tips and a built-in task reminder system.',
    highlights: [
      'Multipage UI with Next.js (App Router) and TypeScript, adaptive layouts with CSS Modules based on Figma mockups.',
      'Journey module with synchronized route parameters and data fetching tabs.',
      'RESTful API on Node.js and Express.js with layered architecture (Routes, Controllers, Services).',
      'MongoDB/Mongoose schemas for 40 gestational weeks, stable daily tips based on the due date.',
      'Private endpoints with authentication middleware and input validation.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Axios', 'CSS Modules'],
    links: [
      { label: 'Frontend', url: 'https://github.com/Oksana-Zalivan/pregnancy-tracker-frontend' },
      { label: 'Backend', url: 'https://github.com/Oksana-Zalivan/pregnancy-tracker-backend' },
    ],
  },
  {
    title: 'Rental Car App',
    name: 'Retail',
    role: 'Fullstack Developer',
    description:
      'A full-stack web application for a car rental company with a dynamic vehicle catalog, server-side filtering and a booking form.',
    highlights: [
      'Multipage UI with Next.js 15 (App Router), React and TypeScript.',
      'Infinite "Load More" pagination with useInfiniteQuery from TanStack Query.',
      'Dynamic vehicle pages (/catalog/[carId]) with specifications and a rental form.',
      'REST API with filtering by brand, rental price and mileage range.',
      'Pagination in MongoDB queries synchronized with active filters, form validation.',
    ],
    stack: ['Next.js 15', 'React', 'TypeScript', 'TanStack Query', 'Node.js', 'Express.js', 'MongoDB', 'Axios', 'Vercel'],
    links: [{ label: 'GitHub', url: 'https://github.com/ArtemIlliushchenko/Retail/tree/main/retail' }],
  },
];

export const hardSkills: SkillGroup[] = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript'] },
  {
    title: 'Frontend',
    items: ['React', 'Next.js (App Router)', 'HTML5', 'CSS3', 'CSS Modules', 'TanStack Query', 'Responsive Design'],
  },
  { title: 'Backend', items: ['Node.js', 'Express.js'] },
  { title: 'Databases & ORM', items: ['MongoDB', 'Mongoose'] },
  { title: 'Authentication & Security', items: ['JWT', 'Cookies', 'bcrypt'] },
  { title: 'Validation & Middleware', items: ['Joi', 'Celebrate'] },
  { title: 'Tools', items: ['REST API', 'Git', 'GitHub', 'Pino', 'Postman', 'Environment Variables'] },
];

export const softSkills: string[] = [
  'Critical Thinking',
  'Teamwork',
  'Time Management',
  'Leadership',
  'Effective Communication',
];

export const languages: string[] = ['English (Upper-Intermediate)', 'Ukrainian (Fluent)'];

export const education: EducationItem[] = [
  { period: '2023 - 2027', place: 'National University "Kyiv Aviation Institute"', field: 'Software Engineering' },
  { period: '2025 - 2026', place: 'IT School GoIT', field: 'Fullstack Developer' },
];

export const contacts: Contact[] = [
  { label: 'Phone', value: '+380 99 482 2210', url: 'tel:+380994822210' },
  { label: 'Email', value: 'artemillushchenko30@gmail.com', url: 'mailto:artemillushchenko30@gmail.com' },
  { label: 'GitHub', value: 'ArtemIlliushchenko', url: 'https://github.com/ArtemIlliushchenko' },
  { label: 'LinkedIn', value: 'artem-illiushchenko', url: 'https://www.linkedin.com/in/artem-illiushchenko/' },
  { label: 'Telegram', value: '@Slatesk', url: 'https://t.me/Slatesk' },
];
