import * as React from "react";
import { MoreHorizontal } from "lucide-react";

interface User {
  src: string;
  fallback: string;
}
interface Action {
  Icon: React.ElementType;
  bgColor: string;
}

export interface WorkflowBuilderCardProps {
  imageUrl: string;
  status: "Active" | "Inactive";
  lastUpdated: string;
  title: string;
  description: string;
  tags: string[];
  users: User[];
  actions: Action[];
  href?: string;
  className?: string;
}

export function WorkflowBuilderCard({
  imageUrl,
  status,
  lastUpdated,
  title,
  description,
  tags,
  users,
  actions,
  href,
  className = "",
}: WorkflowBuilderCardProps) {
  return (
    <a
      href={href || "#"}
      target={href ? "_blank" : undefined}
      rel="noreferrer"
      className={`group block cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-md shadow-black/30 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-border-2 ${className}`}
    >
      {/* image */}
      <div className="relative h-40 w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="p-4">
        {/* header */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs text-muted">
              <span>{lastUpdated}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span
                  className={`h-2 w-2 rounded-full ${
                    status === "Active" ? "bg-green" : "bg-red"
                  }`}
                  style={
                    status === "Active"
                      ? { boxShadow: "0 0 6px rgba(52,211,153,0.85)" }
                      : undefined
                  }
                  aria-label={status}
                />
                {status}
              </span>
            </div>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{title}</h3>
          </div>
          <span className="text-muted transition-colors group-hover:text-foreground">
            <MoreHorizontal size={20} />
          </span>
        </div>

        {/* hover-revealed details (CSS grid-rows animation) */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="min-h-0 overflow-hidden">
            <p className="text-sm leading-relaxed text-muted">{description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border-2 bg-white/[0.04] px-2.5 py-0.5 text-xs font-medium text-foreground/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="flex items-center justify-between border-t border-border p-4">
        <div className="flex -space-x-2">
          {users.map((user, i) => (
            <span
              key={i}
              className="h-7 w-7 overflow-hidden rounded-full border-2 border-card bg-surface"
              aria-label={user.fallback}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={user.src}
                alt={user.fallback}
                className="h-full w-full object-cover"
              />
            </span>
          ))}
        </div>
        <div className="flex items-center -space-x-2">
          {actions.map(({ Icon, bgColor }, i) => (
            <span
              key={i}
              className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-card text-white ${bgColor}`}
            >
              <Icon size={14} />
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
