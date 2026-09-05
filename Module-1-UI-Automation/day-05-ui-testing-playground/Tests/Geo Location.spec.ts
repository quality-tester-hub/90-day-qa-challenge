import { test, expect } from '@playwright/test';

test.use({
	geolocation: { latitude: 35.6762, longitude: 139.6503 },
	permissions: ['geolocation'],
	ignoreHTTPSErrors: true,
});

test('UI Testing Playground - Simulated Geo Location', async ({ page }) => {
	await page.goto('https://uitestingplayground.com/geolocation');

	await page.getByRole('button', { name: 'Request Location' }).click();

	await expect(page.locator('#location')).toHaveText('35.676200, 139.650300');
});
