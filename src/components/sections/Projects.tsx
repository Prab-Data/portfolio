import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { projects, achievements } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" theme="dark">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work."
        subtitle="A few things I've shipped. Swap these for your real work in src/lib/data.ts."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.07} className="h-full">
            <div className="group flex h-full flex-col rounded-3xl bg-dark-card p-8 transition-colors hover:bg-dark-card-2">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-on-dark">{p.name}</h3>
                <span className="flex items-center gap-3 text-on-dark-muted">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} repository`}
                      className="cursor-pointer transition-colors hover:text-on-dark"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} live link`}
                      className="cursor-pointer transition-colors hover:text-blue-bright"
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  )}
                </span>
              </div>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-on-dark-muted">
                {p.blurb}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 px-3 py-1 text-[13px] text-on-dark/80"
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
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <div className="text-sm font-semibold text-blue-bright">Recognition</div>
          <ul className="mt-6 space-y-4">
            {achievements.map((a) => (
              <li key={a} className="text-[15px] text-on-dark-muted sm:text-base">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
