import { site } from "@/content/site";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-3 border-t border-rule py-8 font-display text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <SocialLinks />
      <p>
        © {new Date().getFullYear()} {site.legalName}
      </p>
    </footer>
  );
}
