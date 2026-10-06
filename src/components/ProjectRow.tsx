import Link from "next/link";
import { formatMonth, type Project } from "@/lib/project-types";
import { StatusLabel } from "./StatusLabel";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="border-b border-rule last:border-b-0">
      <Link
        href={`/projects/${project.slug}`}
        className="group block py-5"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-xl font-semibold tracking-tight group-hover:text-pen">
            {project.title}
          </h3>
          <StatusLabel status={project.status} />
        </div>
        <p className="mt-1 text-muted">{project.summary}</p>
        <p className="mt-2 font-display text-sm text-muted">
          {formatMonth(project.started)}
          {project.ended ? ` to ${formatMonth(project.ended)}` : " to now"}
          <span className="mx-2 text-rule">/</span>
          {project.tags.join(", ")}
        </p>
      </Link>
    </li>
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul>
      {projects.map((project) => (
        <ProjectRow key={project.slug} project={project} />
      ))}
    </ul>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li>
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col rounded-lg border border-rule bg-paper p-5 transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-[4px_4px_0_var(--rule)]"
      >
        <span className="self-start">
          <StatusLabel status={project.status} />
        </span>
        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight group-hover:text-pen">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-muted">{project.summary}</p>
        <p className="mt-4 font-display text-sm text-muted">
          {formatMonth(project.started)}
          {project.ended ? ` to ${formatMonth(project.ended)}` : " to now"}
        </p>
        <p className="mt-1 font-display text-sm text-muted">
          {project.tags.join(", ")}
        </p>
      </Link>
    </li>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </ul>
  );
}
