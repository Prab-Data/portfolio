import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="02"
        title="experience"
        subtitle="Shipping production systems across full-stack and backend roles."
      />

      <div className="relative">
        {/* timeline rail */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.05}>
              <div className="relative pl-8 sm:pl-12">
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background sm:h-5 sm:w-5" />
                <div className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/30 sm:p-6">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <span className="font-mono text-xs text-accent">
                      {job.period}
                    </span>
                  </div>
                  <div className="mt-1 font-mono text-sm text-muted">
                    {job.company} · {job.location}
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1 text-accent">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
