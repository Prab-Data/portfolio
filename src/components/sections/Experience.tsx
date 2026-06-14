import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" theme="dark">
      <SectionHeading
        eyebrow="Experience"
        title="Shipping production systems."
        subtitle="Full-stack and backend roles, built for scale and speed."
      />

      <div className="mt-16 sm:mt-20">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${i}`} delay={i * 0.04}>
            <div className="grid gap-5 border-t border-white/10 py-10 sm:grid-cols-[1fr_2.2fr] sm:gap-12 sm:py-14">
              <div>
                <div className="text-sm text-on-dark-muted">{job.period}</div>
                <div className="mt-1.5 text-lg font-semibold text-on-dark">
                  {job.company}
                </div>
                <div className="mt-0.5 text-sm text-on-dark-muted">
                  {job.location}
                </div>
              </div>

              <div>
                <h3 className="headline text-2xl text-on-dark sm:text-3xl">
                  {job.role}
                </h3>
                <ul className="mt-5 space-y-3">
                  {job.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="text-[15px] leading-relaxed text-on-dark-muted sm:text-base"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-3 py-1 text-[13px] text-on-dark/80"
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
    </Section>
  );
}
