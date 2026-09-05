import { test, expect } from '@playwright/test';

test('UI Testing Playground - Client Side Delay', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/clientdelay');

	await page.getByRole('button', {
		name: 'Button Triggering Client Side Logic',
	}).click();

	const loadedLabel = page.locator('#content p');
	await expect(loadedLabel).toHaveText('Data calculated on the client side.', {
		timeout: 20000,
	});
	await loadedLabel.click();
});
