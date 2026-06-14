import { Mail, Phone, LineChart } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { Section } from "@/components/ui/Section";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <TerminalWindow title="contact.sh" className="mx-auto max-w-2xl">
          <pre className="whitespace-pre-wrap text-foreground">
            <span className="text-accent">$</span> ./connect --with prabhanjan
            {"\n"}
            <span className="text-muted">
              › opening secure channel...
            </span>
            {"\n"}
            <span className="text-accent">› ready.</span>
          </pre>

          <h2 className="mt-6 text-2xl font-bold text-foreground">
            Let&apos;s build something — or talk markets.
          </h2>
          <p className="mt-2 text-sm text-muted">
            Open to engineering roles, fintech collaborations and quant
            projects.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 font-mono text-sm font-semibold text-[#06120d] transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Phone size={16} /> {profile.phone}
            </a>
          </div>

          <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.socials.tradingview}
              target="_blank"
              rel="noreferrer"
              aria-label="TradingView"
              className="text-muted transition-colors hover:text-accent"
            >
              <LineChart size={20} />
            </a>
          </div>
        </TerminalWindow>
      </Reveal>
    </Section>
  );
}
