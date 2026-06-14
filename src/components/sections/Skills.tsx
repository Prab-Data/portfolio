import { Code2, TrendingUp } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

function SkillColumn({
  title,
  icon,
  items,
  accent,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="flex items-center gap-2">
        <span style={{ color: accent }}>{icon}</span>
        <h3 className="font-mono text-sm font-semibold text-foreground">
          {title}
        </h3>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((s) => (
          <span
            key={s}
            className="rounded-md border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-current hover:text-foreground"
            style={{ ["--tw-text-opacity" as string]: "1" }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="05"
        title="skills"
        subtitle="Two disciplines, one operator."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <SkillColumn
            title="engineering"
            icon={<Code2 size={18} />}
            items={skills.engineering}
            accent="var(--cyan)"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <SkillColumn
            title="markets"
            icon={<TrendingUp size={18} />}
            items={skills.markets}
            accent="var(--accent)"
          />
        </Reveal>
      </div>
    </Section>
  );
}
