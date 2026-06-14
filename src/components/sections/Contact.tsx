import { ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="eyebrow">(07) — Contact</div>
        <h2 className="mt-5 max-w-3xl font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-7xl">
          Let&apos;s build something —
          <br />
          <span className="text-muted">or talk markets.</span>
        </h2>
        <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
          Open to engineering roles, fintech collaborations and quant projects.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between bg-background p-7 transition-colors hover:bg-surface"
          >
            <div>
              <div className="eyebrow">Email</div>
              <div className="mt-2 text-lg text-foreground">
                {profile.email}
              </div>
            </div>
            <ArrowUpRight
              size={20}
              className="text-muted transition-colors group-hover:text-accent"
            />
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="group flex items-center justify-between bg-background p-7 transition-colors hover:bg-surface"
          >
            <div>
              <div className="eyebrow">Phone</div>
              <div className="mt-2 text-lg text-foreground">
                {profile.phone}
              </div>
            </div>
            <ArrowUpRight
              size={20}
              className="text-muted transition-colors group-hover:text-accent"
            />
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href={profile.socials.tradingview}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            TradingView
          </a>
          <a
            href={profile.socials.medium}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Medium
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
