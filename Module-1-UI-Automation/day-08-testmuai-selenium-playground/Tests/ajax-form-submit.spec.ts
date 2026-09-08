import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/ajax-form-submit-demo/');
  await page.locator('#title').click();
  await page.locator('#title').fill('rex cartr');
  await page.locator('#description').click();
  await page.locator('#description').fill('fceawew');
  await page.getByRole('button', { name: 'submit' }).click();
});