import { test, expect } from '@playwright/test';

test.describe('DemoQA - Book Store Application Module', () => {

  test.beforeEach(async ({ page }) => {
    // 1. Abort ad networks to prevent layout shifts & dynamic frame popups
    await page.route('**/*', (route) => {
      const url = route.request().url();
      if (/(googleads|doubleclick|adsystem|googlesyndication)/.test(url)) {
        route.abort();
      } else {
        route.continue();
      }
    });

    // 2. Direct navigation to Book Store Application module
    await page.goto('https://demoqa.com/books');

    // 3. Remove layout-shifting ad containers directly from DOM
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

  test('TC01: Complete Book Store Application Workflow', async ({ page }) => {
    // Navigate and check Git Pocket Guide details
    await page.getByRole('link', { name: 'Git Pocket Guide' }).click();
    await page.getByRole('button', { name: 'Back To Book Store' }).click();

    // Navigate and check Learning JavaScript Design Patterns details
    await page.getByRole('link', { name: 'Learning JavaScript Design' }).click();
    await page.getByRole('button', { name: 'Back To Book Store' }).click();

    // Navigate to Profile section
    await page.getByRole('listitem').filter({ hasText: 'Profile' }).click();

    // Navigate to Book Store API documentation section
    await page.getByRole('link', { name: 'Book Store API' }).click();
    
    // Return to Profile page
    await page.goto('https://demoqa.com/profile');
  });

});