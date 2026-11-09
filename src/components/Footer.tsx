import Link from "next/link";
import Logo from "./Logo";
import { PROFILE } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="footer grid-bg">
      <div className="wrap footer-in">
        <Logo />
        <nav className="footer-links m" aria-label="Footer">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href={PROFILE.cv} download>
            CV
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
        <span className="m">© {new Date().getFullYear()} Osama Sharaf · Riyadh</span>
      </div>
    </footer>
  );
}
