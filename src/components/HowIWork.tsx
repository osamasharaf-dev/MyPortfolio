import Link from "next/link";
import { WORK_SKILLS } from "@/data/profile";
import { Arrow, WorkIcon } from "./Icons";

export default function HowIWork({ explore = true, head = true }: { explore?: boolean; head?: boolean }) {
  return (
    <section className="sec sec-light grid-bg-c" id="how-i-work" data-tr="flip" aria-labelledby={head ? "how-title" : undefined} aria-label={head ? undefined : "How I work"}>
      <div className="wrap">
        {head ? (
        <div className="head">
          <div>
            <span className="eyebrow m">04 / Work style</span>
            <h2 id="how-title" className="title d">
              How I <br className="br" />
              Work
            </h2>
          </div>
          <div className="head-side" style={{ color: "var(--ink)" }}>
            <p>Good code is half the job. This is how I plan, communicate and deliver with the people around it.</p>
            {explore ? (
              <Link className="head-btn btn btn-blue" href="/how-i-work">
                My process <Arrow />
              </Link>
            ) : null}
          </div>
        </div>
        ) : null}
        <div className="works">
          {WORK_SKILLS.map((w, i) => (
            <article className="work" key={w.key}>
              <WorkIcon name={w.key} className="work-art" />
              <span className="work-ico">
                <WorkIcon name={w.key} />
              </span>
              <span className="m" style={{ position: "relative", opacity: 0.7 }}>
                0{i + 1}
              </span>
              <h3 className="d">{w.title}</h3>
              <p>{w.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
