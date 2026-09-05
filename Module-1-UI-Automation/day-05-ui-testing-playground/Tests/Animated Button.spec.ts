import { test, expect } from '@playwright/test';

test('UI Testing Playground - Animated Button', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/animation');

	await page.getByRole('button', { name: 'Start Animation' }).click();
	await expect(page.locator('#opstatus')).toHaveText('Animation done', {
		timeout: 10000,
	});

	const movingTarget = page.getByRole('button', { name: /Moving Target/ });
	await expect(movingTarget).not.toHaveClass(/spin/);
	await movingTarget.click();

	await expect(page.locator('#opstatus')).toHaveText(
		"Moving Target clicked. It's class name is 'btn btn-primary'",
	);
});
