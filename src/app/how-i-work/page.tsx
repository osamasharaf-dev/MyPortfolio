import HowIWork from "@/components/HowIWork";
import PageHero from "@/components/PageHero";
import NextPage from "@/components/NextPage";
import Motion from "@/components/Motion";
import JsonLd from "@/components/JsonLd";
import { crumbsLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/how-i-work", "How I work", "Time management, teamwork, project management, clear communication and the other professional skills Osama Sharaf brings to every project.");

const STEPS = [
  { t: "Listen", d: "A short call to understand your goals, your audience and what success looks like." },
  { t: "Plan", d: "A clear scope, milestones and an honest timeline before any code is written." },
  { t: "Design & build", d: "Weekly progress you can see and test, with feedback built into every step." },
  { t: "Launch & grow", d: "Deployment, SEO, speed checks and support after launch." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={crumbsLd([{ name: "How I work", path: "/how-i-work" }])} />
      <PageHero crumb="How I work" title="How I work" lead="The professional habits that keep projects calm, clear and on time, from the first call to launch day and beyond." />
      <HowIWork explore={false} head={false} />
      <section className="sec sec-blue grid-bg" aria-labelledby="steps-title">
        <div className="wrap">
          <span className="eyebrow m">The process</span>
          <h2 id="steps-title" className="title d">
            Four steps
          </h2>
          <ol className="works" style={{ listStyle: "none", padding: 0 }} data-rise>
            {STEPS.map((s, i) => (
              <li key={s.t} className="work" style={{ minHeight: 240 }}>
                <span className="d" style={{ fontSize: 54, color: "var(--c)", position: "relative" }}>
                  0{i + 1}
                </span>
                <h3 className="d">{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <NextPage href="/experience" label="Experience" />
      <Motion />
    </>
  );
}
