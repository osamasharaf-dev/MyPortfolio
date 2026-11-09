import Projects from "@/components/Projects";
import PageHero from "@/components/PageHero";
import NextPage from "@/components/NextPage";
import Motion from "@/components/Motion";
import JsonLd from "@/components/JsonLd";
import { crumbsLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/projects", "Projects", "Websites, online stores and scroll-driven brand experiences built by Osama Sharaf: Milestone, NOUÉ, GHURZA, GD Studio, AZM Studio, Reem Sharaf and more.");

export default function Page() {
  return (
    <>
      <JsonLd data={crumbsLd([{ name: "Projects", path: "/projects" }])} />
      <PageHero crumb="Projects" title="My works" lead="Every project here is live. Open one to see every screen, the fonts and colours behind it, and what I built." />
      <Projects explore={false} head={false} />
      <NextPage href="/skills" label="Tech stack" />
      <Motion />
    </>
  );
}
