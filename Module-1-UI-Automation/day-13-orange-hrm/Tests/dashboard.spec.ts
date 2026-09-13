import { test, expect } from '@playwright/test';

test('OrangeHRM Dashboard Interactions', async ({ page }) => {
  // Navigate to OrangeHRM demo login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Input credentials
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  // Submit login form
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful dashboard access
  await expect(page).toHaveURL(/dashboard/);

  // Dashboard widget assertions
  await expect(page.getByText('Time at Work')).toBeVisible();
  await expect(page.getByText('My Actions')).toBeVisible();
  await expect(page.getByText('Quick Launch')).toBeVisible();
  await expect(page.locator('.oxd-userdropdown-tab')).toBeVisible();

  // Dashboard navigation & user menu interactions
  await page.locator('.oxd-userdropdown-tab').click();
  await page.getByRole('menuitem', { name: 'About' }).click();
  await page.getByRole('button', { name: '×' }).click(); // Close About modal

  // Quick Launch action triggers
  await page.getByRole('button', { name: 'Assign Leave' }).click();
  await expect(page).toHaveURL(/.*assignLeave/);

  // Return to Dashboard via side navigation
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await expect(page).toHaveURL(/dashboard/);
});