import { test, expect } from '@playwright/test';

test.setTimeout(45000);

test('Password Reset - Valid Flow', async ({ page }) => {
  console.log('[LOG] Navigating to Forgot Password page...');
  await page.goto('https://practice.expandtesting.com/forgot-password');

  console.log('[LOG] Entering email address...');
  await page.getByRole('textbox', { name: 'E-mail' }).fill('jiggly3@gmail.com');

  console.log('[LOG] Submitting request...');
  await page.getByRole('button', { name: 'Retrieve password' }).click();

  console.log('[LOG] Verifying success message presence...');
  // Assert that the user is navigated or receives the confirmation message banner
  const confirmationMessage = page.locator('#confirmation-message, .alert-success');
  await expect(confirmationMessage).toBeVisible({ timeout: 10000 });
  await expect(confirmationMessage).toContainText('An e-mail has been sent to you');

  console.log('[LOG] Password reset test completed successfully.');
});