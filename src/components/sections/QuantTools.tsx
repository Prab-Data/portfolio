import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { quantTools, type QuantTool } from "@/lib/data";

const statusMap: Record<QuantTool["status"], { label: string; color: string }> = {
  live: { label: "Live", color: "var(--green)" },
  wip: { label: "Building", color: "var(--blue-bright)" },
  research: { label: "Research", color: "var(--on-dark-muted)" },
};

export function QuantTools() {
  return (
    <Section id="quant" theme="dark">
      <SectionHeading
        eyebrow="Quant & Tools"
        title="Trading systems, built with code."
        subtitle="Where the two disciplines fuse — engineering in service of the markets."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {quantTools.map((tool, i) => {
          const status = statusMap[tool.status];
          return (
            <Reveal key={tool.name} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-3xl bg-dark-card p-8 transition-colors hover:bg-dark-card-2">
                <span
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: status.color }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: status.color }}
                  />
                  {status.label}
                </span>
                <h3 className="mt-8 text-xl font-semibold text-on-dark">
                  {tool.name}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-on-dark-muted">
                  {tool.blurb}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {tool.tags.map((t) => (
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
          );
        })}
      </div>
    </Section>
  );
}
