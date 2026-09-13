import { preview } from 'astro';

// Use the API so Playwright owns the process even in agent environments where
// the Astro CLI would automatically detach a background server.
const server = await preview({ server: { host: '127.0.0.1', port: 4322 } });
if (server.port !== 4322) {
  await server.stop();
  throw new Error('Port 4322 is in use; browser checks need their own preview.');
}
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, async () => {
    await server.stop();
    process.exit(0);
  });
}
