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
      components: {
        Footer: './src/components/Footer.astro',
        PageTitle: './src/components/PageTitle.astro',
        MarkdownContent: './src/components/MarkdownContent.astro',
      },
      sidebar: [
        { label: 'Welcome', slug: 'index' },
        { label: 'Start', items: ['getting-started/connect', 'getting-started/first-session', 'getting-started/files-and-terminal', 'what-you-can-do'] },
        { label: 'Work with agents', items: ['guides/workspaces', 'guides/prepare-project', 'guides/project-workflow', 'guides/parallel-sessions', 'tools/chat', 'tools/questions', 'guides/explain-code', 'guides/make-a-change', 'guides/mobile', 'guides/return-to-work'] },
        { label: 'Review results', items: ['tools/diff', 'tools/smart-review', 'guides/finish-a-task', 'guides/recover-changes'] },
        { label: 'Reference and help', items: ['tools/overview', 'tools/terminal', 'tools/attachments', 'reference/providers-and-usage', 'reference/data-and-access', 'reference/agent-permissions', 'reference/settings', 'reference/glossary', 'troubleshooting/common-problems', 'feedback'] },
      ],
    }),
  ],
});
