import { test, expect } from '@playwright/test';

test('UI Testing Playground - Disabled Input', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/disabledinput');

	const inputField = page.locator('#inputField');
	await page.getByRole('button', {
		name: 'Enable Edit Field with 5 seconds delay',
	}).click();

	await expect(inputField).toBeDisabled();
	await expect(inputField).toBeEnabled({ timeout: 10000 });
	await inputField.fill('Enabled input value');
	await inputField.press('Tab');

	await expect(page.locator('#opstatus')).toHaveText(
		'Value changed to: Enabled input value',
	);
});
