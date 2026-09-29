import type { InferGetStaticPropsType } from 'astro';
import { publicDocs, renderMarkdown } from '../../../scripts/export-docs.mjs';

export async function getStaticPaths() {
  return (await publicDocs()).map((doc) => ({ params: { slug: doc.slug }, props: { markdown: renderMarkdown(doc) } }));
}

export function GET({ props }: { props: InferGetStaticPropsType<typeof getStaticPaths> }) {
  return new Response(props.markdown, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
