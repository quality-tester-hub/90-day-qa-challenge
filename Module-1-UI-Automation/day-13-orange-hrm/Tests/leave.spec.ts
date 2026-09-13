import { test, expect } from '@playwright/test';

test('OrangeHRM Leave Module - Leave List Search', async ({ page }) => {
  // Navigate and Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);

  // Navigate to Leave Section via side menu
  await page.getByRole('link', { name: 'Leave' }).click();
  await expect(page).toHaveURL(/leave\/viewLeaveList/);

  // Interact with Leave List filters (e.g., date range or status)
  await page.locator('.oxd-date-input input').first().click();
  
  // Verify that the leave records table or filter form is visible
  await expect(page.locator('.oxd-form')).toBeVisible();
});