import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://selectorshub.com/xpath-practice-page/');
  await page.locator('.column-1 > input').first().check();
  await page.locator('.column-1 > input').first().uncheck();
  await page.getByRole('cell', { name: 'chrome' }).nth(1).click();
  await page.locator('.row-3 > .column-1 > input').check();
  await page.locator('.row-4 > .column-1').click();
  await page.locator('.row-4 > .column-1 > input').check();
  await page.locator('.row-11 > .column-1').click();
  await page.locator('.row-11 > .column-1 > input').check();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Next' }).dblclick();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.locator('[id="coming google"]').contentFrame().getByRole('radio', { name: 'No', exact: true }).click();
  await page.locator('[id="coming google"]').contentFrame().getByRole('radio', { name: 'Yes' }).click();
  await page.locator('[id="coming google"]').contentFrame().getByRole('radio', { name: 'Installed Now' }).click();
});