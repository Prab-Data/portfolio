import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-cloud text-on-light-muted">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="border-t border-black/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-2 text-xs sm:flex-row">
            <p>
              © {new Date().getFullYear()} {profile.name}. Built with Next.js
              &amp; Tailwind.
            </p>
            <p>{profile.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
