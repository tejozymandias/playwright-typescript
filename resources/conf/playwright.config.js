const { devices } = require('@playwright/test');

const config = {
  use: {
    trace: 'on-first-retry',
  },
  testDir: '../../src/test',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};

module.exports = config;