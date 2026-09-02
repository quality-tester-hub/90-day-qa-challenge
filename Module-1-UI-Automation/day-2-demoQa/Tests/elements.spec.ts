import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Elements' }).click();
  await page.getByRole('link', { name: 'Text Box' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Pro Player');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('player9pro@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('esports surviver');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('payoner');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Check Box' }).click();
  await page.getByRole('checkbox', { name: 'Select Home' }).click();
  await page.getByRole('checkbox', { name: 'Select Home' }).click();
  await page.getByRole('checkbox', { name: 'Select Home' }).click();
  await page.getByRole('link', { name: 'Radio Button' }).click();
  await page.goto('https://demoqa.com/radio-button');
  await page.getByRole('link', { name: 'Radio Button' }).click();
  await page.getByRole('link', { name: 'Radio Button' }).click();
  await page.goto('https://demoqa.com/radio-button');
  await page.getByRole('link', { name: 'Radio Button' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Web Tables' }).click();
  await page.goto('https://demoqa.com/radio-button');
  await page.getByRole('link', { name: 'Web Tables' }).click();
  await page.getByRole('link', { name: 'Radio Button' }).click();
  await page.locator('div').filter({ hasText: /^Yes$/ }).click();
  await page.locator('div').filter({ hasText: /^No$/ }).click();
  await page.locator('div').filter({ hasText: /^No$/ }).click();
  await page.getByRole('radio', { name: 'Impressive' }).check();
  await page.locator('div').filter({ hasText: /^No$/ }).click();
  await page.locator('div').filter({ hasText: /^No$/ }).click();
  await page.locator('div').filter({ hasText: /^No$/ }).click();
  await page.getByRole('radio', { name: 'Impressive' }).check();
  await page.locator('div').filter({ hasText: /^No$/ }).click();
  await page.getByRole('listitem').filter({ hasText: 'Web Tables' }).click();
  await page.getByRole('link', { name: 'Web Tables' }).click();
  await page.locator('#delete-record-1 > svg').click();
  await page.locator('#edit-record-2 > svg').click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('dicksuker');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#delete-record-3 > svg').click();
  await page.locator('#delete-record-2 > svg > path').click();
  await page.getByRole('textbox', { name: 'Type to search' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).fill('c');
  await page.locator('#basic-addon2').click();
  await page.locator('#basic-addon2').click();
  await page.locator('#basic-addon2').click();
  await page.locator('#delete-record-3 > svg > path').click();
  await page.getByRole('textbox', { name: 'Type to search' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).fill('');
  await page.getByText('FirstPreviousNextLast').click();
  await page.getByText('FirstPreviousNextLast').dblclick();
  await page.getByText('FirstPreviousNextLast').dblclick();
  await page.getByText('FirstPreviousNextLast').click();
  await page.getByText('FirstPreviousNextLast').click();
  await page.getByText('FirstPreviousNextLast').click();
  await page.getByText('FirstPreviousNextLast').click();
  await page.getByText('FirstPreviousNextLast').click();
  await page.getByRole('link', { name: 'Buttons' }).click();
  await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  await page.getByRole('button', { name: 'Right Click Me' }).click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'Click Me', exact: true }).click();
  await page.getByRole('button', { name: 'Click Me', exact: true }).dblclick();
  await page.getByRole('listitem').filter({ hasText: /^Links$/ }).click();
  await page.getByRole('link', { name: 'Links', exact: true }).click();
  await Promise.all([
    page.waitForEvent('popup'),
    page.locator('#simpleLink').click()
  ]);
  await Promise.all([
    page.waitForEvent('popup'),
    page.locator('#dynamicLink').click()
  ]);
  await page.getByText('Following links will send an').click();
  await page.getByRole('link', { name: 'Created' }).click();
  await page.getByRole('link', { name: 'Created' }).click();
  await page.getByRole('link', { name: 'No Content' }).click();
  await page.getByRole('link', { name: 'Moved' }).click();
  await page.getByRole('link', { name: 'Bad Request' }).click();
  await page.getByRole('link', { name: 'Unauthorized' }).click();
  await page.getByRole('link', { name: 'Forbidden' }).click();
  await page.getByRole('link', { name: 'Not Found' }).click();
  await page.getByRole('link', { name: 'Broken Links - Images' }).click();
  await page.getByRole('link', { name: 'Click Here for Valid Link' }).click();
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Elements' }).click();
  await page.getByRole('link', { name: 'Broken Links - Images' }).click();
  await page.getByRole('link', { name: 'Upload and Download' }).click();
  await page.getByRole('link', { name: 'Upload and Download' }).click();
  await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Download' }).click()
  ]);
});