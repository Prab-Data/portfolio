import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="card ring-glow relative overflow-hidden px-6 py-16 text-center sm:px-10 sm:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 opacity-70"
            style={{
              background:
                "radial-gradient(closest-side, rgba(124,108,255,0.28), transparent)",
            }}
          />
          <div className="relative">
            <span className="text-gradient text-sm font-semibold">Let&apos;s talk</span>
            <h2 className="headline-xl mx-auto mt-4 max-w-2xl text-4xl sm:text-6xl">
              Let&apos;s build your
              <br />
              next <span className="text-gradient">product</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted">
              Open to full-stack roles, product collaborations and freelance
              builds. I reply fast.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href={`mailto:${profile.email}`} className="btn-primary cursor-pointer">
                {profile.email}
                <ArrowRight size={16} />
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="btn-ghost cursor-pointer"
              >
                {profile.phone}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer text-muted transition-colors hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer text-muted transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
