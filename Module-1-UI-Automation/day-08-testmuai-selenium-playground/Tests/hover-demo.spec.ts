import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/hover-demo/');
  await page.getByText('Hover Me').first().click();
  await page.getByText('Link Hover').click();
  await page.getByText('Hover Me').nth(1).click();
  await page.getByText('Hover Me').nth(2).click();
  await page.getByRole('img', { name: 'Image' }).first().dblclick();
});