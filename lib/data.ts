export const siteConfig = {
  name: "Ahmed Hamdi",
  title: "Full Stack, MERN Stack & Frontend Developer",
  subtitle:
    "Building modern, scalable web applications with React, Next.js, TypeScript, Node.js, and MongoDB. From responsive interfaces to secure APIs and complete full-stack solutions.",
  email: "ahmed255hamdi@gmail.com",
  phone: "+20 1066543802",
  location: "Cairo, Egypt",
  github: "https://github.com/Ahmed-hamdi22",
  linkedin: "https://linkedin.com/in/ahmed-hamdi-86ab2b23a",
  about:
    "I'm Ahmed Hamdi, a Full Stack Developer specializing in the MERN stack, React, Next.js, and TypeScript.\n\nI've worked on freelance and team-based projects, building e-commerce platforms, SaaS applications, admin dashboards, and REST APIs.\n\nI focus on writing maintainable code, solving real-world problems, and delivering reliable, user-friendly web applications.",
};

export const skills = {
  Frontend: {
    color: "#38BDF8",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML",
      "CSS",
      "Sass CSS",
      "Tailwind CSS",
      "shadcn/ui",
      "MUI",
      "Bootstrap",
      "jQuery",
      "React Query (TanStack Query)",
      "Zustand",
      "Context API",
      "Redux",
      "React Hook Form",
      "Zod",
      "Formik",
      "Yup",
      "next-intl",
      "NextAuth",
    ],
  },
  "Backend & APIs": {
    color: "#34D399",
    tags: ["Node.js", "Express.js", "Nest.js", "REST APIs"],
  },
  Database: {
    color: "#A78BFA",
    tags: ["MongoDB", "PostgreSQL"],
  },
  "Tools & Workflow": {
    color: "#818CF8",
    tags: [
      "Git",
      "GitHub",
      "Jira",
      "Scrum",
      "Agile",
      "CI/CD",
      "Docker",
      "Figma",
    ],
  },
  Languages: { color: "#38BDF8", tags: ["C++"] },
};

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "Jan 2025 – Present",
    location: "Remote",
    description:
      "Developing full-stack applications for clients, including e-commerce platforms, project management systems, secure APIs, and admin dashboards.",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    role: "Full Stack Developer",
    company: "SooqKasem (Freelance Project)",
    period: "Jul – Aug 2026",
    location: "Remote",
    description: `Built an end-to-end grocery e-commerce platform with cart synchronization, loyalty rewards, inventory management, and role-based administration.

Dual-Mode Cart Architecture: Built an offline-first guest cart using Zustand, automatically syncing with MongoDB on user authentication.
Customer Loyalty & Trust: Implemented verified-purchase reviews and an automated points & rewards engine with cancellation rollbacks.
Order Automation: Designed a WhatsApp checkout pipeline with structured payloads and MongoDB bulk inventory updates.
Business Intelligence: Developed a role-based admin dashboard with real-time sales KPIs and revenue tracking using Recharts.`,

    tags: [
      "React 19",
      "Vite",
      "TanStack Query",
      "Zustand",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "IAU Project (Freelance Engagement)",
    period: "Mar – Aug 2026",
    location: "Remote",
    description: `Developed a multi-tenant SaaS platform for departmental project tracking, collaboration, access control, and analytics.

Multi-Tenant Architecture & RBAC: Enforced strict workspace tenant isolation with a two-tier role hierarchy (System Manager platform oversight vs. Workspace Owner/Admin/Member).
Real-Time Collaboration Engine: Implemented bi-directional task synchronization and targeted notification streams via JWT-authenticated Socket.io channels.
Optimistic Multi-View Task Suite: Engineered interactive drag-and-drop Kanban (@dnd-kit) with TanStack Query optimistic rollbacks, alongside 42-day calendar matrices and horizontal timelines.
Performance Analytics & Resilient Auth: Designed timezone-aware MongoDB aggregation pipelines ($facet, $dateTrunc) for project velocity metrics, backed by silent JWT refresh token rotation.`,
    tags: [
      "React 19",
      "TypeScript",
      "Socket.io",
      "Node.js",
      "Express 5",
      "MongoDB",
      "TanStack Query",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Elevate Tech",
    period: "Nov 2024 – Jun 2025",
    location: "Cairo, Egypt",
    description:
      "Developed responsive applications using React, Next.js, and TypeScript, integrating authentication, API workflows, and form validation.",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "NextAuth",
      "Tailwind CSS",
      "Zod",
    ],
  },
];

