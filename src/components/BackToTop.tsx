"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Down } from "./Icons";

type LenisLike = { scrollTo: (target: number, opts?: { duration?: number }) => void };

// Small round button on inner pages that appears after scrolling and returns to the top.
export default function BackToTop() {
  const path = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (path === "/") return;
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [path]);

  if (path === "/") return null;

  const toTop = () => {
    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    if (lenis) lenis.scrollTo(0, { duration: 1.1 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button type="button" className={`to-top${show ? " on" : ""}`} onClick={toTop} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <Down size={18} />
    </button>
  );
}
