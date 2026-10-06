# Portfolio

My personal site: what I'm building, what I've finished, what I gave up on, and what each project taught me.

Built with Next.js 16 (App Router), MDX, Tailwind CSS v4 and TypeScript. Deployed on Vercel.

## Run it

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Add a project

1. Copy `src/content/projects/_template.mdx` to `src/content/projects/<slug>.mdx`. The file name becomes the URL (`/projects/<slug>`).
2. Fill in `meta` at the top. `status` is one of `"in-progress"`, `"finished"` or `"scrapped"`.
3. Write the body. Wrap your takeaways in `<Learnings>…</Learnings>` to get the "What I learned" box.

That's it. The home page, project list, filters and sitemap pick it up automatically.

## Edit personal info

Name, bio, links and interests are all in `src/content/site.ts`.

## Where things live

```
src/
  app/                  routes (home, /projects, /projects/[slug], /about)
  components/           small UI pieces
  content/site.ts       your info and links
  content/projects/     one .mdx file per project
  lib/projects.ts       loads project files
  mdx-components.tsx    components usable inside MDX (e.g. <Learnings>)
```

To add a whole new section later (say `/notes`), make `src/content/notes/`, a loader like `lib/projects.ts`, and a route folder in `src/app/notes/`.
