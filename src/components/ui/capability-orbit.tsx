"use client";

import { Layers, Network, Plug, ShieldCheck, Rocket, Users } from "lucide-react";
import RadialOrbitalTimeline, {
  type TimelineItem,
} from "@/components/ui/radial-orbital-timeline";
import { capabilities } from "@/lib/data";

const icons: Record<string, React.ElementType> = {
  Layers,
  Network,
  Plug,
  ShieldCheck,
  Rocket,
  Users,
};

// Short category label + how each capability connects to the others,
// so the orbital constellation can light up related nodes on click.
const capabilityMeta: { category: string; relatedIds: number[] }[] = [
  { category: "Build", relatedIds: [2, 3] }, // Full-stack engineering
  { category: "Design", relatedIds: [1, 5] }, // System architecture
  { category: "Connect", relatedIds: [1, 4] }, // Integrations & APIs
  { category: "Trust", relatedIds: [3, 2] }, // Auth & security
  { category: "Ship", relatedIds: [2, 6] }, // DevOps & CI/CD
  { category: "Lead", relatedIds: [5, 1] }, // Technical leadership
];

const capabilityOrbit: TimelineItem[] = capabilities.map((c, i) => ({
  id: i + 1,
  title: c.title,
  content: c.desc,
  category: capabilityMeta[i]?.category ?? "Craft",
  icon: icons[c.icon] ?? Layers,
  relatedIds: capabilityMeta[i]?.relatedIds ?? [],
}));

export function CapabilityOrbit() {
  return <RadialOrbitalTimeline timelineData={capabilityOrbit} />;
}
