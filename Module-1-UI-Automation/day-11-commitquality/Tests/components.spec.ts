import { test, expect } from '@playwright/test';

test('CommitQuality Practice Components Test', async ({ page }) => {
  await page.goto('https://commitquality.com/practice');

  // 1. Navigation & Basic Clicks
  await page.getByTestId('practice-general').getByText('Click here to practice').click();
  await page.getByTestId('basic-click').click();
  await page.getByTestId('double-click').dblclick();
  await page.getByTestId('right-click').click({ button: 'right' });

  // 2. Radio Buttons & Checkboxes
  await page.getByTestId('option1').check();
  await page.getByTestId('option2').check();
  await page.getByTestId('checkbox1').check();
  await page.getByTestId('checkbox2').check();
  await page.getByTestId('checkbox3').check();

  // 3. Dropdowns
  await page.getByRole('combobox').selectOption('option1');
});