import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cymbal-shops.retail.cymbal.dev/');
  await page.getByRole('link').nth(2).click();
  await page.getByRole('button', { name: 'Add To Cart' }).click();
  await page.getByRole('link').nth(3).click();
  await page.getByRole('button', { name: 'Add To Cart' }).click();
  await page.getByRole('link').nth(4).click();
  await page.getByRole('button', { name: 'Add To Cart' }).click();
  await page.locator('.row > div:nth-child(4) > div > a').click();
  await page.getByRole('button', { name: 'Add To Cart' }).click();
  await page.goto('https://cymbal-shops.retail.cymbal.dev/product/2ZYFJ3GM2N');
  await page.getByRole('link').nth(5).click();
  await page.getByRole('button', { name: 'Add To Cart' }).click();
  await page.getByRole('link', { name: 'Cart icon' }).click();
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: 'Cart icon' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
});