/**
 * ============================================================
 *  EDIT EVERYTHING HERE — single source of truth for the site
 * ============================================================
 *  Sections marked with  // TODO  use sensible placeholders.
 *  Replace them with your real trading details / project links.
 */

export const profile = {
  name: "Prabhanjan Sharma",
  roles: ["Full Stack Developer", "Active Markets Trader"],
  tagline:
    "I build scalable systems — and trade the markets I build them for.",
  location: "Bangalore, India",
  email: "mprabhanjan18@gmail.com",
  phone: "+91 9172528695",
  socials: {
    github: "https://github.com/", // TODO: your GitHub URL
    linkedin: "https://www.linkedin.com/in/prabhanjan-sharma-38a48a221/",
    tradingview: "https://www.tradingview.com/", // TODO: your TradingView URL
    medium: "https://medium.com/", // TODO: your Medium URL
  },
};

export const about = {
  // Bridge story tying the two identities together.
  paragraphs: [
    "I'm a Full Stack Software Developer with a B.Tech in Computer Science (Artificial Intelligence). By day I architect scalable, high-performance backend systems and polished frontends with Next.js, Node.js and Go.",
    "Outside of shipping product, I trade the markets actively. That gives me a rare edge: I don't just write code, I build the kind of low-latency, data-driven tooling that traders actually need — backtesting engines, execution dashboards and real-time market views.",
    "This portfolio sits at that intersection: engineering rigor meets market intuition.",
  ],
  stats: [
    { label: "API performance gain", value: "~70%" },
    { label: "User retention via SSR", value: "700%" },
    { label: "Years building", value: "3+" },
    { label: "UI/UX improvement", value: "80-90%" },
  ],
};

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
    company: "Webknot",
    role: "Senior Software Developer",
    location: "Bangalore, Karnataka",
    period: "Oct 2025 — Present",
    bullets: [
      "Designed and optimized scalable backend architecture, improving API performance by ~70% with near-zero downtime.",
      "Collaborated with AI/ML teams to integrate AI-driven features into backend systems.",
      "Enhanced application UI/UX, achieving an 80–90% improvement in usability.",
      "Mentored junior developers and enforced coding standards through code reviews.",
    ],
    stack: ["Node.js", "Go", "React", "AI Integration", "System Design"],
  },
  {
    company: "Invennico TechnoLabs",
    role: "Software Developer — Team Lead",
    location: "Vadodara, Gujarat",
    period: "Apr 2025 — Sep 2025",
    bullets: [
      "Architected scalable, high-performance systems, owning the full SDLC from planning to post-launch support.",
      "Led CI/CD pipelines, automated deployments and code review processes.",
      "Ran daily stand-ups, sprint planning and retrospectives to drive agile delivery.",
    ],
    stack: ["Architecture", "CI/CD", "DevOps", "Leadership"],
  },
  {
    company: "Invennico TechnoLabs",
    role: "Junior Software Developer (MERN)",
    location: "Vadodara, Gujarat",
    period: "Jun 2024 — May 2025",
    bullets: [
      "Led full-stack development of a responsive web app on Next.js + MERN stack.",
      "Engineered SSR with Next.js to boost performance and SEO — 700% increase in user retention.",
      "Built scalable RESTful APIs and high-performance backend systems.",
    ],
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Redux", "AWS S3"],
  },
  {
    company: "Adrixus Tech Studio",
    role: "Software Developer Intern (MERN)",
    location: "Vadodara, Gujarat",
    period: "Dec 2023 — Jun 2024",
    bullets: [
      "Built reusable, responsive React components with Styled Components.",
      "Contributed to Node.js/Express/MongoDB backends and REST APIs.",
      "Documented UI with Storybook to streamline collaborative workflows.",
    ],
    stack: ["React", "Styled Components", "Node.js", "Storybook"],
  },
];

export const skills = {
  engineering: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Zustand / Redux",
    "TanStack Query",
    "Node.js",
    "Express.js",
    "Go",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Kafka / RabbitMQ",
    "Docker",
    "AWS S3",
    "Microservices",
  ],
  // TODO: tune these to your actual trading toolkit
  markets: [
    "Crypto Derivatives",
    "Options Trading",
    "Technical Analysis",
    "Risk Management",
    "Algorithmic Trading",
    "Backtesting",
    "Market Microstructure",
    "Position Sizing",
    "Quantitative Strategy",
  ],
};

// TODO: replace with your real trading profile
export const trading = {
  markets: ["Crypto", "ETH/BTC Options", "Index Derivatives"],
  style: "Discretionary + systematic, derivatives-focused",
  stats: [
    { label: "Win rate", value: "—%", note: "add yours" },
    { label: "Avg R:R", value: "—", note: "add yours" },
    { label: "Markets tracked", value: "12+" },
    { label: "Years trading", value: "—", note: "add yours" },
  ],
};

export type QuantTool = {
  name: string;
  blurb: string;
  tags: string[];
  status: "live" | "wip" | "research";
};

// TODO: replace with the trading tools / bots you've actually built
export const quantTools: QuantTool[] = [
  {
    name: "Backtesting Engine",
    blurb:
      "Event-driven backtester for derivatives strategies with slippage and fee modeling.",
    tags: ["Python", "Pandas", "Vectorized"],
    status: "wip",
  },
  {
    name: "Execution Dashboard",
    blurb:
      "Real-time positions, PnL and risk view built on a low-latency websocket feed.",
    tags: ["Next.js", "WebSocket", "Redis"],
    status: "research",
  },
  {
    name: "Signal Bot",
    blurb:
      "Automated indicator-based alerting and order routing to exchange APIs.",
    tags: ["Node.js", "Exchange API", "Kafka"],
    status: "research",
  },
];

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
};

// TODO: replace with your real projects + links
export const projects: Project[] = [
  {
    name: "Project One",
    blurb:
      "Short description of a real product you shipped. What it does and the impact.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    href: "#",
    repo: "#",
  },
  {
    name: "Project Two",
    blurb:
      "Another flagship build — highlight scale, performance or a hard problem solved.",
    tags: ["React", "Go", "Kafka"],
    href: "#",
    repo: "#",
  },
  {
    name: "Project Three",
    blurb: "A side project, open-source tool, or trading utility you're proud of.",
    tags: ["TypeScript", "Redis", "Docker"],
    href: "#",
    repo: "#",
  },
];

export const achievements = [
  "1st Place — Codeathon Programming Competition",
  "1st Place — Science Exhibition (Junior Level)",
  "Technical author on Medium (MERN, Next.js, SSR & SEO, system design)",
];

export const nav = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "trading", href: "#trading" },
  { label: "quant", href: "#quant" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];
