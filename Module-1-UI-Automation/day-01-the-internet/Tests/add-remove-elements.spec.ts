import { test, expect } from '@playwright/test';

test('should dynamically add and remove elements', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  // Add element and assert it appeared
  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible();

  // Delete element and assert it was removed from DOM
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(0);
});