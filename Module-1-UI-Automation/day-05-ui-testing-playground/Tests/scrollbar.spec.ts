import { test, expect } from '@playwright/test';

test('UI Testing Playground - Scrollbars', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/scrollbars');

	const hidingButton = page.getByRole('button', { name: 'Hiding Button' });
	await hidingButton.scrollIntoViewIfNeeded();

	await expect(hidingButton).toBeInViewport();
	await hidingButton.click();
});
