import { test, expect } from '@playwright/test';

test('UI Testing Playground - Non-Breaking Space', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/nbsp');

	const buttonWithNbsp = page.locator("//button[text()='My\u00a0Button']");
	await expect(buttonWithNbsp).toBeVisible();
	await buttonWithNbsp.click();
});