export const certifications = [
  {
    title: "Frontend Development Diploma",
    provider: "Route Academy",
    period: "Dec 2023 – Jun 2024",
    location: "Cairo, Egypt",
    description:
      "Intensive frontend development diploma covering modern frontend engineering, component architecture, state management, authentication, form validation, and responsive UI implementation.",
    topics: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "Zod",
      "React Hook Form",
      "Agile Collaboration",
    ],
  },
  {
    title: "Full Stack Trainee",
    provider: "Digilians",
    period: "Jan – Jun 2026",
    location: "Cairo, Egypt",
    description:
      "Intensive full stack development track focused on backend API development, MongoDB database modeling, Express.js architecture, and React ecosystem tools through project-based learning.",
    topics: ["Node.js", "Express.js", "MongoDB", "React.js", "REST APIs"],
  },
  {
    title: "Node.js, Nest.js, PostgreSQL, GraphQL, and Security",
    provider: "Udemy",
    period: "Jan 2025",
    location: "Online",
    description:
      "Comprehensive backend course covering advanced Node.js architecture, NestJS framework, PostgreSQL database design, GraphQL APIs, and web application security.",
    topics: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "GraphQL",
      "Security",
      "REST APIs",
    ],
  },
];

export type ProjectColor = "blue" | "green" | "purple" | "orange";

export interface ProjectItem {
  title: string;
  summary: string;
  description: string;
  tags: string[];
  highlightTags?: string[];
  github?: string;
  demo?: string;
  accent: string;
  color: ProjectColor;
  type: string;
  images: string[];
}

