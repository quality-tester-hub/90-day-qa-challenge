import { test, expect } from '@playwright/test';

test.describe('Day 01: Basic Auth Practice', () => {

  test('should authenticate successfully using HTTP extra headers/credentials', async ({ browser }) => {
    // Create a new context with HTTP Basic Auth credentials built-in
    const context = await browser.newContext({
      httpCredentials: {
        username: 'admin',
        password: 'admin',
      },
    });

    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    // Assert successful authentication message
    const successHeader = page.locator('h3');
    await expect(successHeader).toHaveText('Basic Auth');

    const successMessage = page.locator('.example p');
    await expect(successMessage).toContainText('Congratulations! You have logged in.');

    await context.close();
  });

});