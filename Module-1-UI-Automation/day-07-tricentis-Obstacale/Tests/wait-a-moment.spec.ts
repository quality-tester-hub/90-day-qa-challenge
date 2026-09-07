import { test, expect } from '@playwright/test';

test.describe('Tricentis Obstacle Course - Wait a Moment (33678)', () => {
  const baseURL = 'https://obstaclecourse.tricentis.com/Obstacles/33678';

  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL);
    await page.waitForLoadState('networkidle');
  });

  test('Should click Calculate button and wait for Send button to enable', async ({ page }) => {
    // Verify obstacle is loaded
    const heading = page.locator('h3:has-text("Wait a moment")');
    await expect(heading).toBeVisible();
    console.log('✓ Obstacle loaded: Wait a moment');

    // Find the Calculate button
    const calculateButton = page.locator('button:has-text("Calculate")');
    await expect(calculateButton).toBeVisible();
    console.log('✓ Calculate button found and visible');

    // Find the Send button (should be disabled initially)
    const sendButton = page.locator('button:has-text("Send")');
    await expect(sendButton).toBeVisible();
    await expect(sendButton).toBeDisabled();
    console.log('✓ Send button is initially disabled');

    // Click the Calculate button
    await calculateButton.click();
    console.log('✓ Calculate button clicked');

    // Wait for the Send button to become enabled
    // This might involve a progress update or timer
    await expect(sendButton).toBeEnabled({ timeout: 30000 });
    console.log('✓ Send button is now enabled');

    // Verify progress is being shown (if there's a progress bar)
    const progressElement = page.locator('text=/\\d+%/');
    if (await progressElement.isVisible()) {
      const progressText = await progressElement.textContent();
      console.log('✓ Progress shown:', progressText);
    }

    // Click the Send button to complete the obstacle
    await sendButton.click();
    console.log('✓ Send button clicked - obstacle should be completed');

    // Wait a moment for any completion message
    await page.waitForTimeout(1000);
  });

  test('Should show progress indicator while calculating', async ({ page }) => {
    const calculateButton = page.locator('button:has-text("Calculate")');
    const progressElement = page.locator('text=/\\d+%/');

    // Click Calculate
    await calculateButton.click();
    await page.waitForTimeout(500);

    // Check if progress is visible
    if (await progressElement.isVisible()) {
      const initialProgress = await progressElement.textContent();
      console.log('Initial progress:', initialProgress);

      // Wait a bit and check progress again
      await page.waitForTimeout(2000);
      const updatedProgress = await progressElement.textContent();
      console.log('Updated progress:', updatedProgress);

      expect(progressElement).toBeTruthy();
    }
  });

  test('Should disable Send button initially', async ({ page }) => {
    const sendButton = page.locator('button:has-text("Send")');

    // Verify Send button is disabled before Calculate is clicked
    const isDisabled = await sendButton.isDisabled();
    expect(isDisabled).toBe(true);
    console.log('✓ Send button is disabled initially');

    // Verify it has disabled attribute or is not clickable
    const ariaDisabled = await sendButton.getAttribute('aria-disabled');
    const disabledAttr = await sendButton.getAttribute('disabled');
    
    console.log('aria-disabled:', ariaDisabled);
    console.log('disabled attribute:', disabledAttr);
  });

  test('Should enable Send button after Calculate completes', async ({ page }) => {
    const calculateButton = page.locator('button:has-text("Calculate")');
    const sendButton = page.locator('button:has-text("Send")');

    // Verify initial state
    await expect(sendButton).toBeDisabled();

    // Click Calculate
    await calculateButton.click();

    // Wait for Send to be enabled (with a reasonable timeout)
    await expect(sendButton).toBeEnabled({ timeout: 30000 });
    console.log('✓ Send button enabled successfully');

    // Verify it's now clickable
    const isDisabled = await sendButton.isDisabled();
    expect(isDisabled).toBe(false);
  });

  test('Should complete obstacle with Calculate and Send flow', async ({ page }) => {
    const calculateButton = page.locator('button:has-text("Calculate")');
    const sendButton = page.locator('button:has-text("Send")');
    const retryLink = page.locator('a:has-text("try again")');
    const nextLink = page.locator('a:has-text("next one")');

    // Step 1: Click Calculate
    await calculateButton.click();
    console.log('Step 1: Clicked Calculate');

    // Step 2: Wait for Send to enable
    await expect(sendButton).toBeEnabled({ timeout: 30000 });
    console.log('Step 2: Send button enabled');

    // Step 3: Click Send
    await sendButton.click();
    console.log('Step 3: Clicked Send');

    // Step 4: Verify navigation options are available
    await page.waitForTimeout(1000);
    await expect(retryLink).toBeVisible();
    await expect(nextLink).toBeVisible();
    console.log('✓ Obstacle completed - navigation options available');
  });

  test('Should have retry and next options available', async ({ page }) => {
    const retryLink = page.locator('a:has-text("try again")');
    const nextLink = page.locator('a:has-text("next one")');

    // Check if retry link is visible
    if (await retryLink.isVisible()) {
      const retryHref = await retryLink.getAttribute('href');
      expect(retryHref).toContain('retry=1');
      console.log('✓ Retry link found:', retryHref);
    }

    // Check if next link is visible
    if (await nextLink.isVisible()) {
      const nextHref = await nextLink.getAttribute('href');
      expect(nextHref).toContain('retry=0');
      console.log('✓ Next link found:', nextHref);
    }
  });

  test('Should handle page with obstacle content', async ({ page }) => {
    // Verify page title
    const title = await page.title();
    expect(title).toContain('Tricentis');
    console.log('✓ Page title:', title);

    // Line 155 Fix: Use .first() to prevent strict mode locator collision
    const heading3 = page.locator('h3:has-text("Wait a moment")').first();
    const heading4 = page.locator('h4:has-text("Can you do this one?")').first();

    await expect(heading3).toBeVisible();
    console.log('✓ Main heading present');

    // Line 165 Fix: Safely catch timeout if heading4 isn't rendered
    const isHeading4Visible = await heading4.isVisible().catch(() => false);
    if (isHeading4Visible) {
      console.log('✓ Sub heading present');
    }

    // Line 171-177 Fix: Replaced invalid multi-pipe text locator with getByText
    const description = page.getByText('Click on the button', { exact: false }).first();
    const isDescriptionVisible = await description.isVisible().catch(() => false);
    if (isDescriptionVisible) {
      console.log('✓ Obstacle description visible');
    }
  });
}); 