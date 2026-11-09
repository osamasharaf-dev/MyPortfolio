"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProjectImage } from "@/data/projects";
import { Arrow, ArrowLeft } from "./Icons";

export default function ProjectViewer({ images, name, live }: { images: ProjectImage[]; name: string; live: string }) {
  const [i, setI] = useState(0);
  const strip = useRef<HTMLDivElement>(null);
  const thumbs = useRef<(HTMLButtonElement | null)[]>([]);
  const img = images[i];
  const go = (n: number) => setI((n + images.length) % images.length);

  useEffect(() => {
    const t = thumbs.current[i];
    const s = strip.current;
    if (t && s) s.scrollTo({ left: t.offsetLeft - s.clientWidth / 2 + t.clientWidth / 2, behavior: "smooth" });
  }, [i]);

  return (
    <div className="viewer">
      <figure className="frame" style={{ margin: 0 }}>
        <div className="frame-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>{live.replace(/^https?:\/\//, "")}</span>
        </div>
        <div className={`frame-img${img.mobile ? " phone" : ""}`}>
          <Image key={img.src} src={img.src} alt={`${name}, screen ${i + 1} of ${images.length}${img.mobile ? " on a phone" : ""}`} width={img.width} height={img.height} sizes="(max-width: 1312px) 94vw, 1312px" priority={i === 0} style={{ animation: "pop .35s ease" }} />
        </div>
      </figure>
      {images.length > 1 ? (
        <>
          <div className="thumbs-wrap">
            <div className="thumbs" ref={strip} role="tablist" aria-label={`${name} screens`}>
              {images.map((m, k) => (
                <button
                  key={m.src}
                  ref={(el) => {
                    thumbs.current[k] = el;
                  }}
                  type="button"
                  className="thumb"
                  role="tab"
                  aria-selected={k === i}
                  aria-current={k === i}
                  aria-label={`Show screen ${k + 1}`}
                  onClick={() => setI(k)}
                >
                  <Image src={m.src} alt="" width={m.width} height={m.height} sizes="200px" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
          <div className="viewer-nav">
            <span className="m">
              {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")} · scroll the strip or use the arrows
            </span>
            <div style={{ display: "flex", gap: 10 }}>
              <button type="button" className="round" onClick={() => go(i - 1)} aria-label="Previous screen">
                <ArrowLeft />
              </button>
              <button type="button" className="round" onClick={() => go(i + 1)} aria-label="Next screen">
                <Arrow />
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
