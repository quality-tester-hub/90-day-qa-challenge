import { expect, test } from '@playwright/test';

const dynamicWaitsUrl = 'https://qaplayground.com/practice/dynamic-waits';

test.describe('Day 06: Dynamic waits - QA Playground', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(dynamicWaitsUrl);
  });

  test('waits for a delayed element to appear', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s01"]');

    await scenario.getByTestId('dw-trigger-delayed').click();

    await expect(scenario.getByTestId('result-s01')).toContainText('Element appeared after 2s delay');
  });

  test('waits for a spinner to finish before asserting completion', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s02"]');

    await scenario.getByTestId('dw-trigger-spinner').click();

    await expect(scenario.getByTestId('result-s02')).toContainText('Data loaded');
  });

  test('captures success and error toast messages', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s03"]');

    await scenario.getByTestId('dw-trigger-toast').click();
    await expect(scenario.getByTestId('result-s03')).toContainText('Toast appeared');

    await scenario.getByTestId('dw-trigger-toast-error').click();
    await expect(scenario.getByTestId('result-s03')).toContainText('Toast appeared');
  });

  test('polls until the counter reaches the target condition', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s04"]');

    await scenario.getByTestId('dw-trigger-poll').click();

    await expect(scenario.getByTestId('dw-poll-count')).toHaveText('5');
    await expect(scenario.getByTestId('result-s04')).toContainText('Counter reached 5');
  });

  test('waits for a disabled button to become enabled', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s05"]');
    const submitButton = scenario.getByTestId('dw-submit-btn');

    await scenario.getByTestId('dw-arm-enable').click();
    await expect(submitButton).toBeEnabled({ timeout: 5000 });
    await submitButton.click();

    await expect(scenario.getByTestId('result-s05')).toContainText('Submit clicked after wait');
  });

  test('waits for a status text sequence to complete', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s06"]');

    await scenario.getByTestId('dw-trigger-status').click();

    await expect(scenario.getByTestId('dw-status-panel')).toContainText('Done');
    await expect(scenario.getByTestId('result-s06')).toContainText('Done');
  });

  test('waits for network-dependent content to load', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s07"]');

    await scenario.getByTestId('dw-fetch-btn').click();

    await expect(scenario.getByTestId('result-s07')).toContainText('QA Playground User');
  });

  test('catches a transient race-condition element', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s08"]');

    await scenario.getByTestId('dw-trigger-race').click();

    await expect(scenario.getByTestId('result-s08')).toContainText('Race element caught in time');
  });
});
