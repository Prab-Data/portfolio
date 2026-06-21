"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectPostCard } from "@/components/ui/project-post-card";
import { projects, profile } from "@/lib/data";

// placeholder "posted" labels
const posted = [
  "2 weeks ago",
  "1 month ago",
  "3 months ago",
  "5 months ago",
  "8 months ago",
  "1 year ago",
];

export function Projects() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Work"
        title="Selected products."
        subtitle="Things I've designed, built and shipped — for clients and for myself."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06} className="h-full">
            <ProjectPostCard
              name={p.name}
              author={profile.name}
              avatar={profile.avatar}
              posted={posted[i % posted.length]}
              blurb={p.blurb}
              tags={p.tags}
              image={p.image}
              href={p.href || p.repo || undefined}
              status={p.status}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
