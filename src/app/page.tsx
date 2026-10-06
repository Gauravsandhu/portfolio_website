import Link from "next/link";
import { ProjectList } from "@/components/ProjectRow";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/content/site";
import { getAllProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getAllProjects();
  const current = projects.filter((p) => p.status === "in-progress");
  const finished = projects.filter((p) => p.status === "finished").slice(0, 3);

  return (
    <>
      <section className="max-w-2xl">
        <h1 className="font-display text-5xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
          Hi, I&rsquo;m {site.shortName}.
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-pretty">{site.tagline}</p>
        <p className="mt-4 leading-relaxed text-muted">{site.description}</p>
        <SocialLinks className="mt-6 font-display" />
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          <span className="highlight highlight-in-progress">Working on right now</span>
        </h2>
        {current.length > 0 ? (
          <ProjectList projects={current} />
        ) : (
          <p className="mt-4 text-muted">Nothing on the bench at the moment.</p>
        )}
      </section>

      {finished.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            <span className="highlight highlight-finished">Recently finished</span>
          </h2>
          <ProjectList projects={finished} />
        </section>
      )}

      <p className="mt-10 font-display">
        <Link href="/projects" className="pen-link">
          See all {projects.length} projects, including the scrapped ones
        </Link>
      </p>
    </>
  );
}
