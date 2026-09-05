import { test, expect } from '@playwright/test';

test('UI Testing Playground - Physical Click', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/click');

	const clickButton = page.locator('#badButton');
	await expect(clickButton).toHaveClass(/btn-primary/);

	await clickButton.click();

	await expect(clickButton).toHaveClass(/btn-success/);
});
