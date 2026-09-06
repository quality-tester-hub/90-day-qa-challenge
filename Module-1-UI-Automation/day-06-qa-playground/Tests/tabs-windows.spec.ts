import { test, expect } from '@playwright/test';

test.describe('Day 06 - QA Playground: Tabs & Windows Scenarios', () => {

  test.beforeEach(async ({ page }) => {
    console.log('[LOG] Navigating to Tabs & Windows practice page...');
    await page.goto('https://qaplayground.com/practice/tabs-windows');
  });

  test('Validate opening and interacting with new browser tab', async ({ page, context }) => {
    console.log('[LOG] Locating new tab trigger button...');
    const openTabBtn = page.getByRole('button', { name: /open new tab|new window|open tab/i }).first();

    console.log('[LOG] Triggering new tab event...');
    // Listen for the new page event concurrently with the click
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      openTabBtn.click()
    ]);

    await newPage.waitForLoadState('domcontentloaded');
    console.log(`[LOG] Successfully switched to new tab with URL: ${newPage.url()}`);

    console.log('[LOG] Asserting elements on the new tab...');
    await expect(newPage).not.toHaveURL('about:blank');

    console.log('[LOG] Closing child tab and returning to parent page...');
    await newPage.close();

    console.log('[LOG] Verifying primary page remains actionable...');
    await expect(openTabBtn).toBeVisible();
  });

});