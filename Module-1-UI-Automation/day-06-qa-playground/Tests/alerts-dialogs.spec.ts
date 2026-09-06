import { expect, test } from '@playwright/test';

const alertsDialogsUrl = 'https://qaplayground.com/practice/alerts-dialogs';

test.describe('Day 06: Alerts and dialogs - QA Playground', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(alertsDialogsUrl);
  });

  test('closes the information dialog', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Info Dialog' }).click();

    const dialog = page.getByRole('dialog', { name: 'Session Notice' });
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText('Your session will expire in 30 minutes.');

    await dialog.getByRole('button', { name: 'Close info dialog' }).click();

    await expect(dialog).toBeHidden();
    await expect(page.getByText('Info dialog dismissed')).toBeVisible();
  });

  test('confirms an action in a dialog', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Confirm Dialog' }).click();

    const dialog = page.getByRole('dialog', { name: 'Confirm Submission' });
    await expect(dialog).toContainText('Submit this form response?');
    await dialog.getByRole('button', { name: 'Confirm' }).click();

    await expect(dialog).toBeHidden();
    await expect(
      page.getByRole('button', { name: 'Open Confirm Dialog' }).locator('..').getByText('Submission confirmed!'),
    ).toBeVisible();
  });

  test('cancels an unsaved-changes dialog and stays on the page', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Unsaved Dialog' }).click();

    const dialog = page.getByRole('dialog', { name: 'Unsaved Changes' });
    await dialog.getByRole('button', { name: 'Stay' }).click();

    await expect(dialog).toBeHidden();
    await expect(page.getByText(/Stayed.*changes preserved/)).toBeVisible();
  });

  test('cancels a destructive delete confirmation', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Delete Dialog' }).click();

    const dialog = page.getByRole('dialog', { name: 'Delete Account' });
    await expect(dialog).toContainText('user@example.com');
    await dialog.getByRole('button', { name: 'Cancel' }).click();

    await expect(dialog).toBeHidden();
  });

  test('dismisses a dialog by clicking the backdrop', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Backdrop Dialog' }).click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    const viewport = page.viewportSize();
    expect(viewport).not.toBeNull();
    await page.mouse.click(5, viewport!.height - 5);

    await expect(dialog).toBeHidden();
    await expect(page.getByText('Dialog closed via backdrop')).toBeVisible();
  });

  test('dismisses a dialog with the Escape key', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Keyboard Dialog' }).click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');

    await expect(dialog).toBeHidden();
    await expect(page.getByText('Dialog closed via Escape key')).toBeVisible();
  });

  test('asserts notification dialog content before acknowledging it', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Notification' }).click();

    const dialog = page.getByRole('dialog', { name: 'Maintenance Window' });
    await expect(dialog).toContainText('Service will be offline from Sunday 3:00');
    await dialog.getByRole('button', { name: 'Got It' }).click();

    await expect(dialog).toBeHidden();
    await expect(page.getByText('Notification acknowledged')).toBeVisible();
  });

  test('dismisses the matching repeated notification', async ({ page }) => {
    const notification = page.getByText('Low Disk Space', { exact: false }).locator('..');
    await notification.getByRole('button', { name: 'Dismiss' }).click();

    const dialog = page.getByRole('dialog', { name: 'Dismiss Low Disk Space?' });
    await dialog.getByRole('button', { name: 'Confirm dismiss Low Disk Space' }).click();

    await expect(dialog).toBeHidden();
    await expect(page.getByText(/Low Disk Space.*notification dismissed/)).toBeVisible();
  });
});