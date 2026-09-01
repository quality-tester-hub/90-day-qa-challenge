import { test, expect } from '@playwright/test';

test('HTML5 Drag and Drop', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Drag and Drop' }).click();

  const columnA = page.locator('#column-a');
  const columnB = page.locator('#column-b');

  await expect(columnA).toBeVisible();
  await expect(columnB).toBeVisible();

  await expect(columnA).toHaveText('A');
  await expect(columnB).toHaveText('B');

  await columnA.dragTo(columnB);
// //
  await expect(columnA).toHaveText('B');
  await expect(columnB).toHaveText('A');
});