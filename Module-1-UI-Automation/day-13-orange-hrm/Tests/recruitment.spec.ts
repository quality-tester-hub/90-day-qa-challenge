import { test, expect } from '@playwright/test';

test('OrangeHRM Recruitment Module - Candidates Search', async ({ page }) => {
  // Navigate and Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);

  // Navigate to Recruitment Section via side menu
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await expect(page).toHaveURL(/recruitment\/viewCandidates/);

  // Filter candidates by Candidate Name or Job Title
  await page.locator('div.oxd-input-group:has-text("Candidate Name") input').fill('Aaliyah');
  await page.getByRole('button', { name: 'Search' }).click();

  // Validate search results grid
  const tableBody = page.locator('.oxd-table-body');
  await expect(tableBody).toBeVisible();
});