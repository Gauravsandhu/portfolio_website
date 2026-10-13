// Shared by server and client code, so no Node imports here.

export type ProjectStatus = "in-progress" | "finished" | "scrapped";

export const STATUSES: { value: ProjectStatus; label: string }[] = [
  { value: "in-progress", label: "In progress" },
  { value: "finished", label: "Finished" },
  { value: "scrapped", label: "Scrapped" },
];

/**
 * The order here is the order categories appear on the site.
 * `tint` is the soft background on cards, `ink` the strong accent on top of it.
 */
export const CATEGORIES = [
  {
    value: "game-dev",
    label: "Game Development",
    description: "Games and game systems, mostly in Unity.",
    tint: "#dde3ff",
    ink: "#2f4be0",
  },
  {
    value: "programming",
    label: "Programming",
    description: "Apps, tools and code that isn't a game.",
    tint: "#d3f1fa",
    ink: "#0a6f94",
  },
  {
    value: "computer-architecture",
    label: "Computer Architecture",
    description: "How computers work underneath: CPUs, memory and operating systems.",
    tint: "#e7defd",
    ink: "#6236d1",
  },
  {
    value: "graphics",
    label: "Graphics & Shaders",
    description: "Rendering, shaders and making pixels do interesting things.",
    tint: "#ffdcef",
    ink: "#b8186e",
  },
  {
    value: "3d-art",
    label: "3D Art",
    description: "Models, scenes and renders, mostly in Blender.",
    tint: "#ffe3cc",
    ink: "#b9530c",
  },
  {
    value: "2d-art",
    label: "2D Art",
    description: "Drawing, pixel art, sprites and illustration.",
    tint: "#fff0b8",
    ink: "#8a6a00",
  },
  {
    value: "photography",
    label: "Photography",
    description: "Photos and photo series.",
    tint: "#d9f2df",
    ink: "#23753f",
  },
  {
    value: "writing",
    label: "Writing & Storytelling",
    description: "Stories, worldbuilding and longer write-ups.",
    tint: "#f1e4d8",
    ink: "#7a4720",
  },
] as const;

export type Category = (typeof CATEGORIES)[number];
export type ProjectCategory = Category["value"];

export function categoryOf(category: ProjectCategory): Category {
  return CATEGORIES.find((c) => c.value === category) ?? CATEGORIES[0];
}

export function categoryLabel(category: ProjectCategory) {
  return categoryOf(category).label;
}

export type ProjectMeta = {
  title: string;
  summary: string;
  status: ProjectStatus;
  /** One of the values in CATEGORIES above. */
  category: ProjectCategory;
  /** Optional card image, a path inside public/, e.g. "/projects/my-thing/cover.jpg" */
  cover?: string;
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
