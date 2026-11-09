import Experience from "@/components/Experience";
import PageHero from "@/components/PageHero";
import NextPage from "@/components/NextPage";
import Motion from "@/components/Motion";
import JsonLd from "@/components/JsonLd";
import { PROFILE } from "@/data/profile";
import { Down } from "@/components/Icons";
import { crumbsLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/experience", "Experience", "Osama Sharaf's experience: Full-Stack Engineer at Digital Codes For Trading in Riyadh, and freelance full-stack engineer delivering 15+ production projects since 2024.");

export default function Page() {
  return (
    <>
      <JsonLd data={crumbsLd([{ name: "Experience", path: "/experience" }])} />
      <PageHero crumb="Experience" title="Experience" lead="From freelance projects for clients across the region to building and running a complete e-commerce platform in Riyadh.">
        <a className="btn btn-lime" href={PROFILE.cv} download style={{ marginTop: 30 }}>
          Download CV <Down />
        </a>
      </PageHero>
      <Experience explore={false} />
      <NextPage href="/education" label="Education" />
      <Motion />
    </>
  );
}
