import { test, expect } from '@playwright/test';

test('UI Testing Playground - Load Delay', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/loaddelay');

	const delayedButton = page.getByRole('button', {
		name: 'Button Appearing After Delay',
	});

	await expect(delayedButton).toBeVisible({ timeout: 15000 });
	await delayedButton.click();
});
