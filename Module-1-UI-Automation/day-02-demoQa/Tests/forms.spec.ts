import { test, expect } from '@playwright/test';

test.describe('DemoQA - Practice Form Section', () => {

  test.beforeEach(async ({ page }) => {
    // 1. Abort ad networks to prevent layout shifts
    await page.route('**/*', (route) => {
      const url = route.request().url();
      if (/(googleads|doubleclick|adsystem|googlesyndication)/.test(url)) {
        route.abort();
      } else {
        route.continue();
      }
    });

    // 2. Navigate to Practice Form URL
    await page.goto('https://demoqa.com/automation-practice-form');

    // 3. Remove remaining ad banners directly from the DOM
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

  test('TC01: Complete and Submit Practice Form', async ({ page }) => {
    // Fill Name & Contact details
    await page.fill('#firstName', 'Bane');
    await page.fill('#lastName', 'Uo');
    await page.fill('#userEmail', 'red0@gmail.com');

    // Select Gender using clean radio label selector
    await page.locator('label[for="gender-radio-2"]').click(); // Female

    await page.fill('#userNumber', '9328042149');

    // Handle Subjects auto-complete input cleanly
    await page.locator('#subjectsInput').fill('Maths');
    await page.keyboard.press('Enter');

    // Select Hobbies checkbox
    await page.locator('label[for="hobbies-checkbox-2"]').click(); // Reading

    // File Upload (uses resolved local path to prevent file locator crashes)

    // Current Address
    await page.fill('#currentAddress', 'pusypush');

    // Select State
    await page.locator('#state').click();
    await page.locator('#react-select-3-option-1').click(); // Uttar Pradesh

    // Select City
    await page.locator('#city').click();
    await page.locator('#react-select-4-option-0').click(); // Agra

    // Submit Form
    await page.locator('#submit').click({ force: true });

    // Assert Confirmation Modal Appears
    await expect(page.locator('#example-modal-sizes-title-lg')).toBeVisible();
    await expect(page.locator('.modal-body')).toContainText('Bane Uo');
  });

});