"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Close } from "./Icons";

export default function CertZoom({ src, width, height }: { src: string; width: number; height: number }) {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    close.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button ref={btn} type="button" className="cert" onClick={() => setOpen(true)} aria-label="Enlarge the Bachelor of Information Technology certificate">
        <Image src={src} alt="Bachelor of Information Technology certificate, University of Kalamoon" width={width} height={height} sizes="(max-width: 1279px) 90vw, 640px" loading="lazy" />
      </button>
      {open ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Certificate" onClick={() => setOpen(false)}>
          <button ref={close} type="button" aria-label="Close" onClick={() => setOpen(false)}>
            <Close />
          </button>
          <Image src={src} alt="Bachelor of Information Technology certificate, University of Kalamoon" width={width} height={height} sizes="100vw" onClick={(e) => e.stopPropagation()} />
        </div>
      ) : null}
    </>
  );
}
