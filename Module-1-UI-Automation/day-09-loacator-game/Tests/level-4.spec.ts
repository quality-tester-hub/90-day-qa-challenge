import { test, expect } from '@playwright/test';

test('Level 4: Select only the button which is part of the toolbar', async ({ page }) => {
  await page.goto('https://testsmith-io.github.io/locator-game/');

  // Clear Level 1
  await page.getByPlaceholder('Locator').fill('h3');
  await page.getByRole('button', { name: 'Try!' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  // Clear Level 2
  await page.getByPlaceholder('Locator').fill('#description');
  await page.getByRole('button', { name: 'Try!' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  // Clear Level 3
  await page.getByPlaceholder('Locator').fill('li.active');
  await page.getByRole('button', { name: 'Try!' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  // Level 4 Automation
  await page.getByPlaceholder('Locator').fill('#toolbar button');
  await page.getByRole('button', { name: 'Try!' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  // Verify progression to Level 5
  await expect(page.locator('h1')).toContainText('5.');
});