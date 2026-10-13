import Image from "next/image";
import Link from "next/link";
import { categoryOf, formatMonth, type Project } from "@/lib/project-types";
import { StatusLabel } from "./StatusLabel";

/** Cover image if the project has one, otherwise a tinted panel with a big initial. */
function CardCover({ project }: { project: Project }) {
  const category = categoryOf(project.category);
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden border-b border-rule"
      style={{ backgroundColor: category.tint }}
    >
      {project.cover ? (
        <Image
          src={project.cover}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
      ) : (
        <span
          aria-hidden
          className="absolute -right-2 -bottom-10 rotate-[-8deg] font-display text-[11rem] leading-none font-extrabold opacity-90 transition-transform duration-300 group-hover:rotate-0"
          style={{ color: category.ink }}
        >
          {project.title.charAt(0)}
        </span>
      )}
      <span
        className="absolute top-3 left-3 rounded-full border border-ink/10 bg-paper px-2.5 py-0.5 font-display text-xs font-semibold shadow-[2px_2px_0_rgb(26_29_46/0.15)]"
        style={{ color: category.ink }}
      >
        {category.label}
      </span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li>
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-ink/10 bg-paper transition-all hover:-translate-y-1 hover:border-ink hover:shadow-[6px_6px_0_var(--ink)]"
      >
        <CardCover project={project} />
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-baseline justify-between gap-3">
            <StatusLabel status={project.status} />
            <span className="font-display text-sm text-muted">
              {formatMonth(project.started)}
              {project.ended ? ` to ${formatMonth(project.ended)}` : " to now"}
            </span>
          </div>
          <h3 className="mt-3 font-display text-xl font-semibold tracking-tight group-hover:text-pen">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-muted">{project.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5 font-display text-xs">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-md bg-ink/5 px-2 py-1 text-ink/80">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </ul>
  );
}
