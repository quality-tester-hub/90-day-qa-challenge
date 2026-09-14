import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cymbal-shops.retail.cymbal.dev/');
  await page.getByRole('link').nth(2).click();
  await page.goto('https://cymbal-shops.retail.cymbal.dev/');
  await page.getByRole('link').nth(3).click();
  await page.getByRole('link').nth(4).click();
  await page.getByRole('link').nth(5).click();
  await page.locator('div:nth-child(6) > a').click();
  await page.locator('div:nth-child(7) > a').click();
  await page.locator('div:nth-child(8) > a').click();
  await page.locator('div:nth-child(9) > a').click();
  await page.locator('div:nth-child(10) > a').click();
  await page.goto('https://cymbal-shops.retail.cymbal.dev/');
});