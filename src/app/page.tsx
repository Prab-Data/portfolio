import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { TradingDesk } from "@/components/sections/TradingDesk";
import { QuantTools } from "@/components/sections/QuantTools";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <TradingDesk />
      <QuantTools />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
