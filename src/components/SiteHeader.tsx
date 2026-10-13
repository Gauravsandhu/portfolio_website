import Link from "next/link";
import { site } from "@/content/site";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-rule pt-8 pb-4 font-display">
      <Link href="/" className="group flex items-center gap-3 text-lg font-semibold tracking-tight">
        <span
          aria-hidden
          className="grid size-9 -rotate-6 place-items-center rounded-lg bg-ink text-sm font-bold text-paper shadow-[3px_3px_0_var(--hl-progress)] transition-transform group-hover:rotate-0"
        >
          {site.shortName
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </span>
        {site.shortName}
      </Link>
      <nav className="flex gap-5 text-muted">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-ink">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
