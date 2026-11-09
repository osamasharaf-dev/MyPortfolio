"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { Close, LinkedIn, WhatsApp, Mail, Down } from "./Icons";
import { NAV, PROFILE } from "@/data/profile";

type LenisLike = { stop: () => void; start: () => void };

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const path = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [light, setLight] = useState(false);
  const home = path === "/";
  const openRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHide(y > 240 && y > last + 4);
      if (y < last - 4 || y < 240) setHide(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    let raf = 0;
    const check = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const els = document.elementsFromPoint(window.innerWidth / 2, 46);
        const sec = els.map((e) => e.closest("section, .next-page, footer")).find((e) => e && !e.closest(".header")) as HTMLElement | undefined;
        if (!sec) return;
        const m = getComputedStyle(sec).backgroundColor.match(/\d+(\.\d+)?/g);
        if (!m) return;
        const [r, g, b] = m.map(Number);
        setLight(0.2126 * r + 0.7152 * g + 0.0722 * b > 170);
      });
    };
    check();
    const late = () => setTimeout(check, 1150);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("scene:enter", check);
    window.addEventListener("wheel", late, { passive: true });
    window.addEventListener("keydown", late);
    window.addEventListener("touchend", late, { passive: true });
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("scene:enter", check);
      window.removeEventListener("wheel", late);
      window.removeEventListener("keydown", late);
      window.removeEventListener("touchend", late);
    };
  }, [path]);

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
      setTimeout(() => closeRef.current?.focus(), 50);
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        openRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`header${hide && !open ? " hide" : ""}${light ? " on-light" : ""}`}>
        <div className="wrap header-in">
          <nav className="hside" aria-label="Quick links">
            <Link href={home ? "#projects" : "/projects"} className="hlink">
              Projects
            </Link>
          </nav>
          <Logo />
          <nav className="hside" aria-label="Contact link">
            <Link href={home ? "#contact" : "/contact"} className="hlink">
              Contact
            </Link>
          </nav>
          <div className="header-r">
            <button ref={openRef} className="menu-btn" type="button" aria-label="Open menu" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}>
              <span className="lbl">Menu</span>
              <span className="bars" aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>
      <div id="site-menu" className={`menu grid-bg${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open}>
        <div className="wrap menu-top">
          <Logo />
          <button ref={closeRef} className="menu-close" type="button" onClick={() => setOpen(false)} aria-label="Close menu" tabIndex={open ? 0 : -1}>
            <Close />
          </button>
        </div>
        <div className="wrap menu-body">
          <nav aria-label="Main">
            <ul className="menu-links">
              {NAV.map((n, i) => (
                <li key={n.href}>
                  <Link href={n.href} className="d" aria-current={path === n.href ? "page" : undefined} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                    <small>0{i + 1}</small>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="menu-side">
            <span className="m" style={{ color: "var(--l)" }}>
              Say hello
            </span>
            <a href={`mailto:${PROFILE.email}`} tabIndex={open ? 0 : -1} style={{ display: "flex", gap: 12, alignItems: "center", overflowWrap: "anywhere" }}>
              <Mail /> {PROFILE.email}
            </a>
            <a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <WhatsApp /> {PROFILE.phone}
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <LinkedIn /> osama-sharaf-dev
            </a>
            <a className="btn btn-lime" href={PROFILE.cv} download tabIndex={open ? 0 : -1} style={{ alignSelf: "flex-start", marginTop: 10 }}>
              Download CV <Down />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
