import { test, expect } from '@playwright/test';

test('Practice ExpandTesting - Autocomplete Country Selection', async ({ page }) => {
  console.log('[LOG] Navigating to Autocomplete page...');
  await page.goto('https://practice.expandtesting.com/autocomplete');

  console.log('[LOG] Typing country prefix "lat"...');
  const countryInput = page.getByRole('textbox', { name: 'Country name' });
  await countryInput.fill('lat');

  console.log('[LOG] Selecting "Latvia" from autocomplete dropdown...');
  const suggestionOption = page.getByText('Latvia', { exact: true });
  await expect(suggestionOption).toBeVisible();
  await suggestionOption.click();

  console.log('[LOG] Submitting selected country...');
  await page.getByRole('button', { name: 'Submit' }).click();

  console.log('[LOG] Verifying submission result banner...');
  const resultMessage = page.locator('#result, #flash');
  await expect(resultMessage).toBeVisible();
  await expect(resultMessage).toContainText('Latvia');

  console.log('[LOG] Autocomplete test completed successfully.');
});