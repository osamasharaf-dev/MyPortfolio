"use client";

import { useEffect, useState } from "react";

const ALL = [
  { id: "overview", label: "Overview" },
  { id: "story", label: "Story" },
  { id: "style", label: "Colours & fonts" },
];

// Three dots on the side of a project page: where you are, and a tap to jump between the parts.
export default function CaseDots({ hasStyle }: { hasStyle: boolean }) {
  const items = hasStyle ? ALL : ALL.slice(0, 2);
  const [active, setActive] = useState(items[0].id);

  useEffect(() => {
    const els = items.map((it) => document.getElementById(it.id)).filter((e): e is HTMLElement => Boolean(e));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasStyle]);

  return (
    <nav className="case-dots" aria-label="Page sections">
      {items.map((it) => (
        <a key={it.id} href={`#${it.id}`} className={active === it.id ? "on" : ""} aria-current={active === it.id ? "true" : undefined}>
          <span className="m">{it.label}</span>
        </a>
      ))}
    </nav>
  );
}
