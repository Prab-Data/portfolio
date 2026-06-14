import { ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact" theme="light">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="headline-xl text-4xl text-on-light sm:text-6xl">
            Let&apos;s build something.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-on-light-muted sm:text-xl">
            Open to engineering roles, fintech collaborations and quant
            projects. Or just reach out to talk markets.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
            <a href={`mailto:${profile.email}`} className="btn-primary cursor-pointer">
              Get in touch
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="btn-link cursor-pointer"
            >
              {profile.phone}
              <ChevronRight className="chev" size={16} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px]">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-blue transition-opacity hover:opacity-70"
            >
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-blue transition-opacity hover:opacity-70"
            >
              LinkedIn
            </a>
            <a
              href={profile.socials.tradingview}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-blue transition-opacity hover:opacity-70"
            >
              TradingView
            </a>
            <a
              href={profile.socials.medium}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-blue transition-opacity hover:opacity-70"
            >
              Medium
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
