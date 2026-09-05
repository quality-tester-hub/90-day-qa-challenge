import { test, expect } from '@playwright/test';

test('UI Testing Playground - Class Attribute button', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/classattr');

	const primaryButton = page.locator('button.btn-primary');

	await expect(primaryButton).toBeVisible();
	await expect(primaryButton).toHaveClass(/btn-primary/);
	await primaryButton.click();
});