export const projects: ProjectItem[] = [
  {
    title: "SooqKasem —  E-Commerce Platform",
    summary:
      "Full-stack grocery e-commerce platform featuring guest-to-account cart synchronization, loyalty rewards, WhatsApp ordering, inventory management, and a role-based admin dashboard.",
    description: `A full-stack Arabic grocery e-commerce platform built end-to-end with a focus on real-world business workflows and seamless UX:

Dual-Mode Cart Architecture: Built an offline-first guest cart using Zustand, automatically syncing with MongoDB on user authentication.
Customer Loyalty & Trust: Implemented verified-purchase reviews and an automated points & rewards engine with cancellation rollbacks.
Order Automation: Designed a WhatsApp checkout pipeline with structured payloads and MongoDB bulk inventory updates.
Business Intelligence: Developed a role-based admin dashboard with real-time sales KPIs and revenue tracking using Recharts.`,
    tags: [
      "React 19",
      "Vite",
      "TanStack Query",
      "Zustand",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    highlightTags: ["React", "Node.js", "MongoDB", "Zustand"],
    demo: "https://sooqkasem.com/",
    accent: "#34D399",
    color: "green",
    type: "Full Stack Project",
    images: [
      "/images/sooqkasem-2.png",
      "/images/sooqkasem-3.png",
      "/images/sooqkasem-1.png",
    ],
  },
  {
    title: "Project Tracker & Team Governance Platform",
    summary:
      "Multi-tenant SaaS project management platform featuring secure role-based access, real-time collaboration, Kanban boards, timelines, task management, and advanced project analytics.",
    description: `A production-grade, multi-tenant SaaS platform built for Imam Abdulrahman Bin Faisal University (IAU) to unify departmental project tracking and governance:

Multi-Tenant Architecture & RBAC: Enforced strict workspace tenant isolation with a two-tier role hierarchy (System Manager platform oversight vs. Workspace Owner/Admin/Member).
Real-Time Collaboration Engine: Implemented bi-directional task synchronization and targeted notification streams via JWT-authenticated Socket.io channels.
Optimistic Multi-View Task Suite: Engineered interactive drag-and-drop Kanban (@dnd-kit) with TanStack Query optimistic rollbacks, alongside 42-day calendar matrices and horizontal timelines.
Performance Analytics & Resilient Auth: Designed timezone-aware MongoDB aggregation pipelines ($facet, $dateTrunc) for project velocity metrics, backed by silent JWT refresh token rotation.`,
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Socket.io",
    ],
    highlightTags: ["React", "Node.js", "MongoDB", "Socket.io"],
    demo: "https://projectly-mauve.vercel.app/login",
    accent: "#A78BFA",
    color: "purple",
    type: "Full Stack Project",
    images: [
      "/images/projectly-1.jpg",
      "/images/projectly-2.jpg",
      "/images/projectly-3.jpg",
    ],
  },
  {
    title: "Sanda — Recruitment & Job Management Platform",
    summary:
      "Full-stack recruitment platform connecting employers and workers, featuring job management, applications, role-based access, wallet workflows, real-time notifications, and QR-code attendance.",
    description:
      "Full-stack recruitment platform connecting employers and workers, featuring job management, applications, role-based access, wallet workflows, real-time notifications, and QR-code attendance.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Socket.io",
      "REST APIs",
    ],
    highlightTags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Ahmed-hamdi22/sanda-front",
    demo: "https://sanda-ten.vercel.app/",
    accent: "#38BDF8",
    color: "blue",
    type: "Full Stack Project",
    images: [
      "/images/sanda-1.png",
      "/images/sanda-2.png",
      "/images/sanda-3.png",
    ],
  },
  {
    title: "Flower Shop E-Commerce & Admin Dashboard",
    summary:
      "Developed a multilingual e-commerce storefront and admin dashboard using Next.js and TypeScript, integrating authentication, Stripe checkout, product management, and sales analytics.",
    description:
      "Developed a multilingual e-commerce storefront and admin dashboard using Next.js and TypeScript, integrating authentication, Stripe checkout, product management, and sales analytics.",
    tags: [
      "Next.js 14",
      "TypeScript",
      "Stripe",
      "TanStack Query",
      "Shadcn/UI",
      "Zod",
      "next-intl",
    ],
    github: "https://github.com/Ahmed-hamdi22/e-commerce-flower-shop",
    demo: "https://e-commerce-flower-shop-ulqj.vercel.app/en",
    accent: "#38BDF8",
    color: "blue",
    type: "Frontend Project",
    images: [
      "/images/flower-shop-1.png",
      "/images/flower-shop-2.png",
      "/images/flower-shop-3.png",
    ],
  },
  {
    title: "Super Fitness Web App",
    summary:
      "Fitness experience for discovering workout plans, healthy recipes, and structured training sessions.",
    description:
      "Multilingual fitness platform allowing users to explore structured workout routines by difficulty level, browse healthy recipes, and track training sessions.",
    tags: [
      "React",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Shadcn/UI",
      "use-intl",
    ],
    github: "https://github.com/Ahmed-hamdi22/super-fitness",
    demo: "https://super-fitness-m5vn-4jgm1sdgq-ahmedhamdi22s-projects.vercel.app/",
    accent: "#34D399",
    color: "green",
    type: "Frontend Project",
    images: [
      "/images/super-fitness-1.png",
      "/images/super-fitness-2.png",
      "/images/super-fitness-3.png",
    ],
  },
  {
    title: "Online Exam Platform",
    summary:
      "Timed online assessments with authentication, immediate results, and multilingual support.",
    description:
      "Interactive exam application with timer-based assessment sessions, real-time result calculations, NextAuth authentication, and multi-language support.",
    tags: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "TanStack Query",
      "Zod",
      "Tailwind CSS",
    ],
    github: "https://github.com/Ahmed-hamdi22/Online-Exam-app",
    demo: "https://online-exam-app-c34g.vercel.app/en/dashboard/subjects",
    accent: "#A78BFA",
    color: "purple",
    type: "Frontend Project",
    images: [
      "/images/online-exam-1.png",
      "/images/online-exam-2.png",
      "/images/online-exam-3.png",
    ],
  },
  {
    title: "FreshCart E-Commerce",
    summary:
      "Shopping experience with product filtering, wishlist, live cart updates, authentication, and Stripe checkout.",
    description:
      "Modern shopping platform featuring user authentication, real-time cart with quantity control, Stripe checkout, wishlist, and product filtering.",
    tags: [
      "React.js",
      "Context API",
      "Tailwind CSS",
      "Stripe",
      "Axios",
      "REST APIs",
    ],
    github: "https://github.com/Ahmed-hamdi22/freshEcommerce",
    demo: "https://fresh-ecommerce.vercel.app/",
    accent: "#38BDF8",
    color: "blue",
    type: "Frontend Project",
    images: [
      "/images/freshcart-1.png",
      "/images/freshcart-2.png",
      "/images/freshcart-3.png",
    ],
  },
];
