"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow, Out } from "./Icons";

export type FanItem = {
  slug: string;
  name: string;
  cat: string;
  year: string;
  summary: string;
  cover: string;
  live: string;
  stack: string[];
};

type Props = {
  items: FanItem[];
  categories: readonly string[];
  aspectRatio?: number;
  tilt?: number;
  curve?: number;
  lift?: number;
  stagger?: number;
  speed?: number;
  bounce?: number;
  hoverSpeed?: number;
  radius?: number;
  viewportStart?: number;
  startOn?: string;
};

type Pose = { x: number; y: number; r: number; s: number; z: number; o: number };

export default function FanGallery({
  items,
  categories,
  aspectRatio = 1.6,
  tilt = 26,
  curve = 0.3,
  lift = 30,
  stagger = 0.09,
  speed = 0.7,
  bounce = 0.35,
  hoverSpeed = 0.28,
  radius = 18,
  viewportStart = 75,
  startOn,
}: Props) {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<number | null>(null);
  const [shown, setShown] = useState<number>(Math.floor((items.length - 1) / 2));
  const [dims, setDims] = useState({ cw: 300, ch: 188, h: 420, spread: 160 });
  const stage = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLAnchorElement | null)[]>([]);
  const opened = useRef(false);
  const reduce = useRef(false);

  const visible = useMemo(() => items.map((it, i) => ({ it, i })).filter(({ it }) => filter === "All" || it.cat === filter), [items, filter]);

  const measure = useCallback(() => {
    const W = stage.current?.clientWidth ?? 1200;
    const cw = Math.max(200, Math.min(W * 0.42, 600, window.innerHeight * (startOn ? 0.4 : 0.6)));
    const ch = cw / aspectRatio;
    const n = Math.max(visible.length, 1);
    const spread = n > 1 ? Math.min(cw * 0.6, (W - cw - 30) / (n - 1)) : 0;
    const h = ch + ch * curve * 1.4 + lift + (startOn ? 40 : 70);
    setDims({ cw, ch, h, spread });
    return { cw, ch, spread };
  }, [aspectRatio, curve, lift, visible.length]);

  const poses = useCallback(
    (act: number | null, d = dims): Pose[] => {
      const n = visible.length;
      const c = (n - 1) / 2;
      const out: Pose[] = items.map(() => ({ x: 0, y: d.ch * 0.25, r: 0, s: 0.8, z: 0, o: 0 }));
      visible.forEach(({ i }, k) => {
        const off = k - c;
        const norm = c > 0 ? off / c : 0;
        let x = off * d.spread;
        let y = norm * norm * d.ch * curve + 30;
        let r = (norm * tilt) / 2;
        let s = 1;
        let z = 100 - Math.round(Math.abs(off) * 10) + (off < 0 ? 1 : 0);
        if (act !== null) {
          const ak = visible.findIndex((v) => v.i === act);
          if (ak >= 0) {
            if (k === ak) {
              y -= lift + 10;
              r *= 0.25;
              s = 1.14;
              z = 300;
            } else {
              const dir = k > ak ? 1 : -1;
              const dist = Math.abs(k - ak);
              x += dir * d.cw * (0.34 / Math.max(1, dist * 0.6));
            }
          }
        }
        out[i] = { x, y, r, s, z, o: 1 };
      });
      return out;
    },
    [items, visible, dims, curve, tilt, lift],
  );

  const apply = useCallback(
    (ps: Pose[], dur: number, ease = "power3.out") => {
      ps.forEach((p, i) => {
        const el = cards.current[i];
        if (!el) return;
        gsap.to(el, { x: p.x, y: p.y, rotation: p.r, scale: p.s, opacity: p.o, zIndex: p.z, duration: reduce.current ? 0 : dur, ease, overwrite: "auto" });
      });
    },
    [],
  );

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);
    const d = measure();
    const dd = { ...dims, ...d };
    cards.current.forEach((el, i) => {
      if (!el) return;
      const off = i - (items.length - 1) / 2;
      gsap.set(el, { x: off * 2, y: dd.ch * 0.2 - Math.abs(off) * 2, rotation: off * 1.2, scale: 0.9, zIndex: 100 - Math.abs(off) * 10, opacity: 1 });
    });
    const open = () => {
      if (opened.current) return;
      opened.current = true;
      const fresh = measure();
      const ps = poses(null, { ...dd, ...fresh });
      const order = items.map((_, i) => i).sort((a, b) => Math.abs(a - (items.length - 1) / 2) - Math.abs(b - (items.length - 1) / 2));
      order.forEach((i, k) => {
        const el = cards.current[i];
        const p = ps[i];
        if (!el) return;
        gsap.to(el, {
          x: p.x,
          y: p.y,
          rotation: p.r,
          scale: p.s,
          opacity: p.o,
          zIndex: p.z,
          duration: reduce.current ? 0 : 0.55 / speed,
          delay: reduce.current ? 0 : Math.floor((k + 1) / 2) * stagger,
          ease: `back.out(${1 + bounce * 2.6})`,
        });
      });
    };
    if (reduce.current) {
      open();
      return;
    }
    if (startOn) {
      const on = (e: Event) => {
        if ((e as CustomEvent<{ id: string }>).detail.id === startOn) open();
      };
      window.addEventListener("scene:enter", on);
      return () => window.removeEventListener("scene:enter", on);
    }
    const st = ScrollTrigger.create({ trigger: stage.current, start: `top ${viewportStart}%`, once: true, onEnter: open });
    return () => st.kill();
  }, []);

  useEffect(() => {
    const ro = new ResizeObserver(() => {
      const d = measure();
      if (opened.current) apply(poses(active, { ...dims, ...d }), 0);
    });
    if (stage.current) ro.observe(stage.current);
    return () => ro.disconnect();
  }, [measure, apply, poses, active, dims]);

  useEffect(() => {
    if (!opened.current) return;
    apply(poses(active), active === null ? 0.5 : hoverSpeed + 0.17);
  }, [active, filter, dims]);

  const pick = (i: number) => {
    if (!opened.current) return;
    setActive(i);
    setShown(i);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const cur = visible.findIndex((v) => v.i === active);
    const next = e.key === "ArrowRight" ? Math.min(visible.length - 1, cur + 1) : Math.max(0, cur - 1);
    const target = visible[next < 0 ? 0 : next];
    if (target) {
      e.preventDefault();
      cards.current[target.i]?.focus();
    }
  };

  const cap = items[visible.some((v) => v.i === shown) ? shown : visible[Math.floor((visible.length - 1) / 2)]?.i ?? 0];
  const capPose = poses(active)[visible.some((v) => v.i === shown) ? shown : 0];
  const ax = Math.max(-260, Math.min(260, capPose?.x ?? 0));

  return (
    <div>
      <div className="filters" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className="filter"
            aria-pressed={filter === c}
            onClick={() => {
              setFilter(c);
              setActive(null);
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="fan">
        <div ref={stage} className="fan-stage" style={{ height: dims.h }} onPointerLeave={() => setActive(null)} onKeyDown={onKey}>
          {items.map((p, i) => {
            const off = !visible.some((v) => v.i === i);
            return (
              <Link
                key={p.slug}
                ref={(el) => {
                  cards.current[i] = el;
                }}
                href={`/project/${p.slug}`}
                className={`fan-card${active === i ? " on" : ""}${off ? " off" : ""}`}
                style={{ width: dims.cw, height: dims.ch, marginLeft: -dims.cw / 2, borderRadius: radius }}
                tabIndex={off ? -1 : 0}
                aria-hidden={off}
                aria-label={`${p.name}, ${p.cat}. Open case study`}
                onPointerEnter={() => pick(i)}
                onFocus={() => pick(i)}
              >
                <Image src={p.cover} alt="" width={1600} height={1000} sizes="(max-width: 1100px) 34vw, 380px" />
              </Link>
            );
          })}
        </div>

        <div className="fan-cap" style={{ ["--ax" as string]: `${ax}px` }} aria-live="polite">
          <div className="fan-cap-top">
            <h3 className="d">{cap.name}</h3>
            <span className="m">
              {cap.cat} · {cap.year}
            </span>
          </div>
          <p>{cap.summary}</p>
          <div className="fan-cap-bot">
            <span className="m cap-stack">{cap.stack.slice(0, 3).join(" / ")}</span>
            <div className="cap-btns">
              <a className="btn btn-sm btn-line-c" href={cap.live} target="_blank" rel="noopener noreferrer">
                Live site <Out />
              </a>
              <Link className="btn btn-sm btn-blue" href={`/project/${cap.slug}`}>
                Case study <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="swipe" role="list" aria-label="Projects">
        {visible.map(({ it: p }) => (
          <article key={p.slug} className="swipe-card" role="listitem">
            <Link href={`/project/${p.slug}`} className="im" style={{ display: "block" }} aria-label={`Open ${p.name}`}>
              <Image src={p.cover} alt={`${p.name} website`} width={1600} height={1000} sizes="82vw" />
            </Link>
            <div className="tx">
              <span className="m">
                {p.cat} · {p.year}
              </span>
              <h3 className="d" style={{ marginTop: 6 }}>
                {p.name}
              </h3>
              <p>{p.summary}</p>
              <div className="cap-btns">
                <a className="btn btn-sm btn-line-c" href={p.live} target="_blank" rel="noopener noreferrer">
                  Live site <Out />
                </a>
                <Link className="btn btn-sm btn-blue" href={`/project/${p.slug}`}>
                  Case study <Arrow />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
