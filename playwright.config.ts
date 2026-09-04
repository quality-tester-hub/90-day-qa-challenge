import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  testMatch: '**/*.spec.ts',
  reporter: 'list',
  use: {
    trace: 'on-first-retry',
  },
});