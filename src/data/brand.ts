export type BrandFont = { name: string; role: string; google?: string; fallback: string; sample?: string };
export type BrandColor = { hex: string; name: string };
export type Brand = { fonts: BrandFont[]; colors: BrandColor[] };

export const BRANDS: Record<string, Brand> = {
  milestone: {
    fonts: [
      { name: "Comfortaa", role: "Latin · Headings and text", google: "Comfortaa:wght@700", fallback: "'Comfortaa', system-ui, sans-serif" },
      { name: "Medani", role: "Arabic · Headings and text", fallback: "'Medani', 'Segoe UI', Tahoma, sans-serif", sample: "أب" },
    ],
    colors: [
      { hex: "#00A7E7", name: "Milestone blue" },
      { hex: "#66FFFF", name: "Cyan glow" },
      { hex: "#8D8D8D", name: "Steel" },
      { hex: "#FFFFFF", name: "White" },
      { hex: "#000000", name: "Black" },
    ],
  },
  "milestone-showroom": {
    fonts: [
      { name: "Comfortaa", role: "Headings and text", google: "Comfortaa:wght@700", fallback: "'Comfortaa', system-ui, sans-serif" },
      { name: "Simple Nathalie", role: "Tagline script", fallback: "'Brush Script MT', 'Segoe Script', cursive" },
    ],
    colors: [
      { hex: "#00A7E7", name: "Milestone blue" },
      { hex: "#66FFFF", name: "Cyan" },
      { hex: "#8D8D8D", name: "Steel" },
      { hex: "#CFCFCF", name: "Mist" },
      { hex: "#FFFFFF", name: "Paper" },
      { hex: "#0A0A0A", name: "Ink" },
    ],
  },
  "digital-codes": {
    fonts: [
      { name: "Digital-7", role: "Display numerals", fallback: "ui-monospace, 'Courier New', monospace" },
      { name: "Comfortaa", role: "Headings and text", google: "Comfortaa:wght@700", fallback: "'Comfortaa', system-ui, sans-serif" },
    ],
    colors: [
      { hex: "#00A7E7", name: "Brand blue" },
      { hex: "#8D8D8D", name: "Steel" },
      { hex: "#FFFFFF", name: "White" },
      { hex: "#000000", name: "Black" },
    ],
  },
  noue: {
    fonts: [
      { name: "Big Shoulders Display", role: "Display headings", google: "Big+Shoulders+Display:wght@900", fallback: "'Big Shoulders Display', Impact, sans-serif" },
      { name: "Hanken Grotesk", role: "Body text", google: "Hanken+Grotesk:wght@600", fallback: "'Hanken Grotesk', system-ui, sans-serif" },
    ],
    colors: [
      { hex: "#D7193F", name: "Crimson" },
      { hex: "#3A0A14", name: "Wine" },
      { hex: "#F2B705", name: "Ribbon gold" },
      { hex: "#FFD95E", name: "Gold highlight" },
      { hex: "#F3D9C7", name: "Blush" },
      { hex: "#FFF6E8", name: "Cream" },
    ],
  },
  oze: {
    fonts: [
      { name: "Abril Fatface", role: "Display headings", google: "Abril+Fatface", fallback: "'Abril Fatface', Georgia, serif" },
      { name: "Jost", role: "Body text", google: "Jost:wght@500", fallback: "'Jost', system-ui, sans-serif" },
    ],
    colors: [
      { hex: "#C9973F", name: "Gold" },
      { hex: "#E3262F", name: "Seal red" },
      { hex: "#2B1A10", name: "Cocoa ink" },
      { hex: "#A8761F", name: "Deep gold" },
      { hex: "#ECC987", name: "Light gold" },
      { hex: "#FFFDF8", name: "Cream" },
    ],
  },
  ghurza: {
    fonts: [
      { name: "Typokar", role: "Arabic display", fallback: "'Segoe UI', Tahoma, sans-serif", sample: "غرزة" },
      { name: "IBM Plex Sans Arabic", role: "Arabic text", google: "IBM+Plex+Sans+Arabic:wght@600", fallback: "'IBM Plex Sans Arabic', Tahoma, sans-serif", sample: "أب" },
    ],
    colors: [
      { hex: "#F2361D", name: "Tomato" },
      { hex: "#0D1B4C", name: "Navy" },
      { hex: "#070D2A", name: "Midnight" },
      { hex: "#C8B6FF", name: "Lilac" },
      { hex: "#BDBCE1", name: "Mist" },
      { hex: "#FFF4E8", name: "Cream" },
    ],
  },
  "gd-studio": {
    fonts: [
      { name: "Syne", role: "Display headings", google: "Syne:wght@800", fallback: "'Syne', system-ui, sans-serif" },
      { name: "Manrope", role: "Body text", google: "Manrope:wght@600", fallback: "'Manrope', system-ui, sans-serif" },
    ],
    colors: [
      { hex: "#2B3BFF", name: "Electric blue" },
      { hex: "#FF5A1F", name: "Orange" },
      { hex: "#D7FF3A", name: "Lime" },
      { hex: "#FF8FCB", name: "Pink" },
      { hex: "#F4F0E6", name: "Paper" },
      { hex: "#111111", name: "Ink" },
    ],
  },
  azm: {
    fonts: [
      { name: "Syne", role: "Display headings", google: "Syne:wght@800", fallback: "'Syne', system-ui, sans-serif" },
      { name: "Inter", role: "Body text", google: "Inter:wght@500", fallback: "'Inter', system-ui, sans-serif" },
    ],
    colors: [
      { hex: "#E08560", name: "Clay" },
      { hex: "#0F0D0B", name: "Ink" },
      { hex: "#8C847A", name: "Smoke" },
      { hex: "#DCD4C9", name: "Stone" },
      { hex: "#EFE9E1", name: "Bone" },
    ],
  },
  "reem-sharaf": {
    fonts: [
      { name: "Unbounded", role: "Display headings", google: "Unbounded:wght@800", fallback: "'Unbounded', system-ui, sans-serif" },
      { name: "Manrope", role: "Body text", google: "Manrope:wght@600", fallback: "'Manrope', system-ui, sans-serif" },
      { name: "Cairo", role: "Arabic text", google: "Cairo:wght@700", fallback: "'Cairo', Tahoma, sans-serif", sample: "أب" },
      { name: "JetBrains Mono", role: "Labels and code", google: "JetBrains+Mono:wght@600", fallback: "'JetBrains Mono', monospace" },
    ],
    colors: [
      { hex: "#7B1E3A", name: "Wine" },
      { hex: "#9A2F4F", name: "Berry" },
      { hex: "#5E1631", name: "Deep wine" },
      { hex: "#1A070E", name: "Night" },
      { hex: "#E9C3CD", name: "Rose" },
      { hex: "#F7F6F6", name: "Paper" },
    ],
  },
};

export const brandFontsHref = (slug: string) => {
  const b = BRANDS[slug];
  if (!b) return null;
  const fams = b.fonts.filter((f) => f.google).map((f) => `family=${f.google}`);
  if (!fams.length) return null;
  const text = encodeURIComponent("Aaأب");
  return `https://fonts.googleapis.com/css2?${fams.join("&")}&text=${text}&display=swap`;
};
