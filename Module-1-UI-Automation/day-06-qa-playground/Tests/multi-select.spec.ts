import { test, expect } from '@playwright/test';

test.describe('Day 06 - QA Playground: Multi-Select Scenarios', () => {

  test.beforeEach(async ({ page }) => {
    console.log('[LOG] Navigating to Multi-Select practice page...');
    await page.goto('https://qaplayground.com/practice/multi-select');
  });

  test('Validate selecting and deselecting multiple options', async ({ page }) => {
    console.log('[LOG] Opening multi-select dropdown...');
    
    // Target the main container or trigger input
    const multiSelectInput = page.locator('.ss-main, [role="combobox"]').first();
    await multiSelectInput.click();

    console.log('[LOG] Selecting multiple items...');
    
    // Select specific option elements from list
    const options = page.getByRole('option');
    if (await options.count() > 0) {
      await options.nth(0).click();
      await multiSelectInput.click(); // Re-open if closed upon selection
      await options.nth(1).click();
    } else {
      // Fallback for custom div-based options
      await page.locator('.ss-option').nth(0).click();
      await page.locator('.ss-option').nth(1).click();
    }

    console.log('[LOG] Verifying multi-selection states...');
    // SlimSelect renders selected values differently across versions. Verify
    // the selected state itself rather than relying on one tag class.
    const selectedItems = page.locator(
      '.ss-value, .ss-value-text, .selected-tag, .ss-option[aria-selected="true"], .ss-option.selected'
    );
    await expect(selectedItems.first()).toBeVisible();
    await expect(selectedItems).toHaveCount(2);

    console.log('[LOG] Multi-select test execution completed.');
  });

});