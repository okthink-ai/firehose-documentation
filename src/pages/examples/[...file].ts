import { readFile } from 'node:fs/promises';
import type { InferGetStaticPropsType } from 'astro';
import { filesUnder } from '../../../scripts/content.mjs';

export async function getStaticPaths() {
  return (await filesUnder('examples')).map((file) => ({ params: { file: file.slice('examples/'.length) }, props: { file } }));
}

export async function GET({ props }: { props: InferGetStaticPropsType<typeof getStaticPaths> }) {
  return new Response(await readFile(props.file, 'utf8'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
