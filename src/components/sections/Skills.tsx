import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

function SkillColumn({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div className="eyebrow">{label}</div>
      <h3 className="mt-3 font-serif text-2xl font-light text-foreground">
        {title}
      </h3>
      <ul className="mt-7 flex flex-col gap-3">
        {items.map((s) => (
          <li
            key={s}
            className="group flex items-center gap-3 border-b border-border/60 pb-3 text-[15px] text-muted transition-colors hover:text-foreground"
          >
            <span className="h-1 w-1 rounded-full bg-accent opacity-60 transition-opacity group-hover:opacity-100" />
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="05"
        title="Skills"
        subtitle="Two disciplines, one operator."
      />
      <div className="grid gap-14 md:grid-cols-2">
        <Reveal>
          <SkillColumn
            label="Discipline 01"
            title="Engineering"
            items={skills.engineering}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <SkillColumn
            label="Discipline 02"
            title="Markets"
            items={skills.markets}
          />
        </Reveal>
      </div>
    </Section>
  );
}
