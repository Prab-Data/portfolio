import { Section, SectionHeading } from "@/components/ui/Section";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/lib/data";

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" title="about" />
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2">
          <TerminalWindow title="whoami.sh">
            <pre className="whitespace-pre-wrap text-foreground">
              <span className="text-accent">$</span> whoami
              {"\n"}
              <span className="text-muted">› developer + trader</span>
              {"\n\n"}
              <span className="text-accent">$</span> cat metrics.json
            </pre>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {about.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-surface-2 p-3"
                >
                  <div className="text-xl font-bold text-accent">{s.value}</div>
                  <div className="mt-1 text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </TerminalWindow>
        </Reveal>
      </div>
    </Section>
  );
}
