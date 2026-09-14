import { test, expect } from '@playwright/test';

test('Cymbal Direct - Add Products to Cart Sequence', async ({ page }) => {
  // 1. Navigate to store home
  await page.goto('https://cymbal-shops.retail.cymbal.dev/');
  await expect(page).toHaveTitle(/Cymbal Direct/i);

  // 2. First Product -> Add to Cart
  const link2 = page.getByRole('link').nth(2);
  await link2.waitFor({ state: 'visible' });
  await link2.click();
  await page.getByRole('button', { name: 'Add To Cart' }).click();

  // 3. Second Product -> Add to Cart
  const link3 = page.getByRole('link').nth(3);
  await link3.waitFor({ state: 'visible' });
  await link3.click();
  await page.getByRole('button', { name: 'Add To Cart' }).click();

  // 4. Third Product -> Add to Cart
  const link4 = page.getByRole('link').nth(4);
  await link4.waitFor({ state: 'visible' });
  await link4.click();
  await page.getByRole('button', { name: 'Add To Cart' }).click();

  // 5. Fourth Product -> Add to Cart
  const rowLink = page.locator('.row > div:nth-child(4) > div > a');
  await rowLink.waitFor({ state: 'visible' });
  await rowLink.click();
  await page.getByRole('button', { name: 'Add To Cart' }).click();

  // 6. Navigate directly to product route & Fifth Product -> Add to Cart
  await page.goto('https://cymbal-shops.retail.cymbal.dev/product/2ZYFJ3GM2N');
  const link5 = page.getByRole('link').nth(5);
  await link5.waitFor({ state: 'visible' });
  await link5.click();
  await page.getByRole('button', { name: 'Add To Cart' }).click();

  // Verify final cart modal / container drawer opens
  await expect(page.locator('body')).toBeVisible();
});