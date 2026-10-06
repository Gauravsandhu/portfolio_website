// Shared by server and client code, so no Node imports here.

export type ProjectStatus = "in-progress" | "finished" | "scrapped";

export const STATUSES: { value: ProjectStatus; label: string }[] = [
  { value: "in-progress", label: "In progress" },
  { value: "finished", label: "Finished" },
  { value: "scrapped", label: "Scrapped" },
];

export type ProjectMeta = {
  title: string;
  summary: string;
  status: ProjectStatus;
  /** ISO date, e.g. "2026-09-01" */
  started: string;
  /** ISO date when finished or scrapped */
  ended?: string | null;
  tags: string[];
  links?: { repo?: string; demo?: string };
};

export type Project = ProjectMeta & { slug: string };

export function formatMonth(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
