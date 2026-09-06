import { expect, test } from '@playwright/test';

const inputFieldsUrl = 'https://qaplayground.com/practice/input-fields';

test.describe('Day 06: Input fields - QA Playground', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(inputFieldsUrl);
  });

  test('submits a movie name and displays the entered value', async ({ page }) => {
    const movieName = 'Inception';

    await page.getByRole('textbox', { name: 'Movie name' }).fill(movieName);
    await page.getByRole('button', { name: 'Submit', exact: true }).click();

    await expect(page.getByText(`You entered: ${movieName}`)).toBeVisible();
  });

  test('updates the value after typing and pressing Tab', async ({ page }) => {
    const appendedMovieName = 'Avengers: Endgame';
    const appendInput = page.getByRole('textbox', { name: 'Append text and press Tab' });

    await appendInput.fill(appendedMovieName);
    await appendInput.press('Tab');

    await expect(appendInput).toHaveValue(appendedMovieName);
    await expect(page.getByText(`Current value: ${appendedMovieName}`)).toBeVisible();
  });

  test('reads the current field value', async ({ page }) => {
    await page.getByRole('button', { name: 'Read Value', exact: true }).click();

    await expect(page.getByText('Value: The Matrix')).toBeVisible();
  });

  test('clears the field value', async ({ page }) => {
    const clearInput = page.getByRole('textbox', { name: 'Field to clear' });

    await page.getByRole('button', { name: 'Clear', exact: true }).click();

    await expect(clearInput).toHaveValue('');
    await expect(page.getByText('Field cleared', { exact: false })).toBeVisible();
  });

  test('keeps the disabled input unavailable for editing', async ({ page }) => {
    const disabledInput = page.getByRole('textbox', { name: 'Disabled input' });

    await expect(disabledInput).toBeDisabled();
    await expect(disabledInput).toHaveValue("You can't type here");
  });

  test('keeps the readonly input available for reading but not editing', async ({ page }) => {
    const readonlyInput = page.getByRole('textbox', { name: 'Readonly input' });

    await expect(readonlyInput).toHaveAttribute('readonly', '');
    await expect(readonlyInput).not.toBeEditable();
    await expect(readonlyInput).toHaveValue('Read-only content');
  });
});