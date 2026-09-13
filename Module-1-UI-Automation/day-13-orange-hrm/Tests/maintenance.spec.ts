import { test, expect } from '@playwright/test';

test('OrangeHRM Maintenance Module - Purge Records', async ({ page }) => {
  // Navigate and Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);

  // Navigate to Maintenance Section via side menu (requires password confirmation on demo site)
  await page.getByRole('link', { name: 'Maintenance' }).click();

  // Handle the confirmation password screen if prompted
  const passwordInput = page.getByPlaceholder('Password');
  if (await passwordInput.isVisible()) {
    await passwordInput.fill('admin123');
    await page.getByRole('button', { name: 'Confirm' }).click();
  }

  await expect(page).toHaveURL(/maintenance\/purgeCandidate/);

  // Verify purge employee/candidate options are accessible
  await expect(page.locator('.oxd-form')).toBeVisible();
});