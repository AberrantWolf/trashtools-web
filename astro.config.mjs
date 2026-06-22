// @ts-check
import { defineConfig } from 'astro/config';

// Static output (default) — deploys straight to Cloudflare Pages from ./dist.
export default defineConfig({
  site: 'https://trashtools.net',
  trailingSlash: 'ignore',
  build: {
    // Inline tiny scripts to keep the request count low for the islands.
    inlineStylesheets: 'auto',
  },
});
