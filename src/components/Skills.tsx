import Link from "next/link";
import SkillRain from "./SkillRain";
import { SKILLS } from "@/data/skills";
import { Arrow } from "./Icons";

export default function Skills({ explore = true, scene = false, head = true }: { explore?: boolean; scene?: boolean; head?: boolean }) {
  return (
    <section className="sec sec-blue grid-bg" id="skills" data-tr="lift" aria-labelledby={head ? "skills-title" : undefined} aria-label={head ? undefined : "Technical skills"} style={{ paddingBottom: 0, overflow: "hidden" }}>
      <div className="wrap">
        {head ? (
        <div className="head">
          <div>
            <span className="eyebrow m">03 / Technical skills</span>
            <h2 id="skills-title" className="title d">
              Tech <br className="br" />
              Stack
            </h2>
            <p className="skills-lead">Each icon is a tool I use in real projects: hover or tap it to see what it is for.</p>
          </div>
          <div className="head-side">
            <p>The tools I use every day. Hover or tap any icon to see its name and what it does.</p>
            {explore ? (
              <Link className="head-btn btn btn-lime" href="/skills">
                All skills <Arrow />
              </Link>
            ) : null}
          </div>
        </div>
        ) : null}
        <SkillRain skills={SKILLS} startOn={scene ? "skills" : undefined} />
      </div>
      <div className="ground" aria-hidden="true" />
    </section>
  );
}
