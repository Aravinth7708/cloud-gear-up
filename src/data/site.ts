import {
  Bot,
  Boxes,
  AppWindow,
  CloudCog,
  CodeXml,
  Database,
  Layers3,
  Network,
  PackageSearch,
  Shirt,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "ARTECHZO",
  domain: "https://artechzo.tech",
  email: "founder@artechzo.tech",
  tagline: "Engineering Software. Automating Intelligence. Scaling the Cloud.",
  shortTagline: "From ambitious ideas to production-ready technology.",
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const homeHeadlinePhrases = [
  "digital experiences.",
  "intelligent workflows.",
  "technology that moves business forward.",
] as const;

export const deliveryFocus = [
  {
    number: "01",
    title: "A clearer product foundation",
    text: "We translate your requirements into user journeys, application architecture, and connected data flows. The starting point is your business problem—not a predetermined technology stack.",
    items: ["Requirements and scope", "Application and data architecture", "Integration planning"],
  },
  {
    number: "02",
    title: "Software that fits your workflow",
    text: "From customer-facing applications to internal tools and AI-assisted processes, we connect the interfaces, systems, and information your team depends on.",
    items: ["Full-stack implementation", "API and system integrations", "Workflow automation"],
  },
  {
    number: "03",
    title: "A considered path to deployment",
    text: "Testing, deployment configuration, and technical monitoring are part of the delivery conversation. You own the cloud accounts and hardware; we handle the engineering and configuration.",
    items: [
      "Functional and integration testing",
      "Client-owned infrastructure",
      "Monitoring and ongoing improvement",
    ],
  },
] as const;

export const homeFaqs = [
  {
    question: "Can you help with an existing application?",
    answer:
      "Yes. Our software engineering capabilities include application maintenance, integrations, and optimization. We begin by understanding your existing system, its constraints, and the improvements you need.",
  },
  {
    question: "Where does AI automation fit into a project?",
    answer:
      "We focus on repeatable information and workflow tasks, such as document processing, authorized web data extraction, and connecting business applications. The workflow and access requirements determine where an AI-assisted approach is appropriate.",
  },
  { question: "Do you supply servers or cloud accounts?", answer: cloudOwnershipAnswer() },
  {
    question: "What should we share to start a conversation?",
    answer:
      "Tell us about the problem, who will use the solution, your current tools, and any timing or budget constraints. If you already have requirements or an existing application, include that context in your project description.",
  },
] as const;

function cloudOwnershipAnswer() {
  return "No. Clients purchase and own their cloud subscriptions, provider accounts, servers, and physical hardware. ARTECHZO handles architecture, configuration, deployment, automation, and technical management. Private or on-premises work starts once suitable hardware and access are supplied.";
}

export type Service = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "software-engineering",
    title: "Software Engineering & Full-Stack Development",
    shortTitle: "Software Engineering",
    description:
      "From intuitive interfaces to robust backend systems, we architect and build high-performance software tailored to real business requirements.",
    icon: CodeXml,
    capabilities: [
      "Full-stack web development",
      "Frontend and backend engineering",
      "API design and integrations",
      "SaaS and product engineering",
      "Database architecture",
      "Application maintenance and optimization",
    ],
  },
  {
    number: "02",
    slug: "ai-automation",
    title: "AI Automation & Intelligent Agents",
    shortTitle: "AI Automation",
    description:
      "We build intelligent systems that streamline workflows, process information, and connect applications with modern AI capabilities.",
    icon: Bot,
    capabilities: [
      "AI-powered workflow automation",
      "Agentic AI development",
      "AI browser automation",
      "Document and data processing",
      "LLM application integration",
      "Business process automation",
    ],
  },
  {
    number: "03",
    slug: "cloud-deployment",
    title: "Cloud Infrastructure & Deployment",
    shortTitle: "Cloud & Deployment",
    description:
      "We design, deploy, and manage scalable application infrastructure across client-owned cloud platforms and private environments.",
    icon: CloudCog,
    capabilities: [
      "AWS, Azure, and Google Cloud deployment",
      "Private cloud infrastructure",
      "Docker containerization",
      "CI/CD and deployment automation",
      "Server and reverse proxy configuration",
      "Infrastructure monitoring and optimization",
    ],
  },
];

export const cloudOwnershipNote =
  "ARTECHZO provides architecture, deployment, configuration, automation, monitoring, and technical management. Cloud subscriptions, provider accounts, servers, and physical hardware are purchased and owned by the client. For private or on-premises deployments, implementation begins after the client supplies suitable hardware and access.";

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  functionalAreas: string[];
  useCases: string[];
  icon: LucideIcon;
  flow: string[];
};

