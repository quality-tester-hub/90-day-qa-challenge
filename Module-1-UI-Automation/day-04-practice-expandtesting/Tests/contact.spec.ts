import { test, expect } from '@playwright/test';

test('Practice ExpandTesting - Contact Form Submission', async ({ page }) => {
  console.log('[LOG] Navigating to Contact page...');
  await page.goto('https://practice.expandtesting.com/contact');

  console.log('[LOG] Filling contact details...');
  await page.getByLabel('Name').fill('QA Tester');
  await page.getByLabel('Email').fill('qa_tester@example.com');
  await page.getByLabel('Subject').fill('Automated Test Inquiry');
  await page.getByLabel('Message').fill('This is an automated test message for Day 04 QA Challenge.');

  console.log('[LOG] Submitting contact form...');
  await page.getByRole('button', { name: 'Send' }).click();

  console.log('[LOG] Verifying submission confirmation message...');
  const successBanner = page.locator('#flash, .alert-success');
  await expect(successBanner).toBeVisible();
  await expect(successBanner).toContainText(/thank you|sent|success/i);

  console.log('[LOG] Contact form test completed successfully.');
});