"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("cursor-on");
    let x = innerWidth / 2;
    let y = innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;
    let shown = false;
    const d = dot.current!;
    const r = ring.current!;
    const loop = () => {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      d.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!shown) {
        shown = true;
        rx = x;
        ry = y;
        root.classList.add("cursor-shown");
      }
    };
    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      const field = t.closest("input, textarea");
      const hit = t.closest<HTMLElement>("a, button, [role='option'], summary, label, .chip");
      root.classList.toggle("cursor-text", Boolean(field));
      root.classList.toggle("cursor-hover", Boolean(hit) && !field);
      let text = "";
      if (hit && !field) {
        if (hit.classList.contains("fan-card") || hit.closest(".pcard, .swipe-card")) text = "View";
        else if (hit.classList.contains("chip")) text = "";
        else if (hit.getAttribute("href")?.startsWith("http") || hit.hasAttribute("download")) text = "Open";
        else text = "Click";
      }
      if (label.current) label.current.textContent = text;
      root.classList.toggle("cursor-label", Boolean(text) && Boolean(hit?.classList.contains("fan-card") || hit?.closest(".pcard, .swipe-card, .cert, .thumb")));
    };
    const down = () => root.classList.add("cursor-down");
    const up = () => root.classList.remove("cursor-down");
    const leave = () => root.classList.remove("cursor-shown");
    const enter = () => shown && root.classList.add("cursor-shown");
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("pointerleave", leave);
    document.documentElement.addEventListener("pointerenter", enter);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("cursor-on", "cursor-shown", "cursor-hover", "cursor-text", "cursor-down", "cursor-label");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.documentElement.removeEventListener("pointerenter", enter);
    };
  }, []);

  return (
    <div className="cursor" aria-hidden="true">
      <div className="cur-ring" ref={ring}>
        <span className="cur-in">
          <span className="cur-label" ref={label} />
        </span>
      </div>
      <div className="cur-dot" ref={dot}>
        <span />
      </div>
    </div>
  );
}
