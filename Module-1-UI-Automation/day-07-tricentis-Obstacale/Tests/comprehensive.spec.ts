import { test, expect } from '@playwright/test';

test.describe('Tricentis Obstacle Course - Day 7 Comprehensive', () => {
  test('Complete obstacle course workflow', async ({ page }) => {
    // Navigate to the obstacle course
    await page.goto('https://obstaclecourse.tricentis.com/Obstacles/45618');
    await page.waitForLoadState('networkidle');

    // Step 1: Verify obstacle is loaded
    const obstacleHeading = page.locator('h3:has-text("Test Automation Obstacle")');
    await expect(obstacleHeading).toBeVisible();
    console.log('✓ Obstacle loaded successfully');

    // Step 2: Verify all required UI elements are present
    const revealButton = page.locator('input[placeholder="Click me to reveal!"]');
    const firstInput = page.locator('input[placeholder="Enter first number here!"]');
    const secondInput = page.locator('input[placeholder="Enter second number here!"]');
    const thirdInput = page.locator('input[placeholder="Enter third number here!"]');
    const retryLink = page.locator('a:has-text("try again")');
    const nextLink = page.locator('a:has-text("next one")');

    await expect(revealButton).toBeVisible();
    await expect(firstInput).toBeVisible();
    await expect(secondInput).toBeVisible();
    await expect(thirdInput).toBeVisible();
    await expect(retryLink).toBeVisible();
    await expect(nextLink).toBeVisible();
    console.log('✓ All required UI elements present');

    // Step 3: Reveal the random text
    await revealButton.click();
    await page.waitForTimeout(500);
    
    // Step 4: Get and validate the revealed text
    const revealedText = await revealButton.inputValue();
    expect(revealedText).toBeTruthy();
    expect(revealedText!.length).toBeGreaterThan(0);
    console.log('✓ Random text revealed:', revealedText);

    // Step 5: Extract numbers using regex
    const allNumbers = revealedText!.match(/\d+/g) || [];
    expect(allNumbers.length).toBeGreaterThan(0);
    console.log('✓ Numbers extracted:', allNumbers);

    // Step 6: Find the 3 largest numbers
    const largestThree = allNumbers
      .map(n => parseInt(n, 10))
      .sort((a, b) => b - a)
      .slice(0, 3)
      .sort((a, b) => b - a);

    expect(largestThree.length).toBe(3);
    console.log('✓ Three largest numbers:', largestThree);

    // Step 7: Verify the numbers are in descending order
    expect(largestThree[0]).toBeGreaterThanOrEqual(largestThree[1]);
    expect(largestThree[1]).toBeGreaterThanOrEqual(largestThree[2]);
    console.log('✓ Numbers are properly sorted');

    // Step 8: Fill in the input fields
    await firstInput.fill(largestThree[0].toString());
    await secondInput.fill(largestThree[1].toString());
    await thirdInput.fill(largestThree[2].toString());
    console.log('✓ Input fields filled');

    // Step 9: Verify the values were entered correctly
    await expect(firstInput).toHaveValue(largestThree[0].toString());
    await expect(secondInput).toHaveValue(largestThree[1].toString());
    await expect(thirdInput).toHaveValue(largestThree[2].toString());
    console.log('✓ All values verified');

    // Step 10: Verify the retry link has the correct href
    const retryHref = await retryLink.getAttribute('href');
    expect(retryHref).toContain('retry=1');
    console.log('✓ Retry link verified:', retryHref);

    // Step 11: Verify the next link has the correct href
    const nextHref = await nextLink.getAttribute('href');
    expect(nextHref).toContain('retry=0');
    console.log('✓ Next link verified:', nextHref);

    console.log('✓ Complete workflow test passed!');
  });

  test('Input field constraints and validation', async ({ page }) => {
    await page.goto('https://obstaclecourse.tricentis.com/Obstacles/45618');
    await page.waitForLoadState('networkidle');

    const firstInput = page.locator('input[placeholder="Enter first number here!"]');
    const secondInput = page.locator('input[placeholder="Enter second number here!"]');
    const thirdInput = page.locator('input[placeholder="Enter third number here!"]');

    // Test 1: Empty fields
    expect(await firstInput.inputValue()).toBe('');
    expect(await secondInput.inputValue()).toBe('');
    expect(await thirdInput.inputValue()).toBe('');
    console.log('✓ Input fields start empty');

    // Test 2: Fill with large numbers
    await firstInput.fill('999999999');
    await secondInput.fill('888888888');
    await thirdInput.fill('777777777');

    await expect(firstInput).toHaveValue('999999999');
    await expect(secondInput).toHaveValue('888888888');
    await expect(thirdInput).toHaveValue('777777777');
    console.log('✓ Large numbers accepted');

    // Test 3: Clear and refill
    await firstInput.clear();
    expect(await firstInput.inputValue()).toBe('');
    await firstInput.fill('123');
    await expect(firstInput).toHaveValue('123');
    console.log('✓ Clear and refill works');

    // Test 4: Test with single digit numbers
    await firstInput.clear();
    await secondInput.clear();
    await thirdInput.clear();

    await firstInput.fill('9');
    await secondInput.fill('8');
    await thirdInput.fill('7');

    await expect(firstInput).toHaveValue('9');
    await expect(secondInput).toHaveValue('8');
    await expect(thirdInput).toHaveValue('7');
    console.log('✓ Single digit numbers accepted');
  });

  test('Number extraction accuracy with various patterns', async ({ page }) => {
    await page.goto('https://obstaclecourse.tricentis.com/Obstacles/45618');
    await page.waitForLoadState('networkidle');

    const revealButton = page.locator('input[placeholder="Click me to reveal!"]');
    await revealButton.click();
    await page.waitForTimeout(500);

    const revealedText = await revealButton.inputValue();
    expect(revealedText).toBeTruthy();

    // Test extraction with various regex patterns
    const numberPattern = /\d+/g;
    const numbers = revealedText!.match(numberPattern) || [];

    // Verify all extracted items are actually numbers
    numbers.forEach(num => {
      expect(/^\d+$/.test(num)).toBeTruthy();
    });
    console.log('✓ All extracted items are valid numbers');

    // Verify we can convert all to integers
    const integers = numbers.map(n => parseInt(n, 10));
    integers.forEach(num => {
      expect(typeof num).toBe('number');
      expect(Number.isInteger(num)).toBeTruthy();
      expect(num).toBeGreaterThanOrEqual(0);
    });
    console.log('✓ All numbers are valid positive integers');

    // Verify sorting works correctly
    const sorted = [...integers].sort((a, b) => b - a);
    expect(sorted[0]).toBeGreaterThanOrEqual(sorted[1]);
    if (sorted.length > 2) {
      expect(sorted[1]).toBeGreaterThanOrEqual(sorted[2]);
    }
    console.log('✓ Sorting algorithm works correctly');
  });

  test('Page structure and accessibility verification', async ({ page }) => {
    await page.goto('https://obstaclecourse.tricentis.com/Obstacles/45618');
    await page.waitForLoadState('networkidle');

    // Verify page title
    const title = await page.title();
    expect(title).toContain('Tricentis');
    console.log('✓ Page title correct:', title);

    // Verify heading hierarchy
    const heading3 = page.locator('h3');
    const heading4 = page.locator('h4');
    expect(await heading3.count()).toBeGreaterThan(0);
    expect(await heading4.count()).toBeGreaterThan(0);
    console.log('✓ Proper heading hierarchy');

    // Verify navigation elements
    const homeLink = page.locator('a:has-text("Home")');
    const obstacleLink = page.locator('a:has-text("Obstacle Course")');
    await expect(homeLink).toBeVisible();
    await expect(obstacleLink).toBeVisible();
    console.log('✓ Navigation elements present');

    // Verify footer elements
    const tricentisLink = page.locator('a:has-text("www.tricentis.com")').first();
    const copyrightText = page.locator('text=/© .* all rights reserved/');
    await expect(tricentisLink).toBeVisible();
    await expect(copyrightText).toBeVisible();
    console.log('✓ Footer elements present');
  });
});
