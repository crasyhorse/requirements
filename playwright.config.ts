import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
    features: 'test/e2e/features/**/*.feature',
    steps: 'test/e2e/features/steps/**/*.ts',
});

export default defineConfig({
    testDir,
    tsconfig: './tsconfig.playwright.json',
    fullyParallel: true,
    forbidOnly: Boolean(process.env.CI),
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        cucumberReporter('html', { outputFile: 'cucumber-report/index.html' }),
    ],

    use: { baseURL: 'http://127.0.0.1:5173', trace: 'on-first-retry' },
    webServer: {
        command: 'vite --host 127.0.0.1',
        url: 'http://127.0.0.1:5173',
        reuseExistingServer: !process.env.CI,
        stdout: 'pipe',
        stderr: 'pipe',
    },
    projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
