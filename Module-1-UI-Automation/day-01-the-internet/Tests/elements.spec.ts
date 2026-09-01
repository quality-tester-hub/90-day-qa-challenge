import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Disappearing Elements' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Disappearing Elements' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('link', { name: 'Portfolio' }).click();
  await page.getByRole('link', { name: 'Gallery' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Elemental Selenium' }).click();
  await page1Promise;
});