import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Osama Sharaf · Full Stack Developer",
    short_name: "Osama Sharaf",
    description: "Portfolio of Osama Sharaf, Full Stack Developer in Riyadh.",
    start_url: "/",
    display: "standalone",
    background_color: "#1238d6",
    theme_color: "#1238d6",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
