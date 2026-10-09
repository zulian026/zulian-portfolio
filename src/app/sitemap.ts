import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.zyandev.my.id";
  const lastModified = new Date();

  const staticPages = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/work", changeFrequency: "weekly", priority: 0.9 },
    { path: "/playground", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  ] as const;

  const projects = ["color-pallett", "resume-builder", "isle-shell"];

  return [
    ...staticPages.map(({ path, changeFrequency, priority }) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...projects.map((slug) => ({
      url: `${baseUrl}/work/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
