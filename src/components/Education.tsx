import Link from "next/link";
import { EDUCATION, PROFILE } from "@/data/profile";
import CertZoom from "./CertZoom";
import { Arrow } from "./Icons";

export default function Education({ explore = true, head = true }: { explore?: boolean; head?: boolean }) {
  return (
    <section className="sec sec-deep grid-bg edu" id="education" data-tr="curtain" aria-labelledby={head ? "edu-title" : undefined} aria-label={head ? undefined : "Education"}>
      <div className="wrap">
        {head ? (
        <div className="head">
          <div>
            <span className="eyebrow m">06 / Education</span>
            <h2 id="edu-title" className="title d">
              Education
            </h2>
          </div>
          {explore ? (
            <Link className="head-btn btn btn-lime" href="/education">
              Certificates <Arrow />
            </Link>
          ) : null}
        </div>
        ) : null}
        <div className="edu-grid">
          <div className="edu-info" data-rise>
            <span className="m" style={{ color: "var(--l)" }}>
              {EDUCATION.type}
            </span>
            <h3 className="degree d" style={{ marginTop: 14 }}>
              {EDUCATION.degree}
            </h3>
            <span className="degree-field m">{EDUCATION.field}</span>
            <div className="school">{EDUCATION.school}</div>
            <p className="langs m">{PROFILE.languages.map((l) => `${l.name} (${l.level})`).join("  ·  ")}</p>
          </div>
          <div className="folder">
            <span className="folder-tab" aria-hidden="true" />
            <CertZoom src={EDUCATION.certificate.src} width={EDUCATION.certificate.width} height={EDUCATION.certificate.height} />
            <span className="folder-label m">Bachelor&apos;s degree certificate · tap to enlarge</span>
          </div>
        </div>
      </div>
    </section>
  );
}
