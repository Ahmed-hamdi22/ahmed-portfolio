export const siteConfig = {
  name: "Ahmed Hamdi",
  title: "Full Stack Engineer",
  subtitle:
    "Full Stack Engineer specializing in modern, scalable, and user-focused web applications using React.js, Next.js, TypeScript, and Node.js.",
  email: "ahmed255hamdi@gmail.com",
  phone: "+20 1066543802",
  location: "Cairo, Egypt",
  github: "https://github.com/Ahmed-hamdi22",
  linkedin: "https://linkedin.com/in/ahmed-hamdi-86ab2b23a",
  about: `Frontend-focused Full Stack Engineer with experience building scalable applications using React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB. Passionate about clean architecture, responsive UI, performance optimization, and user-focused experiences. I thrive in collaborative Agile environments and am committed to delivering high-quality, maintainable code.`,
};

export const skills = {
  Frontend: {
    color: "#38BDF8",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Shadcn/UI",
      "React Query",
      "Redux",
      "React Hook Form",
      "Zod",
      "HTML5 / CSS3",
      "Bootstrap",
      "next-intl",
    ],
  },
  Backend: {
    color: "#34D399",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "NextAuth"],
  },
  "Tools & Workflow": {
    color: "#A78BFA",
    tags: ["Git / GitHub", "Agile / Scrum", "CI/CD", "Vercel", "Stripe"],
  },
};

export const experience = [
  {
    role: "Frontend Development Diploma",
    company: " Route Academy",
    period: "Nov 2024 – Jun 2025",
    location: "Cairo, Egypt",
    description:
      "Completed an intensive frontend development diploma covering React.js, Next.js, TypeScript, Tailwind CSS, and modern development practices. Built multiple projects including an e-commerce platform with admin dashboard, a fitness app, and an online exam application. Gained hands-on experience with authentication (NextAuth), form validation (Zod + React Hook Form), and Agile collaboration.",
    tags: ["React.js", "Next.js", "TypeScript", "NextAuth", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Elevate Tech",
    period: "Nov 2024 – Jun 2025",
    location: "Cairo, Egypt",
    description:
      "Developed 3 production-level applications (E-commerce with Admin Dashboard, Fitness App, Online Exam) using React.js, Next.js, and TypeScript. Implemented secure authentication with NextAuth and JWT, form validation with Zod + React Hook Form, and collaborated in Agile sprints with code reviews and Git workflows.",
    tags: ["React.js", "Next.js", "TypeScript", "NextAuth", "Tailwind CSS"],
  },

  {
    role: "Full Stack Track Trainee",
    company: "DIgilians",
    period: "2026",
    location: "Cairo, Egypt",
    description:
      "Completed an intensive full stack development track covering modern frontend and backend technologies. Gained hands-on experience with Node.js, Express.js, MongoDB, and React ecosystem tools through project-based learning.",
    tags: ["Node.js", "Express.js", "MongoDB", "React.js", "REST APIs"],
  },
];
export type ProjectColor = "blue" | "green" | "purple" | "orange";

export const projects = [
  {
    title: "Flower Shop Dashboard",
    description:
      "Full e-commerce platform with a secure admin dashboard, Stripe checkout, CRUD for products & categories, real-time analytics, sales visualization, and multilingual support via next-intl.",
    tags: [
      "Next.js 14",
      "TypeScript",
      "Stripe",
      "TanStack Query",
      "Shadcn/UI",
      "Zod",
    ],
    github: "https://github.com/Ahmed-hamdi22/e-commerce-flower-shop",
    demo: "https://e-commerce-flower-shop-kqil-j2esixyri-ahmedhamdi22s-projects.vercel.app/en",
    accent: "#38BDF8",
    color: "blue" as ProjectColor,
    icon: "🌸",
  },
  {
    title: "Super Fitness App",
    description:
      "Multilingual fitness platform allowing users to track workouts by level, access healthy recipes, and engage with an AI-powered chatbot. Features animated carousels and tab-based navigation.",
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
    color: "green" as ProjectColor,
    icon: "💪",
  },
  {
    title: "Online Exam Platform",
    description:
      "Dynamic exam application with backend API integration, timer-based exam sessions, auto-calculated results, secure NextAuth authentication, and full localization support.",
    tags: ["Next.js", "TypeScript", "NextAuth", "TanStack Query", "Zod"],
    github: "https://github.com/Ahmed-hamdi22/Online-Exam-app",
    demo: "https://online-exam-app-c34g.vercel.app/en/dashboard/subjects",
    accent: "#A78BFA",
    color: "purple" as ProjectColor,
    icon: "📝",
  },
  {
    title: "FreshCart E-Commerce",
    description:
      "Responsive shopping platform with full authentication, real-time cart management with quantity control, Stripe checkout, wishlist features, and advanced category/brand filtering.",
    tags: [
      "React.js",
      "Context API",
      "Tailwind CSS",
      "Stripe",
      "Axios",
      "Vercel",
    ],
    github: "https://github.com/Ahmed-hamdi22/freshEcommerce",
    demo: "https://fresh-ecommerce.vercel.app/",
    accent: "#FB923C",
    color: "orange" as ProjectColor,
    icon: "🛒",
  },
  {
    title: "E-commerce-nodejs",
    description:
      "Back end API for an e-commerce platform built with Node.js, Express.js, and MongoDB. Features include user authentication with JWT, product management, category handling, and secure payment processing.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    github: "https://github.com/Ahmed-hamdi22/E-commerce-nodejs",
    demo: "https://github.com/Ahmed-hamdi22/E-commerce-nodejs",
    accent: "#FB923C",
    color: "orange" as ProjectColor,
    icon: "🛒",
  },
];
