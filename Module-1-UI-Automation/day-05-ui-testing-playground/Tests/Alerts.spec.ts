import { test, expect } from '@playwright/test';

test('UI Testing Playground - Alerts, Confirm, and Prompt', async ({ page }) => {
	await page.goto('http://uitestingplayground.com/alerts');

	const alertPromise = page.waitForEvent('dialog');
	await page.locator('#alertButton').click();
	const alertDialog = await alertPromise;
	expect(alertDialog.type()).toBe('alert');
	expect(alertDialog.message()).toContain('Today is a working day.');
	await alertDialog.accept();

	const confirmPromise = page.waitForEvent('dialog');
	await page.locator('#confirmButton').click();
	const confirmDialog = await confirmPromise;
	expect(confirmDialog.type()).toBe('confirm');
	expect(confirmDialog.message()).toContain('Do you agree?');
	const yesPromise = page.waitForEvent('dialog');
	await confirmDialog.accept();
	const yesDialog = await yesPromise;
	expect(yesDialog.type()).toBe('alert');
	expect(yesDialog.message()).toBe('Yes');
	await yesDialog.accept();

	const promptPromise = page.waitForEvent('dialog');
	await page.locator('#promptButton').click();
	const promptDialog = await promptPromise;
	expect(promptDialog.type()).toBe('prompt');
	expect(promptDialog.defaultValue()).toBe('cats');
	const userValuePromise = page.waitForEvent('dialog');
	await promptDialog.accept('dogs');
	const userValueDialog = await userValuePromise;
	expect(userValueDialog.type()).toBe('alert');
	expect(userValueDialog.message()).toBe('User value: dogs');
	await userValueDialog.accept();
});
