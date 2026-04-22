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
  ToolsType,
} from '@/types';

/**
 * Icons
 */
import {
  Briefcase,
  FileText,
  Globe,
  Home,
  Layers,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Settings,
  Smartphone,
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
import figma from '@/assets/images/tools/figma.svg';
import css from '@/assets/images/tools/css3.svg';
import tailwindcss from '@/assets/images/tools/tailwindcss.svg';
import react from '@/assets/images/tools/react.svg';
import javascript from '@/assets/images/tools/javascript.svg';
import nodejs from '@/assets/images/tools/nodejs.svg';
import expressjs from '@/assets/images/tools/expressjs.svg';
import mongodb from '@/assets/images/tools/mongodb.svg';

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
];

const services: ServiceType[] = [
  {
    title: 'Brand Identity',
    desc: 'I craft modern visual identities that help brands stand out through strong typography, colors, and minimal design.',
    projects: '32 Projects',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive, and user-friendly interfaces that improve user experience and boost conversions.',
    projects: '47 Projects',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Web Development',
    desc: 'Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.',
    projects: '58 Projects',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Mobile App Design',
    desc: 'Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability.',
    projects: '21 Projects',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Product Launch Strategy',
    desc: 'Helping startups prepare their digital products for launch with design systems, marketing pages, and assets.',
    projects: '15 Projects',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
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