export const products: Product[] = [
  {
    slug: "ICMBNT-conference-2026",
    name: "ICMBNT Conference 2026",
    category: "Conference Management Platform",
    description:
      "A purpose-built digital platform supporting conference-related workflows, information management, and structured digital experiences.",
    problem:
      "Conference information and internal workflows can become fragmented across disconnected pages, files, and communication channels.",
    solution:
      "A coherent digital environment designed to organize event information and support clearly structured conference management experiences.",
    functionalAreas: [
      "Event information",
      "Conference overview",
      "Structured management panels",
      "Content organization",
    ],
    useCases: [
      "Conference information hubs",
      "Event operations teams",
      "Organized attendee information",
    ],
    icon: AppWindow,
    flow: ["Event data", "Content layer", "Conference interface", "Managed information"],
  },
  {
    slug: "ar-tech-industries",
    name: "AR Tech Industries",
    category: "Textile & Garment Management Software",
    description:
      "A specialized software solution designed to support garment and textile operations, inventory organization, and internal workflows.",
    problem:
      "Garment businesses need clear visibility across products, categories, inventory, and day-to-day operational information.",
    solution:
      "A focused management environment that brings clothing inventory and operational workflows into one structured interface.",
    functionalAreas: [
      "Clothing inventory",
      "Product categorization",
      "Stock organization",
      "Operational dashboards",
    ],
    useCases: ["Garment inventory teams", "Textile operations", "Internal product organization"],
    icon: Shirt,
    flow: ["Product records", "Categories", "Inventory view", "Operational insight"],
  },
  {
    slug: "ai-data-extraction-engine",
    name: "AI Data Extraction Agentic Browser Engine",
    category: "Agentic AI & Web Data Automation",
    description:
      "An AI-driven browser automation engine designed to navigate educational websites, extract relevant information, and organize it into usable datasets.",
    problem:
      "Useful public information is often spread across many institution websites in inconsistent formats that are difficult to process repeatedly.",
    solution:
      "An agentic workflow that navigates authorized sources, extracts relevant fields, structures records, and organizes repeatable datasets.",
    functionalAreas: [
      "Automated navigation",
      "Authorized public data extraction",
      "Structured processing",
      "Repeatable workflows",
    ],
    useCases: [
      "Education research",
      "Public information discovery",
      "Structured dataset preparation",
    ],
    icon: PackageSearch,
    flow: ["Website sources", "Browser agent", "Data extraction", "Structured records", "Database"],
  },
];

export const principles = [
  {
    title: "Engineering First",
    text: "Maintainable architecture, technical clarity, and reliable implementation.",
    icon: Layers3,
  },
  {
    title: "Built Around Your Business",
    text: "Solutions shaped around real operational needs, not generic templates.",
    icon: Boxes,
  },
  {
    title: "Development to Deployment",
    text: "Application engineering, intelligent automation, and infrastructure delivery connected.",
    icon: Workflow,
  },
  {
    title: "Designed to Scale",
    text: "Decisions made for reliability, extensibility, and long-term evolution.",
    icon: Network,
  },
];

export const processSteps = [
  ["01", "Discover", "Understand goals, requirements, constraints, and technical challenges."],
  ["02", "Architect", "Define journeys, data models, integrations, and infrastructure strategy."],
  ["03", "Engineer", "Build modular, maintainable software through iterative implementation."],
  ["04", "Validate", "Test functionality, integrations, security, and performance."],
  ["05", "Deploy & Evolve", "Deploy, monitor technical health, and support ongoing improvement."],
] as const;

export const technologyGroups = [
  { label: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"], icon: CodeXml },
  { label: "Backend", items: ["Node.js", "Go", "Python", "REST APIs"], icon: Layers3 },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Redis"], icon: Database },
  {
    label: "AI & Automation",
    items: ["LLM integrations", "AI agents", "Browser automation", "Data extraction"],
    icon: Sparkles,
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Linux", "CI/CD"],
    icon: CloudCog,
  },
];

export const founders = [
  {
    initials: "RB",
    name: "Ramji B",
    role: "Co-Founder & Full-Stack Developer",
    description:
      "Focused on modern web applications, dependable backend systems, and efficient software solutions.",
    expertise: [
      "Full-stack development",
      "Frontend engineering",
      "Backend engineering",
      "Application development",
    ],
    phone: "+91 63836 67872",
    phoneHref: "tel:+916383667872",
  },
  {
    initials: "AR",
    name: "Aravind Rajan K",
    role: "Co-Founder, Full-Stack Developer & AI Engineer",
    description:
      "Focused on scalable software, AI-powered automation, and intelligent digital solutions.",
    expertise: [
      "Full-stack engineering",
      "AI automation",
      "Agentic systems",
      "Backend architecture",
      "Product development",
    ],
    phone: "+91 79040 40739",
    phoneHref: "tel:+917904040739",
  },
];
