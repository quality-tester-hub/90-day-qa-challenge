import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Dynamic Content' }).click();
  await page.getByRole('link', { name: 'click here' }).click();
  await page.getByRole('link', { name: 'click here' }).click();
  await page.getByRole('link', { name: 'click here' }).click();
  await page.getByRole('link', { name: 'click here' }).click();
  await page.getByRole('link', { name: 'click here' }).click();
});