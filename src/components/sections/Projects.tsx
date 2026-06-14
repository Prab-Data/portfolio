"use client";

import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WorkflowBuilderCard } from "@/components/ui/workflow-builder-card";
import { projects, profile } from "@/lib/data";

// placeholder "last updated" labels
const updated = [
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
            <WorkflowBuilderCard
              imageUrl={p.image}
              status="Active"
              lastUpdated={updated[i % updated.length]}
              title={p.name}
              description={p.blurb}
              tags={p.tags}
              href={p.href || p.repo || undefined}
              users={[{ src: profile.avatar, fallback: "PS" }]}
              actions={[
                { Icon: Github, bgColor: "bg-white/10" },
                { Icon: ArrowUpRight, bgColor: "bg-violet" },
              ]}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
