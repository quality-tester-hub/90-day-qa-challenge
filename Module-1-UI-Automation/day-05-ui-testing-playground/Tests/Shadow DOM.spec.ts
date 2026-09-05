import { test, expect } from '@playwright/test';

test('UI Testing Playground - Shadow DOM GUID generator', async ({ page }) => {
	await page.addInitScript(() => {
		let clipboardText = '';
		Object.defineProperty(navigator, 'clipboard', {
			configurable: true,
			value: {
				readText: () => Promise.resolve(clipboardText),
				writeText: (text: string) => {
					clipboardText = text;
					return Promise.resolve();
				},
			},
		});
	});
	await page.goto('http://uitestingplayground.com/shadowdom');

	const guidInput = page.locator('guid-generator #editField');
	await page.locator('guid-generator #buttonGenerate').click();

	await expect(guidInput).toHaveValue(
		/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
	);

	const generatedGuid = await guidInput.inputValue();
	await page.locator('guid-generator #buttonCopy').click();
	await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(
		generatedGuid,
	);
});
