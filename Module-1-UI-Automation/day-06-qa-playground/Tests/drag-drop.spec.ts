import { expect, test } from '@playwright/test';

const dragDropUrl = 'https://qaplayground.com/practice/drag-drop';

test.describe('Day 06: Drag and drop - QA Playground', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(dragDropUrl);
  });

  test('drags an item into a drop zone', async ({ page }) => {
    await page
      .getByRole('img', { name: 'Draggable item' })
      .dragTo(page.getByLabel('Drop zone', { exact: true }));

    await expect(page.getByText('Item dropped into zone', { exact: false })).toBeVisible();
  });

  test('drops each card into its matching labelled zone', async ({ page }) => {
    await page.getByLabel(/Card Alpha.*zone-a/).dragTo(page.getByLabel('Drop zone zone-a'));
    await page.getByLabel(/Card Beta.*zone-b/).dragTo(page.getByLabel('Drop zone zone-b'));
    await page.getByLabel(/Card Gamma.*zone-c/).dragTo(page.getByLabel('Drop zone zone-c'));

    await expect(page.getByText(/All 3 cards matched/)).toBeVisible();
  });

  test('reorders the sortable list', async ({ page }) => {
    const sortableList = page.getByRole('list', { name: 'Sortable framework list' });

    await sortableList
      .getByRole('listitem', { name: 'Sort item: Puppeteer' })
      .dragTo(sortableList.getByRole('listitem', { name: 'Sort item: Playwright' }));

    await expect(sortableList.getByRole('listitem').first()).toHaveText(/Puppeteer/);
    await expect(page.getByText(/Order: Puppeteer, Playwright/)).toBeVisible();
  });

  test('moves a task between scoped Kanban columns', async ({ page }) => {
    const doneColumn = page
      .locator('[data-column-id="done"]')
      .filter({ has: page.getByRole('heading', { name: /^Done/ }) });

    await page.getByLabel('Task: Write login tests').dragTo(doneColumn);

    await expect(page.getByText(/Write login tests.*moved to Done/)).toBeVisible();
  });

  test('shows rejection feedback for an incorrect shape zone', async ({ page }) => {
    await page.getByLabel('Draggable Circle').dragTo(page.getByLabel('Zone for Square'));

    await expect(page.getByRole('status')).toContainText('Wrong type');
    await expect(page.getByText('Wrong type dropped', { exact: false })).toBeVisible();
  });

  test('moves a card across the multi-column board', async ({ page }) => {
    await page
      .getByRole('article', { name: 'Board card: Fix login bug' })
      .dragTo(page.locator('[data-column-id="in-progress"]'));

    await expect(page.getByText(/Fix login bug.*In Progress/)).toBeVisible();
  });
});