import { readFile } from 'node:fs/promises';
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const [folder, blankGreeting] of [
  ['hello-form', 'Hello, !'],
  ['hello-form-result', 'Hello, guest!'],
]) {
  test(`${folder} matches the documented browser behavior`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.setContent(await readFile(`examples/${folder}/index.html`, 'utf8'));
    const name = page.getByRole('textbox', { name: 'Name', exact: true });
    for (const [input, output] of [
      ['Ada', 'Hello, Ada!'],
      [' Ada ', 'Hello, Ada!'],
      ['', blankGreeting],
      ['   ', blankGreeting],
    ]) {
      await name.fill(input);
      await page.getByRole('button', { name: 'Show greeting' }).click();
      await expect(page.getByRole('status')).toHaveText(output);
    }
    await name.fill('<b>Ada</b>');
    await name.press('Enter');
    await expect(page.getByRole('status')).toHaveText('Hello, <b>Ada</b>!');
    await expect(page.locator('#result b')).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
    const report = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(report.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}
