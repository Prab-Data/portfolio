import { ExternalLink, Trophy } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { projects, achievements } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="06"
        title="projects"
        subtitle="Selected builds. Swap these for your real work in src/lib/data.ts."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-muted">
                  0{i + 1}
                </span>
                <div className="flex items-center gap-3">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Repository"
                      className="text-muted transition-colors hover:text-accent"
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
                      className="text-muted transition-colors hover:text-accent"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {p.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 rounded-xl border border-border bg-surface p-6">
          <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
            <Trophy size={16} className="text-amber" />
            achievements
          </div>
          <ul className="mt-4 space-y-2">
            {achievements.map((a) => (
              <li key={a} className="flex gap-2 text-sm text-muted">
                <span className="text-amber">▸</span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
