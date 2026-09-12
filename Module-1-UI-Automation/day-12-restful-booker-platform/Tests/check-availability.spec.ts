import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('textbox').first().click();
  await page.getByRole('gridcell', { name: 'Choose Sunday, 20 September' }).click();
  await page.getByRole('button', { name: 'Check Availability' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('gridcell', { name: 'Choose Sunday, 20 September' }).click();
  await page.getByRole('button', { name: 'Check Availability' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('gridcell', { name: 'Choose Sunday, 4 October' }).click();
  await page.getByRole('button', { name: 'Check Availability' }).click();
  await page.getByRole('button', { name: 'Check Availability' }).click();
});