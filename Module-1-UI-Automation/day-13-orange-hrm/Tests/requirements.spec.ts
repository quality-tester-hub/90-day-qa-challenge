import { test, expect } from '@playwright/test';

test('OrangeHRM Leave Module - Leave Requirements / Configure', async ({ page }) => {
  // Navigate and Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);

  // Navigate to Leave Section and open the Configure/Requirements menu option
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.getByRole('button', { name: 'Configure' }).click();
  await page.getByRole('menuitem', { name: 'Leave Types' }).click();

  // Validate that the configuration/requirement management view is loaded
  await expect(page.locator('.oxd-table')).toBeVisible();
});