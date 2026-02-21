import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { perspectives } from "@/lib/perspectives";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const base: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/perspektiven`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  const posts = perspectives.map((p) => ({
    url: `${site.url}/perspektiven/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.featured ? 0.8 : 0.5,
  }));

  return [...base, ...posts];
}
