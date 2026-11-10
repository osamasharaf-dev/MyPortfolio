"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectImage } from "@/data/projects";

export default function ProjectViewer({ images, name }: { images: ProjectImage[]; name: string; live?: string }) {
  const [i, setI] = useState(0);
  const img = images[i];

  return (
    <div className="viewer">
      <figure className="stage" style={{ margin: 0 }}>
        <div className={`stage-img${img.mobile ? " phone" : ""}`}>
          <Image key={img.src} src={img.src} alt={`${name}, screen ${i + 1} of ${images.length}${img.mobile ? " on a phone" : ""}`} width={img.width} height={img.height} sizes="(max-width: 759px) 100vw, (max-width: 1312px) 94vw, 1200px" priority={i === 0} />
        </div>
      </figure>
      {images.length > 1 ? (
        <div className="thumb-grid" role="tablist" aria-label={`${name} screens`}>
          {images.map((m, k) => (
            <button key={m.src} type="button" className="thumb" role="tab" aria-selected={k === i} aria-current={k === i} aria-label={`Show screen ${k + 1}`} onClick={() => setI(k)}>
              <Image src={m.src} alt="" width={m.width} height={m.height} sizes="(max-width: 759px) 30vw, 180px" loading="lazy" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
