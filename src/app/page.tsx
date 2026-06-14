import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { Craft } from "@/components/sections/Craft";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Craft />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Blog />
      <Contact />
    </>
  );
}
