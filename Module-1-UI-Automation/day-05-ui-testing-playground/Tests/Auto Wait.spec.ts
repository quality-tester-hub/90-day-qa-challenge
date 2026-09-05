import { test, expect } from '@playwright/test';

test('UI Testing Playground - Auto Wait for Enabled Input', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/autowait');

	await page.getByLabel('Choose an element type:').selectOption('input');
	await page.getByLabel('Enabled').uncheck();
	await page.getByRole('button', { name: 'Apply 3s' }).click();

	const targetInput = page.locator('#target');
	await expect(targetInput).toBeDisabled();
	await targetInput.fill('Auto waited text');
	await targetInput.press('Tab');

	await expect(targetInput).toHaveValue('Auto waited text');
	await expect(page.locator('#opstatus')).toHaveText('Text: Auto waited text');
});
