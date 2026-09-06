import { expect, test } from '@playwright/test';

const annotationsUrl = 'https://qaplayground.com/practice/annotations';

test.describe('Day 06: Annotations - QA Playground', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(annotationsUrl);
  });

  test('enables the Beta UI feature flag', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s01"]');

    await scenario.getByRole('switch', { name: 'Beta UI' }).check();
    test.skip(
      !(await scenario.getByRole('switch', { name: 'Beta UI' }).isChecked()),
      'Beta UI is not enabled in this environment',
    );

    await expect(scenario.getByText('Beta Feature Visible')).toBeVisible();
    await expect(scenario.getByRole('button', { name: 'Beta Action' })).toBeVisible();
  });

  test('waits for slow report generation', async ({ page }) => {
    test.slow();
    const scenario = page.locator('[data-section="scenario-s02"]');

    await scenario.getByRole('button', { name: 'Generate sales report' }).click();
    await expect(scenario).toContainText(/report generated|report ready|sales report/i, {
      timeout: 10000,
    });
  });

  test('documents the known buggy counter with test.fixme', async ({ page }) => {
    test.fixme(true, 'BUG-101: the counter increments by 2 instead of 1');
    const scenario = page.locator('[data-section="scenario-s03"]');

    await scenario.getByRole('button', { name: 'Increase counter' }).click();
    await expect(scenario.getByRole('status', { name: 'Counter value' })).toHaveText('1');
  });

  test('confirms the always-error path with test.fail', async ({ page }) => {
    test.fail();
    const scenario = page.locator('[data-section="scenario-s04"]');

    await scenario.getByRole('button', { name: 'Submit (always errors)' }).click();
    await expect(scenario.getByRole('alert')).toHaveText(/Error 500: Internal Server Error/);
    throw new Error('BUG-202: the submission unexpectedly succeeded');
  });

  test('completes checkout with named test steps', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s05"]');

    await test.step('Review cart', async () => {
      await expect(scenario.getByRole('table', { name: 'Cart items' })).toBeVisible();
      await expect(scenario).toContainText('$229.97');
      await scenario.getByRole('button', { name: /Continue to Shipping/ }).click();
    });

    await test.step('Complete shipping', async () => {
      await expect(scenario.getByRole('tabpanel', { name: '2 Shipping' })).toBeVisible();
      await scenario.getByRole('button', { name: /Continue to Payment/ }).click();
    });

    await test.step('Place order', async () => {
      await expect(scenario.getByRole('tabpanel', { name: '3 Payment' })).toBeVisible();
      await scenario.getByRole('button', { name: /Place Order/ }).click();
      await expect(scenario).toContainText(/Order placed|Complete/);
    });
  });

  for (const credentials of [
    { role: 'admin', email: 'admin@test.com', password: 'admin123', result: /Logged in as admin/ },
    { role: 'editor', email: 'editor@test.com', password: 'editor123', result: /Logged in as editor/ },
    { role: 'viewer', email: 'viewer@test.com', password: 'viewer123', result: /Logged in as viewer/ },
    { role: 'invalid', email: 'bad@test.com', password: 'wrong', result: /Invalid|error|failed/i },
  ]) {
    test(`logs in with ${credentials.role} credentials`, async ({ page }) => {
      const scenario = page.locator('[data-section="scenario-s06"]');

      await scenario.getByRole('textbox', { name: 'Login email' }).fill(credentials.email);
      await scenario.getByRole('textbox', { name: 'Login password' }).fill(credentials.password);
      await scenario.getByRole('button', { name: 'Login' }).click();

      await expect(scenario.getByRole('status')).toContainText(credentials.result);
    });
  }
});
