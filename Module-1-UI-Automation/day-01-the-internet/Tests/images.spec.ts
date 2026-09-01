import { test, expect } from '@playwright/test';

test('Broken Images', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Open Broken Images
  await page.getByRole('link', { name: 'Broken Images' }).click();

  // Verify the Broken Images page loaded
  await expect(
    page.getByRole('heading', { name: 'Broken Images' })
  ).toBeVisible();

  // Verify the images are present
  await expect(page.getByRole('img')).toHaveCount(4);
});