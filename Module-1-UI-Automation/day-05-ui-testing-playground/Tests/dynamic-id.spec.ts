import { test, expect } from '@playwright/test';

test('UI Testing Playground - Dynamic ID button', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/dynamicid');

	const dynamicIdButton = page.getByRole('button', {
		name: 'Button with Dynamic ID',
	});

	await expect(dynamicIdButton).toBeVisible();
	await dynamicIdButton.click();
	await expect(dynamicIdButton).toBeEnabled();
});
