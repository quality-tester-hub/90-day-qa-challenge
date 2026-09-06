import { expect, test } from '@playwright/test';

const dropdownsUrl = 'https://qaplayground.com/practice/dropdowns';

test.describe('Day 06: Dropdowns - QA Playground', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(dropdownsUrl);
  });

  test('selects a fruit by visible text', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s01"]');

    await scenario.getByRole('combobox', { name: 'Select Fruit' }).selectOption({ label: 'Banana' });

    await expect(scenario.getByText('Selected fruit: Banana')).toBeVisible();
  });

  test('selects a country by its value attribute', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s02"]');

    await scenario.getByRole('combobox', { name: 'Select Country' }).selectOption('japan');

    await expect(scenario.getByText('Selected country: Japan')).toBeVisible();
  });

  test('selects the last language and reads the option count', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s03"]');
    const languageSelect = scenario.getByRole('combobox', { name: 'Select Language' });

    await scenario.getByRole('button', { name: 'Select last programming language' }).click();

    await expect(languageSelect).toHaveValue('typescript');
    await expect(languageSelect.locator('option')).toHaveCount(4);
  });

  test('selects multiple superheroes from a multi-select listbox', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s04"]');
    const listbox = scenario.getByRole('listbox', { name: 'Select Superheroes' });

    await listbox.selectOption(['ant-man', 'batman']);

    await expect(scenario.getByText(/Selected heroes:.*Ant-Man.*Batman/)).toBeVisible();
  });

  test('selects an option from a custom dropdown listbox', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s05"]');

    await scenario.getByRole('button', { name: /Choose priority/ }).click();
    await page.getByRole('listbox', { name: 'Priority options' }).getByRole('option', { name: /High Priority/ }).click();

    await expect(scenario.getByText('Priority selected: High Priority')).toBeVisible();
  });

  test('searches and selects a city from the custom combobox', async ({ page }) => {
    const scenario = page.locator('[data-section="scenario-s06"]');
    const cityInput = scenario.getByRole('combobox', { name: 'City' });

    await cityInput.fill('a');
    await scenario.getByRole('listbox', { name: 'City results' }).getByRole('option', { name: /Mumbai/ }).click();

    await expect(scenario.getByTestId('result-s06')).toContainText('Mumbai');
  });
});
