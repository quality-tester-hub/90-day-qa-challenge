import { test, expect } from '@playwright/test';

test('OrangeHRM Login', async ({ page }) => {
  // Navigate to OrangeHRM demo login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Input credentials
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  // Submit login form
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful dashboard access
  await expect(page).toHaveURL(/dashboard/);
});