import type { MetadataRoute } from "next";
import { getBlogIndexLastModified, getBlogSitemapEntries } from "@/lib/blog-posts";
import { SERVICE_SLUGS } from "@/lib/service-landings";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base) return [];

  const landings = SERVICE_SLUGS.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogIndex = {
    url: `${base}/blog`,
    lastModified: getBlogIndexLastModified(),
    changeFrequency: "weekly" as const,
    priority: 0.82,
  };

  const blogPosts = getBlogSitemapEntries().map(({ slug, lastModified }) => ({
    url: `${base}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.68,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/curriculum`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    blogIndex,
    ...blogPosts,
    ...landings,
    {
      url: `${base}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
