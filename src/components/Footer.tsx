import { profile, nav } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.avatar}
                alt="Prabhanjan Sharma"
                className="h-9 w-9 rounded-full object-cover ring-1 ring-border-2"
              />
              <span className="font-semibold">Prabhanjan Sharma</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Full-stack product engineer building digital products in{" "}
              {profile.location}.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm capitalize text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-2 sm:flex-row">
          <p>© {new Date().getFullYear()} Prabhanjan Sharma. All rights reserved.</p>
          <p>Built with Next.js & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
