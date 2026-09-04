import { test, expect } from '@playwright/test';

test('Form Validation - Valid Input', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/form-validation');
  await page.getByRole('textbox', { name: 'Contact number PickUp Date' }).click();
  await page.getByRole('textbox', { name: 'Contact number PickUp Date' }).fill('012-3456789');
  await page.getByLabel('Payment Method').selectOption('card');
  await page.locator('input[name="pickupdate"]').fill('2026-10-03');
  await page.getByRole('button', { name: 'Register' }).click();
});