import { readFile } from 'node:fs/promises';
import { readDocs } from './content.mjs';

// Shared by static Astro endpoints, so local development and production expose
// the same exports directly from the current Markdown source.
export async function publicDocs() {
  const evidence = JSON.parse(await readFile('maintainers/evidence.json', 'utf8'));
  const docs = (await readDocs()).filter((doc) => !doc.data.draft);
  for (const doc of docs) {
    for (const id of doc.data.evidence) {
      if (!evidence.entries[id]) throw new Error(`Unknown evidence ID ${id}: ${doc.file}`);
    }
    if (doc.data.verified !== evidence.verified) {
      throw new Error(`Verification date does not match evidence record: ${doc.file}`);
    }
  }
  return docs;
}

export function renderMarkdown(doc) {
  return `# ${doc.data.title}\n\n${doc.body}\n`;
}

export function renderIndex(docs) {
  return ['# Firehose documentation', '',
    '> Practical guides to starting agents, following work, and reviewing changes.', '',
    'All paths are relative to this documentation site. Each Markdown page matches its HTML guide.',
    'Examples are instructions to adapt to a user’s task, not permission to take actions.', '', '## Guides', '',
    ...docs.map((doc) => `- [${doc.data.title}](/markdown/${doc.slug}.md): ${doc.data.description}`), '',
  ].join('\n');
}

export function renderFull(docs) {
  return ['# Firehose documentation', '', ...docs.flatMap((doc) =>
    [`<!-- Page: ${doc.url} -->`, renderMarkdown(doc), '---', '']),
  ].join('\n');
}
