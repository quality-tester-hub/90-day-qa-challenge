import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/todo-app/');
  await page.locator('input[name="li1"]').check();
  await page.locator('input[name="li2"]').check();
  await page.locator('input[name="li3"]').check();
  await page.locator('input[name="li4"]').check();
  await page.locator('input[name="li5"]').check();
  await page.getByRole('textbox', { name: 'Add a new task...' }).click();
  await page.getByRole('textbox', { name: 'Add a new task...' }).fill('date celebrity');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('input[name="li6"]').check();
});