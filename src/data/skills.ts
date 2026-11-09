export type Skill = { key: string; name: string; type: string; group: string };

export const SKILLS: Skill[] = [
  { key: "nextjs", name: "Next.js", type: "Frontend framework", group: "Frontend" },
  { key: "typescript", name: "TypeScript", type: "Language", group: "Frontend" },
  { key: "javascript", name: "JavaScript", type: "Language", group: "Frontend" },
  { key: "html5", name: "HTML5", type: "Markup", group: "Frontend" },
  { key: "css3", name: "CSS3", type: "Styling", group: "Frontend" },
  { key: "nodejs", name: "Node.js", type: "Backend runtime", group: "Backend" },
  { key: "supabase", name: "Supabase", type: "Backend platform", group: "Backend" },
  { key: "firebase", name: "Firebase", type: "Backend platform", group: "Backend" },
  { key: "vercel", name: "Vercel", type: "Hosting", group: "Hosting" },
  { key: "hostinger", name: "Hostinger", type: "Hosting", group: "Hosting" },
  { key: "domain", name: "Domains & DNS", type: "Domain setup", group: "Hosting" },
  { key: "claudecode", name: "Claude Code", type: "AI coding agent", group: "Tools" },
  { key: "github", name: "GitHub", type: "Collaboration", group: "Tools" },
  { key: "vscode", name: "VS Code", type: "Editor", group: "Tools" },
  { key: "figma", name: "Figma", type: "UI/UX design", group: "Tools" },
  { key: "framer", name: "Framer", type: "Design & sites", group: "Tools" },
];
