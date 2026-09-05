import { test, expect } from '@playwright/test';

test('UI Testing Playground - Scroll to Click', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/scrolltoclick');

	const pageScrollButton = page.locator('#scrollTarget1');
	await pageScrollButton.scrollIntoViewIfNeeded();
	await pageScrollButton.click();

	const containerScrollButton = page.locator('#scrollTarget2');
	await containerScrollButton.scrollIntoViewIfNeeded();
	await containerScrollButton.click();

	const nestedScrollButton = page.locator('#scrollTarget3');
	await nestedScrollButton.scrollIntoViewIfNeeded();
	await nestedScrollButton.click();

	await page.locator('#targetRow4').hover();
	const hoverButton = page.locator('#scrollTarget4');
	await expect(hoverButton).toBeVisible();
	await hoverButton.click();

	for (const button of [
		page.locator('#scrollTarget1'),
		page.locator('#scrollTarget2'),
		page.locator('#scrollTarget3'),
		hoverButton,
	]) {
		await expect(button).toHaveClass(/btn-success/);
	}

	await expect(page.locator('#progressText')).toHaveText('All buttons clicked!');
});
