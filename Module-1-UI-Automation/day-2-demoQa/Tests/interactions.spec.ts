import { test, expect } from '@playwright/test';

test.describe('DemoQA - Interactions Module', () => {

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

    // 2. Direct navigation to Interactions module
    await page.goto('https://demoqa.com/interaction');

    // 3. Purge ad containers directly from DOM
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

  test('TC01: Complete Interactions Workflow', async ({ page }) => {
    // Sortable Section
    await page.getByRole('link', { name: 'Sortable' }).click();
    await page.getByRole('tab', { name: 'Grid' }).click();
    await page.getByRole('tab', { name: 'List' }).click();
    await page.getByLabel('List').getByText('One').click();
    await page.getByLabel('List').getByText('Two').click();
    await page.getByLabel('List').getByText('Five').click();

    await page.getByRole('tab', { name: 'Grid' }).click();
    await page.getByLabel('Grid').getByText('One').click();
    await page.getByLabel('Grid').getByText('Two').click();

    // Selectable Section
    await page.getByRole('listitem').filter({ hasText: 'Selectable' }).click();
    await page.getByText('Cras justo odio').click();
    await page.getByText('Dapibus ac facilisis in').click();
    await page.getByText('Morbi leo risus').click();
    await page.getByText('Porta ac consectetur ac').click();

    await page.getByRole('tab', { name: 'Grid' }).click();
    await page.getByText('One').click();
    await page.getByText('Two').click();
    await page.getByText('Three').click();

    // Resizable Section
    await page.getByRole('listitem').filter({ hasText: 'Resizable' }).click();
    await page.locator('#resizableBoxWithRestriction span').click();

    // Droppable Section
    await page.getByRole('link', { name: 'Droppable' }).click();
    await page.getByRole('tab', { name: 'Accept' }).click();
    await page.getByRole('tab', { name: 'Prevent Propogation' }).click();
    await page.getByRole('tab', { name: 'Revert Draggable' }).click();

    // Dragabble Section
    await page.getByRole('link', { name: 'Dragabble' }).click();
    await page.getByRole('tab', { name: 'Axis Restricted' }).click();
    await page.getByRole('tab', { name: 'Container Restricted' }).click();
    await page.getByRole('tab', { name: 'Cursor Style' }).click();
  });

});