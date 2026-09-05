import { test, expect } from '@playwright/test';

test('UI Testing Playground - Clear Input', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/clearinput');

	const fields = page.locator('.clear-target');
	const fieldCount = await fields.count();

	for (let index = 0; index < fieldCount; index++) {
		await fields.nth(index).fill('');
	}

	const formFields = page.locator('input.clear-target, textarea.clear-target');
	for (let index = 0; index < await formFields.count(); index++) {
		await expect(formFields.nth(index)).toHaveValue('');
	}
	await expect(page.locator('#clearContentEditable')).toHaveText('');

	await expect(page.locator('#opstatus')).toHaveText('All fields are cleared!');
});
