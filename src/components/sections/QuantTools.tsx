import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { quantTools, type QuantTool } from "@/lib/data";

const statusMap: Record<QuantTool["status"], { label: string; color: string }> =
  {
    live: { label: "Live", color: "var(--accent)" },
    wip: { label: "Building", color: "var(--amber)" },
    research: { label: "Research", color: "var(--cyan)" },
  };

export function QuantTools() {
  return (
    <Section id="quant">
      <SectionHeading
        index="04"
        title="Quant & Tools"
        subtitle="Trading systems I build with code — the fusion of both disciplines."
      />

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {quantTools.map((tool, i) => {
          const status = statusMap[tool.status];
          return (
            <Reveal key={tool.name} delay={i * 0.08} className="h-full">
              <div className="group flex h-full flex-col bg-background p-7 transition-colors hover:bg-surface">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-light text-muted">
                    0{i + 1}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs"
                    style={{ color: status.color }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: status.color }}
                    />
                    {status.label}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-foreground">
                  {tool.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {tool.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5">
                  {tool.tags.map((t) => (
                    <span key={t} className="font-mono text-xs text-muted">
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
