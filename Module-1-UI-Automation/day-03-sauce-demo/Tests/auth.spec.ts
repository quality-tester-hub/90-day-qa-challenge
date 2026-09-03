import { test, expect } from '@playwright/test';

test('SauceDemo Main Page - Standard Login Workflow', async ({ page }) => {
  // Navigate to SauceDemo main page
  await page.goto('https://www.saucedemo.com/');

  // Fill in login credentials
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Validate successful navigation to Inventory Dashboard
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});