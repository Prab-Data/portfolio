import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { projects, achievements } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="06"
        title="Projects"
        subtitle="Selected builds. Swap these for your real work in src/lib/data.ts."
      />

      <div className="border-t border-border">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <div className="group grid gap-4 border-b border-border py-9 transition-colors hover:bg-surface/40 sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:px-4">
              <div className="font-serif text-3xl font-light text-muted sm:col-span-1">
                0{i + 1}
              </div>

              <div className="sm:col-span-7">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-medium text-foreground transition-colors group-hover:text-accent">
                    {p.name}
                  </h3>
                  <span className="flex items-center gap-3 text-muted">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Repository"
                        className="transition-colors hover:text-accent"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live link"
                        className="transition-colors hover:text-accent"
                      >
                        <ArrowUpRight size={17} />
                      </a>
                    )}
                  </span>
                </div>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
                  {p.blurb}
                </p>
              </div>

              <div className="flex flex-wrap gap-x-3 gap-y-1.5 sm:col-span-4 sm:justify-end">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-xs text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-16">
          <div className="eyebrow">Recognition</div>
          <ul className="mt-6 space-y-4">
            {achievements.map((a) => (
              <li
                key={a}
                className="flex items-start gap-4 border-b border-border/60 pb-4 text-[15px] text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
