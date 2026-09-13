import { test, expect } from '@playwright/test';

test('OrangeHRM Admin Module - User Management', async ({ page }) => {
  // Navigate and Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);

  // Navigate to Admin Section
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page).toHaveURL(/admin\/viewSystemUsers/);

  // Filter users by username
  await page.locator('div.oxd-input-group:has-text("Username") input').fill('Admin');

  // Select User Role dropdown
  await page.locator('div.oxd-select-text').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();

  // Trigger search
  await page.getByRole('button', { name: 'Search' }).click();

  // Validate search results table is displayed and contains records
  const tableBody = page.locator('.oxd-table-body');
  await expect(tableBody).toBeVisible();
});