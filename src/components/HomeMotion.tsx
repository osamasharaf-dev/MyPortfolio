"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

const q = (s: string, root: ParentNode) => Array.from(root.querySelectorAll<HTMLElement>(s));

export default function HomeMotion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    if (reduce) {
      root.classList.add("reduce");
      return;
    }
    // The hero intro itself is CSS (see the "Home intro" block in globals.css).

    const seen = new Set<string>();
    const enter = (id: string) => {
      const sc = document.querySelector<HTMLElement>(`.scene[data-scene="${id}"]`);
      if (!sc) return;
      const first = !seen.has(id);
      seen.add(id);
      const head = q(".eyebrow, .title, .head-side > *, .head > .head-btn", sc);
      if (id === "about") {
        gsap.fromTo(q(".w", sc), { opacity: 0.12, y: 24 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.05, ease: "power3.out" });
        gsap.fromTo(q(".about-text, .about-meta, .about-btns, .eyebrow", sc), { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.3 });
        gsap.fromTo(q(".sign", sc), { clipPath: "inset(-30% 100% -30% 0)" }, { clipPath: "inset(-30% 0% -30% 0)", duration: 1.6, delay: 0.5, ease: "power2.inOut" });
      } else if (id === "projects") {
        gsap.fromTo(head, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" });
        gsap.fromTo(q(".filter", sc), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, delay: 0.2 });
      } else if (id === "skills") {
        gsap.fromTo(head, { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "back.out(1.6)" });
      } else if (id === "how-i-work") {
        gsap.fromTo(head, { opacity: 0, letterSpacing: "0.2em" }, { opacity: 1, letterSpacing: "", duration: 0.9, stagger: 0.08, ease: "power3.out", clearProps: "letterSpacing" });
        gsap.fromTo(q(".work", sc), { rotateX: -80, y: 50, opacity: 0, transformOrigin: "50% 0%" }, { rotateX: 0, y: 0, opacity: 1, duration: 0.85, stagger: 0.07, ease: "power3.out", delay: 0.1 });
      } else if (id === "experience") {
        gsap.fromTo(head, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" });
        const fill = sc.querySelector(".tl-fill");
        const vertical = window.matchMedia("(max-width: 759px)").matches;
        if (fill) gsap.fromTo(fill, vertical ? { scaleY: 0, scaleX: 1 } : { scaleX: 0, scaleY: 1 }, { scaleX: 1, scaleY: 1, duration: 1.4, ease: "power2.inOut", delay: 0.2 });
        gsap.fromTo(q(".tl-item", sc), { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.25, delay: 0.35, ease: "power3.out" });
      } else if (id === "education") {
        gsap.fromTo(head, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 });
        gsap.fromTo(q(".edu-info > *", sc), { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.7, stagger: 0.07, delay: 0.15 });
        gsap.fromTo(q(".cert", sc), { yPercent: 60, rotation: -12 }, { yPercent: 0, rotation: -3, duration: 1.2, delay: 0.3, ease: "back.out(1.4)" });
      } else if (id === "contact") {
        gsap.fromTo(q(".contact-title .ln", sc), { yPercent: 110 }, { yPercent: 0, duration: 1, stagger: 0.12, ease: "power4.out" });
        gsap.fromTo(q(".c-lead, .c-links li", sc), { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.7, stagger: 0.08, delay: 0.25 });
        gsap.fromTo(q(".form, .form-open", sc), { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9, delay: 0.35, ease: "power3.out" });
      }
      if (first) sc.classList.add("entered");
    };
    const onEnter = (e: Event) => enter((e as CustomEvent<{ id: string }>).detail.id);
    window.addEventListener("scene:enter", onEnter);
    return () => window.removeEventListener("scene:enter", onEnter);
  }, []);
  return null;
}
