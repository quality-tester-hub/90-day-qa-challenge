import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://commitquality.com/practice');
  await page.getByRole('heading', { name: 'Apis' }).click();
  await page.getByTestId('get-button').click();
  await page.goto('https://commitquality.com/practice-api');
});