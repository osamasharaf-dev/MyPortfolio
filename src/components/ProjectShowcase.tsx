"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Arrow, Out } from "./Icons";

export type ShowcaseItem = { slug: string; name: string; cat: string; cover: string; live: string; line: string };

const pad = (n: number) => String(n).padStart(2, "0");

/*
  Projects showcase.
  Laptop, tablet and large screens: an index of project names with a live preview beside it.
  Phones: swipeable cards with progress bars and a swipe hint.
  Built on CSS transitions and native scroll-snap, so it stays light and smooth.
*/
export default function ProjectShowcase({ items, categories, initial }: { items: ShowcaseItem[]; categories: readonly string[]; initial?: string }) {
  const first = initial && items.some((i) => i.slug === initial) ? initial : items[0]?.slug;
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<string>(first);
  const [seen, setSeen] = useState<Set<string>>(() => new Set(first ? [first] : []));
  const [idx, setIdx] = useState(0);
  const [swiped, setSwiped] = useState(false);
  const track = useRef<HTMLDivElement>(null);

  const visible = useMemo(() => items.filter((it) => filter === "All" || it.cat === filter), [items, filter]);
  const cur = visible.find((v) => v.slug === active) ?? visible[0];

  const activate = (slug: string) => {
    setActive(slug);
    setSeen((s) => (s.has(slug) ? s : new Set(s).add(slug)));
  };

  // Keep the preview on a project that is still visible after filtering, and reset the phone cards.
  useEffect(() => {
    if (visible.length && !visible.some((v) => v.slug === active)) activate(visible[0].slug);
    setIdx(0);
    track.current?.scrollTo({ left: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const onScroll = () => {
    const t = track.current;
    if (!t || t.children.length === 0) return;
    const a = t.children[0] as HTMLElement;
    const b = t.children[1] as HTMLElement | undefined;
    const step = b ? b.offsetLeft - a.offsetLeft : a.offsetWidth;
    const i = Math.max(0, Math.min(visible.length - 1, Math.round(t.scrollLeft / step)));
    if (i !== idx) setIdx(i);
    if (!swiped && t.scrollLeft > 12) setSwiped(true);
  };

  if (!cur) return null;

  return (
    <div className="sc">
      <div className="filters" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button key={c} type="button" className="filter" aria-pressed={filter === c} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>

      {/* Laptop, tablet and large screens */}
      <div className="sc-desk">
        <ol className="sc-list">
          {visible.map((p, i) => (
            <li key={p.slug}>
              <Link href={`/project/${p.slug}`} className={`sc-row${p.slug === cur.slug ? " on" : ""}`} onMouseEnter={() => activate(p.slug)} onFocus={() => activate(p.slug)}>
                <span className="sc-num m">{pad(i + 1)}</span>
                <span className="sc-name d">{p.name}</span>
                <span className="sc-go" aria-hidden="true">
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <div className="sc-preview">
          <Link href={`/project/${cur.slug}`} className="sc-frame" aria-label={`Open ${cur.name}`}>
            {visible
              .filter((p) => seen.has(p.slug))
              .map((p) => (
                <Image key={p.slug} src={p.cover} alt={`${p.name} website`} width={1600} height={1000} sizes="(max-width: 1100px) 52vw, 680px" className={p.slug === cur.slug ? "on" : ""} />
              ))}
          </Link>
          <div className="sc-cap">
            <h3 className="d">{cur.name}</h3>
            <div className="sc-btns">
              <Link className="btn btn-lime btn-sm" href={`/project/${cur.slug}`}>
                Case study <Arrow />
              </Link>
              <a className="btn btn-line btn-sm" href={cur.live} target="_blank" rel="noopener noreferrer">
                Live site <Out />
              </a>
            </div>
            <p className="sc-line">{cur.line}</p>
          </div>
        </div>
      </div>

      {/* Phones */}
      <div className="sc-mob">
        <div className="sc-bars" aria-hidden="true">
          {visible.map((p, i) => (
            <i key={p.slug} className={i <= idx ? "on" : ""} />
          ))}
        </div>
        <div className="sc-track" ref={track} onScroll={onScroll} role="list" aria-label="Projects">
          {visible.map((p, i) => (
            <article key={p.slug} className="sc-card" role="listitem">
              <Link href={`/project/${p.slug}`} className="sc-img" aria-label={`Open ${p.name}`}>
                <Image src={p.cover} alt={`${p.name} website`} width={1600} height={1000} sizes="86vw" loading={i === 0 ? "eager" : "lazy"} />
              </Link>
              <h3 className="d">{p.name}</h3>
              <p className="sc-line">{p.line}</p>
              <div className="sc-btns">
                <Link className="btn btn-blue btn-sm" href={`/project/${p.slug}`}>
                  Case study <Arrow />
                </Link>
                <a className="btn btn-line-c btn-sm" href={p.live} target="_blank" rel="noopener noreferrer">
                  Live site <Out />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className={`sc-hint m${swiped ? " gone" : ""}`} aria-hidden="true">
          <span className="t">
            <span className="l">‹</span> Swipe <span className="r">›</span>
          </span>
          <b>
            {pad(idx + 1)} / {pad(visible.length)}
          </b>
        </div>
      </div>
    </div>
  );
}
