export const SITE_URL = "https://osamasharaf.dev";

export const PROFILE = {
  name: "Osama Sharaf",
  first: "Osama",
  legalName: "Osama Abdulhalim Sharaf",
  arabicName: "أسامة شرف",
  role: "Full-Stack Engineer",
  titles: ["Full Stack Developer", "Web Developer", "Frontend Developer"],
  location: "Riyadh, Saudi Arabia",
  relocation: "Open to relocation worldwide",
  email: "osamaabdulhalimsharaf@gmail.com",
  phone: "+966 50 811 7086",
  phoneRaw: "+966508117086",
  linkedin: "https://linkedin.com/in/osama-sharaf-dev",
  github: "https://github.com/osamasharaf-dev",
  whatsapp: "https://wa.me/966508117086?text=" + encodeURIComponent("Hello, I'd like to inquire about a project."),
  cv: "/resume/OsamaSharaf.pdf",
  photo: { src: "/images/osama.webp", width: 1000, height: 1111 },
  intro: "I design and build fast, polished websites and web apps, from the first sketch to launch day.",
  statement: "I turn ideas into fast, beautiful products people love to use.",
  summary:
    "Full-Stack Engineer who builds and ships production web and mobile applications, from backend architecture and APIs to frontend engineering and UI/UX. I own the whole lifecycle: planning, development, deployment, performance tuning and the improvements that follow launch. My core stack is React, Next.js, TypeScript, Node.js, Supabase and Firebase, backed by careful work on SEO and Core Web Vitals.",
  stats: [{ value: "15+", label: "Happy clients" }],
  short: "Full-Stack Engineer in Riyadh building fast, production-ready websites, stores and web apps with React, Next.js, TypeScript and Node.js.",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional working" },
  ],
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/how-i-work", label: "How I Work" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export const EXPERIENCE = [
  {
    start: "Jun 2026",
    end: "Present",
    role: "Full-Stack Engineer",
    org: "Digital Codes For Trading",
    place: "Riyadh · On-site",
    points: [
      "Built and maintain the Milestone digital platform: frontend, backend, database, authentication and admin dashboard.",
      "Built the Milestone store with 250+ products, four categories and a complete online ordering system.",
      "Optimised both platforms for SEO, GEO and AEO, reaching 100/100 SEO scores.",
    ],
  },
  {
    start: "2024",
    end: "Present",
    role: "Freelance Full-Stack Engineer",
    org: "Web & Software Development",
    place: "Remote · Project-based",
    points: [
      "Delivered 10+ production web and software projects, from planning and architecture to deployment.",
      "Built ordering platforms and admin dashboards with authentication and order management.",
      "Shipped React, Next.js and TypeScript frontends with 90+ Lighthouse performance.",
      "Cut page load times by around 30% through asset optimisation, caching and code splitting.",
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Information Technology",
  field: "Software Engineering",
  school: "University of Kalamoon",
  type: "Bachelor's degree",
  certificate: { src: "/images/certificate.webp", width: 854, height: 561 },
};

export const CERTIFICATIONS = [
  { name: "Business Analysis & Process Management", by: "Coursera" },
  { name: "Build a Free Website with WordPress", by: "Coursera" },
  { name: "Big Data for Business Intelligence Techniques", by: "Mindluster" },
  { name: "Cyber Security Fundamentals", by: "Mindluster" },
  { name: "People Management", by: "Mindluster" },
];

export const WORK_SKILLS = [
  { key: "time", title: "Time management", text: "Clear milestones, honest estimates and delivery on the agreed date." },
  { key: "team", title: "Teamwork", text: "At home in mixed teams of designers, developers and product owners." },
  { key: "talk", title: "Clear communication", text: "Regular updates in plain language, in Arabic or English." },
  { key: "solve", title: "Problem solving", text: "Break hard problems down, measure, and fix the root cause." },
  { key: "detail", title: "Attention to detail", text: "Polish, accessibility and performance on every single screen." },
  { key: "client", title: "Client focus", text: "I listen first, then build what moves the business forward." },
] as const;

export const BUDGETS = [
  { id: "bronze", name: "Bronze", range: "Under 8,000 SAR", text: "Landing page or portfolio, up to 5 sections", color: "#C98A55" },
  { id: "silver", name: "Silver", range: "8,000 – 15,000 SAR", text: "Business website in Arabic and English, with CMS", color: "#A9B2BF" },
  { id: "gold", name: "Gold", range: "15,000+ SAR", text: "Web app or e-commerce with a dashboard", color: "#E2B13C" },
  { id: "unsure", name: "Not sure yet", range: "Let's talk", text: "We will scope it together on a call", color: "#7C8597" },
];
