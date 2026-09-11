import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://commitquality.com/practice-popups');
  await page.getByTestId('navbar-practice').click();
  await page.getByTestId('practice-random-overlay').click();
  await page.getByTestId('accordion-1').click();
  await page.getByRole('button', { name: 'Close' }).click();
});