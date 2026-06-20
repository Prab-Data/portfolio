import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProfileCardProps {
  /** Main square/landscape photo */
  image: string;
  /** Name shown over the photo */
  name: string;
  /** Optional role/subtitle under the name */
  role?: string;
  /** Small avatar in the footer row */
  avatar: string;
  /** Handle shown in the footer (e.g. "@prab002") */
  handle: string;
  /** Secondary line under the handle — string or node (e.g. live status) */
  sub?: React.ReactNode;
  /** Primary action node (button or link) rendered on the right of the footer */
  action?: React.ReactNode;
  /** Object-position for the photo */
  imagePosition?: string;
  className?: string;
}

/**
 * Image-forward profile card. Themed for this site's dark / glass / violet
 * system. Presentational only (no state) so it can be used from server or
 * client components.
 */
export function ProfileCard({
  image,
  name,
  role,
  avatar,
  handle,
  sub,
  action,
  imagePosition = "center",
  className,
}: ProfileCardProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-sm", className)}>
      {/* violet glow blooming up through the glass — site signature */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-5 top-[76%] -bottom-6 z-0 rounded-[26px] bg-violet/90"
        style={{ boxShadow: "0 30px 70px -12px rgba(168,85,247,0.55)" }}
      />

      <div className="group relative z-10 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] shadow-xl shadow-black/40 backdrop-blur-2xl transition-transform duration-700 ease-out hover:scale-[1.02]">
        {/* photo + name overlay */}
        <div className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={name}
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            style={{ objectPosition: imagePosition }}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute left-5 top-5">
            <h3 className="text-2xl font-semibold tracking-tight text-white drop-shadow-lg">
              {name}
            </h3>
            {role && (
              <p className="mt-0.5 text-sm text-white/75 drop-shadow">{role}</p>
            )}
          </div>
        </div>

        {/* footer: avatar + handle + action */}
        <div className="flex items-center justify-between gap-3 p-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-white/15 transition-transform duration-500 ease-out hover:scale-110">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar} alt="" className="h-full w-full object-cover" />
            </span>
            <div className="min-w-0 leading-tight">
              <div className="truncate text-sm text-white/90">{handle}</div>
              {sub && <div className="mt-0.5 text-xs text-muted">{sub}</div>}
            </div>
          </div>
          {action}
        </div>
      </div>
    </div>
  );
}

/**
 * Demo / default export — matches the integration template's `Component` shape.
 */
export const Component = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-black to-zinc-950 p-6">
      <ProfileCard
        image="/images/hero-portrait.jpg"
        name="Prabhanjan Sharma"
        role="Full Stack Developer"
        avatar="/images/face.jpg"
        handle="@prab002"
        sub="Bangalore, India"
        imagePosition="58% 26%"
        action={
          <a
            href="mailto:mprabhanjan18@gmail.com"
            className="shrink-0 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
          >
            Hire me
          </a>
        }
      />
    </div>
  );
};

export default Component;
