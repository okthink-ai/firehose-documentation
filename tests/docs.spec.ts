import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readDocs } from '../scripts/content.mjs';

const docs = await readDocs();

async function expectNoOverflow(page: import('@playwright/test').Page) {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
  expect(overflow, 'The document must fit the viewport').toBe(false);
}

test('every guide renders and fits the viewport', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  for (const doc of docs) {
    await page.goto(doc.slug === '404' ? '/404.html' : doc.url);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(doc.data.title);
    await expect(page.locator('main')).toBeVisible();
    await expectNoOverflow(page);
  }
  expect(errors).toEqual([]);
});

test('navigation reaches a guide and indicates the current page', async ({ page, isMobile }) => {
  await page.goto('/');
  if (isMobile) await page.locator('button[popovertarget="starlight__sidebar"]').click();
  await page.locator('#starlight__sidebar').getByRole('link', { name: 'Start your first session', exact: true }).click();
  await expect(page).toHaveURL(/\/getting-started\/first-session\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Start your first session');
  await expect(page.locator('#starlight__sidebar a[aria-current="page"]')).toHaveText('Start your first session');
});

test('search finds a guide and handles no results', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'Search' });
  const input = dialog.getByRole('textbox');
  await input.fill('questionnaire');
  const result = dialog.getByRole('link', { name: /Ask clarifying questions/ });
  await expect(result.first()).toBeVisible();
  await result.first().click();
  await expect(page).toHaveURL(/\/tools\/questions\//);
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await input.fill('zzzxqvnonexistent');
  await expect(dialog).toContainText(/No results/i);
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeFocused();
});

for (const theme of ['light', 'dark'] as const) {
  // Give each guide its own timeout and failure report as the site grows.
  test.describe(`${theme} theme accessibility`, () => {
    for (const { url } of docs) {
      test(url, async ({ page }) => {
        await page.addInitScript((value) => localStorage.setItem('starlight-theme', value), theme);
        await page.goto(url);
        await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
        const report = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        expect(report.violations, `Accessibility failures on ${url}`).toEqual([]);
      });
    }
  });
}

test('keyboard skip link reaches content', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#_top$/);
});

test('guides and exports work without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4322/');
  await page.locator('main').getByRole('link', { name: 'Start your first session →', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Start your first session');
  await expect(page.locator('main')).toContainText('git add greeting.mjs');
  await expect(page.locator('pre[data-language="sh"]')).toHaveAttribute('tabindex', '0');
  await expectNoOverflow(page);
  const exported = await context.request.get('http://127.0.0.1:4322/markdown/getting-started/first-session.md');
  expect(exported.ok()).toBe(true);
  expect(await exported.text()).toContain('## 4. Check the answer');
  await context.close();
});

test('narrow layout supports enlarged text', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto('/getting-started/first-session/');
  await page.addStyleTag({ content: 'html { font-size: 200%; }' });
  await expectNoOverflow(page);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});


test('missing pages offer a useful recovery path', async ({ page }) => {
  const response = await page.goto('/this-page-does-not-exist/');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Page not found');
  await page.getByRole('link', { name: 'Return to the documentation home' }).click();
  await expect(page).toHaveURL('/');
});


test('article Markdown link exports the current guide', async ({ page, request, isMobile }) => {
  await page.goto('/reference/agent-permissions/');
  const link = page.getByRole('link', { name: 'Read as Markdown' });
  await expect(link).toHaveAttribute('href', '/markdown/reference/agent-permissions.md');
  const response = await request.get(await link.getAttribute('href') as string);
  expect(response.ok()).toBe(true);
  expect(await response.text()).toContain('## Codex');
  const capture = page.locator('.product-capture img');
  await capture.scrollIntoViewIfNeeded();
  await expect.poll(() => capture.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  expect(await capture.evaluate((img: HTMLImageElement) => img.currentSrc)).toContain(isMobile ? 'codex-launch-mobile.png' : 'codex-launch-desktop.png');
  await expect(page.locator('.right-sidebar-container')).toHaveCount(1);
});

test('home offers clear starting routes without an article contents column', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.right-sidebar-container')).toHaveCount(0);
  await expect(page.locator('main')).toContainText('existing Firehose server');
  await page.locator('main').getByRole('link', { name: 'Review the result', exact: true }).click();
  await expect(page).toHaveURL('/tools/diff/');
  await page.locator('main').getByRole('link', { name: 'finish the task', exact: true }).click();
  await expect(page).toHaveURL('/guides/finish-a-task/');
  await expect(page.locator('main')).toContainText('Also delete the worktree');
});
