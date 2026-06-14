import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/lib/data";

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" title="About" />

      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="space-y-6 text-xl leading-relaxed text-foreground/90 sm:text-2xl sm:leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "" : "text-muted"}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {about.stats.map((s) => (
              <div key={s.label} className="bg-background p-6">
                <div className="font-serif text-4xl font-light text-accent">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
