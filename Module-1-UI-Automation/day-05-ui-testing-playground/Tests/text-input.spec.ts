import { test, expect } from '@playwright/test';

test('UI Testing Playground - Text Input', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/textinput');

	const newButtonName = 'Submit Order';
	await page.getByLabel('Set New Button Name').fill(newButtonName);

	await page
		.getByRole('button', {
			name: "Button That Should Change it's Name Based on Input Value",
		})
		.click();

	await expect(page.getByRole('button', { name: newButtonName })).toBeVisible();
});
