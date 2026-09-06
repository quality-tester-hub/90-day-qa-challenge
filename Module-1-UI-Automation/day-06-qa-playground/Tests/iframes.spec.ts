import { expect, test } from '@playwright/test';

const iframesUrl = 'https://qaplayground.com/practice/iframes';

test.describe('Day 06: iFrames - QA Playground', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(iframesUrl);
  });

  test('fills and submits a basic iframe form', async ({ page }) => {
    const frame = page.frameLocator('[data-testid="iframe-basic"]');
    const scenario = page.locator('[data-section="scenario-s01"]');

    await frame.getByRole('textbox', { name: 'Your name' }).fill('QA Tester');
    await frame.getByRole('button', { name: 'Submit' }).click();

    await expect(scenario.getByText('Submitted: QA Tester', { exact: true })).toBeVisible();
  });

  test('saves a selected language and accepted terms inside an iframe', async ({ page }) => {
    const frame = page.frameLocator('iframe[title="Form Iframe"]');
    const scenario = page.locator('[data-section="scenario-s02"]');

    await frame.getByRole('combobox', { name: 'Preferred language' }).selectOption('Python');
    await frame.getByLabel('I agree to the terms').check();
    await frame.getByRole('button', { name: 'Save Preferences' }).click();

    await expect(scenario.getByTestId('result-s02')).toContainText('Saved: python | agreed');
  });

  test('interacts with multiple iframes by testid, name, and title', async ({ page }) => {
    const frameOne = page.frameLocator('[data-testid="iframe-frame-1"]');
    const frameTwo = page.frameLocator('iframe[name="frame-two"]');
    const frameThree = page.frameLocator('iframe[title="Frame Three"]');

    await frameOne.getByRole('button', { name: 'Click Me' }).click();
    await frameTwo.getByRole('button', { name: 'Activate Frame Two' }).click();
    await frameThree.getByRole('button', { name: 'Confirm Action' }).click();

    await expect(frameOne.locator('p')).toContainText('clicked');
    await expect(frameTwo.locator('p')).toContainText('activated');
    await expect(frameThree.locator('p')).toContainText('confirmed');
  });

  test('interacts with a nested iframe two levels deep', async ({ page }) => {
    const innerFrame = page
      .frameLocator('[data-testid="iframe-outer"]')
      .frameLocator('iframe[title="Inner Frame"]');

    await innerFrame.getByRole('textbox', { name: 'Secret code' }).fill('secret');
    await innerFrame.getByRole('button', { name: 'Unlock' }).click();

    await expect(innerFrame.getByText('Unlocked with: secret')).toBeVisible();
  });

  test('waits for dynamic iframe content before revealing a secret', async ({ page }) => {
    const frame = page.frameLocator('[data-testid="iframe-dynamic"]');
    const revealButton = frame.getByRole('button', { name: 'Reveal Secret' });

    await expect(revealButton).toBeVisible({ timeout: 5000 });
    await frame.getByRole('textbox', { name: 'Reveal code input' }).fill('open-sesame');
    await revealButton.click();

    await expect(frame.getByText('Secret revealed: open-sesame')).toBeVisible();
  });

  test('shows validation errors inside an iframe form', async ({ page }) => {
    const frame = page.frameLocator('[data-testid="iframe-validation"]');

    await frame.getByRole('button', { name: 'Register' }).click();

    await expect(frame.getByRole('alert')).toHaveCount(2);
    await expect(frame.getByRole('alert').first()).toHaveText('Full name is required');
    await expect(frame.getByRole('alert').last()).toHaveText('Email is required');
  });
});