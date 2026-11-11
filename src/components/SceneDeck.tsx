"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Scene = { id: string; label: string };
type Trans = (inc: HTMLElement, out: HTMLElement) => gsap.core.Timeline;

const D = 1.05;
const EASE = "power3.inOut";

const TRANSITIONS: Record<string, Trans> = {
  about: (inc, out) =>
    gsap
      .timeline()
      .fromTo(inc, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: D, ease: EASE })
      .fromTo(out, { scale: 1, yPercent: 0 }, { scale: 0.94, yPercent: -6, duration: D, ease: EASE }, 0),
  projects: (inc, out) =>
    gsap
      .timeline()
      .fromTo(inc, { clipPath: "circle(0% at 50% 55%)" }, { clipPath: "circle(120% at 50% 55%)", duration: D * 1.1, ease: "power2.inOut" })
      .fromTo(out, { scale: 1 }, { scale: 0.9, duration: D * 1.1, ease: EASE }, 0),
  skills: (inc, out) =>
    gsap
      .timeline()
      .fromTo(inc, { xPercent: 100 }, { xPercent: 0, duration: D, ease: EASE })
      .fromTo(out, { xPercent: 0 }, { xPercent: -35, duration: D, ease: EASE }, 0),
  "how-i-work": (inc, out) =>
    gsap
      .timeline()
      .fromTo(inc, { clipPath: "polygon(0% 0%, 0% 0%, -40% 100%, 0% 100%)" }, { clipPath: "polygon(0% 0%, 140% 0%, 100% 100%, 0% 100%)", duration: D * 1.1, ease: EASE })
      .fromTo(out, { xPercent: 0 }, { xPercent: 12, duration: D * 1.1, ease: EASE }, 0),
  experience: (inc, out) =>
    gsap
      .timeline()
      .fromTo(inc, { scale: 1.25, opacity: 0 }, { scale: 1, opacity: 1, duration: D, ease: "power2.out" })
      .fromTo(out, { scale: 1, opacity: 1 }, { scale: 0.85, opacity: 0, duration: D * 0.8, ease: "power2.in" }, 0),
  education: (inc, out) =>
    gsap
      .timeline()
      .fromTo(inc, { clipPath: "inset(0% 50% 0% 50%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: D, ease: EASE })
      .fromTo(out, { yPercent: 0 }, { yPercent: -10, duration: D, ease: EASE }, 0),
  contact: (inc, out) =>
    gsap
      .timeline()
      .fromTo(inc, { yPercent: 100, borderRadius: "70px 70px 0 0" }, { yPercent: 0, borderRadius: "0px 0px 0 0", duration: D, ease: EASE })
      .fromTo(out, { yPercent: 0 }, { yPercent: -25, duration: D, ease: EASE }, 0),
};

const fallback: Trans = (inc, out) =>
  gsap
    .timeline()
    .fromTo(inc, { opacity: 0 }, { opacity: 1, duration: 0.6 })
    .to(out, { opacity: 0, duration: 0.6 }, 0);

function flyPhoto(from: HTMLElement | null, to: HTMLElement | null, reverse: boolean) {
  if (!from || !to) return;
  const a = (reverse ? to : from).getBoundingClientRect();
  const b = (reverse ? from : to).getBoundingClientRect();
  if (!a.width || !b.width) return;
  const img = (reverse ? to : from).querySelector("img");
  if (!img) return;
  const clone = img.cloneNode(true) as HTMLImageElement;
  clone.removeAttribute("srcset");
  clone.src = img.currentSrc || img.src;
  Object.assign(clone.style, { position: "fixed", left: `${a.left}px`, top: `${a.top}px`, width: `${a.width}px`, height: `${a.height}px`, zIndex: "55", pointerEvents: "none", margin: "0" });
  document.body.appendChild(clone);
  const target = reverse ? from : to;
  const source = reverse ? to : from;
  gsap.set([target, source], { opacity: 0 });
  gsap.to(clone, {
    left: b.left,
    top: b.top,
    width: b.width,
    height: b.height,
    duration: D,
    ease: EASE,
    onComplete: () => {
      gsap.set([target, source], { opacity: 1 });
      clone.remove();
    },
  });
}

export default function SceneDeck({ scenes, children }: { scenes: Scene[]; children: React.ReactNode }) {
  const [cur, setCur] = useState(0);
  const curRef = useRef(0);
  const busy = useRef(false);
  const lockUntil = useRef(0);
  const deck = useRef<HTMLDivElement>(null);
  const els = useRef<HTMLElement[]>([]);
  const reduce = useRef(false);
  const fitRef = useRef<((sc: HTMLElement | undefined) => void) | null>(null);
  const kids = Children.toArray(children);

  const announce = (id: string) => window.dispatchEvent(new CustomEvent("scene:enter", { detail: { id } }));

  const goTo = useCallback((to: number) => {
    const from = curRef.current;
    if (busy.current || to === from || to < 0 || to >= scenes.length) return;
    const inc = els.current[to];
    const out = els.current[from];
    if (!inc || !out) return;
    inc.classList.add("live");
    if (!inc.dataset.fit) fitRef.current?.(inc);
    busy.current = true;
    curRef.current = to;
    setCur(to);
    const forward = to > from;
    const done = () => {
      out.classList.remove("live");
      gsap.set(out, { visibility: "hidden", clearProps: "transform,clipPath,opacity,borderRadius,scale,xPercent,yPercent,zIndex" });
      gsap.set(inc, { clearProps: "transform,clipPath,opacity,borderRadius,scale,xPercent,yPercent", zIndex: 2 });
      out.scrollTop = 0;
      busy.current = false;
      lockUntil.current = performance.now() + 380;
      announce(scenes[to].id);
    };
    gsap.set(inc, { visibility: "visible" });
    if (reduce.current) {
      gsap.set(inc, { zIndex: 2 });
      done();
      history.replaceState(null, "", to === 0 ? " " : `#${scenes[to].id}`);
      return;
    }
    if (scenes[from].id === "top" && scenes[to].id === "about") {
      flyPhoto(out.querySelector(".photo"), inc.querySelector(".about-slot"), false);
    } else if (scenes[from].id === "about" && scenes[to].id === "top") {
      flyPhoto(inc.querySelector(".photo"), out.querySelector(".about-slot"), true);
    }
    if (forward) {
      gsap.set(inc, { zIndex: 3 });
      gsap.set(out, { zIndex: 2 });
      const tl = (TRANSITIONS[scenes[to].id] ?? fallback)(inc, out);
      tl.eventCallback("onComplete", done);
    } else {
      gsap.set(out, { zIndex: 3 });
      gsap.set(inc, { zIndex: 2 });
      const tl = (TRANSITIONS[scenes[from].id] ?? fallback)(out, inc);
      tl.progress(1).pause();
      tl.eventCallback("onReverseComplete", done);
      tl.reverse();
    }
    history.replaceState(null, "", to === 0 ? " " : `#${scenes[to].id}`);
  }, [scenes]);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.classList.add("deck-on");
    els.current = Array.from(deck.current?.querySelectorAll<HTMLElement>(":scope > .scene") ?? []);
    els.current.forEach((el, i) => gsap.set(el, { visibility: i === 0 ? "visible" : "hidden", zIndex: i === 0 ? 2 : 1 }));
    const warm = () => root.classList.add("warm");
    const idle = (window as unknown as { requestIdleCallback?: (f: () => void, o?: object) => number }).requestIdleCallback;
    const warmT = window.setTimeout(() => (idle ? idle(warm, { timeout: 2000 }) : warm()), 2500);
    const start = scenes.findIndex((s) => `#${s.id}` === window.location.hash);
    if (start > 0) {
      gsap.set(els.current[0], { visibility: "hidden" });
      els.current[0].classList.remove("live");
      els.current[start].classList.add("live");
      gsap.set(els.current[start], { visibility: "visible", zIndex: 2 });
      curRef.current = start;
      setCur(start);
      setTimeout(() => announce(scenes[start].id), 300);
    } else {
      announce("top");
    }

    const fitOne = (sc: HTMLElement | undefined) => {
      if (!sc) return;
      const sec = sc.firstElementChild as HTMLElement | null;
      const inner = sec?.querySelector<HTMLElement>(":scope > .wrap");
      if (!sec || !inner || sec.classList.contains("hero")) return;
      inner.style.zoom = "";
      const have = sc.clientHeight;
      let z = 1;
      for (let k = 0; k < 5 && sc.scrollHeight > have + 1 && z > 0.6; k++) {
        const body = inner.getBoundingClientRect().height;
        const room = have - (sc.scrollHeight - body);
        z = Math.max(0.6, Math.floor(z * Math.min(1, room / body) * 100 - 1) / 100);
        inner.style.zoom = String(z);
      }
      sc.dataset.fit = "1";
    };
    fitRef.current = fitOne;
    const fit = () => {
      els.current.forEach((sc) => delete sc.dataset.fit);
      fitOne(els.current[curRef.current]);
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("load", fit);
    let rt = 0;
    const onResize = () => {
      clearTimeout(rt);
      rt = window.setTimeout(fit, 150);
    };
    window.addEventListener("resize", onResize);
    deck.current?.querySelectorAll("img").forEach((im) => im.addEventListener("load", onResize));

    const canScroll = (dir: number) => {
      const el = els.current[curRef.current];
      if (!el) return false;
      if (el.scrollHeight <= el.clientHeight + 2) return false;
      return dir > 0 ? el.scrollTop + el.clientHeight < el.scrollHeight - 2 : el.scrollTop > 2;
    };
    let acc = 0;
    let accT = 0;
    const onWheel = (e: WheelEvent) => {
      if (root.style.overflow === "hidden" && document.querySelector(".menu.open")) return;
      if ((e.target as HTMLElement).closest(".opts, .sheet, .thumbs")) return;
      const dir = Math.sign(e.deltaY);
      if (!dir || canScroll(dir)) return;
      const now = performance.now();
      if (busy.current || now < lockUntil.current) {
        lockUntil.current = Math.max(lockUntil.current, now + 120);
        return;
      }
      if (now - accT > 200) acc = 0;
      accT = now;
      acc += e.deltaY;
      if (Math.abs(acc) > 40) {
        acc = 0;
        goTo(curRef.current + dir);
      }
    };
    let ty = 0;
    let tx = 0;
    let startCan = { up: false, down: false };
    const onTouchStart = (e: TouchEvent) => {
      ty = e.touches[0].clientY;
      tx = e.touches[0].clientX;
      startCan = { up: canScroll(-1), down: canScroll(1) };
    };
    const onTouchEnd = (e: TouchEvent) => {
      if ((e.target as HTMLElement).closest(".opts, .sheet, .thumbs, .lightbox")) return;
      const dy = ty - e.changedTouches[0].clientY;
      const dx = tx - e.changedTouches[0].clientX;
      if (Math.abs(dy) < 50 || Math.abs(dx) > Math.abs(dy)) return;
      const dir = dy > 0 ? 1 : -1;
      if ((dir > 0 && startCan.down) || (dir < 0 && startCan.up)) return;
      goTo(curRef.current + dir);
    };
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("input, textarea, select, [role='listbox'], .select-btn") || document.querySelector(".menu.open, .lightbox")) return;
      if (["ArrowDown", "PageDown"].includes(e.key) || (e.key === " " && !t.closest("button, a"))) {
        if (canScroll(1)) {
          e.preventDefault();
          els.current[curRef.current]?.scrollBy({ top: window.innerHeight * 0.5, behavior: "smooth" });
          return;
        }
        e.preventDefault();
        goTo(curRef.current + 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        if (canScroll(-1)) {
          e.preventDefault();
          els.current[curRef.current]?.scrollBy({ top: -window.innerHeight * 0.5, behavior: "smooth" });
          return;
        }
        e.preventDefault();
        goTo(curRef.current - 1);
      } else if (e.key === "Home") {
        goTo(0);
      } else if (e.key === "End") {
        goTo(scenes.length - 1);
      }
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      const href = a?.getAttribute("href") || "";
      if (!href.startsWith("#") && !href.startsWith("/#")) return;
      const id = href.split("#")[1];
      const i = scenes.findIndex((s) => s.id === id);
      if (i >= 0) {
        e.preventDefault();
        goTo(i);
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      clearTimeout(warmT);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", fit);
      root.classList.remove("deck-on");
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [goTo, scenes]);

  return (
    <>
      <div className="deck" ref={deck}>
        {kids.map((k, i) => (
          <div className={i === 0 ? "scene live" : "scene"} key={scenes[i]?.id ?? i} data-scene={scenes[i]?.id} inert={i !== cur}>
            {k}
          </div>
        ))}
      </div>
      <nav className="dots" aria-label="Sections">
        {scenes.map((s, i) => (
          <button key={s.id} type="button" className={i === cur ? "on" : ""} aria-current={i === cur ? "true" : undefined} onClick={() => goTo(i)}>
            <span className="m">{s.label}</span>
          </button>
        ))}
      </nav>
      <div className={`counter m${cur === 0 ? " away" : ""}`} aria-hidden="true">
        <b>{String(cur + 1).padStart(2, "0")}</b> / {String(scenes.length).padStart(2, "0")}
        {cur < scenes.length - 1 ? <span className="hint">Scroll</span> : null}
      </div>
    </>
  );
}
