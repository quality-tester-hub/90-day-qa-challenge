import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Dynamic Loading' }).click();
  await page.getByRole('link', { name: 'Example 1: Element on page' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading');
  await page.getByRole('link', { name: 'Example 2: Element rendered' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
});