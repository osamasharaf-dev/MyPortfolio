import About from "@/components/About";
import PageHero from "@/components/PageHero";
import NextPage from "@/components/NextPage";
import Motion from "@/components/Motion";
import JsonLd from "@/components/JsonLd";
import { FAQ, crumbsLd, faqLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/about", "About", "Who Osama Sharaf is: a Full-Stack Engineer in Riyadh who builds and ships production web and mobile applications, from APIs to pixel-perfect interfaces.");

export default function Page() {
  return (
    <>
      <JsonLd data={crumbsLd([{ name: "About", path: "/about" }])} />
      <JsonLd data={faqLd(FAQ)} />
      <PageHero crumb="About" title="About me" lead="Full-Stack Engineer in Riyadh. I plan, design, build and ship websites, stores and web apps, and I keep improving them after launch." />
      <About standalone />
      <section className="sec sec-light" aria-labelledby="faq-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="eyebrow m">Questions</span>
          <h2 id="faq-title" className="d" style={{ fontSize: "clamp(30px, 5vw, 64px)" }}>
            Good to know
          </h2>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <NextPage href="/projects" label="My projects" />
      <Motion />
    </>
  );
}
