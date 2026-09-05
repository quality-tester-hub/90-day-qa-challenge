import { test, expect } from '@playwright/test';

test('UI Testing Playground - Sample App login and logout', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/sampleapp');

	await page.getByPlaceholder('User Name').fill('qa-user');
	await page.getByPlaceholder('********').fill('pwd');
	await page.getByRole('button', { name: 'Log In' }).click();

	await expect(page.locator('#loginstatus')).toHaveText('Welcome, qa-user!');
	await expect(page.getByRole('button', { name: 'Log Out' })).toBeVisible();

	await page.getByRole('button', { name: 'Log Out' }).click();
	await expect(page.locator('#loginstatus')).toHaveText('User logged out.');
});
