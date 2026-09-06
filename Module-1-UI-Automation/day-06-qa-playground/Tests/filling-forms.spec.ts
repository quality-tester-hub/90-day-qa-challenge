import { test, expect } from '@playwright/test';

test.describe('Day 06 - QA Playground: Forms Scenarios', () => {

  test.beforeEach(async ({ page }) => {
    console.log('[LOG] Navigating to QA Playground Forms practice page...');
    await page.goto('https://qaplayground.com/practice/forms');
  });

  test('Validate full form entry, submission, and validation states', async ({ page }) => {
    console.log('[LOG] Filling form inputs...');

    await page.getByTestId('input-login-email').fill('you@gmail.com');
    await page.getByTestId('form-login-inner')
      .getByRole('textbox', { name: 'Password' })
      .fill('ipass90word');
    await page.getByTestId('btn-login-submit').click();

    await page.getByTestId('input-first-name').fill('Qa');
    await page.getByTestId('input-last-name').fill('Tester');
    await page.getByTestId('input-phone').fill('8934217443');
    await page.getByTestId('radio-gender-male').check();
    await page.getByTestId('input-dob').fill('2037-06-11');
    await page.getByTestId('btn-personal-submit').click();

    await page.getByTestId('select-country').selectOption('JP');
    await page.getByTestId('input-city').fill('Tokyo');
    await page.getByRole('textbox', { name: 'About You optional · no testid' })
      .fill('I wanted to be a QA tester but I ended as QA Tester');
    await page.getByTestId('btn-address-submit').click();

    await page.getByTestId('checkbox-interest-playwright').check();
    await page.getByTestId('checkbox-interest-cypress').check();
    await page.getByTestId('checkbox-interest-selenium').check();
    await page.getByTestId('btn-interests-submit').click();

    await page.getByTestId('input-password').fill('123490');
    await page.getByTestId('input-confirm-password').fill('123490');
    await page.getByTestId('checkbox-terms').check();

    const submitButton = page.getByTestId('submit-form-btn');
    await expect(submitButton).toBeEnabled();
    await submitButton.click();
  });

});