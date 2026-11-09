import Image from "next/image";
import Link from "next/link";
import { PROFILE } from "@/data/profile";
import { Arrow, Down } from "./Icons";

export default function About({ standalone = false, scene = false }: { standalone?: boolean; scene?: boolean }) {
  const words = PROFILE.statement.split(" ");
  const hi = new Set(["fast,", "beautiful"]);
  return (
    <section className="about sec sec-light grid-bg-c" id="about" aria-labelledby="about-title">
      <svg className="about-deco" viewBox="0 0 400 400" aria-hidden="true">
        <circle cx="200" cy="200" r="190" fill="#ccff3d" />
        <text x="200" y="250" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700" fontSize="150" fill="#1238d6">
          {"{ }"}
        </text>
      </svg>
      <div className="wrap about-grid">
        <div className="about-left">
          <div className="about-slot">
            <Image className="about-fallback" src={PROFILE.photo.src} alt="" width={PROFILE.photo.width} height={PROFILE.photo.height} sizes="(max-width: 759px) 40vw, 470px" loading="lazy" />
          </div>
          <div className="sign" data-sign>
            {PROFILE.name}
          </div>
        </div>
        <div className="about-right">
          <span className="eyebrow m">01 / About</span>
          <h2 id="about-title" className="about-statement d" data-words>
            {words.map((w, i) => (
              <span className="w" key={i}>
                {hi.has(w) ? <mark>{w}</mark> : w}
              </span>
            ))}
          </h2>
          <p className="about-text">{scene ? PROFILE.short : PROFILE.summary}</p>
          <p className="about-meta">
            Based in <b>Riyadh, Saudi Arabia</b> · <b>Open to relocation</b> worldwide
          </p>
          <div className="about-btns">
            {standalone ? null : (
              <Link className="btn btn-blue" href="/about">
                More about me <Arrow />
              </Link>
            )}
            <a className="btn btn-line-c" href={PROFILE.cv} download>
              Download CV <Down />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
