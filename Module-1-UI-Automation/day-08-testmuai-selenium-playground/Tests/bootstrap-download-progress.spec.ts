import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/bootstrap-download-progress-demo/');
  await page.getByRole('button', { name: 'Start Download' }).click();
  await page.getByRole('button', { name: 'Start Download' }).click();
  await page.getByRole('button', { name: 'Start Download' }).click();
});