import { expect, test } from '@playwright/test';

const dataTableUrl = 'https://qaplayground.com/practice/data-table';

test.describe('Day 06: Data table - QA Playground', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(dataTableUrl);
  });

  test('reads the visible book rows and pagination summary', async ({ page }) => {
    const table = page.getByRole('table', { name: 'Books data table' });
    const dataRows = table.getByRole('rowgroup').nth(1).getByRole('row');

    await expect(dataRows).toHaveCount(5);
    await expect(dataRows.first()).toContainText('The Pragmatic Programmer');
    await expect(page.getByTestId('row-count')).toHaveText(/25 books.*page 1 of 5/);
  });

  test('searches for a book by name', async ({ page }) => {
    const table = page.getByRole('table', { name: 'Books data table' });

    await page.getByRole('searchbox', { name: 'Search books' }).fill('Dune');

    await expect(table.getByRole('row').filter({ hasText: 'Dune' })).toHaveCount(1);
    await expect(table.getByRole('row').filter({ hasText: 'The Hobbit' })).toHaveCount(0);
  });

  test('filters books by genre', async ({ page }) => {
    const table = page.getByRole('table', { name: 'Books data table' });

    await page.getByRole('combobox', { name: 'Filter by genre' }).selectOption('Fantasy');

    await expect(table.getByRole('row').filter({ hasText: 'The Hobbit' })).toHaveCount(1);
    await expect(table.getByRole('row').filter({ hasText: 'Dune' })).toHaveCount(0);
  });

  test('sorts the table by book name', async ({ page }) => {
    const table = page.getByRole('table', { name: 'Books data table' });
    const dataRows = table.getByRole('rowgroup').nth(1).getByRole('row');

    await page.getByRole('columnheader', { name: /Book Name/ }).click();

    await expect(dataRows.first().getByRole('cell').nth(1)).toHaveText('1984');
  });

  test('navigates to the next table page', async ({ page }) => {
    const table = page.getByRole('table', { name: 'Books data table' });

    await page.getByRole('button', { name: 'Page 2' }).click();

    await expect(page.getByTestId('row-count')).toHaveText(/25 books.*page 2 of 5/);
    await expect(table.getByRole('rowgroup').nth(1).getByRole('row')).toHaveCount(5);
    await expect(page.getByRole('button', { name: 'Previous page' })).toBeEnabled();
  });

  test('adds a new book through the modal form', async ({ page }) => {
    const title = 'QA Automation Handbook';

    await page.getByRole('button', { name: 'Add new book' }).click();
    const dialog = page.getByRole('dialog', { name: 'Add New Book' });
    await dialog.getByRole('textbox', { name: 'Book Name' }).fill(title);
    await dialog.getByRole('textbox', { name: 'Author' }).fill('QA Team');
    await dialog.getByRole('combobox', { name: 'Genre' }).selectOption('Technology');
    await dialog.getByRole('button', { name: 'Save new book' }).click();

    await page.getByRole('searchbox', { name: 'Search books' }).fill(title);
    await expect(page.getByRole('table', { name: 'Books data table' }).getByRole('row').filter({ hasText: title })).toHaveCount(1);
  });
});
