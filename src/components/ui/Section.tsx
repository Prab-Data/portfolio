import { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24 sm:px-8 sm:py-36 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-16">
      <div className="flex items-baseline gap-4">
        <span className="eyebrow">({index})</span>
        <span className="h-px flex-1 translate-y-[-3px] bg-border" />
      </div>
      <h2 className="mt-5 font-serif text-4xl font-light tracking-tight text-foreground sm:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
