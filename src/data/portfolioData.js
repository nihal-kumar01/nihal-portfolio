// ─── All portfolio content lives here — edit freely ────────

export const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export const hero = {
  greeting: "Hi, I'm",
  name: 'Nihal Kumar',
  roles: ['Full Stack Developer', 'React Enthusiast', 'UI/UX Thinker', 'Problem Solver'],
  tagline: 'I craft fast, beautiful & scalable web experiences.',
  intro:
    "B.Tech CSE student passionate about building products that live at the intersection of great engineering and elegant design.",
  cta: { primary: 'View My Work', secondary: 'Download CV' },
  cvLink: '#', // replace with actual CV link
};

export const about = {
  story: [
    "I'm Nihal Kumar, a B.Tech Computer Science student obsessed with turning ideas into pixel-perfect, production-ready web applications.",
    "My journey started with pure curiosity — a single 'Hello World' that sparked an unstoppable drive to understand how the internet works. Today, I build everything from interactive UIs to REST APIs and database architectures.",
    "When I'm not coding, you'll find me exploring design systems, contributing to open source, or grinding competitive programming problems.",
  ],
  stats: [
    { value: '10+', label: 'Projects Built' },
    { value: '5+', label: 'Technologies' },
    { value: '2+', label: 'Hackathons' },
    { value: '100%', label: 'Dedication' },
  ],
};

// Skills — icon key maps to react-icons (see Skills.jsx for the icon map)
export const skillCategories = [
  {
    label: 'Frontend',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'React',       level: 88, icon: 'react' },
      { name: 'JavaScript',  level: 85, icon: 'js' },
      { name: 'TypeScript',  level: 70, icon: 'ts' },
      { name: 'Tailwind CSS',level: 90, icon: 'tailwind' },
      { name: 'HTML & CSS',  level: 95, icon: 'html' },
      { name: 'Next.js',     level: 72, icon: 'next' },
    ],
  },
  {
    label: 'Backend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Node.js',     level: 80, icon: 'node' },
      { name: 'Express.js',  level: 78, icon: 'express' },
      { name: 'MongoDB',     level: 75, icon: 'mongo' },
      { name: 'PostgreSQL',  level: 65, icon: 'postgres' },
      { name: 'REST APIs',   level: 85, icon: 'api' },
      { name: 'GraphQL',     level: 55, icon: 'graphql' },
    ],
  },
  {
    label: 'Tools & Others',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Git & GitHub',level: 88, icon: 'git' },
      { name: 'Docker',      level: 60, icon: 'docker' },
      { name: 'Figma',       level: 72, icon: 'figma' },
      { name: 'VS Code',     level: 95, icon: 'vscode' },
      { name: 'Linux',       level: 70, icon: 'linux' },
      { name: 'Firebase',    level: 68, icon: 'firebase' },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'DevCollab',
    description:
      'A real-time collaborative coding platform with live cursors, video chat, and shared terminals — built for pair-programming sessions.',
    category: 'Full Stack',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'WebRTC'],
    github: 'https://github.com/nihal-kumar01',
    demo: '#',
    featured: true,
    gradient: 'from-violet-600 to-purple-700',
  },
  {
    id: 2,
    title: 'ShopSense AI',
    description:
      'An e-commerce platform with AI-powered product recommendations, dynamic filtering, and a blazing-fast checkout flow.',
    category: 'Full Stack',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'OpenAI'],
    github: 'https://github.com/nihal-kumar01',
    demo: '#',
    featured: true,
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    id: 3,
    title: 'TaskFlow',
    description:
      'A Kanban-style project management tool with drag-and-drop, team collaboration, deadline tracking, and Slack notifications.',
    category: 'Full Stack',
    tech: ['React', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
    github: 'https://github.com/nihal-kumar01',
    demo: '#',
    featured: true,
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    id: 4,
    title: 'WeatherLens',
    description:
      'A beautiful weather dashboard with 7-day forecasts, animated weather icons, and location-aware alerts.',
    category: 'Frontend',
    tech: ['React', 'OpenWeather API', 'Recharts', 'Tailwind'],
    github: 'https://github.com/nihal-kumar01',
    demo: '#',
    featured: false,
    gradient: 'from-orange-500 to-pink-600',
  },
  {
    id: 5,
    title: 'AuthKit',
    description:
      'A plug-and-play authentication microservice with OAuth 2.0, JWT refresh tokens, and role-based access control.',
    category: 'Backend',
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker'],
    github: 'https://github.com/nihal-kumar01',
    demo: '#',
    featured: false,
    gradient: 'from-red-500 to-rose-600',
  },
  {
    id: 6,
    title: 'PortfolioGen',
    description:
      'A CLI tool that scaffolds a full portfolio website from a single JSON config — themes, sections, and deploy in minutes.',
    category: 'Tools',
    tech: ['Node.js', 'React', 'Vite', 'EJS', 'CLI'],
    github: 'https://github.com/nihal-kumar01',
    demo: '#',
    featured: false,
    gradient: 'from-fuchsia-500 to-purple-600',
  },
];

export const projectCategories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Tools'];

export const timeline = [
  {
    type: 'education',
    title: 'B.Tech — Computer Science & Engineering',
    org: 'Your University Name',
    duration: '2022 – 2026',
    description:
      'Pursuing core CS fundamentals: Data Structures, Algorithms, OS, DBMS, Networks alongside specialised electives in AI/ML and Web Technologies.',
    tags: ['CGPA: 8.x/10', "Dean's List", 'Hackathon Club'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    type: 'experience',
    title: 'Frontend Developer Intern',
    org: 'Startup / Company Name',
    duration: 'May 2024 – Aug 2024',
    description:
      'Built and shipped 3 production features in React, reduced bundle size by 30 % through lazy-loading, and introduced a reusable component library used across 4 teams.',
    tags: ['React', 'TypeScript', 'Redux', 'Figma'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    type: 'experience',
    title: 'Open Source Contributor',
    org: 'Various Projects on GitHub',
    duration: 'Jan 2024 – Present',
    description:
      'Contributed bug fixes and features to open source React and Node.js libraries. Merged 10+ PRs across different repos with 1k+ combined GitHub stars.',
    tags: ['Open Source', 'React', 'Node.js', 'Documentation'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    type: 'education',
    title: 'XII — Science (PCM + CS)',
    org: 'Your School Name',
    duration: 'Graduated 2022',
    description:
      'Scored 95%+ in Class XII. Computer Science topper. Built first web project — a school events management system.',
    tags: ['95%+', 'CS Topper', 'First Project'],
    color: 'from-orange-500 to-amber-500',
  },
];

export const contact = {
  headline: "Let's Build Something Great",
  subtext:
    "Open to internships, freelance projects, and full-time roles. If you have an interesting idea — let's talk.",
  email: 'nihalkumarofficial1@gmail.com',
  socials: [
    { label: 'GitHub',   href: 'https://github.com/nihal-kumar01',          icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nihal-krr/',   icon: 'linkedin' },
    { label: 'Twitter',  href: 'https://x.com/nihal_twt',                  icon: 'twitter' },
    { label: 'Instagram',href: 'https://www.instagram.com/nihalaryan__/',  icon: 'instagram' },
  ],
};
