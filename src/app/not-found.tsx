import type { Metadata } from "next";
import { ArrowLeft, Briefcase } from "lucide-react";
import { MeshGradientSVG } from "@/components/ui/shader-svg";

export const metadata: Metadata = {
  title: "404 — Page not found · Prabhanjan Sharma",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[480px] w-[760px] -translate-x-1/2 opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,108,255,0.22), transparent)",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* the lost little creature */}
        <MeshGradientSVG />

        <span className="text-gradient mt-6 text-sm font-semibold tracking-wide">
          404 — lost in space
        </span>
        <h1 className="headline-xl mt-3 text-4xl sm:text-6xl">
          This page <span className="text-gradient">wandered off</span>.
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
          The link is broken or the page moved — but the good stuff is still
          right here.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a href="/" className="btn-primary cursor-pointer">
            <ArrowLeft size={16} />
            Back home
          </a>
          <a href="/#work" className="btn-ghost cursor-pointer">
            <Briefcase size={16} />
            View my work
          </a>
        </div>
      </div>
    </section>
  );
}
