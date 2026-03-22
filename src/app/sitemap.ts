import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://naufalfirman.my.id";
  const today = new Date();
  const dateStr = today.toISOString().split("T")[0];

  return [
    {
      url: `${siteUrl}/`,
      lastModified: dateStr,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ];
}
