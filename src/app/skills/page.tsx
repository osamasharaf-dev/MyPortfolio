import Skills from "@/components/Skills";
import PageHero from "@/components/PageHero";
import NextPage from "@/components/NextPage";
import Motion from "@/components/Motion";
import JsonLd from "@/components/JsonLd";
import { crumbsLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/skills", "Technical skills", "Osama Sharaf's tech stack: Next.js, TypeScript, JavaScript, HTML, CSS, Node.js, Supabase, Firebase, Vercel, Hostinger, domains, Claude Code, GitHub, VS Code, Figma and Framer.");

export default function Page() {
  return (
    <>
      <JsonLd data={crumbsLd([{ name: "Skills", path: "/skills" }])} />
      <PageHero crumb="Skills" title="Tech stack" lead="The core tools I use every day to build, host and ship fast websites and web apps." />
      <Skills explore={false} head={false} />
      <NextPage href="/how-i-work" label="How I work" />
      <Motion />
    </>
  );
}
