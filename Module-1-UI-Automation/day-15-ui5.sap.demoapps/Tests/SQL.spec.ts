import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ui5.sap.com/#/demoapps');
  await page.getByRole('button', { name: 'Accept All' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('[id="__link1-sdk---demoApps--sapUiDemoKitDemoAppsMain-0-__cssgrid0-sdk---demoApps--sapUiDemoKitDemoAppsMain-0-5"]').click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Say Hello' }).click();
  await page1.getByRole('button', { name: 'OK' }).click();
});