import { test, expect } from '@playwright/test';

test('Practice ExpandTesting - Successful Login Flow', async ({ page }) => {
  console.log('[LOG] Navigating to Login page...');
  await page.goto('https://practice.expandtesting.com/login');

  console.log('[LOG] Entering username...');
  await page.getByLabel('Username').fill('practice');

  console.log('[LOG] Entering password...');
  await page.getByLabel('Password').fill('SuperSecretPassword!');

  console.log('[LOG] Clicking Login button...');
  await page.getByRole('button', { name: 'Login' }).click();

  console.log('[LOG] Verifying successful login alert...');
  const successAlert = page.locator('#flash');
  await expect(successAlert).toBeVisible();
  await expect(successAlert).toContainText('You logged into a secure area!');

  console.log('[LOG] Login test completed successfully.');
});