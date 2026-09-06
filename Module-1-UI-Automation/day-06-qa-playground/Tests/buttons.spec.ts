import { test, expect } from '@playwright/test';

test.describe('Day 06 - QA Playground: Buttons Scenarios', () => {

  test.beforeEach(async ({ page }) => {
    console.log('[LOG] Navigating to QA Playground Buttons page...');
    await page.goto('https://qaplayground.com/practice/buttons');
  });

  test('Validate button clicks and dynamic state changes', async ({ page }) => {
    console.log('[LOG] Interacting with target button elements...');
    
    // Example: Standard Click / Target Action
    const targetBtn = page.getByRole('button', { name: /click/i }).first();
    await expect(targetBtn).toBeVisible();
    await targetBtn.click();
    console.log('[LOG] Primary button clicked successfully.');

    // Example: Handling specific click actions if present
    // Right Click: await targetBtn.click({ button: 'right' });
    // Double Click: await targetBtn.dblclick();

    console.log('[LOG] Asserting response or state confirmation...');
    // Add specific confirmation element assertion based on page response
  });

});