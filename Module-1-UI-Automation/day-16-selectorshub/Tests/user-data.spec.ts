import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://selectorshub.com/xpath-practice-page/');
  await page.locator('#ohrmList_chkSelectAll').check();
  await page.locator('#ohrmList_chkSelectAll').uncheck();
  await page.locator('#ohrmList_chkSelectRecord_25').check();
  await page.locator('#ohrmList_chkSelectRecord_15').check();
  await page.locator('#ohrmList_chkSelectRecord_14').check();
  await page.locator('#ohrmList_chkSelectRecord_2').check();
  await page.getByRole('cell').filter({ hasText: /^$/ }).nth(2).click();
  await page.locator('#ohrmList_chkSelectRecord_16').check();
  await page.locator('#ohrmList_chkSelectRecord_25').uncheck();
  await page.locator('#ohrmList_chkSelectAll').check();
  await page.locator('#ohrmList_chkSelectAll').uncheck();
});