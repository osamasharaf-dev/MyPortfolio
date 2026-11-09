import type { Metadata } from "next";
import { PROFILE, SITE_URL, EDUCATION } from "@/data/profile";
import { PROJECTS, type Project } from "@/data/projects";
import { SKILLS } from "@/data/skills";

export const OG = { url: "/og.jpg", width: 1200, height: 630, alt: "Osama Sharaf, Full Stack Developer in Riyadh" };

export function pageMeta(path: string, title: string, description: string, image?: { url: string; width: number; height: number; alt: string }): Metadata {
  const img = image ?? OG;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title: `${title} · Osama Sharaf`, description, images: [img], siteName: "Osama Sharaf", locale: "en_US" },
    twitter: { card: "summary_large_image", title: `${title} · Osama Sharaf`, description, images: [img.url] },
  };
}

export const personLd = () => ({
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: PROFILE.name,
  alternateName: [PROFILE.legalName, PROFILE.arabicName, "Eng. Osama Sharaf"],
  jobTitle: PROFILE.role,
  description: PROFILE.summary,
  url: SITE_URL,
  image: `${SITE_URL}${PROFILE.photo.src}`,
  email: `mailto:${PROFILE.email}`,
  telephone: PROFILE.phoneRaw,
  address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
  sameAs: [PROFILE.linkedin, PROFILE.github],
  knowsAbout: SKILLS.map((s) => s.name).concat(["Core Web Vitals", "Technical SEO", "UI/UX design", "E-commerce development"]),
  knowsLanguage: ["ar", "en"],
  alumniOf: { "@type": "CollegeOrUniversity", name: EDUCATION.school },
  hasCredential: { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: `${EDUCATION.degree} (${EDUCATION.field})` },
  worksFor: { "@type": "Organization", name: "Digital Codes For Trading", url: "https://digital-codes.co" },
});

export const siteLd = () => ({
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "Osama Sharaf", inLanguage: "en", publisher: { "@id": `${SITE_URL}/#person` } },
    personLd(),
  ],
});

export const homeLd = () => ({
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "ProfilePage", "@id": `${SITE_URL}/#profile`, url: SITE_URL, name: "Osama Sharaf · Full Stack Developer", mainEntity: { "@id": `${SITE_URL}/#person` } },
    {
      "@type": "ItemList",
      name: "Selected projects",
      itemListElement: PROJECTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/project/${p.slug}`, name: p.name })),
    },
  ],
});

export const crumbsLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_URL}${it.path === "/" ? "" : it.path}` })),
});

export const projectLd = (p: Project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `${SITE_URL}/project/${p.slug}#work`,
  name: p.name,
  headline: p.tagline,
  description: p.summary,
  url: `${SITE_URL}/project/${p.slug}`,
  sameAs: p.live,
  dateCreated: p.year,
  genre: p.cat,
  keywords: p.stack.join(", "),
  image: p.images.slice(0, 4).map((i) => `${SITE_URL}${i.src}`),
  creator: { "@id": `${SITE_URL}/#person` },
  author: { "@type": "Person", name: PROFILE.name, url: SITE_URL },
});

export const faqLd = (faq: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const FAQ = [
  { q: "Who is Osama Sharaf?", a: "Osama Sharaf is a Full-Stack Engineer based in Riyadh, Saudi Arabia. He builds production websites, online stores and web apps with React, Next.js, TypeScript, Node.js, Supabase and Firebase, and works as a Full-Stack Engineer at Digital Codes For Trading." },
  { q: "Is Osama Sharaf available for freelance projects?", a: "Yes. Osama has worked with clients on a project basis since 2024 and takes on new websites, stores and web apps. The quickest way to reach him is WhatsApp on +966 50 811 7086 or the contact form at osamasharaf.dev/contact." },
  { q: "What kind of projects does Osama build?", a: "E-commerce platforms with admin dashboards, corporate websites, scroll-driven brand experiences and portfolios, all fully responsive, fast (95+ PageSpeed) and optimised for SEO, GEO and AEO." },
  { q: "Where is Osama Sharaf based, and does he relocate?", a: "He is based in Riyadh, Saudi Arabia, works with clients remotely and is open to relocation worldwide." },
  { q: "Which languages does Osama speak?", a: "Arabic (native) and English (professional working proficiency)." },
];
