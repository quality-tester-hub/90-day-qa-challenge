import { expect, test } from '@playwright/test';

const shadowDomUrl = 'https://qaplayground.com/practice/shadow-dom';

test.describe('Day 06: Shadow DOM - QA Playground', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(shadowDomUrl);
  });

  test('clicks a button inside an open shadow root', async ({ page }) => {
    const host = page.locator('[data-testid="shadow-host-basic"]');
    const scenario = page.locator('[data-section="scenario-s01"]');

    await host.getByRole('button', { name: 'Click inside Shadow' }).click();

    await expect(host.getByText('Clicks: 1')).toBeVisible();
    await expect(scenario.getByText(/Shadow button clicked/)).toBeVisible();
  });

  test('scopes a locator to the correct shadow host', async ({ page }) => {
    const host = page.locator('[data-testid="shadow-host"][data-host-id="host-2"]');
    const scenario = page.locator('[data-section="scenario-s02"]');

    await host.getByRole('button', { name: 'Activate Host 2' }).click();

    await expect(scenario.getByTestId('result-s02')).toContainText('Host 2 activated');
  });

  test('pierces two nested open shadow roots', async ({ page }) => {
    const outerHost = page.locator('[data-testid="shadow-outer-host"]');
    const scenario = page.locator('[data-section="scenario-s03"]');

    await outerHost.getByRole('button', { name: 'Activate Inner Shadow' }).click();

    await expect(scenario.getByText(/Inner shadow activated/)).toBeVisible();
  });

  test('fills and submits a form inside shadow DOM', async ({ page }) => {
    const host = page.locator('[data-testid="shadow-form-host"]');
    const scenario = page.locator('[data-section="scenario-s04"]');

    await host.getByRole('textbox', { name: 'Full name' }).fill('Ada Lovelace');
    await host.getByRole('combobox', { name: 'Role' }).selectOption('QA Engineer');
    await host.getByRole('button', { name: 'Submit Shadow Form' }).click();

    await expect(scenario.getByTestId('result-s04')).toContainText('Ada Lovelace');
  });

  test('waits for dynamic shadow content before triggering its action', async ({ page }) => {
    const host = page.locator('[data-testid="shadow-dynamic-host"]');
    const scenario = page.locator('[data-section="scenario-s05"]');

    await expect(host.getByRole('button', { name: 'Trigger Shadow Action' })).toBeVisible({
      timeout: 5000,
    });
    await host.getByRole('button', { name: 'Trigger Shadow Action' }).click();

    await expect(scenario.getByTestId('result-s05')).toContainText('Dynamic shadow action triggered');
  });

  test('uses evaluate to access an attribute-free shadow control', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s06"]');

    await page.waitForFunction(() => {
      const host = document.querySelector('[data-testid="shadow-eval-host"]');
      return Boolean(host?.shadowRoot?.querySelector('input[name="evalCode"]'));
    });

    await page.evaluate(() => {
      const host = document.querySelector('[data-testid="shadow-eval-host"]');
      const shadowRoot = host?.shadowRoot;
      const input = shadowRoot?.querySelector('input[name="evalCode"]') as HTMLInputElement | null;
      const button = Array.from(shadowRoot?.querySelectorAll('button') ?? []).find(
        candidate => candidate.textContent?.trim() === 'Execute',
      );

      if (!input || !button) {
        throw new Error('Shadow evaluation controls were not found');
      }

      input.value = 'evaluate-me';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      (button as HTMLButtonElement).click();
    });

    await expect(scenario.getByTestId('result-s06')).toContainText('Evaluated: "evaluate-me"');
  });
});
