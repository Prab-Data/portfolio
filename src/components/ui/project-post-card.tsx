import * as React from "react";
import {
  BadgeCheck,
  Bookmark,
  Globe,
  Hammer,
  MoreHorizontal,
  Smartphone,
} from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";

export interface ProjectPostCardProps {
  name: string;
  author: string;
  avatar: string;
  posted: string;
  blurb: string;
  tags: string[];
  image: string;
  href?: string;
  /** "wip" renders an in-progress / upcoming state */
  status?: "wip";
}

function platformOf(href?: string) {
  if (!href) return { label: "Save", Icon: Bookmark, external: false };
  if (href.includes("github.com")) return { label: "View source", Icon: Github, external: true };
  if (href.includes("play.google.com")) return { label: "Google Play", Icon: Smartphone, external: true };
  if (href.includes("apps.apple.com")) return { label: "App Store", Icon: Smartphone, external: true };
  return { label: "Visit site", Icon: Globe, external: true };
}

export function ProjectPostCard({
  name,
  author,
  avatar,
  posted,
  blurb,
  tags,
  image,
  href,
  status,
}: ProjectPostCardProps) {
  const wip = status === "wip";
  const { label, Icon, external } = platformOf(href);

  return (
    <article className="card card-hover flex h-full flex-col p-5">
      {/* header */}
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar}
          alt={author}
          className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/10"
        />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="truncate font-semibold text-foreground">{author}</span>
            <BadgeCheck size={15} className="shrink-0 text-[#3b82f6]" />
          </div>
          {wip ? (
            <div className="flex items-center gap-1.5 text-xs font-medium text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
              Building now · launching soon
            </div>
          ) : (
            <div className="text-xs text-muted">Posted {posted}</div>
          )}
        </div>
        <MoreHorizontal size={18} className="ml-auto shrink-0 text-muted" />
      </div>

      {/* body */}
      <p className="mt-4 text-[15px] leading-relaxed text-foreground/90">{blurb}</p>

      <div className="my-4 h-px bg-border" />

      {/* media */}
      <a
        href={href || undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-[#0a0a12] ring-1 ring-white/10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {wip ? (
            <>
              <Hammer size={13} /> Work in progress
            </>
          ) : (
            <>
              <Icon size={13} /> {name}
            </>
          )}
        </span>
      </a>

      <div className="my-4 h-px bg-border" />

      {/* footer: tech stack + action */}
      <div className="mt-auto flex items-center justify-between gap-3 text-sm text-muted">
        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5">
          {tags.map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rotate-45 bg-violet/80" aria-hidden />
              {t}
            </span>
          ))}
        </div>

        {wip ? (
          <span className="inline-flex shrink-0 items-center gap-1.5 font-medium text-amber-400">
            <Hammer size={16} /> Coming soon
          </span>
        ) : href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="inline-flex shrink-0 items-center gap-1.5 font-medium text-foreground transition-colors hover:text-violet"
          >
            <Icon size={16} /> {label}
          </a>
        ) : (
          <span className="inline-flex shrink-0 items-center gap-1.5">
            <Bookmark size={16} /> Save
          </span>
        )}
      </div>
    </article>
  );
}
