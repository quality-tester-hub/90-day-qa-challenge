import { test, expect } from '@playwright/test';

test.describe('DemoQA - Alerts, Frame & Windows Section', () => {

  test.beforeEach(async ({ page }) => {
    // 1. Intercept and block ad network traffic
    await page.route('**/*', (route) => {
      const url = route.request().url();
      if (/(googleads|doubleclick|adsystem|googlesyndication)/.test(url)) {
        route.abort();
      } else {
        route.continue();
      }
    });

    // 2. Direct navigation to the module URL
    await page.goto('https://demoqa.com/browser-windows');

    // 3. Remove layout-shifting ad banners directly from the DOM
    await page.evaluate(() => {
      const adSelectors = [
        '#adplus-anchor',
        '#fixedban',
        'footer',
        'iframe[id^="google_ads"]'
      ];
      adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
      });
    });
  });

  test('TC01: Handle New Tab, New Window, and New Window Message Popups', async ({ page, context }) => {
    // 1. Test "New Tab" button
    const page1Promise = page.waitForEvent('popup');
    await page.click('#tabButton');
    const page1 = await page1Promise;
    await page1.waitForLoadState();
    await expect(page1.locator('#sampleHeading')).toHaveText('This is a sample page');

    // 2. Test "New Window" button
    const page2Promise = page.waitForEvent('popup');
    await page.click('#windowButton');
    const page2 = await page2Promise;
    await page2.waitForLoadState();
    await expect(page2.locator('#sampleHeading')).toHaveText('This is a sample page');

    // 3. Test "New Window Message" button
    const page3Promise = page.waitForEvent('popup');
    await page.click('#messageWindowButton');
    const page3 = await page3Promise;

    // Clean up created popups
    await page1.close();
    await page2.close();
    await page3.close();
  });

});