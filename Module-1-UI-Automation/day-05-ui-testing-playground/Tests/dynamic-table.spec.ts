import { test, expect } from '@playwright/test';

test('UI Testing Playground - Dynamic Table Chrome CPU', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/dynamictable');

	const table = page.getByRole('table', { name: 'Tasks' });
	const headers = await table.getByRole('columnheader').allTextContents();
	const cpuColumnIndex = headers.indexOf('CPU');
	expect(cpuColumnIndex).toBeGreaterThanOrEqual(0);

	const chromeRow = table.getByRole('row').filter({ hasText: 'Chrome' });
	const chromeCpu = await chromeRow.getByRole('cell').nth(cpuColumnIndex).textContent();
	const warningLabel = page.locator('p.bg-warning');

	await expect(warningLabel).toHaveText(`Chrome CPU: ${chromeCpu?.trim()}`);
});
