import Link from "next/link";
import { EXPERIENCE } from "@/data/profile";
import { Arrow } from "./Icons";
import NoBreak from "./NoBreak";

export default function Experience({ explore = true }: { explore?: boolean }) {
  return (
    <section className="sec sec-light grid-bg-c" id="experience" data-tr="line" aria-labelledby="exp-title" style={{ borderTop: "1px solid rgba(18,56,214,.1)" }}>
      <div className="wrap">
        <div className="head">
          <div>
            <span className="eyebrow m">05 / Experience</span>
            <h2 id="exp-title" className="title d">
              Work <br className="br" />
              Journey
            </h2>
          </div>
          {explore ? (
            <Link className="head-btn btn btn-blue" href="/experience">
              Full experience <Arrow />
            </Link>
          ) : null}
        </div>
        <div className="timeline">
          <div className="tl-track" aria-hidden="true">
            <div className="tl-fill" />
          </div>
          <ol className="tl-items">
            {EXPERIENCE.map((e) => (
              <li className="tl-item" key={e.role}>
                <span className="tl-dot" aria-hidden="true" />
                <div className="tl-when m">
                  <span>
                    {e.start} — {e.end}
                  </span>
                </div>
                <h3 className="d">
                  <NoBreak text={e.role} />
                </h3>
                <div className="tl-org">{e.org}</div>
                <div className="m" style={{ opacity: 0.7, marginTop: 4 }}>
                  {e.place}
                </div>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
