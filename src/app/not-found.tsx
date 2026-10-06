import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1 className="font-display text-4xl font-bold tracking-tight">
        <span className="highlight highlight-scrapped">Page not found</span>
      </h1>
      <p className="mt-4 text-lg text-muted">
        This page doesn&rsquo;t exist. Maybe it was scrapped.
      </p>
      <p className="mt-6 font-display">
        <Link href="/projects" className="pen-link">Browse all projects</Link>
      </p>
    </>
  );
}
