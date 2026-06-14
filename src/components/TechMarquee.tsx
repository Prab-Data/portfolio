import { techStack } from "@/lib/data";

export function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <div className="marquee-wrap relative overflow-hidden border-y border-border py-6">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="marquee-track" aria-hidden>
        {items.map((t, i) => (
          <span
            key={i}
            className="mx-7 text-lg font-medium tracking-tight text-muted transition-colors hover:text-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
