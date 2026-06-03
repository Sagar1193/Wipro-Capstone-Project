// @ts-check
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({

  testDir: './tests',

  timeout: 120000,

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 1,

  workers: 1,

  outputDir: 'test-results/',

  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['allure-playwright']
  ],

  use: {
    baseURL: process.env.BASE_URL,

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 30000,

    navigationTimeout: 120000,

      launchOptions: {
        slowMo: 100
      }
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      },
    },
  ],
});