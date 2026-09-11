import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://commitquality.com/practice-accordion');
  await page.getByTestId('navbar-practice').click();
  await page.getByRole('heading', { name: 'Accordions' }).click();
  await page.getByRole('button', { name: 'Accordion 1' }).click();
  await page.getByTestId('basic-click').dblclick();
  await page.getByTestId('double-click').dblclick();
  await page.getByTestId('right-click').click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'Accordion 2' }).click();
  await page.getByRole('button', { name: 'Accordion 3' }).click();
  await page.getByTestId('option2').check();
  await page.getByTestId('option1').check();
  await page.getByTestId('checkbox1').check();
  await page.locator('div').filter({ hasText: /^Checkbox 2$/ }).click();
  await page.getByTestId('checkbox3').check();
});