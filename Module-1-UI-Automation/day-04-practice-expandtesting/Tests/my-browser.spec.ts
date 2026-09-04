import { test, expect } from '@playwright/test';

test('Practice ExpandTesting - My Browser Information Detection', async ({ page }) => {
  console.log('[LOG] Navigating to My Browser Information page...');
  await page.goto('https://practice.expandtesting.com/my-browser');

  console.log('[LOG] Locating and clicking the "Show Browser Information" button...');
  const showBtn = page.getByRole('button', { name: /browser/i });
  await showBtn.click();

  console.log('[LOG] Verifying browser info card output...');
  const browserInfoCard = page.locator('#browser-info');
  await expect(browserInfoCard).toBeVisible();

  const detectedText = await browserInfoCard.textContent();
  console.log(`[LOG] Detected Browser Information: ${detectedText?.trim()}`);

  console.log('[LOG] My Browser Information test completed successfully.');
});