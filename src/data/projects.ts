/* ===========================================================================
   The pile. Every card on the site is generated from this list.

   To add a tool later: copy a block, edit the fields, done. No HTML/CSS needed.
   `lang`, `platform`, and `status` drive the filter chips, so keep them to the
   union types below (add a new value to the union if you genuinely need one).
   =========================================================================== */

export type Lang = 'Rust' | 'Web' | 'Shell';
export type Platform = 'CLI' | 'Desktop' | 'Web' | 'Library' | 'Scripts';
export type Status = 'Stable' | 'Active' | 'WIP' | 'Retired';
export type Accent = 'rust' | 'teal' | 'hazard';

export interface Project {
  /** repo name on GitHub; also the anchor id */
  slug: string;
  /** display name */
  name: string;
  emoji: string;
  /** one line, lowercase, dry */
  tagline: string;
  /** 1–3 sentences for the card body */
  blurb: string;
  lang: Lang;
  platform: Platform;
  status: Status;
  /** freeform sticker tags shown on the card */
  tags: string[];
  /** card theming, for visual variety across the grid */
  accent: Accent;
  /** URL where the tool actually runs — a live, launchable web app */
  launch?: string;
  /** true if the repo ships prebuilt binaries on its Releases page */
  releases?: boolean;
  /** override the github url if the repo name differs from slug */
  repo?: string;
}

const GH = 'https://github.com/AberrantWolf';

export const projects: Project[] = [
  {
    slug: 'retro-junk',
    name: 'retro-junk',
    emoji: '🕹️',
    tagline: 'rom & disc-image wrangler for 23 consoles',
    blurb:
      'A Rust CLI that analyzes, renames, and scrapes metadata for retro game ROMs and disc images — 23 systems across Nintendo, Sony, Sega, and Microsoft. Streaming CRC32/SHA1/MD5, CUE/CHD/ISO parsing, the works.',
    lang: 'Rust',
    platform: 'CLI',
    status: 'Stable',
    tags: ['ROMs', 'hashing', 'No-Intro / Redump', 'CD images'],
    accent: 'rust',
    releases: true,
  },
  {
    slug: 'print-junk',
    name: 'print-junk',
    emoji: '📄',
    tagline: 'pdf viewer, flashcard maker, and bookbinding imposition',
    blurb:
      'A set of Rust PDF tools: a caching page viewer, a flashcard-PDF generator from CSV, and a real imposition engine — signature / perfect / spiral / case binding with folio, quarto, and octavo arrangements plus printer’s marks. Pure-Rust rendering, self-contained binaries.',
    lang: 'Rust',
    platform: 'Desktop',
    status: 'Active',
    tags: ['PDF', 'printing', 'bookbinding', 'imposition'],
    accent: 'teal',
    releases: true,
  },
  {
    slug: 'dqx-wayfinder',
    name: 'dqx-wayfinder',
    emoji: '🗺️',
    tagline: 'shortest in-game route across Dragon Quest X',
    blurb:
      'Tell it where you are and where you want to go; it returns the fastest route to actually play — weighted Dijkstra over the whole world, filtered by which content packs you’ve cleared and which Zoom points you’ve registered. Bilingual EN/JP. Runs entirely in your browser.',
    lang: 'Web',
    platform: 'Web',
    status: 'Active',
    tags: ['Dragon Quest', 'routing', 'Dijkstra', 'bilingual'],
    accent: 'hazard',
    launch: 'https://dqx-wayfinder.trashtools.net',
  },
  {
    slug: 'expat-junk',
    name: 'expat-junk',
    emoji: '✍️',
    tagline: 'translate PDFs & images in place, yourself',
    blurb:
      'Drag a rectangle over a chunk of text, it finds the words, you click to translate — via Gemini vision or Google Cloud Translation, with a token-saving cache. Resize, rotate, and fix the result in place. The right amount of manual for documents you refuse to pay a pro to mangle.',
    lang: 'Rust',
    platform: 'Desktop',
    status: 'WIP',
    tags: ['PDF', 'translation', 'OCR', 'Gemini'],
    accent: 'teal',
  },
  {
    slug: 'dqx-proton-helper',
    name: 'dqx-proton-helper',
    emoji: '🍷',
    tagline: 'run Dragon Quest X (JP) on Linux with plain Wine',
    blurb:
      'Helper scripts that set up a Wine prefix, run the DQX installer into it, and launch the game with the handful of non-obvious settings that make gameplay, the launcher’s HTML UI, and in-game FMV cutscenes all work — no Steam, Proton, or Lutris required. (The name’s a fossil: it predates dropping Proton.)',
    lang: 'Shell',
    platform: 'Scripts',
    status: 'Stable',
    tags: ['Linux', 'Wine', 'gaming', 'Dragon Quest'],
    accent: 'rust',
  },
  {
    slug: 'junk-libs',
    name: 'junk-libs',
    emoji: '🔩',
    tagline: 'the shared Rust plumbing under the rest of the pile',
    blurb:
      'The reusable building blocks the other tools stand on, carrying no app-specific meaning: CD-image parsing (CUE/CHD/ISO), streaming multi-hashers, checksum descriptors, common I/O traits, and a pure-Rust PDF render core. Boring on purpose — so the tools above don’t have to be.',
    lang: 'Rust',
    platform: 'Library',
    status: 'Active',
    tags: ['crates', 'infrastructure', 'PDF render', 'disc parsing'],
    accent: 'rust',
  },
];

/** GitHub repo URL for a project. */
export function repoUrl(p: Project): string {
  return p.repo ?? `${GH}/${p.slug}`;
}

/** Releases page URL, when the project ships binaries. */
export function releasesUrl(p: Project): string | undefined {
  return p.releases ? `${repoUrl(p)}/releases` : undefined;
}

/** Distinct facet values, in display order, for the filter UI. */
export const facets = {
  lang: ['Rust', 'Web', 'Shell'] as Lang[],
  platform: ['CLI', 'Desktop', 'Web', 'Library', 'Scripts'] as Platform[],
  status: ['Stable', 'Active', 'WIP'] as Status[],
};
