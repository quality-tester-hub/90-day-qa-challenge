import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ui5.sap.com/#/demoapps');
  await page.getByRole('button', { name: 'Accept All' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('[id="__link1-sdk---demoApps--sapUiDemoKitDemoAppsMain-0-__cssgrid0-sdk---demoApps--sapUiDemoKitDemoAppsMain-0-0"]').click();
  const page1 = await page1Promise;
  await page1.locator('[id="__button4-container-cart---welcomeView--promotedRow-1"]').click();
  await page1.locator('[id="__button4-container-cart---welcomeView--promotedRow-0"]').click();
  await page1.locator('[id="__button5-container-cart---welcomeView--viewedRow-0"]').click();
  await page1.locator('[id="__button5-container-cart---welcomeView--viewedRow-2"]').click();
  await page1.getByRole('button', { name: 'OK', exact: true }).click();
  await page1.locator('[id="__button5-container-cart---welcomeView--viewedRow-3"]').click();
  await page1.locator('[id="__button6-container-cart---welcomeView--favoriteRow-0"]').click();
  await page1.getByRole('button', { name: 'Show Shopping Cart' }).click();
  await page1.locator('[id="__button6-container-cart---welcomeView--favoriteRow-3"]').click();
  await page1.locator('[id="__toolbar2"]').click();
  await page1.getByRole('button', { name: 'Edit your cart' }).click();
  await page1.getByRole('button', { name: 'Show Shopping Cart' }).click();
});