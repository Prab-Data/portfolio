import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

function SkillCard({
  label,
  title,
  items,
  delay,
}: {
  label: string;
  title: string;
  items: string[];
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="h-full rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-10">
        <div className="text-sm font-semibold text-blue">{label}</div>
        <h3 className="mt-2 headline text-2xl text-on-light sm:text-3xl">{title}</h3>
        <div className="mt-7 flex flex-wrap gap-2.5">
          {items.map((s) => (
            <span
              key={s}
              className="rounded-full bg-cloud px-3.5 py-1.5 text-sm text-on-light"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <Section id="skills" theme="cloud">
      <SectionHeading
        eyebrow="Skills"
        title="Two disciplines, one operator."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        <SkillCard
          label="Engineering"
          title="Building the systems"
          items={skills.engineering}
          delay={0}
        />
        <SkillCard
          label="Markets"
          title="Trading the markets"
          items={skills.markets}
          delay={0.1}
        />
      </div>
    </Section>
  );
}
