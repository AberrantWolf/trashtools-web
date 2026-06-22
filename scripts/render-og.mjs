// Render the Open Graph card: assets/og.svg -> public/og.png (1200x630).
//
// Self-contained: builds a throwaway fontconfig that points at the project's
// own @fontsource fonts (so the card matches the site's type) without touching
// your system font directory. Requires `rsvg-convert` (librsvg) on PATH.
//
//   npm run og

import { writeFileSync, mkdtempSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();

const fontDirs = ['bricolage-grotesque', 'inter', 'jetbrains-mono'].map((f) =>
  resolve(root, 'node_modules/@fontsource', f, 'files')
);

for (const d of fontDirs) {
  if (!existsSync(d)) {
    console.error(`✗ Font dir missing: ${d}\n  Run "npm install" first.`);
    process.exit(1);
  }
}

const tmp = mkdtempSync(join(tmpdir(), 'tt-og-'));
const confPath = join(tmp, 'fonts.conf');
writeFileSync(
  confPath,
  `<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
${fontDirs.map((d) => `  <dir>${d}</dir>`).join('\n')}
  <cachedir>${join(tmp, 'cache')}</cachedir>
  <include ignore_missing="yes">/etc/fonts/fonts.conf</include>
</fontconfig>
`
);

const src = resolve(root, 'assets/og.svg');
const out = resolve(root, 'public/og.png');

const res = spawnSync('rsvg-convert', ['-w', '1200', '-h', '630', src, '-o', out], {
  stdio: 'inherit',
  env: { ...process.env, FONTCONFIG_FILE: confPath },
});

if (res.error) {
  if (res.error.code === 'ENOENT') {
    console.error(
      '✗ rsvg-convert not found. Install librsvg (e.g. `sudo pacman -S librsvg`).'
    );
  } else {
    console.error(`✗ ${res.error.message}`);
  }
  process.exit(1);
}
if (res.status !== 0) process.exit(res.status ?? 1);

console.log(`✓ Rendered ${out}`);
