import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Point to the root module so VS Code scans all day subfolders
  testDir: './Module-1-UI-Automation',
  
  // Recursively match any .spec.ts file across any subfolder
  testMatch: '**/*.spec.ts',
  
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});