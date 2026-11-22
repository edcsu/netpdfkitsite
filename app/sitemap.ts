import type { MetadataRoute } from "next";
import { docsFlat } from "@/content/docs/nav";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/docs", "/previewer", "/releases", ...docsFlat.map((doc) => `/docs/${doc.slug}`)];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
