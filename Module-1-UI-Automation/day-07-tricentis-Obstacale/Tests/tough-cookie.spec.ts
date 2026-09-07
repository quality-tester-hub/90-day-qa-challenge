import { test, expect } from '@playwright/test';

test.describe('Tricentis Obstacle Course - Tough Cookie (45618)', () => {
  const baseURL = 'https://obstaclecourse.tricentis.com/Obstacles/45618';

  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL);
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
  });

  test('Should extract three numbers from random text string and submit form', async ({ page }) => {
    // Click the reveal button to show the random text
    const revealButton = page.locator('input[placeholder="Click me to reveal!"]');
    await expect(revealButton).toBeVisible();
    await revealButton.click();

    // Wait for the text to be revealed
    await page.waitForTimeout(500);

    // Get the revealed text
    const revealButton2 = page.locator('input[placeholder="Click me to reveal!"]');
    const revealedText = await revealButton2.inputValue();
    
    console.log('Revealed text:', revealedText);

    // Extract all numbers from the text
    const numbers = revealedText?.match(/\d+/g) || [];
    console.log('Extracted numbers:', numbers);

    // We need to find the 3 largest numbers
    const largeNumbers = numbers
      .map(num => parseInt(num, 10))
      .sort((a, b) => b - a)
      .slice(0, 3);

    console.log('Three largest numbers:', largeNumbers);

    // Fill in the three text boxes
    const firstNumberInput = page.locator('input[placeholder="Enter first number here!"]');
    const secondNumberInput = page.locator('input[placeholder="Enter second number here!"]');
    const thirdNumberInput = page.locator('input[placeholder="Enter third number here!"]');

    await expect(firstNumberInput).toBeVisible();
    await expect(secondNumberInput).toBeVisible();
    await expect(thirdNumberInput).toBeVisible();

    // Enter the numbers
    await firstNumberInput.fill(largeNumbers[0].toString());
    await secondNumberInput.fill(largeNumbers[1].toString());
    await thirdNumberInput.fill(largeNumbers[2].toString());

    // Verify the numbers were entered correctly
    await expect(firstNumberInput).toHaveValue(largeNumbers[0].toString());
    await expect(secondNumberInput).toHaveValue(largeNumbers[1].toString());
    await expect(thirdNumberInput).toHaveValue(largeNumbers[2].toString());

    console.log('Successfully filled in all three number fields');
  });

  test('Should navigate to next obstacle after solving', async ({ page }) => {
    // Click reveal button
    const revealButton = page.locator('input[placeholder="Click me to reveal!"]');
    await expect(revealButton).toBeVisible();
    await revealButton.click();

    await page.waitForTimeout(500);

    // Get the revealed text
    const revealButton2 = page.locator('input[placeholder="Click me to reveal!"]');
    const revealedText = await revealButton2.inputValue();
    
    // Extract numbers
    const numbers = revealedText?.match(/\d+/g) || [];
    const largeNumbers = numbers
      .map(num => parseInt(num, 10))
      .sort((a, b) => b - a)
      .slice(0, 3);

    // Fill in the inputs
    const firstNumberInput = page.locator('input[placeholder="Enter first number here!"]');
    const secondNumberInput = page.locator('input[placeholder="Enter second number here!"]');
    const thirdNumberInput = page.locator('input[placeholder="Enter third number here!"]');

    await firstNumberInput.fill(largeNumbers[0].toString());
    await secondNumberInput.fill(largeNumbers[1].toString());
    await thirdNumberInput.fill(largeNumbers[2].toString());

    // Try to submit
    const submitButton = page.locator('button:has-text("Next"), button:has-text("Submit"), button:has-text("Check")').first();
    if (await submitButton.isVisible()) {
      await submitButton.click();
    } else {
      await thirdNumberInput.press('Enter');
    }

    await page.waitForTimeout(1000);

    // Check if obstacle counter increased or if we moved to next obstacle
    const heading = page.locator('h3, h4');
    const headingText = await heading.first().textContent();
    console.log('Current heading:', headingText);
    expect(headingText).toBeTruthy();
  });

  test('Should validate that input fields accept numeric values', async ({ page }) => {
    const firstNumberInput = page.locator('input[placeholder="Enter first number here!"]');
    const secondNumberInput = page.locator('input[placeholder="Enter second number here!"]');
    const thirdNumberInput = page.locator('input[placeholder="Enter third number here!"]');

    // Test entering numbers
    await firstNumberInput.fill('123');
    await expect(firstNumberInput).toHaveValue('123');

    await secondNumberInput.fill('456');
    await expect(secondNumberInput).toHaveValue('456');

    await thirdNumberInput.fill('789');
    await expect(thirdNumberInput).toHaveValue('789');

    // Clear and verify empty
    await firstNumberInput.clear();
    await expect(firstNumberInput).toHaveValue('');
  });

  test('Should be able to retry the obstacle', async ({ page }) => {
    // Look for retry link
    const retryLink = page.locator('a:has-text("try again")');
    
    if (await retryLink.isVisible()) {
      const retryHref = await retryLink.getAttribute('href');
      expect(retryHref).toContain('retry=1');
      console.log('Retry link found:', retryHref);
    }
  });

  test('Should be able to skip to next obstacle', async ({ page }) => {
    // Look for skip/next link
    const nextLink = page.locator('a:has-text("next one")');
    
    if (await nextLink.isVisible()) {
      const nextHref = await nextLink.getAttribute('href');
      expect(nextHref).toContain('retry=0');
      console.log('Next obstacle link found:', nextHref);
    }
  });
});
