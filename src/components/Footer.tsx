import { LineChart, BookOpen } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js +
          Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.socials.tradingview}
            target="_blank"
            rel="noreferrer"
            aria-label="TradingView"
            className="text-muted transition-colors hover:text-accent"
          >
            <LineChart size={18} />
          </a>
          <a
            href={profile.socials.medium}
            target="_blank"
            rel="noreferrer"
            aria-label="Medium"
            className="text-muted transition-colors hover:text-accent"
          >
            <BookOpen size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
