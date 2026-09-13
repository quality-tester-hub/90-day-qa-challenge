import { test, expect } from '@playwright/test';

test('OrangeHRM Directory Module - Employee Directory Search', async ({ page }) => {
  // Navigate and Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);

  // Navigate to Directory Section via side menu
  await page.getByRole('link', { name: 'Directory' }).click();
  await expect(page).toHaveURL(/directory\/viewDirectory/);

  // Filter or search the employee directory
  await page.locator('div.oxd-input-group:has-text("Employee Name") input').fill('Aaliyah');
  await page.getByRole('button', { name: 'Search' }).click();

  // Validate directory card results are displayed
  const directoryGrid = page.locator('.oxd-grid-item');
  await expect(directoryGrid.first()).toBeVisible();
});