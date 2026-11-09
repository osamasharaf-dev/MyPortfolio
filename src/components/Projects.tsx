import Link from "next/link";
import FanGallery from "./FanGallery";
import { CATEGORIES, FAN_ORDER, getProject } from "@/data/projects";
import { Arrow } from "./Icons";

export default function Projects({ explore = true, scene = false, head = true }: { explore?: boolean; scene?: boolean; head?: boolean }) {
  const items = FAN_ORDER.map((s) => getProject(s)!).map((p) => ({
    slug: p.slug,
    name: p.name,
    cat: p.cat,
    year: p.year,
    summary: p.summary,
    cover: p.cover,
    live: p.live,
    stack: p.stack,
  }));
  return (
    <section className="sec sec-deep grid-bg" id="projects" data-tr="circle" aria-labelledby={head ? "projects-title" : undefined} aria-label={head ? undefined : "Projects"}>
      <div className="wrap">
        {head ? (
        <div className="head">
          <div>
            <span className="eyebrow m">02 / Projects</span>
            <h2 id="projects-title" className="title d">
              Selected <br className="br" />
              Work
            </h2>
          </div>
          {scene ? (
            <Link className="btn btn-lime head-btn" href="/projects">
              All projects <Arrow />
            </Link>
          ) : (
            <p className="head-side">Hover a card to preview it, click to open the full case study with every screen.</p>
          )}
        </div>
        ) : null}
        <FanGallery items={items} categories={CATEGORIES} startOn={scene ? "projects" : undefined} />
        {explore && !scene ? (
          <div className="explore">
            <span className="m" style={{ opacity: 0.75 }}>
              {items.length} projects · websites, stores and brand experiences
            </span>
            <Link className="btn btn-lime" href="/projects">
              All projects <Arrow />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
