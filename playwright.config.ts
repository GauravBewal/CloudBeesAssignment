import {devices, defineConfig} from '@playwright/test';
// import { allureStorageDir, allureResultsPattern } from 'allure-playwright';
import * as path from 'path';  // Import the path module


export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1, // Retry flaky tests once
// Configure parallel execution
//   workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['allure-playwright', {
        outputDir: path.join(__dirname, 'allure-results'), // Use an absolute path
        suiteTitle: 'CloudBees Report'
    }],
  ],

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
