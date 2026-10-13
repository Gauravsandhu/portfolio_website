"use client";

import { useState } from "react";
import {
  CATEGORIES,
  STATUSES,
  type Project,
  type ProjectStatus,
} from "@/lib/project-types";
import { ProjectGrid } from "./ProjectRow";

type Filter = ProjectStatus | "all";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const options: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    ...STATUSES,
  ];
  const visible =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  return (
    <>
      <div
        role="group"
        aria-label="Filter by status"
        className="mt-8 flex flex-wrap gap-2 font-display text-sm"
      >
        {options.map((option) => {
          const count =
            option.value === "all"
              ? projects.length
              : projects.filter((p) => p.status === option.value).length;
          const active = filter === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(option.value)}
              className={`rounded-full border px-3.5 py-1.5 transition-colors ${
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-rule text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {option.label} <span className="opacity-60">{count}</span>
            </button>
          );
        })}
      </div>
      {visible.length > 0 ? (
        CATEGORIES.map((category) => {
          const inCategory = visible.filter((p) => p.category === category.value);
          if (inCategory.length === 0) return null;
          return (
            <section
              key={category.value}
              id={category.value}
              className="mt-14 scroll-mt-8"
            >
              <h2 className="flex items-center gap-3 font-display text-2xl font-semibold tracking-tight">
                <span
                  aria-hidden
                  className="size-4 rotate-12 rounded-[4px] border-2"
                  style={{ backgroundColor: category.tint, borderColor: category.ink }}
                />
                {category.label}
                <span className="text-base font-normal text-muted">
                  {inCategory.length}
                </span>
              </h2>
              <p className="mt-1 text-muted">{category.description}</p>
              <div className="mt-5">
                <ProjectGrid projects={inCategory} />
              </div>
            </section>
          );
        })
      ) : (
        <p className="mt-6 py-8 text-muted">No projects with this status yet.</p>
      )}
    </>
  );
}
