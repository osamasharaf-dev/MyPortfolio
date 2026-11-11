"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectImage } from "@/data/projects";

/*
  All screens are mounted once and stacked; a thumbnail only swaps which one is visible.
  No remount means no layout jump, and every screen is already loaded, so switching is instant.
*/
export default function ProjectViewer({ images, name }: { images: ProjectImage[]; name: string; live?: string }) {
  const [i, setI] = useState(0);

  return (
    <div className="viewer">
      <div className="stage">
        {images.map((m, k) => (
          <Image
            key={m.src}
            src={m.src}
            alt={`${name}, screen ${k + 1} of ${images.length}${m.mobile ? " on a phone" : ""}`}
            width={m.width}
            height={m.height}
            sizes="(max-width: 759px) 100vw, 1200px"
            priority={k === 0}
            loading={k === 0 ? undefined : "eager"}
            fetchPriority={k === 0 ? "high" : "low"}
            className={k === i ? "on" : ""}
            aria-hidden={k !== i}
          />
        ))}
      </div>
      {images.length > 1 ? (
        <div className="thumb-row" role="tablist" aria-label={`${name} screens`}>
          {images.map((m, k) => (
            <button key={m.src} type="button" className="thumb" role="tab" aria-selected={k === i} aria-current={k === i} aria-label={`Show screen ${k + 1}`} onClick={() => setI(k)}>
              <Image src={m.src} alt="" width={m.width} height={m.height} sizes="96px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
