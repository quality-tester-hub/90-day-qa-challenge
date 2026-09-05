import { test, expect } from '@playwright/test';

test('UI Testing Playground - Select options', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/select');

	await page.getByLabel('Programming Language (single-select)').selectOption('py');
	await expect(page.locator('#statusLanguage')).toHaveText(
		'Selected: Python (value: py)',
	);

	await page.getByLabel('Product Version (select by value)').selectOption('v3.0-beta');
	await expect(page.locator('#statusProduct')).toHaveText(
		'Selected: Release 3.0 Beta (value: v3.0-beta)',
	);

	await page.getByLabel(/Colors \(multi-select/).selectOption(['red', 'blue']);
	await expect(page.locator('#statusColors')).toHaveText('Selected: Red, Blue');
});
