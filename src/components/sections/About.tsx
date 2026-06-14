import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/lib/data";

export function About() {
  return (
    <Section id="about" theme="light">
      <Reveal>
        <p className="headline mx-auto max-w-4xl text-center text-3xl text-on-light sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {about.paragraphs[0]}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 max-w-2xl space-y-5 text-center text-lg leading-relaxed text-on-light-muted sm:text-xl">
          {about.paragraphs.slice(1).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-20 grid grid-cols-2 gap-y-12 sm:gap-y-16 lg:grid-cols-4">
          {about.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="headline-xl text-4xl text-on-light sm:text-5xl lg:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm text-on-light-muted sm:text-base">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
