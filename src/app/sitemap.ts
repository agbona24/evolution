import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo/authority";

const pages: {
  route: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { route: "", priority: 1.0, changeFrequency: "weekly" },
  { route: "/courses", priority: 0.95, changeFrequency: "weekly" },
  { route: "/study-abroad", priority: 0.9, changeFrequency: "monthly" },
  { route: "/about", priority: 0.8, changeFrequency: "monthly" },
  { route: "/contact", priority: 0.75, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return pages.map(({ route, priority, changeFrequency }) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
