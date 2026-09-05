import { test, expect } from '@playwright/test';

test('UI Testing Playground - Hidden Layers', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/hiddenlayers');

	const greenButton = page.locator('#greenButton');
	await expect(greenButton).toBeVisible();
	await greenButton.click();

	const blueButton = page.locator('#blueButton');
	await expect(blueButton).toBeVisible();
	await blueButton.click();
});
