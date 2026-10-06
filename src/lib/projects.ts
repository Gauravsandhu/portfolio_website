import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

import type { Project, ProjectMeta } from "./project-types";

export * from "./project-types";

const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");

/** Every `.mdx` in the projects folder is a project, except files starting with `_`. */
export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

async function loadProjectModule(slug: string) {
  return (await import(`@/content/projects/${slug}.mdx`)) as {
    default: ComponentType;
    meta: ProjectMeta;
  };
}

export async function getProject(slug: string) {
  const mod = await loadProjectModule(slug);
  return { project: { ...mod.meta, slug } as Project, Content: mod.default };
}

/** Most recently started first. */
export async function getAllProjects(): Promise<Project[]> {
  const projects = await Promise.all(
    getProjectSlugs().map(async (slug) => (await getProject(slug)).project),
  );
  return projects.sort((a, b) => b.started.localeCompare(a.started));
}
