import { test, expect } from '@playwright/test';

test('Level 2: Select the description text', async ({ page }) => {
  await page.goto('https://testsmith-io.github.io/locator-game/');

  // Clear Level 1 first
  await page.getByPlaceholder('Locator').fill('h3');
  await page.getByRole('button', { name: 'Try!' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  // Level 2 Automation
  await page.getByPlaceholder('Locator').fill('#description');
  await page.getByRole('button', { name: 'Try!' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  // Verify progression to Level 3
  await expect(page.locator('h1')).toContainText('3.');
});