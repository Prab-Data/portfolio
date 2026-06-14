import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="02"
        title="Experience"
        subtitle="Shipping production systems across full-stack and backend roles."
      />

      <div className="border-t border-border">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${i}`} delay={i * 0.05}>
            <div className="group grid gap-6 border-b border-border py-10 transition-colors hover:bg-surface/40 sm:grid-cols-12 sm:gap-8 sm:px-4">
              <div className="sm:col-span-3">
                <div className="eyebrow">{job.period}</div>
                <div className="mt-2 text-sm text-muted">{job.location}</div>
              </div>

              <div className="sm:col-span-9">
                <h3 className="font-serif text-2xl font-light text-foreground">
                  {job.role}
                </h3>
                <div className="mt-1 text-sm font-medium text-accent">
                  {job.company}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-[15px] leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                  {job.stack.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
