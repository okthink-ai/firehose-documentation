import { publicDocs, renderFull } from '../../scripts/export-docs.mjs';

export async function GET() {
  return new Response(renderFull(await publicDocs()), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
