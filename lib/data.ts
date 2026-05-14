export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    slug: "ai-saas-platform",
    title: "AI SaaS Platform",
    description:
      "A full-stack AI-powered SaaS platform with real-time collaboration, subscription billing, and a custom LLM integration for content generation.",
    longDescription:
      "Built from the ground up, this platform enables teams to collaborate on AI-generated content in real time. Features include a rich text editor with AI suggestions, team workspaces, Stripe-powered subscription tiers, and a custom fine-tuned model for domain-specific outputs. The backend is a Node.js microservices architecture deployed on AWS ECS with auto-scaling.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Stripe", "PostgreSQL", "Redis"],
    image: "https://cdn.shopify.com/s/files/1/0817/7988/4088/articles/6DaWtQPc3lNh5d7l5wAi97.png?v=1712946186",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "ecommerce-storefront",
    title: "E-Commerce Storefront",
    description:
      "A high-performance e-commerce storefront with server-side rendering, dynamic product filtering, cart management, and Stripe checkout integration.",
    longDescription:
      "This storefront was built to handle thousands of concurrent users with sub-100ms page loads. It features a headless CMS for product management, advanced filtering and search powered by Algolia, a persistent cart with Redis, and a seamless Stripe checkout flow with webhook handling for order fulfillment.",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Algolia", "Sanity CMS"],
    image: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/media/dashboard-focus/my-work-focus.png?view=azure-devops",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "devops-dashboard",
    title: "DevOps Monitoring Dashboard",
    description:
      "A real-time infrastructure monitoring dashboard with live metrics, alerting, log aggregation, and deployment pipeline visualization.",
    longDescription:
      "Designed for engineering teams managing complex cloud infrastructure, this dashboard aggregates metrics from AWS CloudWatch, Datadog, and custom Prometheus exporters. It features real-time WebSocket updates, configurable alert thresholds, a log search interface, and a visual deployment pipeline tracker integrated with GitHub Actions.",
    tags: ["React", "Node.js", "WebSockets", "Prometheus", "Docker", "AWS"],
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/16896/p1-fitnessapp-hh0825-gi1454820603.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "mobile-fitness-app",
    title: "Mobile Fitness Tracker",
    description:
      "A cross-platform fitness tracking app with workout logging, progress analytics, social challenges, and AI-powered workout recommendations.",
    longDescription:
      "Built with React Native and Expo, this fitness app helps users track workouts, monitor progress over time, and stay motivated through social challenges. The AI recommendation engine analyzes past performance to suggest personalized workout plans. It integrates with Apple Health and Google Fit for seamless data sync.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "TensorFlow.js"],
    image: "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr1piz8mg54n0lzxzix7x.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    slug: "open-source-ui-library",
    title: "Open Source UI Library",
    description:
      "A comprehensive React component library with 60+ accessible, themeable components, full TypeScript support, and Storybook documentation.",
    longDescription:
      "This open-source library provides a complete set of production-ready React components built with accessibility (WCAG 2.1 AA) as a first-class concern. Every component is fully typed, supports dark/light themes via CSS variables, and is documented with interactive Storybook stories. The library has 2,000+ GitHub stars and is used by 500+ projects.",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "CSS Variables"],
    image: "https://www.addevice.io/storage/uploads/blog_post/meta_image/638dbd5a01b71_how%20to%20create%20an%20nft%20marketplace.png",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    slug: "blockchain-nft-marketplace",
    title: "NFT Marketplace",
    description:
      "A decentralized NFT marketplace on Ethereum with minting, auctions, royalty enforcement, and a gas-optimized smart contract architecture.",
    longDescription:
      "This marketplace enables creators to mint, list, and auction NFTs with on-chain royalty enforcement using EIP-2981. The smart contracts are written in Solidity and optimized for minimal gas usage. The frontend uses ethers.js for wallet integration (MetaMask, WalletConnect) and IPFS for decentralized asset storage.",
    tags: ["Solidity", "ethers.js", "Next.js", "IPFS", "Hardhat", "OpenZeppelin"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1280px-React_Logo_SVG.svg.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "⚛️", level: 5 },
      { name: "Next.js", icon: "▲", level: 5 },
      { name: "TypeScript", icon: "🔷", level: 5 },
      { name: "Tailwind CSS", icon: "🎨", level: 5 },
      { name: "Framer Motion", icon: "🎬", level: 4 },
      { name: "React Native", icon: "📱", level: 4 },
      { name: "GraphQL", icon: "◈", level: 4 },
      { name: "Vue.js", icon: "💚", level: 3 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢", level: 5 },
      { name: "PostgreSQL", icon: "🐘", level: 5 },
      { name: "Redis", icon: "🔴", level: 4 },
      { name: "Prisma", icon: "◭", level: 5 },
      { name: "REST APIs", icon: "🔗", level: 5 },
      { name: "tRPC", icon: "🔌", level: 4 },
      { name: "Python", icon: "🐍", level: 3 },
      { name: "Rust", icon: "🦀", level: 2 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "🐳", level: 4 },
      { name: "AWS", icon: "☁️", level: 4 },
      { name: "Vercel", icon: "▲", level: 5 },
      { name: "GitHub Actions", icon: "⚙️", level: 4 },
      { name: "Terraform", icon: "🏗️", level: 3 },
      { name: "Kubernetes", icon: "☸️", level: 3 },
      { name: "Figma", icon: "🎭", level: 4 },
      { name: "Git", icon: "🌿", level: 5 },
    ],
  },
];

export const personalInfo = {
  name: "Alex Morgan",
  title: "Full-Stack Engineer & UI/UX Enthusiast",
  tagline: "I build fast, beautiful, and scalable web experiences.",
  bio: "I'm a full-stack engineer with 6+ years of experience crafting high-performance web applications. I specialize in React/Next.js on the frontend and Node.js on the backend, with a passion for clean code, great developer experience, and pixel-perfect UIs. When I'm not shipping features, I'm contributing to open source or writing about web development.",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
  email: "alex@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  yearsExperience: 6,
  projectsCompleted: 40,
  openSourceContributions: 120,
};
