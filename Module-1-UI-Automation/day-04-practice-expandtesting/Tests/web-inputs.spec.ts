import { test, expect } from '@playwright/test';

test.describe('Day 04: Web Inputs - practice.expandtesting.com', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/inputs');
  });

  test('should fill out all input fields and display correct outputs', async ({ page }) => {
    // 1. Define Test Data
    const numberValue = '42';
    const textValue = 'Automation Tester';
    const passwordValue = 'SuperSecret123!';
    const dateValue = '2026-09-04';

    // 2. Locate Elements
    const numberInput = page.locator('#input-number');
    const textInput = page.locator('#input-text');
    const passwordInput = page.locator('#input-password');
    const dateInput = page.locator('#input-date');
    const displayInputsBtn = page.getByRole('button', { name: 'Display Inputs' });

    // 3. Fill Inputs
    await numberInput.fill(numberValue);
    await textInput.fill(textValue);
    await passwordInput.fill(passwordValue);
    await dateInput.fill(dateValue);

    // 4. Trigger Output Display
    await displayInputsBtn.click();

    // 5. Assert Rendered Outputs
    await expect(page.locator('#output-number')).toHaveText(numberValue);
    await expect(page.locator('#output-text')).toHaveText(textValue);
    await expect(page.locator('#output-password')).toHaveText(passwordValue);
    await expect(page.locator('#output-date')).toHaveText(dateValue);
  });
});