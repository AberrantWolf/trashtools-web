# trashtools-web

The landing page for **[Trash Tools](https://trashtools.net)** — a pile of small,
AI-assisted tools I build in my spare time. The site is itself one of them.

It's a static [Astro](https://astro.build) site deployed to Cloudflare Pages.
Every project card is generated from one data file, the fancy bits are vanilla-JS
islands, and all of it respects `prefers-reduced-motion`.

## Develop

This repo uses [mise](https://mise.jdx.dev) to pin Node (see `mise.toml`):

```bash
mise install        # first time: gets the pinned Node
npm install
npm run dev          # http://localhost:4321
```

If you'd rather not use mise, any Node 20+ with npm works — just `npm install && npm run dev`.

## Build

```bash
npm run build        # → ./dist  (what Cloudflare Pages serves)
npm run preview      # serve the built output locally
```

## Adding a tool

Edit `src/data/projects.ts` — copy a block, fill in the fields. The card, its
sticker tags, the filter chips, and the mini-terminal all read from that list.
No layout or CSS to touch.

## Layout

```
src/
  data/projects.ts        the pile (single source of truth)
  layouts/Base.astro      <head>, fonts, no-flash theme, SEO/OG
  components/             Hero, Projects, ProjectCard, About, Footer,
                          ThemeToggle, MiniTerminal, CursorTrail
  styles/global.css       design tokens (the "Curated Junkyard" palette)
public/                   favicon, _headers, static assets
```

## Credits

Fonts are self-hosted and openly licensed (OFL): Bricolage Grotesque, Inter,
JetBrains Mono. No AI-generated art — the favicon and any future imagery are
hand-made, stock, or Creative Commons.

© Scott Harper. Lovingly assembled from spare parts.
