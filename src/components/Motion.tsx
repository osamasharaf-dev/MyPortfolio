"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const q = <T extends Element = HTMLElement>(s: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(s));

export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      root.classList.add("reduce");
      return;
    }
    window.scrollTo(0, 0);
    const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o: object) => void } }).__lenis;
    lenis?.scrollTo(0, { immediate: true });

    const ctx = gsap.context(() => {
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (hero) {
        const intro = root.classList.contains("no-intro") ? 0.1 : 0.95;
        const tl = gsap.timeline({ delay: intro, defaults: { ease: "power3.out" } });
        const letters = q(".pf-l", hero);
        const cur = hero.querySelector(".pf-cur");
        tl.set(cur, { opacity: 1 })
          .to(letters, { opacity: 1, duration: 0.01, stagger: 0.075, ease: "none" })
          .to(cur, { opacity: 0, duration: 0.2, repeat: 3, yoyo: true }, ">")
          .to(hero.querySelector(".photo-in"), { opacity: 1, y: 0, duration: 1, ease: "expo.out" }, letters.length * 0.075 - 0.2)
          .to(q(".hero-l > *", hero), { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, startAt: { y: 30 } }, "-=0.6")
          .to(q(".hero-r > *", hero), { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, startAt: { y: 30 } }, "<0.1")
          .to(q(".chipo", hero), { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, startAt: { scale: 0.6 }, ease: "back.out(2)" }, "<0.2");

        gsap.to(q(".hero-l, .hero-r, .chipo, .pf", hero), {
          y: -90,
          opacity: 0,
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom 30%", scrub: true },
        });

        const mm = gsap.matchMedia();
        mm.add("(min-width: 1280px)", () => {
          const photo = hero.querySelector<HTMLElement>(".photo");
          const slot = document.querySelector<HTMLElement>(".about-slot");
          if (!photo || !slot) return;
          root.classList.add("travel");
          const calc = () => {
            const hr = hero.getBoundingClientRect();
            const sr = slot.getBoundingClientRect();
            const scale = sr.width / photo.offsetWidth;
            return { x: sr.left - hr.left - photo.offsetLeft, y: sr.top - hr.top - photo.offsetTop, scale };
          };
          gsap.to(photo, {
            x: () => calc().x,
            y: () => calc().y,
            scale: () => calc().scale,
            ease: "none",
            scrollTrigger: { trigger: slot, start: "top bottom", end: "top 18%", scrub: 0.6, invalidateOnRefresh: true },
          });
          return () => root.classList.remove("travel");
        });
      }

      q("[data-words]").forEach((el) => {
        gsap.fromTo(q(".w", el), { opacity: 0.15 }, { opacity: 1, stagger: 0.08, ease: "none", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true } });
      });

      q("[data-sign]").forEach((el) => {
        gsap.fromTo(el, { clipPath: "inset(-20% 100% -20% 0)" }, { clipPath: "inset(-20% 0% -20% 0)", duration: 1.8, ease: "power2.inOut", scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      });

      q("[data-rise]").forEach((el) => {
        gsap.from(el.children, { y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      });

      q("[data-tr='circle']").forEach((el) => {
        gsap.fromTo(el, { clipPath: "circle(18% at 50% 60%)" }, { clipPath: "circle(110% at 50% 60%)", ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "top 10%", scrub: true } });
      });

      q("[data-tr='lift']").forEach((el) => {
        gsap.fromTo(el, { borderRadius: "90px 90px 0 0", scale: 0.93 }, { borderRadius: "0px 0px 0 0", scale: 1, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "top 20%", scrub: true } });
      });

      q("[data-tr='flip']").forEach((el) => {
        gsap.fromTo(
          q(".work", el),
          { rotateX: -75, y: 60, opacity: 0 },
          { rotateX: 0, y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: { each: 0.08, grid: "auto", from: "start" }, scrollTrigger: { trigger: el.querySelector(".works"), start: "top 82%", once: true } },
        );
      });

      q("[data-tr='line']").forEach((el) => {
        const fill = el.querySelector(".tl-fill");
        const vertical = window.matchMedia("(max-width: 759px)").matches;
        if (fill) gsap.fromTo(fill, vertical ? { scaleY: 0 } : { scaleX: 0 }, { scaleX: 1, scaleY: 1, ease: "none", scrollTrigger: { trigger: el.querySelector(".timeline"), start: "top 75%", end: "bottom 60%", scrub: true } });
        q(".tl-item", el).forEach((it, i) => {
          gsap.from(it, { y: 50, opacity: 0, duration: 0.9, delay: i * 0.12, ease: "power3.out", scrollTrigger: { trigger: el.querySelector(".timeline"), start: "top 75%", once: true } });
        });
      });

      q("[data-tr='curtain']").forEach((el) => {
        gsap.fromTo(el, { clipPath: "inset(0% 22% 0% 22% round 40px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "top 25%", scrub: true } });
        const cert = el.querySelector(".cert");
        if (cert) gsap.fromTo(cert, { yPercent: 55, rotation: -9 }, { yPercent: 0, rotation: -3, ease: "none", scrollTrigger: { trigger: el.querySelector(".folder"), start: "top 90%", end: "center 55%", scrub: true } });
      });

      q("[data-tr='zoom']").forEach((el) => {
        gsap.fromTo(el, { scale: 0.88, borderRadius: "70px" }, { scale: 1, borderRadius: "0px", ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "top 30%", scrub: true } });
        gsap.from(q(".contact-title .ln", el), { yPercent: 110, duration: 1, stagger: 0.12, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 60%", once: true } });
      });
    });

    const t = setTimeout(() => ScrollTrigger.refresh(), 400);
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, []);
  return null;
}
