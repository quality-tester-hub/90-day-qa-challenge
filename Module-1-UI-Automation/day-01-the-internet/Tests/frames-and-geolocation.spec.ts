import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Frames', exact: true }).click();
  await page.getByRole('link', { name: 'Nested Frames' }).click();
  await page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-left"]').contentFrame().getByText('LEFT').click();
  await page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-middle"]').contentFrame().locator('body').click();
  await page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-right"]').contentFrame().getByText('RIGHT').click();
  await page.getByRole('link', { name: 'iFrame' }).click();
  await page.locator('iframe[title="Rich Text Area"]').contentFrame().locator('html').click();
  await page.getByRole('button', { name: 'Bold' }).click();
  await page.locator('iframe[title="Rich Text Area"]').contentFrame().getByText('Your content goes here.').click();
  await page.locator('iframe[title="Rich Text Area"]').contentFrame().getByText('Your content goes here.').click();
});