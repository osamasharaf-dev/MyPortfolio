import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import HowIWork from "@/components/HowIWork";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import SceneDeck from "@/components/SceneDeck";
import HomeMotion from "@/components/HomeMotion";
import JsonLd from "@/components/JsonLd";
import { homeLd } from "@/lib/seo";

const SCENES = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Tech stack" },
  { id: "how-i-work", label: "How I work" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={homeLd()} />
      <SceneDeck scenes={SCENES}>
        <Hero />
        <About scene />
        <Projects scene />
        <Skills scene />
        <HowIWork />
        <Experience />
        <Education />
        <Contact scene />
      </SceneDeck>
      <HomeMotion />
    </>
  );
}
