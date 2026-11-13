import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const site = 'https://nait-itba.github.io';

/**
 * Makes every link to another website open in a new tab. It runs once at the end of
 * the build over the finished pages, so it covers links written in Markdown, MDX and
 * components alike. Links within this site are left alone. Each changed link also gets
 * hidden text so screen readers announce "opens in a new tab".
 * Note: this applies to `astro build` (and `astro preview`), not to `astro dev`.
 */
function externalLinksInNewTab() {
  const note = '<span class="sr-only"> (opens in a new tab)</span>';
  const anchor = /<a\b([^>]*)>([\s\S]*?)<\/a>/g;
  const rewrite = (html) => html.replace(anchor, (whole, attrs, inner) => {
    const href = /\bhref="(https?:\/\/[^"]*)"/.exec(attrs)?.[1];
    if (!href || href.startsWith(site) || /\btarget=/.test(attrs)) return whole;
    return `<a${attrs} target="_blank" rel="noopener noreferrer">${inner}${note}</a>`;
  });
  return {
    name: 'external-links-in-new-tab',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        const files = (await readdir(root, { recursive: true })).filter((f) => f.endsWith('.html'));
        await Promise.all(files.map(async (f) => {
          const path = join(root, f);
          const html = await readFile(path, 'utf8');
          const next = rewrite(html);
          if (next !== html) await writeFile(path, next);
        }));
      },
    },
  };
}

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx(), externalLinksInNewTab()],
});
