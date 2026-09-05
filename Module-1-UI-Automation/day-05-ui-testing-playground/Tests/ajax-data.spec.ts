import { test, expect } from '@playwright/test';

test('UI Testing Playground - AJAX Data', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/ajax');

	await page.getByRole('button', {
		name: 'Button Triggering AJAX Request',
	}).click();

	const loadedLabel = page.locator('#content p');
	await expect(loadedLabel).toHaveText('Data loaded with AJAX get request.', {
		timeout: 20000,
	});
	await loadedLabel.click();
});
