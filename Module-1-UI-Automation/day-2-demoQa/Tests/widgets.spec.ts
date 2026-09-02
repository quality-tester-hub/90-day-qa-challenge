import { test } from '@playwright/test';

test.describe('DemoQA - Widgets Module', () => {

  test.beforeEach(async ({ page }) => {
    // 1. Abort ad networks to prevent layout shifts & test instability
    await page.route('**/*', (route) => {
      const url = route.request().url();
      if (/(googleads|doubleclick|adsystem|googlesyndication)/.test(url)) {
        route.abort();
      } else {
        route.continue();
      }
    });

    // 2. Direct navigation to Widgets
    await page.goto('https://demoqa.com/widgets');

    // 3. Remove ad containers directly from the DOM
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

  test('TC01: Complete Widgets Functionality Flow', async ({ page }) => {
    // --- ACCORDIAN ---
    await page.goto('https://demoqa.com/accordian');
    await page.getByRole('button', { name: 'What is Lorem Ipsum?' }).click();
    await page.getByRole('button', { name: 'Where does it come from?' }).click();
    await page.getByRole('button', { name: 'Why do we use it?' }).click();

    // --- AUTO COMPLETE ---
    await page.goto('https://demoqa.com/auto-complete');
    const multiInput = page.locator('#autoCompleteMultipleInput');
    
    // Fill Multiple Colors
    const colors = ['Red', 'Black', 'Purple', 'White'];
    for (const color of colors) {
      await multiInput.fill(color);
      await page.keyboard.press('Enter');
    }

    // Single Color Input
    await page.locator('#autoCompleteSingleInput').fill('Blue');
    await page.keyboard.press('Enter');

    // --- DATE PICKER ---
    await page.goto('https://demoqa.com/date-picker');
    await page.locator('#datePickerMonthYearInput').click();
    await page.locator('.react-datepicker__month-select').selectOption('9'); // October
    await page.locator('.react-datepicker__year-select').selectOption('2017');
    await page.locator('.react-datepicker__day--010:not(.react-datepicker__day--outside-month)').click();

    // Date and Time Picker
    await page.locator('#dateAndTimePickerInput').click();
    await page.getByRole('option', { name: '22:15', exact: true }).click();

    // --- SLIDER ---
    await page.goto('https://demoqa.com/slider');
    await page.locator('.range-slider').fill('0');

    // --- PROGRESS BAR ---
    await page.goto('https://demoqa.com/progress-bar');
    await page.getByRole('button', { name: 'Start' }).click();
    await page.waitForTimeout(1000); // Allow progress to advance slightly
    await page.getByRole('button', { name: 'Stop' }).click();
    await page.getByRole('button', { name: 'Start' }).click();

    // --- TABS ---
    await page.goto('https://demoqa.com/tabs');
    await page.getByRole('tab', { name: 'Origin' }).click();
    await page.getByRole('tab', { name: 'Use' }).click();
    await page.getByRole('tab', { name: 'What' }).click();

    // --- TOOL TIPS ---
    await page.goto('https://demoqa.com/tool-tips');
    await page.getByRole('button', { name: 'Hover me to see' }).hover();
    await page.getByRole('textbox', { name: 'Hover me to see' }).fill('automation-test');

    // --- MENU ---
    await page.goto('https://demoqa.com/menu');
    await page.getByRole('link', { name: 'Main Item 1' }).click();
    await page.getByRole('link', { name: 'Main Item 2' }).hover();
    await page.getByRole('link', { name: 'SUB SUB LIST »' }).hover();
    await page.getByRole('link', { name: 'Sub Sub Item 1' }).click();

    // --- SELECT MENU ---
    await page.goto('https://demoqa.com/select-menu');
    
    // Group Select
    await page.locator('#withOptGroup').click();
    await page.locator('#react-select-2-option-0-0').click(); // A root option

    // Select One
    await page.locator('#selectOne').click();
    await page.locator('#react-select-3-option-0-0').click(); // Dr.

    // Old Style Select Menu
    await page.locator('#oldSelectMenu').selectOption('3'); // Yellow
    await page.locator('#oldSelectMenu').selectOption('9'); // Magenta
  });

});