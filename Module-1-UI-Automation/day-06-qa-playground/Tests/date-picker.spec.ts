import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://qaplayground.com/practice/date-picker');
  await page.getByTestId('dp-basic-input').fill('2026-09-17');
  await page.getByTestId('dp-calendar-trigger').click();
  await page.getByTestId('dp-next-month').click();
  await page.getByRole('gridcell', { name: '-11-28' }).click();
  await page.getByTestId('dp-constrained-input').fill('2025-06-27');
  await page.getByRole('textbox', { name: 'Appointment date' }).fill('2026-09-17');
  await page.getByRole('textbox', { name: 'Return date' }).fill('2026-09-24');
  await page.getByRole('button', { name: 'Book Morning slot on 2025-08-' }).click();
  await page.getByRole('button', { name: 'Book Afternoon slot on 2025-08-' }).click();
  await page.getByRole('button', { name: 'Book Evening slot on 2025-08-' }).click();
  await page.getByRole('button', { name: 'Assert today\'s date' }).click();
});