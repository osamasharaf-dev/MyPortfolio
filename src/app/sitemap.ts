import type { MetadataRoute } from "next";
import { SITE_URL, NAV } from "@/data/profile";
import { PROJECTS } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = NAV.map((n) => ({
    url: `${SITE_URL}${n.href === "/" ? "" : n.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: n.href === "/" ? 1 : 0.8,
    images: n.href === "/" ? [`${SITE_URL}/images/osama.webp`] : undefined,
  }));
  const projects = PROJECTS.map((p) => ({
    url: `${SITE_URL}/project/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: p.images.slice(0, 6).map((i) => `${SITE_URL}${i.src}`),
  }));
  return [...pages, ...projects];
}
