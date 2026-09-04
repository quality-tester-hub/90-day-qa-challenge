import { test, expect } from '@playwright/test';

test('Practice ExpandTesting - Infinite Scroll Dynamic Loading', async ({ page }) => {
  console.log('[LOG] Navigating to Infinite Scroll page...');
  await page.goto('https://practice.expandtesting.com/infinite-scroll');

  const contentBlocks = page.locator('.jscroll-added, .item, .post');

  console.log('[LOG] Waiting for initial content blocks to load...');
  await expect(contentBlocks.first()).toBeVisible();
  const initialCount = await contentBlocks.count();
  console.log(`[LOG] Initial block count: ${initialCount}`);

  console.log('[LOG] Performing scroll down to trigger dynamic loading...');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  console.log('[LOG] Waiting for additional content blocks to append...');
  await expect(async () => {
    const newCount = await contentBlocks.count();
    expect(newCount).toBeGreaterThan(initialCount);
  }).toPass({ timeout: 10000 });

  const finalCount = await contentBlocks.count();
  console.log(`[LOG] New block count after scroll: ${finalCount}`);

  console.log('[LOG] Infinite scroll test completed successfully.');
});