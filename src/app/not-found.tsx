import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Suggest from "@/components/Suggest";
import { PROFILE } from "@/data/profile";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="sec-blue grid-bg">
      <div className="wrap lost">
        <div className="lost-txt">
          <div className="lost-code d">404</div>
          <h1 className="d">Lost in the code?</h1>
          <p>This page doesn&apos;t exist, or it moved. Even I am not sure where it went.</p>
          <Suggest />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn btn-lime" href="/">
              Back to the website <Arrow />
            </Link>
            <Link className="btn btn-line" href="/projects">
              See my projects
            </Link>
          </div>
        </div>
        <div className="lost-fig">
          <span className="lost-q d" aria-hidden="true">
            ?
          </span>
          <Image src={PROFILE.photo.src} alt="Osama Sharaf looking puzzled" width={PROFILE.photo.width} height={PROFILE.photo.height} sizes="(max-width: 759px) 90vw, 560px" priority />
        </div>
      </div>
    </section>
  );
}
