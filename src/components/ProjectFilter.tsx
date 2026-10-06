"use client";

import { useState } from "react";
import { STATUSES, type Project, type ProjectStatus } from "@/lib/project-types";
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
      <div className="mt-6">
        {visible.length > 0 ? (
          <ProjectGrid projects={visible} />
        ) : (
          <p className="py-8 text-muted">No projects with this status yet.</p>
        )}
      </div>
    </>
  );
}
