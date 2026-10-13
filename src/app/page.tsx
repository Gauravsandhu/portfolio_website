import Link from "next/link";
import { ProjectGrid } from "@/components/ProjectRow";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/content/site";
import { CATEGORIES } from "@/lib/project-types";
import { getAllProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getAllProjects();
  const current = projects.filter((p) => p.status === "in-progress");
  const finished = projects.filter((p) => p.status === "finished").slice(0, 3);

  return (
    <>
      <section className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl leading-[1.05] font-bold tracking-tight text-balance sm:text-7xl">
            Hi, I&rsquo;m {site.shortName}.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-pretty sm:text-2xl">{site.tagline}</p>
          <p className="mt-4 leading-relaxed text-muted">{site.description}</p>
          <SocialLinks className="mt-6 font-display" />
        </div>

        <aside className="relative max-w-md rotate-[1.2deg] rounded-sm border-2 border-ink bg-[#fffbe6] p-6 shadow-[8px_8px_0_var(--pen)] sm:p-8 lg:justify-self-end">
          <span
            aria-hidden
            className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-2 bg-hl-progress/80"
          />
          <h2 className="font-display text-xl font-semibold tracking-tight">
            Learning right now
          </h2>
          <ul className="mt-4 space-y-2 text-lg">
            {site.learningNow.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2.5 size-2 shrink-0 rotate-45 bg-pen" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Things I make
        </h2>
        <ul className="mt-5 grid grid-cols-2 gap-3 font-display sm:grid-cols-4">
          {CATEGORIES.map((category) => {
            const count = projects.filter((p) => p.category === category.value).length;
            const tile = (
              <>
                <span className="font-semibold" style={{ color: category.ink }}>
                  {category.label}
                </span>
                <span className="mt-1 text-sm text-muted">
                  {count > 0 ? `${count} project${count > 1 ? "s" : ""}` : "Nothing here yet"}
                </span>
              </>
            );
            return (
              <li key={category.value}>
                {count > 0 ? (
                  <Link
                    href={`/projects#${category.value}`}
                    className="flex h-full flex-col rounded-lg border-2 border-transparent p-4 transition-all hover:-translate-y-0.5 hover:border-ink"
                    style={{ backgroundColor: category.tint }}
                  >
                    {tile}
                  </Link>
                ) : (
                  <div className="flex h-full flex-col rounded-lg border-2 border-dashed border-rule p-4">
                    {tile}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          <span className="highlight highlight-in-progress">Working on right now</span>
        </h2>
        <div className="mt-6">
          {current.length > 0 ? (
            <ProjectGrid projects={current} />
          ) : (
            <p className="text-muted">Nothing on the bench at the moment.</p>
          )}
        </div>
      </section>

      {finished.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            <span className="highlight highlight-finished">Recently finished</span>
          </h2>
          <div className="mt-6">
            <ProjectGrid projects={finished} />
          </div>
        </section>
      )}

      <p className="mt-12 font-display text-lg">
        <Link href="/projects" className="pen-link">
          See all {projects.length} projects
        </Link>
      </p>
    </>
  );
}
