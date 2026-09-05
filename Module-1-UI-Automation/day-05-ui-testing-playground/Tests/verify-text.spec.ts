import { test, expect } from '@playwright/test';

test('UI Testing Playground - Verify Text', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/verifytext');

	const welcomeText = page.locator('div.bg-primary > span.badge-secondary');

	await expect(welcomeText).toBeVisible();
	await expect(welcomeText).toHaveText('Welcome UserName!');
});
