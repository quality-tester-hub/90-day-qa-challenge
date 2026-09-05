import { test, expect } from '@playwright/test';

test('UI Testing Playground - Overlapped Element', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/overlapped');

	const nameInput = page.getByPlaceholder('Name');
	const scrollContainer = page.locator('div[style*="overflow-y: scroll"]');
	await scrollContainer.evaluate((element) => {
		element.scrollTop = element.scrollHeight;
	});
	await nameInput.fill('QA User');

	await expect(nameInput).toHaveValue('QA User');
});
