import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/bootstrap-modal-demo/');
  await page.getByRole('button', { name: 'Launch Modal' }).first().click();
  await page.getByRole('button', { name: 'Launch Modal' }).nth(1).click();
});