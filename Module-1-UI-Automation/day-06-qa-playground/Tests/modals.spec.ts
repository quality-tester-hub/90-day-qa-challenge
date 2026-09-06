import { test, expect } from '@playwright/test';

test.describe('Day 06 - QA Playground: Modals Scenarios', () => {

  test.beforeEach(async ({ page }) => {
    console.log('[LOG] Navigating to Modals practice page...');
    await page.goto('https://qaplayground.com/practice/modals');
  });

  test('Validate opening, interacting with, and closing modal dialogs', async ({ page }) => {
    console.log('[LOG] Locating and triggering modal open button...');
    const openModalBtn = page.getByRole('button', { name: /open modal|show modal|click me/i }).first();
    await openModalBtn.click();

    console.log('[LOG] Asserting modal dialog visibility...');
    const modalDialog = page.getByRole('dialog').first();
    await expect(modalDialog).toBeVisible();

    console.log('[LOG] Dismissing modal dialog...');
    const closeBtn = modalDialog.getByRole('button', { name: /close|cancel|ok/i }).first();
    await closeBtn.click();

    console.log('[LOG] Asserting modal overlay dismissal...');
    await expect(modalDialog).toBeHidden();
  });

});