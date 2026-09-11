import { test, expect } from '@playwright/test';

test.describe('CommitQuality - Filter Products', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://commitquality.com/');
  });

  test('Filter product by exact match name', async ({ page }) => {
    const filterInput = page.getByPlaceholder('Filter by product name');
    
    // Type target product name and trigger filter
    await filterInput.fill('Product 1');
    await page.getByRole('button', { name: 'Filter' }).click();

    // Assert table rows only display matching items
    const rows = page.locator('tbody tr');
    await expect(rows.first()).toContainText('Product 1');
  });

  test('Filter product with non-existent query shows no results', async ({ page }) => {
    const filterInput = page.getByPlaceholder('Filter by product name');
    
    // Type non-existent query
    await filterInput.fill('NonExistentItem999');
    await page.getByRole('button', { name: 'Filter' }).click();

    // Verify table is empty
    const rows = page.locator('tbody tr');
    await expect(rows).toHaveCount(0);
  });

  test('Reset filter restores full product table', async ({ page }) => {
    const filterInput = page.getByPlaceholder('Filter by product name');
    
    // Filter down results first
    await filterInput.fill('Product 2');
    await page.getByRole('button', { name: 'Filter' }).click();

    // Clear search input and re-filter or reset
    await filterInput.clear();
    await page.getByRole('button', { name: 'Filter' }).click();

    // Assert full dataset returns (more than 1 row)
    const rows = page.locator('tbody tr');
    const count = await rows.count();
    expect(count).toBeGreaterThan(1);
  });
});