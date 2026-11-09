import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import Motion from "@/components/Motion";
import JsonLd from "@/components/JsonLd";
import { crumbsLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/contact", "Contact", "Start a project with Osama Sharaf. Send the details through the form, or reach him on WhatsApp (+966 50 811 7086), LinkedIn or email.");

export default function Page() {
  return (
    <>
      <JsonLd data={crumbsLd([{ name: "Contact", path: "/contact" }])} />
      <PageHero crumb="Contact" title="Contact" lead="New website, online store or web app? Tell me what you have in mind and I will reply within one working day." />
      <Contact />
      <Motion />
    </>
  );
}
