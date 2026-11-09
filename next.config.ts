import type { NextConfig } from "next";

const WHATSAPP = "https://wa.me/966508117086?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20a%20project.";

const slugAliases: Record<string, string> = {
  "milestone-ecommerce": "milestone",
  "milestone-store": "milestone",
  store: "milestone",
  "milestone-channels": "milestone-showroom",
  showroom: "milestone-showroom",
  channels: "milestone-showroom",
  "digital-codes-for-trading": "digital-codes",
  digitalcodes: "digital-codes",
  dc: "digital-codes",
  gd: "gd-studio",
  "gd-graphic-design": "gd-studio",
  ghurza: "ghurza",
  gurza: "ghurza",
  "ghurza-couture": "ghurza",
  noue: "noue",
  "noue-chocolate": "noue",
  chocolate: "noue",
  azm: "azm",
  "azm-studio": "azm",
  reem: "reem-sharaf",
  "reemsharaf": "reem-sharaf",
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [96, 160, 256, 384],
  },
  async redirects() {
    const shortcuts = [
      { source: "/pr/:slug", destination: "/project/:slug", permanent: true },
      { source: "/p/:slug", destination: "/project/:slug", permanent: true },
      { source: "/projects/:slug", destination: "/project/:slug", permanent: true },
      { source: "/work/:slug", destination: "/project/:slug", permanent: true },
      { source: "/case/:slug", destination: "/project/:slug", permanent: true },
      { source: "/pr", destination: "/projects", permanent: true },
      { source: "/project", destination: "/projects", permanent: true },
      { source: "/work", destination: "/projects", permanent: true },
      { source: "/portfolio", destination: "/projects", permanent: true },
      { source: "/me", destination: "/about", permanent: true },
      { source: "/stack", destination: "/skills", permanent: true },
      { source: "/tech", destination: "/skills", permanent: true },
      { source: "/soft-skills", destination: "/how-i-work", permanent: true },
      { source: "/process", destination: "/how-i-work", permanent: true },
      { source: "/career", destination: "/experience", permanent: true },
      { source: "/jobs", destination: "/experience", permanent: true },
      { source: "/degree", destination: "/education", permanent: true },
      { source: "/certificate", destination: "/education", permanent: true },
      { source: "/hire", destination: "/contact", permanent: true },
      { source: "/hire-me", destination: "/contact", permanent: true },
      { source: "/contact-me", destination: "/contact", permanent: true },
      { source: "/cv", destination: "/resume/OsamaSharaf.pdf", permanent: false },
      { source: "/resume", destination: "/resume/OsamaSharaf.pdf", permanent: false },
      { source: "/wa", destination: WHATSAPP, permanent: false },
      { source: "/whatsapp", destination: WHATSAPP, permanent: false },
      { source: "/in", destination: "https://linkedin.com/in/osama-sharaf-dev", permanent: false },
      { source: "/linkedin", destination: "https://linkedin.com/in/osama-sharaf-dev", permanent: false },
      { source: "/github", destination: "https://github.com/osamasharaf-dev", permanent: false },
    ];
    const aliases = Object.entries(slugAliases)
      .filter(([from, to]) => from !== to)
      .map(([from, to]) => ({ source: `/project/${from}`, destination: `/project/${to}`, permanent: true }));
    return [...aliases, ...shortcuts];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/(og-share.jpg|icon-192.png|icon-512.png|llms.txt|llms-full.txt|ai-catalog.json|robots.txt)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        source: "/resume/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        source: "/icons/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
