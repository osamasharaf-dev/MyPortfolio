import Education from "@/components/Education";
import PageHero from "@/components/PageHero";
import NextPage from "@/components/NextPage";
import Motion from "@/components/Motion";
import JsonLd from "@/components/JsonLd";
import { crumbsLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/education", "Education", "Osama Sharaf holds a Bachelor of Information Technology in Software Engineering from the University of Kalamoon.");

export default function Page() {
  return (
    <>
      <JsonLd data={crumbsLd([{ name: "Education", path: "/education" }])} />
      <PageHero crumb="Education" title="Education" lead="A Bachelor's degree in Information Technology with a software engineering focus." />
      <Education explore={false} head={false} />
      <NextPage href="/contact" label="Contact" />
      <Motion />
    </>
  );
}
