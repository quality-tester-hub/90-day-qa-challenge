import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://commitquality.com/practice');
  await page.getByRole('heading', { name: 'Time testing' }).click();
  await page.getByTestId('timer').click();
  await page.getByTestId('timer').click();
});