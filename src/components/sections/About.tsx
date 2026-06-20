import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CapabilityOrbit } from "@/components/ui/capability-orbit";
import { about } from "@/lib/data";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="An engineer who ships like a designer." />

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-foreground" : ""}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label}>
                <div className="text-gradient text-3xl font-bold tracking-tight sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-3xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/desk-bw.jpg"
              alt="Prabhanjan's workspace"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <div className="text-sm font-medium text-white">the workshop</div>
              <div className="text-xs text-white/60">where the products get built</div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* capabilities — an orbital constellation of what I do */}
      <div className="mt-16">
        <Reveal>
          <p className="text-center text-sm text-muted">
            What I do — tap a node to explore how it connects.
          </p>
          <CapabilityOrbit />
        </Reveal>
      </div>
    </Section>
  );
}
