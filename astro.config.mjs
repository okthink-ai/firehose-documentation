import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import readableOverflow from './scripts/rehype-accessibility.mjs';

export default defineConfig({
  output: 'static',
  server: { host: true, port: 48731 },
  vite: { server: { strictPort: true } },
  trailingSlash: 'always',
  markdown: { processor: unified({ rehypePlugins: [readableOverflow] }) },
  integrations: [
    starlight({
      title: 'Firehose',
      disable404Route: true,
      description: 'Practical guides to starting agents, following their work, and reviewing changes in Firehose.',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      expressiveCode: {
        plugins: [{
          name: 'Keyboard-accessible code examples',
          hooks: {
            postprocessRenderedBlock: ({ renderData }) => readableOverflow()(renderData.blockAst),
          },
        }],
      },
      components: { Footer: './src/components/Footer.astro' },
      sidebar: [
        { label: 'Welcome', slug: 'index' },
        { label: 'Getting started', items: ['getting-started/connect', 'getting-started/first-session'] },
        { label: 'What you can do', slug: 'what-you-can-do' },
        { label: 'Tools', items: ['tools/overview', 'tools/chat', 'tools/diff', 'tools/questions', 'tools/smart-review'] },
        { label: 'Guides', items: ['guides/workspaces', 'guides/explain-code', 'guides/make-a-change', 'guides/mobile'] },
        { label: 'Reference', items: ['reference/settings', 'reference/glossary'] },
        { label: 'Troubleshooting', slug: 'troubleshooting/common-problems' },
        { label: 'Documentation feedback', slug: 'feedback' },
      ],
    }),
  ],
});
