import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://selectorshub.com/xpath-practice-page/');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('reduroe34@email.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('hitme90');
  await page.getByRole('textbox', { name: 'Enter your company' }).click();
  await page.getByRole('textbox', { name: 'Enter your company' }).fill('telegram');
  await page.getByRole('spinbutton', { name: 'Enter your mobile number' }).click();
  await page.getByRole('spinbutton', { name: 'Enter your mobile number' }).fill('');
  await page.getByRole('spinbutton', { name: 'Enter your mobile number' }).click();
  await page.getByRole('spinbutton', { name: 'Enter your mobile number' }).fill('-1');
  await page.getByText('Company Mobile Number Country').click();
  await page.getByRole('spinbutton', { name: 'Enter your mobile number' }).click();
  await page.getByRole('spinbutton', { name: 'Enter your mobile number' }).fill('9084939382399');
  await page.getByRole('textbox', { name: 'Country' }).click();
  await page.getByRole('textbox', { name: 'Country' }).fill('srilanka');
  await page.getByRole('textbox', { name: 'Enter your first crush name' }).click();
  await page.getByRole('textbox', { name: 'Enter your first crush name' }).fill('Math teacher');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'SelectorsHub Youtube Channel', exact: true }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.youtube.com/c/SelectorsHub');
});