import { ReactNode } from "react";

type Theme = "dark" | "light" | "cloud";

const themeClass: Record<Theme, string> = {
  dark: "bg-black text-on-dark",
  light: "bg-snow text-on-light",
  cloud: "bg-cloud text-on-light",
};

export function Section({
  id,
  theme = "dark",
  children,
  className = "",
  container = true,
}: {
  id?: string;
  theme?: Theme;
  children: ReactNode;
  className?: string;
  container?: boolean;
}) {
  return (
    <section id={id} className={`${themeClass[theme]} scroll-mt-12 ${className}`}>
      {container ? (
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="mb-3 text-sm font-semibold tracking-wide text-blue-bright">
          {eyebrow}
        </span>
      )}
      <h2 className="headline text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed opacity-60 sm:text-xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
