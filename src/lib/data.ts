/**
 * ============================================================
 *  EDIT EVERYTHING HERE — single source of truth for the site
 * ============================================================
 */

export const profile = {
  name: "Prabhanjan Sharma",
  roles: ["Full Stack Developer", "Product Engineer"],
  tagline:
    "I design and ship end-to-end web products — scalable backends, polished frontends, shipped fast.",
  location: "Bangalore, India",
  email: "mprabhanjan18@gmail.com",
  phone: "+91 9172528695",
  avatar: "/images/avatar.jpg",
  socials: {
    github: "https://github.com/prab002",
    linkedin: "https://www.linkedin.com/in/prabhanjan-sharma-38a48a221/",
  },
};

export const about = {
  paragraphs: [
    "I'm a full-stack product engineer. I take products from zero to production — architecting Node.js backends, building fast React & Next.js frontends, and shipping the details that make software feel like a product.",
    "Over the last 3+ years I've led teams, wired up dozens of third-party integrations, built authentication flows, and owned the full SDLC from planning to deploy.",
    "I care about performance, clarity, and the small interactions users never have to think about.",
  ],
  stats: [
    { value: "~70%", label: "Faster APIs" },
    { value: "700%", label: "Retention via SSR" },
    { value: "3+", label: "Years shipping" },
    { value: "12+", label: "Production builds" },
  ],
};

export type Capability = {
  title: string;
  desc: string;
  icon: string; // lucide-react icon name
};

export const capabilities: Capability[] = [
  {
    title: "Full-stack engineering",
    desc: "End-to-end modules — React/Next.js frontends on Node.js & Express backends.",
    icon: "Layers",
  },
  {
    title: "System architecture",
    desc: "Scalable, maintainable systems and the right tech stack for the job.",
    icon: "Network",
  },
  {
    title: "Integrations & APIs",
    desc: "SendGrid, Zoho, Mapbox, Firebase, payment & CRM integrations.",
    icon: "Plug",
  },
  {
    title: "Auth & security",
    desc: "JWT, Magic Link, social login and custom verification flows.",
    icon: "ShieldCheck",
  },
  {
    title: "DevOps & CI/CD",
    desc: "GitHub Actions pipelines, Vercel & AWS deploys, near-zero downtime.",
    icon: "Rocket",
  },
  {
    title: "Technical leadership",
    desc: "Mentoring teams, code review, and shipping on deadline.",
    icon: "Users",
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Invennico TechnoLabs",
    role: "Software Development Tech Lead",
    location: "Vadodara, Gujarat",
    period: "Jun 2025 — Present",
    bullets: [
      "Architected scalable systems and selected optimal tech stacks aligned with client and business objectives.",
      "Led end-to-end delivery — onboarding, task allocation and timely shipping within deadlines.",
      "Optimized CI/CD pipelines and established robust code-review processes for production-ready software.",
      "Primary technical liaison for clients; mentored the team and drove agile best practices.",
    ],
    stack: ["Architecture", "CI/CD", "Leadership", "Client Relations"],
  },
  {
    company: "Invennico TechnoLabs",
    role: "Software Engineer — MERN Stack",
    location: "Vadodara, Gujarat",
    period: "Jun 2024 — Jun 2025",
    bullets: [
      "Built and deployed complete full-stack modules for live production environments.",
      "Integrated SendGrid, Mailjet, Zoho CRM, Firebase and Mapbox to extend product functionality.",
      "Implemented JWT, Magic Link and social-login authentication and custom verification systems.",
      "Shipped continuously to production while keeping performance high and downtime minimal.",
    ],
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "AWS S3", "JWT"],
  },
  {
    company: "Adrixus Tech Studio",
    role: "MERN Stack Developer — Intern",
    location: "Vadodara, Gujarat",
    period: "Dec 2023 — Jun 2024",
    bullets: [
      "Contributed to live client products including Volker Munko, Chainpals and ArtByRaff.",
      "Built reusable, responsive React components with Styled Components.",
      "Worked on Spotto — sports collection features and scheduling with the backend team.",
      "Documented UI with Storybook to streamline collaboration.",
    ],
    stack: ["React", "Styled Components", "Node.js", "Storybook"],
  },
];

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Styled Components",
    "Redux",
    "Zustand",
    "Storybook",
  ],
  backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Firebase"],
  data: ["MongoDB", "SQL", "Firestore"],
  cloud: ["AWS S3", "Vercel", "GitHub Actions", "CI/CD", "Git"],
};

// Marquee — clean wordmarks (no third-party logos to avoid incorrect brand art).
export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Redux",
  "Zustand",
  "AWS",
  "Firebase",
  "Vercel",
  "Git",
];

// Integrations bento card — name + lucide icon
export const integrations: { name: string; icon: string }[] = [
  { name: "SendGrid", icon: "Mail" },
  { name: "Zoho CRM", icon: "Briefcase" },
  { name: "Firebase", icon: "Flame" },
  { name: "Mapbox", icon: "Map" },
  { name: "Stripe", icon: "CreditCard" },
  { name: "JWT", icon: "KeyRound" },
];

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
  accent: string; // gradient for the cover
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "LaunchVerse CMS",
    blurb:
      "A content & launch platform for managing and shipping pages — headless content, fast Next.js delivery.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    accent: "linear-gradient(135deg, #6366f1, #a855f7)",
    featured: true,
  },
  {
    name: "Companion API",
    blurb:
      "Realtime AI companion backend — websocket sessions, prompt orchestration and streaming responses.",
    tags: ["Node.js", "Socket.IO", "AI"],
    accent: "linear-gradient(135deg, #22d3ee, #6366f1)",
    featured: true,
  },
  {
    name: "Delta Island",
    blurb:
      "iOS Dynamic Island / Live Activity extension — live, glanceable updates on the lock screen.",
    tags: ["iOS", "Live Activity", "Swift"],
    accent: "linear-gradient(135deg, #a855f7, #ec4899)",
  },
  {
    name: "Spotto",
    blurb:
      "Sports collection & scheduling features built with the backend team for a live product.",
    tags: ["React", "Node.js"],
    accent: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
  {
    name: "ArtByRaff",
    blurb:
      "Artist storefront & portfolio — reusable UI components and responsive interfaces.",
    tags: ["React", "Styled Components"],
    accent: "linear-gradient(135deg, #10b981, #22d3ee)",
  },
  {
    name: "Volker Munko",
    blurb:
      "Component development for a live client web app — responsive, accessible UI.",
    tags: ["React", "CSS"],
    accent: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
  },
];

export const achievements = [
  "1st Place — Codeathon Programming Competition",
  "1st Place — Science Exhibition (Junior Level)",
  "B.Tech, Computer Science (AI) — ITM SLS Baroda University",
];

export const nav = [
  { label: "craft", href: "#craft" },
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "stack", href: "#stack" },
  { label: "contact", href: "#contact" },
];
