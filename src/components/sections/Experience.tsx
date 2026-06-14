import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experience, achievements } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Built in production."
        subtitle="Leading teams and shipping full-stack products across roles."
      />

      <div className="mt-12 space-y-4">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${i}`} delay={i * 0.05}>
            <div className="card card-hover grid gap-5 p-6 sm:grid-cols-[1fr_2.4fr] sm:gap-10 sm:p-8">
              <div>
                <div className="text-sm text-muted-2">{job.period}</div>
                <div className="mt-1.5 font-semibold">{job.company}</div>
                <div className="mt-0.5 text-sm text-muted-2">{job.location}</div>
              </div>
              <div>
                <h3 className="headline text-xl sm:text-2xl">{job.role}</h3>
                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
          {achievements.map((a) => (
            <span key={a} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              {a}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
