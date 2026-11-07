# trashtools-web

The landing page for **[Trash Tools](https://trashtools.net)** — a pile of small,
AI-assisted tools I build in my spare time. The site is itself one of them.

It's a static [Astro](https://astro.build) site deployed to Cloudflare Pages.
Every project card is generated from one data file, the fancy bits are vanilla-JS
islands, and all of it respects `prefers-reduced-motion`.

## Develop

Use Node 22.12 or newer. `.node-version` selects Node 22 for the deployment
build. If you use [mise](https://mise.jdx.dev), `mise install` installs the
current Node LTS specified in `mise.toml`.

```bash
npm ci
npm run dev          # http://localhost:4321
```

## Build

```bash
npm run check        # type-check the Astro site
npm run build        # → ./dist  (what Cloudflare Pages serves)
npm run preview      # serve the built output locally
```

## Social card

The Open Graph preview image is rendered from `assets/og.svg` using the site's
own fonts. Edit the SVG, then:

```bash
npm run og           # → public/og.png   (needs rsvg-convert / librsvg installed)
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
