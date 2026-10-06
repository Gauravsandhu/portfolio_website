import Link from "next/link";
import { site } from "@/content/site";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="flex items-baseline justify-between gap-4 border-b border-rule pt-8 pb-4 font-display">
      <Link href="/" className="text-lg font-semibold tracking-tight">
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
