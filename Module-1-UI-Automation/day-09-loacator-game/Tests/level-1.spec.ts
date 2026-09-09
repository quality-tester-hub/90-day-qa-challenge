import { test, expect } from '@playwright/test';

test('Level 1: Select all titles', async ({ page }) => {
  await page.goto('https://testsmith-io.github.io/locator-game/');

  // 1. Enter the tag selector for h3 elements
  await page.getByPlaceholder('Locator').fill('h3');

  // 2. Click Try! to preview selection
  await page.getByRole('button', { name: 'Try!' }).click();

  // 3. Click Submit to pass Level 1
  await page.getByRole('button', { name: 'Submit' }).click();
});