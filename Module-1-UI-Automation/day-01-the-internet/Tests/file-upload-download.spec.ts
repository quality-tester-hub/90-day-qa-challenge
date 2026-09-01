import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'File Download', exact: true }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'testing_firefox.pdf' }).click();
  const download = await downloadPromise;
  const download1Promise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'upload-test.txt', exact: true }).click();
  const download1 = await download1Promise;
  const download2Promise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'tmpwo_mxjvp.txt' }).click();
  const download2 = await download2Promise;
  const download3Promise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'tmpwo_mxjvp.txt' }).click();
  const download3 = await download3Promise;
  const download4Promise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'temp_upload.txt' }).click();
  const download4 = await download4Promise;
  await page.getByRole('link', { name: 'File Upload' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Upload' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('_ (6).jpeg');
  await page.getByRole('button', { name: 'Upload' }).click();
});