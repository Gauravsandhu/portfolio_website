import type { Metadata } from "next";
import Link from "next/link";
import { StatusLabel } from "@/components/StatusLabel";
import { formatMonth, getProject, getProjectSlugs } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { project } = await getProject(slug);
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const { project, Content } = await getProject(slug);
  const { repo, demo } = project.links ?? {};

  return (
    <article className="max-w-3xl">
      <Link href="/projects" className="font-display text-sm text-muted hover:text-ink">
        All projects
      </Link>

      <header className="mt-6">
        <StatusLabel status={project.status} />
        <h1 className="mt-3 font-display text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-muted">{project.summary}</p>

        <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 border-y border-rule py-4 font-display text-sm">
          <dt className="text-muted">When</dt>
          <dd>
            {formatMonth(project.started)}
            {project.ended ? ` to ${formatMonth(project.ended)}` : " to now"}
          </dd>
          <dt className="text-muted">Built with</dt>
          <dd>{project.tags.join(", ")}</dd>
          {(repo || demo) && (
            <>
              <dt className="text-muted">Links</dt>
              <dd className="flex gap-4">
                {repo && <a href={repo} className="pen-link" target="_blank" rel="noreferrer">Source code</a>}
                {demo && <a href={demo} className="pen-link" target="_blank" rel="noreferrer">Live demo</a>}
              </dd>
            </>
          )}
        </dl>
      </header>

      <div className="prose prose-lg mt-10 max-w-none text-ink prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-ink prose-p:text-ink prose-a:text-pen prose-strong:text-ink prose-code:text-ink prose-li:text-ink prose-li:marker:text-muted">
        <Content />
      </div>
    </article>
  );
}
