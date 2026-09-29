import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { load } from 'cheerio';
import { filesUnder } from './content.mjs';

const origin = 'https://local-docs.invalid';
const output = path.resolve('dist');
const failures = [];
const external = new Set();
const html = new Map();
for (const file of (await filesUnder(output)).filter((file) => file.endsWith('.html'))) {
  html.set(file, load(await readFile(file, 'utf8')));
}
if (!html.size) throw new Error('Build the site before checking links.');

async function checkLink(href, from, source) {
  if (/^(mailto:|tel:|data:|javascript:)/i.test(href)) return;
  let url;
  try { url = new URL(href, new URL(from, origin)); }
  catch { failures.push(`${source}: invalid URL ${href}`); return; }
  if (url.origin !== origin) { external.add(url.href); return; }
  let filename;
  try { filename = path.resolve(output, `.${decodeURIComponent(url.pathname)}`); }
  catch { failures.push(`${source}: invalid path ${href}`); return; }
  if (!filename.startsWith(`${output}${path.sep}`) && filename !== output) {
    failures.push(`${source}: path outside build ${href}`); return;
  }
  try {
    if ((await stat(filename)).isDirectory()) filename = path.join(filename, 'index.html');
    await stat(filename);
  } catch { failures.push(`${source}: missing ${href}`); return; }
  if (url.hash && html.has(filename)) {
    const id = decodeURIComponent(url.hash.slice(1));
    const $ = html.get(filename);
    if (!$('[id]').toArray().some((el) => $(el).attr('id') === id)) {
      failures.push(`${source}: missing anchor ${href}`);
    }
  }
}

let checked = 0;
for (const [file, $] of html) {
  const from = '/' + path.relative(output, file).replaceAll(path.sep, '/').replace(/index\.html$/, '');
  if ($('h1').length !== 1) failures.push(`${from}: expected one h1`);
  if (!$('title').text().trim() || !$('meta[name="description"]').attr('content')) {
    failures.push(`${from}: missing title or description`);
  }
  for (const element of $('[href], [src]').toArray()) {
    const href = $(element).attr('href') ?? $(element).attr('src');
    if (!href) continue;
    checked++;
    await checkLink(href, from, from);
  }
}
// Also check URLs in the machine-readable exports; these should never drift from the site.
for (const file of (await filesUnder(output)).filter((file) => /\.(md|txt)$/.test(file) && !file.includes('/pagefind/'))) {
  const source = await readFile(file, 'utf8');
  const from = '/' + path.relative(output, file).replaceAll(path.sep, '/');
  const body = source.replace(/```[\s\S]*?```/g, '');
  for (const [, href] of body.matchAll(/\[[^\]]*\]\(([^\s)]+)\)/g)) {
    checked++;
    await checkLink(href, from, from);
  }
}
// Contributor Markdown uses repository-relative paths, not website paths.
const contributorFiles = ['README.md', 'AGENTS.md', 'CONTRIBUTING.md', 'docs/index.md',
  ...(await filesUnder('maintainers')).filter((file) => file.endsWith('.md'))];
for (const file of contributorFiles) {
  const source = (await readFile(file, 'utf8')).replace(/```[\s\S]*?```/g, '');
  for (const [, href] of source.matchAll(/\[[^\]]*\]\(([^\s)]+)\)/g)) {
    if (/^https?:/.test(href)) { external.add(href); continue; }
    if (href.startsWith('#')) continue;
    try { await stat(path.resolve(path.dirname(file), decodeURIComponent(href.split('#')[0]))); }
    catch { failures.push(`${file}: missing ${href}`); }
  }
}

if (process.argv.includes('--external')) {
  for (const href of external) {
    try {
      let response = await fetch(href, { method: 'HEAD', signal: AbortSignal.timeout(15000) });
      if ([403, 405].includes(response.status)) {
        response = await fetch(href, { signal: AbortSignal.timeout(15000) });
      }
      await response.body?.cancel();
      if (!response.ok) failures.push(`${href}: HTTP ${response.status}`);
    } catch (error) { failures.push(`${href}: ${error.message}`); }
  }
  console.log(`Checked ${external.size} external URLs.`);
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${html.size} HTML pages, ${checked} links/assets, and contributor file links.`);
}
