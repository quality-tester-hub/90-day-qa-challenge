import { test, expect } from '@playwright/test';

test('UI Testing Playground - Progress Bar', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/progressbar');

	await page.getByRole('button', { name: 'Start' }).click();

	const progressBar = page.locator('#progressBar');
	await expect
		.poll(async () => Number(await progressBar.getAttribute('aria-valuenow')), {
			timeout: 30000,
			intervals: [10],
		})
		.toBeGreaterThanOrEqual(75);

	await page.getByRole('button', { name: 'Stop' }).click();

	const stoppedValue = Number(await progressBar.getAttribute('aria-valuenow'));
	expect(stoppedValue).toBeGreaterThanOrEqual(75);
	expect(stoppedValue).toBeLessThanOrEqual(77);
	await expect(page.locator('#result')).not.toHaveText('Result: n/a');
});
