import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'yaml';

/** @param {string} directory @returns {Promise<string[]>} */
export async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(file) : [file];
  }));
  return groups.flat().sort();
}

export async function readDocs() {
  const root = 'src/content/docs';
  const files = (await filesUnder(root)).filter((file) => file.endsWith('.md'));
  return Promise.all(files.map(async (file) => {
    const source = await readFile(file, 'utf8');
    const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    if (!match) throw new Error(`Missing frontmatter: ${file}`);
    const data = parse(match[1]);
    const slug = path.relative(root, file).replaceAll(path.sep, '/').replace(/\.md$/, '');
    return { file, slug, data, body: source.slice(match[0].length).trim(),
      url: slug === 'index' ? '/' : `/${slug}/` };
  }));
}
