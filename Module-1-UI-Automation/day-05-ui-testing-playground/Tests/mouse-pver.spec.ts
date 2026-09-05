import { test, expect } from '@playwright/test';

test('UI Testing Playground - Mouse Over', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/mouseover');

	const clickMeLink = page.getByText('Click me', { exact: true });
	await clickMeLink.hover();
	await page.getByText('Click me', { exact: true }).click();
	await page.getByText('Click me', { exact: true }).click();

	const linkButton = page.getByText('Link Button', { exact: true });
	await linkButton.hover();
	await page.getByText('Link Button', { exact: true }).click();
	await page.getByText('Link Button', { exact: true }).click();

	await expect(page.locator('#clickCount')).toHaveText('2');
	await expect(page.locator('#clickButtonCount')).toHaveText('2');
});
