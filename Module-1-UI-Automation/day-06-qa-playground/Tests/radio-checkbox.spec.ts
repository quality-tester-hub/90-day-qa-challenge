import { test, expect } from '@playwright/test';

test.describe('Day 06 - QA Playground: Radio & Checkbox Scenarios', () => {

  test.beforeEach(async ({ page }) => {
    console.log('[LOG] Navigating to QA Playground Radio & Checkbox page...');
    await page.goto('https://qaplayground.com/practice/radio-checkbox');
  });

  test('Validate radio button selections and checkbox toggle states', async ({ page }) => {
    console.log('[LOG] Interacting with checkbox controls...');
    
    // Checkbox interaction and state assertion
    const checkbox = page.getByRole('checkbox').first();
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    console.log('[LOG] Checkbox checked successfully.');

    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
    console.log('[LOG] Checkbox unchecked successfully.');

    console.log('[LOG] Interacting with radio button controls...');
    
    // Radio button interaction and single-selection assertion
    const radioOption = page.getByRole('radio').first();
    await radioOption.check();
    await expect(radioOption).toBeChecked();
    console.log('[LOG] Radio option selected successfully.');
  });

});