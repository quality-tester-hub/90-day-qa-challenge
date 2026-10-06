declare const process: any;

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  testMatch: [
    '**/Module-1-UI-Automation/**/*.spec.ts',
    '**/Module-2-API-Testing/**/*.spec.ts',
    '**/Module-3-Buggy-Exploratory/**/*.spec.ts',
  ],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'linux-chromium',
      use: {
        ...devices['Desktop Chrome'],
        defaultBrowserType: 'chromium',
        launchOptions: {
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
          ],
        },
      },
    },
    {
      name: 'linux-firefox',
      use: {
        ...devices['Desktop Firefox'],
        defaultBrowserType: 'firefox',
      },
    },
    {
      name: 'linux-webkit',
      use: {
        ...devices['Desktop Safari'],
        defaultBrowserType: 'webkit',
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
        launchOptions: {
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        },
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],
});