import { test, expect } from '@playwright/test';

test.setTimeout(30000);

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Entry Ad' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('Close', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'click here' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'click here' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('Close', { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Exit Intent' }).click();
  await page.waitForTimeout(1000);
  await page.getByText('Mouse out of the viewport').click();
  await page.waitForTimeout(1000);
  await page.locator('html').click();
  await page.waitForTimeout(1000);
  await page.getByText('Close').click();
});