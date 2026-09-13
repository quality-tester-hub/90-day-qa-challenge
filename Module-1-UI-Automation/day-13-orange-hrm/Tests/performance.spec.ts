import { test, expect } from '@playwright/test';

test('OrangeHRM Performance Module - Key Results / Trackers', async ({ page }) => {
  // Navigate and Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);

  // Navigate to Performance Section via side menu
  await page.getByRole('link', { name: 'Performance' }).click();
  await expect(page).toHaveURL(/performance\/searchEvaluatePerformanceTracker/);

  // Search or interact with Performance Trackers
  await page.locator('div.oxd-input-group:has-text("Employee Name") input').fill('Aaliyah');
  await page.getByRole('button', { name: 'Search' }).click();

  // Validate performance tracking table is visible
  const tableBody = page.locator('.oxd-table-body');
  await expect(tableBody).toBeVisible();
});