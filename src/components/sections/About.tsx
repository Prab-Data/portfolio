import {
  Layers,
  Network,
  Plug,
  ShieldCheck,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { about, capabilities } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  Layers,
  Network,
  Plug,
  ShieldCheck,
  Rocket,
  Users,
};

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="An engineer who ships like a designer." />

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-foreground" : ""}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label}>
                <div className="text-gradient text-3xl font-bold tracking-tight sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-3xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/desk-bw.jpg"
              alt="Prabhanjan's workspace"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <div className="text-sm font-medium text-white">the workshop</div>
              <div className="text-xs text-white/60">where the products get built</div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* capabilities */}
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => {
          const Icon = icons[c.icon] ?? Layers;
          return (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="card card-hover h-full p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-border-2 bg-white/[0.03] text-violet">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 font-semibold">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
