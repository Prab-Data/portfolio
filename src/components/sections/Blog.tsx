import { Section, SectionHeading } from "@/components/ui/Section";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { posts } from "@/lib/data";

export function Blog() {
  return (
    <Section id="blog">
      <SectionHeading
        eyebrow="Writing"
        title="From the blog."
        subtitle="Notes on building and shipping products — tap a card to read the full preview."
      />

      {/* No transformed (motion) ancestor here — the expanded preview uses
          position: fixed and a transformed parent would break it. */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {posts.map((p) => (
          <ExpandableCard
            key={p.title}
            title={p.title}
            src={p.image}
            description={p.description}
            classNameExpanded="[&_h4]:text-foreground [&_h4]:font-semibold [&_h4]:text-lg"
          >
            {p.content.map((b, i) => (
              <div key={i} className="flex flex-col gap-2">
                {b.heading && <h4>{b.heading}</h4>}
                <p>{b.body}</p>
              </div>
            ))}
          </ExpandableCard>
        ))}
      </div>
    </Section>
  );
}
