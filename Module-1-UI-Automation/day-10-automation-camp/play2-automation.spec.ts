import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://play2.automationcamp.ir/');
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('rex');
  await page.getByRole('textbox', { name: 'Last name:' }).click();
  await page.getByRole('textbox', { name: 'Last name:' }).fill('red');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByLabel('Choose an option:').selectOption('option 1');
  await page.locator('#owc').selectOption('option 1');
  await page.locator('label').filter({ hasText: 'Option 2' }).click();
  await page.locator('input[name="Options"]').click();
  await page.locator('input[name="Options"]').press('ArrowLeft');
  await page.locator('input[name="Options"]').click();
  await page.locator('input[name="Options"]').fill('Vanilla');
  await page.getByRole('textbox', { name: 'Select your favorite color:' }).fill('#f547d0');
  await page.getByRole('group', { name: 'This is your form title:' }).click();
  await page.locator('#day').fill('2026-09-08');
  await page.locator('[id="a"]').fill('100');
  await page.getByText('The cat was playing in the').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Submit' }).click();
  const page1 = await page1Promise;
  await page.getByText('Image').click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('heading', { name: 'Enter Username:test Password:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('spinbutton', { name: 'Select a quantity from a' }).click();
  await page.getByRole('spinbutton', { name: 'Select a quantity from a' }).fill('1');
});