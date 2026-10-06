import { STATUSES, type ProjectStatus } from "@/lib/project-types";

export function statusLabel(status: ProjectStatus) {
  return STATUSES.find((s) => s.value === status)?.label ?? status;
}

export function StatusLabel({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`highlight highlight-${status} font-display text-sm font-medium whitespace-nowrap ${
        status === "scrapped" ? "line-through decoration-1" : ""
      }`}
    >
      {statusLabel(status)}
    </span>
  );
}
