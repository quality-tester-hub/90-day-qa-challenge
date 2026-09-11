import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://commitquality.com/practice');
  await page.getByRole('heading', { name: 'Contact Us Form' }).click();
  await page.getByTestId('name').click();
  await page.getByTestId('name').fill('Red Rew');
  await page.locator('div').filter({ hasText: /^Email:$/ }).click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('red@gmail.com');
  await page.getByTestId('query-type').selectOption('Technical');
  await page.getByTestId('dob').fill('2026-09-09');
  await page.getByTestId('practice-checkbox').check();
  await page.getByTestId('submit-button').click();
});