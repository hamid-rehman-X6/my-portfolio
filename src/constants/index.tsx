/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolCategory,
  ToolsType,
} from '@/types';

/**
 * Icons
 */
import {
  Briefcase,
  Database,
  FileText,
  Globe,
  Home,
  Layers,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Settings,
  Sparkles,
  User,
} from 'lucide-react';

import { LuFacebook } from 'react-icons/lu';
import { LuInstagram } from 'react-icons/lu';
import { LuTwitter } from 'react-icons/lu';
import { LuYoutube } from 'react-icons/lu';

/**
 * Assets
 */
// Projects
import projectImg1 from '@/assets/images/auction_image_1.png';
import projectImg2 from '@/assets/images/sportinerd_image_1.png';
import projectImg3 from '@/assets/images/smart_agent.png';
import projectImg4 from '@/assets/images/blog_api_image_2.png';
import projectImg5 from '@/assets/images/fedcrim_thumbnail.png';

// Tools
import antigravity from '@/assets/images/tools/antigravity.svg';
import css from '@/assets/images/tools/css3.svg';
import cursorLight from '@/assets/images/tools/cursor_light.svg';
import docker from '@/assets/images/tools/docker.svg';
import expressjs from '@/assets/images/tools/expressjs.svg';
import figma from '@/assets/images/tools/figma.svg';
import git from '@/assets/images/tools/git.svg';
import githubLight from '@/assets/images/tools/github_light.svg';
import html5 from '@/assets/images/tools/html5.svg';
import javascript from '@/assets/images/tools/javascript.svg';
import jwt from '@/assets/images/tools/jwt.svg';
import mongodb from '@/assets/images/tools/mongodb.svg';
import motion from '@/assets/images/tools/motion.svg';
import mysqlIconLight from '@/assets/images/tools/mysql-icon-light.svg';
import nestjs from '@/assets/images/tools/nestjs.svg';
import nextjs from '@/assets/images/tools/nextjs-light.svg';
import nodejs from '@/assets/images/tools/nodejs.svg';
import openai from '@/assets/images/tools/openai.svg';
import postgresql from '@/assets/images/tools/postgresql.svg';
import postman from '@/assets/images/tools/postman.svg';
import prisma from '@/assets/images/tools/prisma.svg';
import python from '@/assets/images/tools/python.svg';
import react from '@/assets/images/tools/react.svg';
import redis from '@/assets/images/tools/redis.svg';
import redux from '@/assets/images/tools/redux.svg';
import socketioIconLight from '@/assets/images/tools/socketio.svg';
import tailwindcss from '@/assets/images/tools/tailwindcss.svg';
import typescriptIcon from '@/assets/images/tools/typescript.svg';
import vscode from '@/assets/images/tools/vscode.svg';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Reviews',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: LuFacebook,
    label: 'Facebook',
    link: '/#',
  },
  {
    icon: LuInstagram,
    label: 'Instagram',
    link: '/#',
  },
  {
    icon: LuTwitter,
    label: 'Twitter',
    link: '/#',
  },
  {
    icon: LuYoutube,
    label: 'Youtube',
    link: '/#',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: projectImg1,
    title: 'Full Stack Enterprise Auction Platform',
    tags: ['Full Stack MERN Application'],
    projectLink: '#',
  },
  {
    imgSrc: projectImg2,
    title: 'Sportinerd – The Ultimate Sports Intelligence Platform',
    tags: ['Frontend', 'Next.js', 'Tailwind CSS', 'Figma Design'],
    projectLink: 'https://sportinerd.com/',
  },
  {
    imgSrc: projectImg3,
    title: 'Smart Agent – AI-Powered Personal Assistant',
    tags: ['Langchain', 'RAG AI', 'OpenAI LLM', 'Python'],
    projectLink: '#',
  },
  {
    imgSrc: projectImg4,
    title: 'Blog API',
    tags: ['Backend', 'REST API', 'Node.js', 'Typescript'],
    projectLink: '#',
  },
  {
    imgSrc: projectImg5,
    title: 'Fedcrim.ai – AI Workflow Platform for Federal Criminal Defense',
    tags: ['Frontend', 'React.js', 'Tailwind CSS', 'Figma Design'],
    projectLink: 'https://www.fedcrim.ai/',
  },
];

