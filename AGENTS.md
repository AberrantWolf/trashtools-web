# Trash Tools website

This repository is the static Astro landing page for `trashtools.net`. The tools it lists live in separate repositories. The site builds to `dist/` for Cloudflare Pages and needs no environment variables or credentials for local development.

## Setup and verification

- Use Node 22.12 or newer. `.node-version` selects Node 22 for deployment. Run `npm ci` from the repository root in a fresh checkout or worktree.
- Run `npm run dev` for local development, `npm run build` for the production build, and `npm run preview` to serve `dist/` locally.
- Run `npm run check` and `npm run build` to verify code changes.
- For UI changes, exercise the affected behavior in the browser. Check narrow layouts, keyboard use, both themes, and reduced motion where relevant.

## Where to work

- `src/data/projects.ts` is the source of truth for project cards and mini-terminal listings. Update the union and the displayed `facets` together when introducing a filter value. The grid matches any selected value within a facet and requires a match across all active facets.
- `src/pages/index.astro` assembles the homepage. `src/layouts/Base.astro` owns metadata, self-hosted fonts, and the pre-paint theme script. The theme toggle and mini-terminal share the `tt-theme` local storage key.
- Reuse `src/styles/global.css` design tokens and component-scoped styles. Keep client interactions in Astro component scripts and preserve reduced-motion handling for animations.
- The social card lives in `assets/og.svg`. If you edit it, run `npm run og` with `rsvg-convert` on `PATH` and include the regenerated `public/og.png`.
