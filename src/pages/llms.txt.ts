import { publicDocs, renderIndex } from '../../scripts/export-docs.mjs';

export async function GET() {
  return new Response(renderIndex(await publicDocs()), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
