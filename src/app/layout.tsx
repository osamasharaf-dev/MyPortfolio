import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import Cursor from "@/components/Cursor";
import { SITE_URL } from "@/data/profile";
import { OG, siteLd } from "@/lib/seo";

const display = localFont({
  src: "../fonts/archivo.woff2",
  variable: "--f-display",
  weight: "100 900",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
  fallback: ["Arial Black", "system-ui", "sans-serif"],
});
const body = localFont({ src: "../fonts/geist.woff2", variable: "--f-body", weight: "100 900", display: "swap", fallback: ["system-ui", "sans-serif"] });
const mono = localFont({ src: "../fonts/geist-mono.woff2", variable: "--f-mono", weight: "100 900", display: "swap", preload: false, fallback: ["ui-monospace", "monospace"] });
const hello = localFont({ src: "../fonts/great-vibes.woff2", variable: "--f-hello", weight: "400", display: "swap", fallback: ["cursive"] });
const sign = localFont({ src: "../fonts/signature.woff2", variable: "--f-sign", weight: "400", display: "swap", preload: false, fallback: ["cursive"] });

const description =
  "Osama Sharaf is a Full Stack Developer in Riyadh building fast, polished websites, online stores and web apps with React, Next.js, TypeScript and Node.js. 15+ happy clients, 15+ projects delivered.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Osama Sharaf · Full Stack Developer in Riyadh", template: "%s · Osama Sharaf" },
  description,
  applicationName: "Osama Sharaf",
  authors: [{ name: "Osama Sharaf", url: SITE_URL }],
  creator: "Osama Sharaf",
  keywords: ["Osama Sharaf", "أسامة شرف", "Full Stack Developer", "Web Developer", "Frontend Developer", "Next.js developer Riyadh", "React developer Saudi Arabia", "freelance web developer Riyadh", "e-commerce developer"],
  alternates: { canonical: "/" },
  openGraph: { type: "profile", url: "/", siteName: "Osama Sharaf", title: "Osama Sharaf · Full Stack Developer in Riyadh", description, images: [OG], locale: "en_US", firstName: "Osama", lastName: "Sharaf" },
  twitter: { card: "summary_large_image", title: "Osama Sharaf · Full Stack Developer in Riyadh", description, images: [OG.url] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  category: "technology",
  other: { "llms-txt": `${SITE_URL}/llms.txt` },
};

export const viewport: Viewport = {
  themeColor: "#1238d6",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const boot = `(function(){var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('os-intro')){d.classList.add('no-intro')}else{sessionStorage.setItem('os-intro','1')}}catch(e){d.classList.add('no-intro')}if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('reduce')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${hello.variable} ${sign.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        <link rel="alternate" type="text/plain" title="LLM summary" href="/llms.txt" />
        <JsonLd data={siteLd()} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Loader />
        <SmoothScroll />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Cursor />
      </body>
    </html>
  );
}
