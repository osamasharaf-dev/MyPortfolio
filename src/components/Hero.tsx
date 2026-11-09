import Image from "next/image";
import { PROFILE } from "@/data/profile";
import { Arrow, Down } from "./Icons";

const BAND = ["Next.js", "TypeScript", "JavaScript", "Node.js", "Supabase", "Firebase", "Vercel", "Claude Code", "Figma", "Framer"];

export default function Hero() {
  const word = "PORTFOLIO".split("");
  return (
    <section className="hero grid-bg" data-hero id="top" aria-labelledby="hero-title">
      <div className="hero-rings" aria-hidden="true">
        <span className="r2" />
        <span className="r1" />
        <span className="r3" />
      </div>

      <div className="hero-l">
        <h1 id="hero-title">
          <span className="hello">Hello, I&apos;m {PROFILE.first}</span>
          <span className="sr-only"> Sharaf, Full Stack Developer, Web Developer and Frontend Developer in Riyadh</span>
        </h1>
        <ul className="titles d" aria-label="Roles">
          {PROFILE.titles.map((t) => (
            <li key={t}>
              <span>/</span> {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-fig">
        <div className="pf d" aria-hidden="true">
          {word.map((c, i) => (
            <span className="pf-l" key={i} style={{ ["--i" as string]: i }}>
              {c}
            </span>
          ))}
          <span className="pf-cur" />
        </div>
        <div className="photo">
          <div className="photo-in">
            <Image src={PROFILE.photo.src} alt="Osama Sharaf, Full Stack Developer" width={PROFILE.photo.width} height={PROFILE.photo.height} priority fetchPriority="high" sizes="(max-width: 1279px) 84vw, 40vw" />
          </div>
        </div>
      </div>

      <div className="hero-r">
        <div className="stats">
          {PROFILE.stats.map((s) => (
            <div className="stat" key={s.label}>
              <b className="d">{s.value}</b>
              <span className="m">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="hero-intro">{PROFILE.intro}</p>
        <div className="hero-btns">
          <a className="btn btn-lime" href="#projects">
            View my work <Arrow />
          </a>
          <a className="btn btn-line" href={PROFILE.cv} download>
            Download CV <Down />
          </a>
        </div>
      </div>

      <div className="band" aria-hidden="true">
        <div className="band-track d">
          {[...BAND, ...BAND].map((t, i) => (
            <span key={i} style={{ display: "inline-flex", gap: 40 }}>
              {t}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
