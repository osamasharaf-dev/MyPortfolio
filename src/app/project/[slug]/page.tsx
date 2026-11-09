import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectViewer from "@/components/ProjectViewer";
import BrandGuide from "@/components/BrandGuide";
import NextPage from "@/components/NextPage";
import Motion from "@/components/Motion";
import JsonLd from "@/components/JsonLd";
import { Check, Out } from "@/components/Icons";
import { PROJECTS, getProject } from "@/data/projects";
import { BRANDS, brandFontsHref } from "@/data/brand";
import { crumbsLd, pageMeta, projectLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMeta(`/project/${p.slug}`, p.name, `${p.summary} Built by Osama Sharaf.`, { url: p.cover, width: 1600, height: 1000, alt: `${p.name} website` });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const idx = PROJECTS.findIndex((x) => x.slug === p.slug);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const brand = BRANDS[p.slug];
  const host = p.live.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <>
      <JsonLd data={projectLd(p)} />
      <JsonLd data={crumbsLd([{ name: "Projects", path: "/projects" }, { name: p.name, path: `/project/${p.slug}` }])} />
      <section className="case-head sec-blue grid-bg" style={{ paddingBottom: "clamp(60px, 8vw, 110px)" }}>
        <div className="wrap">
          <nav className="crumbs m" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/projects">Projects</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{p.short}</span>
          </nav>
          <span className="eyebrow m">
            {p.cat} · {p.year}
          </span>
          <h1 className="case-title d">{p.name}</h1>
          <p className="page-lead">{p.tagline}</p>
          <dl className="case-meta m">
            <div>
              <dt>Role</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{p.year}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{p.cat}</dd>
            </div>
            <div>
              <dt>Live site</dt>
              <dd>
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  {host} ↗
                </a>
              </dd>
            </div>
          </dl>
          <ProjectViewer images={p.images} name={p.name} live={p.live} />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 30 }}>
            <a className="btn btn-lime" href={p.live} target="_blank" rel="noopener noreferrer">
              Visit the live site <Out />
            </a>
            <Link className="btn btn-line" href="/contact">
              Start a similar project
            </Link>
          </div>
        </div>
      </section>

      <section className="sec sec-light grid-bg-c" aria-labelledby="ov-title">
        <div className="wrap">
          <div className="case-cols">
            <div data-rise>
              <span className="eyebrow m">Overview</span>
              <h2 id="ov-title" className="d">
                The story
              </h2>
              <p>{p.summary}</p>
              <p style={{ marginTop: 18 }}>{p.overview}</p>
            </div>
            <div>
              <span className="eyebrow m">What I built</span>
              <ul className="feat">
                {p.features.map((f) => (
                  <li key={f}>
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="metrics" data-rise>
            {p.metrics.map((m) => (
              <div className="metric" key={m.label}>
                <b className="d">{m.value}</b>
                <span className="m">{m.label}</span>
              </div>
            ))}
          </div>
          <p className="stack m" aria-label="Technology">
            <span>Built with</span> {p.stack.join("  /  ")}
          </p>
        </div>
      </section>

      {brand ? (
        <section className="sec sec-deep grid-bg" aria-labelledby="brand-title">
          <div className="wrap">
            <div className="head">
              <div>
                <span className="eyebrow m">Design system</span>
                <h2 id="brand-title" className="title d">
                  Style guide
                </h2>
              </div>
              <p className="head-side">The fonts and colours behind {p.short}, chosen to fit the brand and its audience.</p>
            </div>
            <BrandGuide brand={brand} href={brandFontsHref(p.slug)} />
          </div>
        </section>
      ) : null}

      <nav className="case-nav" aria-label="More projects">
        <Link href={`/project/${prev.slug}`}>
          <span className="m">← Previous project</span>
          <span className="d">{prev.short}</span>
        </Link>
        <Link href={`/project/${next.slug}`}>
          <span className="m">Next project →</span>
          <span className="d">{next.short}</span>
        </Link>
      </nav>
      <NextPage href="/contact" label="Let's talk" kicker="Have a project like this?" />
      <Motion />
    </>
  );
}
