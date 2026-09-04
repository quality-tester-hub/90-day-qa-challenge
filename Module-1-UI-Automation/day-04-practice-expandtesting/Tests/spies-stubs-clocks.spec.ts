import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/spies-stubs-clocks');
  await page.getByRole('button', { name: '+ Like' }).click();
  await page.getByRole('button', { name: '- Dislike' }).click();
  await page.getByRole('button', { name: 'Find My Location' }).click();
  await page.locator('div').filter({ hasText: 'For this example, when a user' }).nth(5).click();
  await page.getByRole('button', { name: 'Discover This Method' }).click();
});