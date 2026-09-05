import { test, expect } from '@playwright/test';

test('UI Testing Playground - CSS Selectors', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/cssselectors');

	await expect(page.locator('#primary-btn')).toHaveText('Primary Button');
	await expect(page.locator('.css-btn.highlight')).toHaveText('Third');
	await expect(page.locator('[data-testid="username-input"]')).toBeVisible();
	await expect(page.locator('.combo-list > .combo-item.special')).toHaveText(
		'Item 2 (special)',
	);
	await expect(page.locator('#selector-table tr:nth-child(3) td:nth-child(2)')).toHaveText(
		'Row 3, Cell 2',
	);

	await expect(page.locator('#visible-btn')).toBeVisible();
	await expect(page.locator('#hidden-display')).not.toBeVisible();

	const deepShadowButton = page.locator(
		'css-outer-component css-inner-component css-deep-component #shadow-btn-l3',
	);
	await expect(deepShadowButton).toHaveText('Level 3 Button');
});
