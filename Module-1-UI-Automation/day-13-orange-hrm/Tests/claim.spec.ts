import { test, expect } from '@playwright/test';

test('OrangeHRM Claim Module - Assign Claim / Claims Search', async ({ page }) => {
  // Navigate and Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);

  // Navigate to Claim Section via side menu
  await page.getByRole('link', { name: 'Claim' }).click();
  await expect(page).toHaveURL(/claim\/viewAssignClaim|claim\/viewClaimRequest/);

  // Interact with Claim search filters
  await page.locator('div.oxd-input-group:has-text("Employee Name") input').fill('Aaliyah');
  await page.getByRole('button', { name: 'Search' }).click();

  // Validate that the claim records table is visible
  const tableBody = page.locator('.oxd-table-body');
  await expect(tableBody).toBeVisible();
});