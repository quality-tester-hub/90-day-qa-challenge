import { test, expect } from '@playwright/test';

test('Practice ExpandTesting - OTP Verification Flow', async ({ page }) => {
  const testEmail = 'practice@expandtesting.com';
  const defaultOtpCode = '012345'; // Standard dummy OTP used for testing target site

  console.log('[LOG] Navigating to OTP page...');
  await page.goto('https://practice.expandtesting.com/otp');

  console.log(`[LOG] Entering email address: ${testEmail}`);
  await page.getByRole('textbox', { name: 'E-mail' }).fill(testEmail);

  console.log('[LOG] Clicking Send OTP button...');
  await page.getByRole('button', { name: 'Send OTP' }).click();

  console.log(`[LOG] Entering OTP code: ${defaultOtpCode}`);
  await page.getByRole('textbox', { name: 'OTP' }).fill(defaultOtpCode);

  console.log('[LOG] Submitting OTP verification...');
  await page.getByRole('button', { name: 'Verify' }).click();

  console.log('[LOG] Verifying successful verification banner...');
  const successAlert = page.locator('#flash, .alert-success');
  await expect(successAlert).toBeVisible();
  await expect(successAlert).toContainText('You have successfully logged in');

  console.log('[LOG] OTP verification test completed successfully.');
});