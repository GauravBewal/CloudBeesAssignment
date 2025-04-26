import {devices, defineConfig} from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1, // Retry flaky tests once
  reporter: 'html', // You can add other reporters here as well
  // Configure parallel execution
//   workers: process.env.CI ? 2 : undefined,

  // 'use' is the shared section for all the projects 
  use: {
    viewport: {width: 1920, height: 1080},
    actionTimeout: 5000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    launchOptions: {
    //   slowMo: 250,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], headless: false },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'], headless: false },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'], headless: false },
    // }
  ]
});