const education: ExperienceType[] = [
  {
    year: '2018 – 2020',
    title: 'Fsc Pre-Engineering',
    institute: 'Punjab Group of Colleges',
    desc: 'Built a strong foundation in mathematics, physics, and analytical problem-solving.',
  },
  {
    year: '2020 – 2024',
    title: 'Bachelors of Science in Information Technology',
    institute: 'University of Education',
    desc: 'Focused on software engineering, web development, and scalable system design using modern technologies.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2022 – 2023',
    title: 'MERN Stack Trainee',
    institute: 'Knowledge Streams',
    desc: 'Built full-stack applications using MongoDB, Express, React, and Node.js while strengthening core JavaScript and API development skills.',
  },
  {
    year: '2024 – 2025',
    title: 'MERN Stack Intern',
    institute: 'Convier Solutions',
    desc: 'Worked on production-level features, REST APIs, and responsive UI components, collaborating with team workflows and version control.',
  },
  {
    year: '2025 – 2026',
    title: 'Associate Software Engineer - I',
    institute: 'Convier Solutions',
    desc: 'Developing scalable web applications, optimizing performance, and contributing to system design and maintainable code architecture.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Figma',
    imgSrc: figma,
  },
  {
    label: 'CSS',
    imgSrc: css,
  },
  {
    label: 'Tailwind CSS',
    imgSrc: tailwindcss,
  },
  {
    label: 'React',
    imgSrc: react,
  },
  {
    label: 'JavaScript',
    imgSrc: javascript,
  },
  {
    label: 'Node.js',
    imgSrc: nodejs,
  },
  {
    label: 'Express.js',
    imgSrc: expressjs,
  },
  {
    label: 'Mongodb',
    imgSrc: mongodb,
  },
  {
    label: 'TypeScript',
    imgSrc: typescriptIcon,
  },
  {
    label: 'PostgreSQL',
    imgSrc: postgresql,
  },
  {
    label: 'MySQL',
    imgSrc: mysqlIconLight,
  },
  {
    label: 'Redis',
    imgSrc: redis,
  },
  {
    label: 'Docker',
    imgSrc: docker,
  },
  {
    label: 'Git',
    imgSrc: git,
  },
  {
    label: 'GitHub',
    imgSrc: githubLight,
  },
  {
    label: 'VS Code',
    imgSrc: vscode,
  },
  {
    label: 'Next.js',
    imgSrc: nextjs,
  },
  {
    label: 'NestJS',
    imgSrc: nestjs,
  },
  {
    label: 'Prisma',
    imgSrc: prisma,
  },
  {
    label: 'Postman',
    imgSrc: postman,
  },
  {
    label: 'OpenAI',
    imgSrc: openai,
  },
  {
    label: 'Redux',
    imgSrc: redux,
  },
  {
    label: 'Socket.IO',
    imgSrc: socketioIconLight,
  },
  {
    label: 'JWT',
    imgSrc: jwt,
  },
  {
    label: 'Framer Motion',
    imgSrc: motion,
  },
  {
    label: 'Python',
    imgSrc: python,
  },
  {
    label: 'HTML5',
    imgSrc: html5,
  },
  {
    label: 'Antigravity',
    imgSrc: antigravity,
  },
  {
    label: 'Cursor',
    imgSrc: cursorLight,
  },
];

export const toolsData: ToolCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    tools: [
      {
        label: 'HTML5',
        imgSrc: html5,
      },
      {
        label: 'CSS',
        imgSrc: css,
      },
      {
        label: 'Tailwind CSS',
        imgSrc: tailwindcss,
      },
      {
        label: 'JavaScript',
        imgSrc: javascript,
      },
      {
        label: 'TypeScript',
        imgSrc: typescriptIcon,
      },
      {
        label: 'React',
        imgSrc: react,
      },
      {
        label: 'Next.js',
        imgSrc: nextjs,
      },
      {
        label: 'Redux',
        imgSrc: redux,
      },
      {
        label: 'Framer Motion',
        imgSrc: motion,
      },
    ],
  },

  {
    id: 'backend',
    label: 'Backend',
    tools: [
      {
        label: 'Node.js',
        imgSrc: nodejs,
      },
      {
        label: 'Express.js',
        imgSrc: expressjs,
      },
      {
        label: 'NestJS',
        imgSrc: nestjs,
      },
      {
        label: 'JWT',
        imgSrc: jwt,
      },
      {
        label: 'Socket.IO',
        imgSrc: socketioIconLight,
      },
    ],
  },

  {
    id: 'database',
    label: 'Database',
    tools: [
      {
        label: 'MongoDB',
        imgSrc: mongodb,
      },
      {
        label: 'PostgreSQL',
        imgSrc: postgresql,
      },
      {
        label: 'MySQL',
        imgSrc: mysqlIconLight,
      },
      {
        label: 'Redis',
        imgSrc: redis,
      },
      {
        label: 'Prisma',
        imgSrc: prisma,
      },
    ],
  },

  {
    id: 'tools',
    label: 'Tools',
    tools: [
      {
        label: 'Git',
        imgSrc: git,
      },
      {
        label: 'GitHub',
        imgSrc: githubLight,
      },
      {
        label: 'VS Code',
        imgSrc: vscode,
      },
      {
        label: 'Postman',
        imgSrc: postman,
      },
      {
        label: 'Docker',
        imgSrc: docker,
      },
      {
        label: 'Figma',
        imgSrc: figma,
      },
      {
        label: 'Cursor',
        imgSrc: cursorLight,
      },
    ],
  },

  {
    id: 'ai',
    label: 'AI',
    tools: [
      {
        label: 'OpenAI',
        imgSrc: openai,
      },
      {
        label: 'Python',
        imgSrc: python,
      },
      {
        label: 'Antigravity',
        imgSrc: antigravity,
      },
    ],
  },
];

const services: ServiceType[] = [
  {
    title: 'Frontend Development',
    desc: 'Building responsive, high-performance user interfaces using React, Next.js, and Tailwind with a focus on UX and performance.',
    projects: '',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Backend Development',
    desc: 'Designing scalable APIs and server-side logic using Node.js, Express, and modern backend architectures.',
    projects: '',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Database Design',
    desc: 'Structuring efficient and scalable databases using MongoDB and SQL with optimized queries and data modeling.',
    projects: '',
    icon: <Database className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive interfaces with a strong focus on usability, accessibility, and modern design systems.',
    projects: '',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Deployment & CI/CD',
    desc: 'Setting up automated pipelines, deployments, and cloud environments for reliable and scalable application delivery.',
    projects: '',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'AI Agents & LLM Apps',
    desc: 'Building intelligent applications using LangChain, RAG pipelines, and LLMs for chatbots and automation workflows.',
    projects: '',
    icon: <Sparkles className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '5+',
    label: 'Happy Clients',
  },
  {
    number: '03+',
    label: 'Years Of Experience',
  },
  {
    number: '10+',
    label: 'Projects Done',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
