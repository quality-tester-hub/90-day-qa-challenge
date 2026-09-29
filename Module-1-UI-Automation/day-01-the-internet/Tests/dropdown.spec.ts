import { test, expect } from '@playwright/test';

test('select dropdown options', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  await page.locator('#dropdown').selectOption('1');
  await expect(page.locator('#dropdown')).toHaveValue('1');
  
  await page.locator('#dropdown').selectOption('2');
  await expect(page.locator('#dropdown')).toHaveValue('2');
  
  await page.locator('#dropdown').selectOption('1');
  await expect(page.locator('#dropdown')).toHaveValue('1');
});