import { test, expect } from '@playwright/test';

test('OrangeHRM PIM Module - Employee Search', async ({ page }) => {
  // Navigate and Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);

  // Navigate to PIM Section via side menu
  await page.getByRole('link', { name: 'PIM' }).click();
  await expect(page).toHaveURL(/pim\/viewEmployeeList/);

  // Search for an employee by name or ID
  await page.locator('div.oxd-input-group:has-text("Employee Name") input').fill('Aaliyah');
  await page.getByRole('button', { name: 'Search' }).click();

  // Validate that the employee records table appears
  const tableBody = page.locator('.oxd-table-body');
  await expect(tableBody).toBeVisible();
});