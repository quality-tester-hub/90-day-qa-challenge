import { test, expect } from '@playwright/test';

test('UI Testing Playground - Nested Frames', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/frames');

	const outerFrame = page.frameLocator('#frame-outer');
	await outerFrame.locator('[data-action="edit"]').click();
	await expect(outerFrame.locator('#result')).toHaveText('Button pressed: Edit');

	await outerFrame.getByRole('button', { name: 'Submit' }).click();
	await expect(outerFrame.locator('#result')).toHaveText('Button pressed: Submit');

	await outerFrame.locator('[name="my-button"]').click();
	await expect(outerFrame.locator('#result')).toHaveText('Button pressed: Click me');

	await outerFrame.locator(".btn-class").click();
	await expect(outerFrame.locator('#result')).toHaveText('Button pressed: Primary');

	const innerFrame = outerFrame.frameLocator('#frame-inner');
	await innerFrame.locator('[data-action="edit"]').click();
	await expect(innerFrame.locator('#result')).toHaveText('Button pressed: Edit');

	await innerFrame.getByRole('button', { name: 'Submit' }).click();
	await expect(innerFrame.locator('#result')).toHaveText('Button pressed: Submit');

	await innerFrame.locator('[name="my-button"]').click();
	await expect(innerFrame.locator('#result')).toHaveText('Button pressed: Click me');

	await innerFrame.locator('.btn-class').click();
	await expect(innerFrame.locator('#result')).toHaveText('Button pressed: Primary');
});
