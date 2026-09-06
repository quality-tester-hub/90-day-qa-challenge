import { test, expect } from '@playwright/test';

test.describe('Day 06 - QA Playground: Links Scenarios', () => {

  test.beforeEach(async ({ page }) => {
    console.log('[LOG] Navigating to Links practice page...');
    await page.goto('https://qaplayground.com/practice/links');
  });

  test('Validate link navigation and tab opening behaviors', async ({ page, context }) => {
    console.log('[LOG] Testing standard link navigation...');
    const simpleLink = page.getByRole('link', { name: /simple link|home/i }).first();
    if (await simpleLink.isVisible()) {
      await expect(simpleLink).toHaveAttribute('href');
    }

    console.log('[LOG] Testing new tab link opening...');
    const newTabLink = page.getByRole('link', { name: /open in new tab|new window/i }).first();
    
    if (await newTabLink.isVisible()) {
      // Listen for the new page context before clicking
      const pagePromise = context.waitForEvent('page');
      await newTabLink.click();
      const newPage = await pagePromise;
      
      await newPage.waitForLoadState();
      console.log(`[LOG] New tab opened with URL: ${newPage.url()}`);
      await expect(newPage).not.toHaveURL('about:blank');
      await newPage.close();
    }

    console.log('[LOG] Links scenario assertions completed.');
  });

});