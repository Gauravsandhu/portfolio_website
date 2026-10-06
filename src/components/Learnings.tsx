import type { ReactNode } from "react";

/** Use in project MDX: <Learnings> ...markdown list... </Learnings> */
export function Learnings({ children }: { children: ReactNode }) {
  return (
    <section className="not-prose my-12 -rotate-[0.4deg] border-2 border-ink bg-paper p-6 shadow-[6px_6px_0_var(--hl-progress)] sm:p-8">
      <h2 className="font-display text-2xl font-semibold tracking-tight">
        What I learned
      </h2>
      <div className="mt-4 text-lg leading-relaxed [&_code]:font-display [&_code]:text-base [&_li]:my-2.5 [&_li]:pl-1 [&_li::marker]:text-pen [&_p]:my-3 [&_ul]:list-['✓'] [&_ul]:pl-6">
        {children}
      </div>
    </section>
  );
}
