import { PROFILE } from "@/data/profile";
import ContactForm from "./ContactForm";
import { LinkedIn, Mail, Out, WhatsApp } from "./Icons";

export default function Contact({ scene = false }: { scene?: boolean }) {
  const links = [
    { icon: <LinkedIn />, label: "LinkedIn", value: "osama-sharaf-dev", href: PROFILE.linkedin },
    { icon: <WhatsApp />, label: "WhatsApp", value: PROFILE.phone, href: PROFILE.whatsapp },
    { icon: <Mail />, label: "Email", value: "Request a service", href: `mailto:${PROFILE.email}` },
  ];
  return (
    <section className="sec sec-lime" id="contact" data-tr="zoom" aria-labelledby="contact-title">
      <div className="wrap">
        <span className="eyebrow m">07 / Contact</span>
        <h2 id="contact-title" className="contact-title d">
          <span style={{ display: "block", overflow: "hidden" }}>
            <span className="ln" style={{ display: "block" }}>
              Let&apos;s work
            </span>
          </span>
          <span style={{ display: "block", overflow: "hidden" }}>
            <span className="ln" style={{ display: "block" }}>
              together
            </span>
          </span>
        </h2>
        <div className="contact-grid">
          <div>
            <p className="c-lead">Tell me about your project, your timeline and your budget. I reply within one working day.</p>
            <ul className="c-links">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                    <span className="d">
                      {l.icon}
                      {l.label}
                      <span className="c-hint m" aria-hidden="true">Click</span>
                    </span>
                    <span className="m">
                      {l.value} <Out size={16} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
        {scene ? (
          <div className="mini-foot m">
            <span>© {new Date().getFullYear()} Osama Sharaf · Riyadh</span>
            <span className="mini-links">
              <a href={PROFILE.cv} download>
                CV
              </a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="#top">Back to top ↑</a>
            </span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
