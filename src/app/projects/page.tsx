import type { Metadata } from "next";
import { ProjectFilter } from "@/components/ProjectFilter";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Everything I've built, am building, or gave up on.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <>
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Projects
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Finished, still going, and given up on. Each one has a short write-up of
        why I started it and what I learned.
      </p>
      <ProjectFilter projects={projects} />
    </>
  );
}
