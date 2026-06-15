import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["work", "about", "experience", "stack", "blog", "contact"].map(
      (id) => ({
        url: `${siteUrl}/#${id}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })
    ),
  ];
}
