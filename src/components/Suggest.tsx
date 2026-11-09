"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "@/data/profile";
import { PROJECTS } from "@/data/projects";

const dist = (a: string, b: string) => {
  const m = a.length;
  const n = b.length;
  const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
};

const ROUTES = [
  ...NAV.filter((n) => n.href !== "/").map((n) => ({ path: n.href, key: n.href.slice(1), label: n.label })),
  ...PROJECTS.flatMap((p) => [
    { path: `/project/${p.slug}`, key: p.slug, label: p.name },
    { path: `/project/${p.slug}`, key: p.short.toLowerCase().replace(/[^a-z0-9]+/g, "-"), label: p.name },
  ]),
];

export default function Suggest() {
  const [hit, setHit] = useState<{ path: string; label: string } | null>(null);
  useEffect(() => {
    const parts = decodeURIComponent(window.location.pathname).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").split("/").filter(Boolean);
    const last = parts[parts.length - 1] ?? "";
    if (!last) return;
    let best: { path: string; label: string; score: number } | null = null;
    for (const r of ROUTES) {
      const score = r.key.includes(last) || last.includes(r.key) ? 0 : dist(last, r.key) / Math.max(last.length, r.key.length);
      if (!best || score < best.score) best = { path: r.path, label: r.label, score };
    }
    if (best && best.score <= 0.5) setHit(best);
  }, []);
  if (!hit) return null;
  return (
    <p className="suggest m">
      Did you mean
      <Link href={hit.path}>{hit.path}</Link>?
    </p>
  );
}
