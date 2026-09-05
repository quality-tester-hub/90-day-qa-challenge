import { test, expect } from '@playwright/test';

test('UI Testing Playground - Visibility', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/visibility');

	await page.getByRole('button', { name: 'Hide' }).click();

	await expect(page.locator('#removedButton')).toHaveCount(0);
	await expect(page.locator('#zeroWidthButton')).not.toBeVisible();
	await expect(page.locator('#transparentButton')).toHaveCSS('opacity', '0');
	await expect(page.locator('#invisibleButton')).not.toBeVisible();
	await expect(page.locator('#notdisplayedButton')).not.toBeVisible();

	await expect(page.getByRole('button', { name: 'Hide' })).toBeVisible();
});
