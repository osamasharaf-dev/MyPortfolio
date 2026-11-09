"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Skill } from "@/data/skills";

type Spot = { x: number; y: number; r: number };
type Geo = { s: number; H: number; spots: Spot[] };

const rng = (seed: number) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

function layout(W: number, n: number, maxH = Infinity): Geo {
  let s = W < 480 ? 46 : W < 760 ? 58 : W < 1100 ? 70 : 86;
  const gap = W < 480 ? 6 : 9;
  const build = (size: number) => {
    const cap = Math.max(4, Math.floor((W * 0.94 + gap) / (size + gap)));
    const rows: number[] = [];
    let left = n;
    let take = cap;
    while (left > 0) {
      const k = Math.min(left, Math.max(1, take));
      rows.push(k);
      left -= k;
      take = Math.max(Math.ceil(cap / 2), take - 1);
    }
    return { rows, H: size + (rows.length - 1) * size * 0.84 + 40 };
  };
  let b = build(s);
  while (b.H > maxH && s > 34) {
    s -= 2;
    b = build(s);
  }
  const rise = s * 0.84;
  const H = Math.max(b.H, Number.isFinite(maxH) ? maxH : 0);
  const rand = rng(17);
  const spots: Spot[] = [];
  b.rows.forEach((k, r) => {
    const rowW = k * s + (k - 1) * gap;
    const x0 = (W - rowW) / 2;
    const y = H - s - r * rise;
    for (let j = 0; j < k; j++) {
      spots.push({ x: x0 + j * (s + gap) + (rand() - 0.5) * 6, y: y + (rand() - 0.5) * 6, r: (rand() - 0.5) * (r === 0 ? 14 : 24) });
    }
  });
  return { s, H, spots };
}

export default function SkillRain({ skills, startOn }: { skills: Skill[]; startOn?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const chips = useRef<(HTMLButtonElement | null)[]>([]);
  const [live, setLive] = useState(false);
  const [geo, setGeo] = useState<Geo | null>(null);
  const done = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = box.current;
    if (!el) return;
    const cleanup: (() => void)[] = [];
    const measure = () => {
      const fh = startOn ? (el.parentElement?.clientHeight ?? 0) - 8 : Infinity;
      return layout(el.clientWidth, skills.length, fh > 120 ? fh : Infinity);
    };
    const place = (g: Geo, animate: boolean) => {
      const rand = rng(29);
      const order = skills.map((_, i) => i).sort(() => rand() - 0.5);
      chips.current.forEach((c, i) => {
        if (!c) return;
        const p = g.spots[i];
        c.style.setProperty("--r", `${p.r}deg`);
        if (!animate) gsap.set(c, { x: p.x, y: p.y, rotation: p.r, opacity: 1 });
        else gsap.set(c, { x: p.x + (rand() - 0.5) * 120, y: -g.H - 200 - rand() * 500, rotation: (rand() - 0.5) * 120, opacity: 1 });
      });
      if (!animate) {
        done.current = true;
        return;
      }
      order.forEach((i, k) => {
        const c = chips.current[i];
        const p = g.spots[i];
        if (!c) return;
        const d = k * 0.045;
        gsap.to(c, { x: p.x, duration: 1.1 + rand() * 0.4, delay: d, ease: "power1.out" });
        gsap.to(c, { y: p.y, duration: 1.1 + rand() * 0.4, delay: d, ease: "bounce.out" });
        gsap.to(c, {
          rotation: p.r,
          duration: 1.3,
          delay: d,
          ease: "power2.out",
          onComplete: () => {
            done.current = true;
          },
        });
      });
    };
    const start = () => {
      const g = measure();
      setGeo(g);
      setLive(true);
      requestAnimationFrame(() => place(g, !reduce));
    };
    if (startOn) {
      let fired = false;
      const on = (e: Event) => {
        if ((e as CustomEvent<{ id: string }>).detail.id === startOn && !fired) {
          fired = true;
          start();
        }
      };
      window.addEventListener("scene:enter", on);
      cleanup.push(() => window.removeEventListener("scene:enter", on));
    } else if (reduce) {
      start();
    } else {
      const st = ScrollTrigger.create({ trigger: el, start: "top 78%", once: true, onEnter: start });
      cleanup.push(() => st.kill());
    }
    const ro = new ResizeObserver(() => {
      if (!done.current || !box.current) return;
      const ng = measure();
      setGeo(ng);
      chips.current.forEach((c, i) => {
        if (!c) return;
        const p = ng.spots[i];
        c.style.setProperty("--r", `${p.r}deg`);
        gsap.to(c, { x: p.x, y: p.y, rotation: p.r, duration: 0.5, ease: "power2.out" });
      });
    });
    ro.observe(el);
    return () => {
      ro.disconnect();
      cleanup.forEach((f) => f());
    };
  }, [skills, startOn]);

  return (
    <div className="rain-wrap">
      <div ref={box} className={`rain${live ? " live" : ""}`} style={live && geo ? { height: geo.H, ["--cs" as string]: `${geo.s}px` } : undefined} role="list" aria-label="Technical skills">
        {skills.map((k, i) => (
          <button
            key={k.key}
            ref={(el) => {
              chips.current[i] = el;
            }}
            type="button"
            className="chip"
            role="listitem"
            aria-label={`${k.name}, ${k.type}`}
          >
            <img src={`/icons/${k.key}.svg`} alt="" width={44} height={44} loading="lazy" decoding="async" />
            <span className="tip" aria-hidden="true">
              <b>{k.name}</b>
              <span>{k.type}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
