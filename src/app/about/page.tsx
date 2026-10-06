import type { Metadata } from "next";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        About me
      </h1>

      <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed">
        {site.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 grid max-w-2xl gap-10 sm:grid-cols-2">
        <section>
          <h2 className="font-display text-xl font-semibold tracking-tight">
            <span className="highlight highlight-in-progress">Learning right now</span>
          </h2>
          <ul className="mt-4 space-y-1.5">
            {site.learningNow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold tracking-tight">
            <span className="highlight highlight-finished">Other interests</span>
          </h2>
          <ul className="mt-4 space-y-1.5">
            {site.interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold tracking-tight">Find me elsewhere</h2>
        <SocialLinks className="mt-4 font-display" />
      </section>
    </>
  );
}
