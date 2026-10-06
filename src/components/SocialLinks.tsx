import { site } from "@/content/site";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-1 ${className}`}>
      {site.links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="pen-link"
            {...(link.href.startsWith("http")
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
