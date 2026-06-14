import { Bot, Cpu } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { quantTools, type QuantTool } from "@/lib/data";

const statusMap: Record<QuantTool["status"], { label: string; color: string }> =
  {
    live: { label: "● live", color: "var(--accent)" },
    wip: { label: "◐ building", color: "var(--amber)" },
    research: { label: "○ research", color: "var(--cyan)" },
  };

export function QuantTools() {
  return (
    <Section id="quant">
      <SectionHeading
        index="04"
        title="quant / tools"
        subtitle="Trading systems I build with code — the fusion of both disciplines."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {quantTools.map((tool, i) => {
          const status = statusMap[tool.status];
          return (
            <Reveal key={tool.name} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
                <div className="flex items-center justify-between">
                  <span className="text-accent">
                    {i % 2 === 0 ? <Cpu size={20} /> : <Bot size={20} />}
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{ color: status.color }}
                  >
                    {status.label}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {tool.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {tool.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tool.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted"
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
