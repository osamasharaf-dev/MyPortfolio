"use client";

import { useState } from "react";
import type { Brand } from "@/data/brand";

const dark = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 140;
};

export default function BrandGuide({ brand, href }: { brand: Brand; href: string | null }) {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      setCopied(null);
    }
  };
  return (
    <>
      {href ? <link rel="stylesheet" href={href} precedence="default" /> : null}
      <div className="bg-grid">
        <div>
          <h3 className="m bg-h">Typography</h3>
          <ul className="fonts">
            {brand.fonts.map((f) => (
              <li key={f.name} className="font">
                <span className="aa" style={{ fontFamily: f.fallback }} aria-hidden="true">
                  {f.sample ?? "Aa"}
                </span>
                <span>
                  <b>{f.name}</b>
                  <span className="m">{f.role}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="m bg-h">Colour palette</h3>
          <ul className="swatches">
            {brand.colors.map((c) => (
              <li key={c.hex}>
                <button type="button" className="swatch" onClick={() => copy(c.hex)} aria-label={`${c.name} ${c.hex}, copy`}>
                  <span className="chipc" style={{ background: c.hex, color: dark(c.hex) ? "#fff" : "#0b1a66" }}>
                    {copied === c.hex ? "Copied" : ""}
                  </span>
                  <b>{c.name}</b>
                  <span className="m">{c.hex}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="m" style={{ marginTop: 14, opacity: 0.7 }}>
            Tap a colour to copy its code.
          </p>
        </div>
      </div>
    </>
  );
}
