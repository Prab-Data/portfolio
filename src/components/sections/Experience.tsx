import { Section, SectionHeading } from "@/components/ui/Section";
import { FileViewer, type ViewerFile } from "@/components/ui/file-viewer";
import { experience, achievements, type Experience as Job } from "@/lib/data";

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function roleFile(job: Job): string {
  const stack = job.stack.map((s) => `"${s}"`).join(", ");
  const highlights = job.bullets
    .map((b) => `    "${b.replace(/"/g, '\\"')}",`)
    .join("\n");
  return `// ${job.company} · ${job.location}

export const role = {
  title: "${job.role}",
  company: "${job.company}",
  period: "${job.period}",
  stack: [${stack}],
  highlights: [
${highlights}
  ],
};

export default role;
`;
}

const files: ViewerFile[] = [
  ...experience.map((job) => ({
    path: `experience/${slug(job.company)}/${slug(job.role)}.ts`,
    content: roleFile(job),
  })),
  {
    path: "experience/achievements.md",
    content: `# Achievements\n\n${achievements
      .map((a) => `- ${a}`)
      .join("\n")}\n`,
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Built in production."
        subtitle="Browse my work like a codebase — pick a file from the tree to read the role."
      />

      <div className="mt-12">
        <FileViewer files={files} title="experience/" />
      </div>
    </Section>
  );
}
