import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

const groups: { label: string; items: string[] }[] = [
  { label: "Frontend", items: skills.frontend },
  { label: "Backend", items: skills.backend },
  { label: "Data", items: skills.data },
  { label: "Cloud & DevOps", items: skills.cloud },
];

export function Skills() {
  return (
    <Section id="stack">
      <SectionHeading
        eyebrow="Stack"
        title="The toolkit."
        subtitle="What I reach for to design, build and ship."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.06} className="h-full">
            <div className="card card-hover h-full p-6 sm:p-7">
              <div className="text-gradient text-sm font-semibold">{g.label}</div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border-2 bg-white/[0.02] px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-white/25"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
