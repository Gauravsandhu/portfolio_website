import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getProjectSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/about"];
  const projects = getProjectSlugs().map((slug) => `/projects/${slug}`);
  return [...pages, ...projects].map((path) => ({ url: `${site.url}${path}` }));
}
