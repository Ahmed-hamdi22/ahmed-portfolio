export const siteConfig = {
  name: "Ahmed Hamdi",
  title: "Full Stack Developer",
  subtitle:
    "Building scalable web applications from UI to API with React, Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
  email: "ahmed255hamdi@gmail.com",
  phone: "+20 1066543802",
  location: "Cairo, Egypt",
  github: "https://github.com/Ahmed-hamdi22",
  linkedin: "https://linkedin.com/in/ahmed-hamdi-86ab2b23a",
  about:
    "I'm Ahmed Hamdi, a Full Stack Developer focused on React, Next.js, TypeScript, Node.js, Express.js, and MongoDB. I build responsive interfaces, integrate APIs, implement authentication flows, and develop maintainable full-stack applications.",
};

export const skills = {
  Frontend: {
    color: "#38BDF8",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Shadcn/UI",
      "Bootstrap",
      "Responsive Design",
      "React Query",
      "Redux",
      "Context API",
      "React Hook Form",
      "Zod",
      "next-intl",
      "UI Implementation",
      "UX-focused Interfaces",
    ],
  },
  Backend: {
    color: "#34D399",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT Authentication",
      "NextAuth",
      "API Integration",
    ],
  },
  "Tools & Workflow": {
    color: "#A78BFA",
    tags: ["Git", "GitHub", "Agile/Scrum", "CI/CD", "Vercel", "Postman"],
  },
};

export const experience = [
  {
    role: "Frontend Development Diploma",
    company: "Route Academy",
    period: "Nov 2024 - Jun 2025",
    location: "Cairo, Egypt",
    description:
      "Completed an intensive frontend development diploma covering React.js, Next.js, TypeScript, Tailwind CSS, and modern development practices. Built multiple projects including an e-commerce platform with admin dashboard, a fitness app, and an online exam application. Gained hands-on experience with authentication (NextAuth), form validation (Zod + React Hook Form), and Agile collaboration.",
    tags: ["React.js", "Next.js", "TypeScript", "NextAuth", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Elevate Tech",
    period: "Nov 2024 - Jun 2025",
    location: "Cairo, Egypt",
    description:
      "Developed 3 production-level applications (E-commerce with Admin Dashboard, Fitness App, Online Exam) using React.js, Next.js, and TypeScript. Implemented secure authentication with NextAuth and JWT, form validation with Zod + React Hook Form, and collaborated in Agile sprints with code reviews and Git workflows.",
    tags: ["React.js", "Next.js", "TypeScript", "NextAuth", "Tailwind CSS"],
  },
  {
    role: "Full Stack Track Trainee",
    company: "Digilians",
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
    title: "Sanda - Recruitment & Job Management Platform",
    description:
      "Full-stack workforce marketplace connecting employers, workers, and administrators through role-based workflows. It supports job posting, applications, applicant management, status tracking, protected routes, wallet states, real-time notifications with Socket.io, QR attendance check-in, and secure API-driven workflows.",
    tags: [
      "Full Stack Project",
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
    github: "https://github.com/Ahmed-hamdi22/sanda-front",
    demo: "https://sanda-ten.vercel.app/",
    accent: "#38BDF8",
    color: "blue" as ProjectColor,
    type: "Featured Full Stack Project",
    images: [
      "/images/sanda-1.png",
      "/images/sanda-2.png",
      "/images/sanda-3.png",
    ],
  },
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
    type: "Full Stack Project",
    images: [
      "/images/flower-shop-1.png",
      "/images/flower-shop-2.png",
      "/images/flower-shop-3.png",
    ],
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
    type: "Frontend Project",
    images: [
      "/images/super-fitness-1.png",
      "/images/super-fitness-2.png",
      "/images/super-fitness-3.png",
    ],
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
    type: "Frontend Project",
    images: [
      "/images/online-exam-1.png",
      "/images/online-exam-2.png",
      "/images/online-exam-3.png",
    ],
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
    type: "Frontend Project",
    images: [
      "/images/freshcart-1.png",
      "/images/freshcart-2.png",
      "/images/freshcart-3.png",
    ],
  },
  {
    title: "E-commerce-nodejs",
    description:
      "Backend API for an e-commerce platform built with Node.js, Express.js, and MongoDB. Features include user authentication with JWT, product management, category handling, and secure payment processing.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    github: "https://github.com/Ahmed-hamdi22/E-commerce-nodejs",
    demo: "https://github.com/Ahmed-hamdi22/E-commerce-nodejs",
    accent: "#FB923C",
    color: "orange" as ProjectColor,
    type: "Backend API",
    images: [],
  },
];
