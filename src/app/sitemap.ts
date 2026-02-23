import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = false;

const BASE = "https://www.trillema.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Minimal, aber korrekt für Static Export. Erweitern wir später um Perspektiven-Slugs.
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/perspektiven`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}