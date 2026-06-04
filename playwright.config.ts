import { defineConfig } from '@playwright/test'
import { defineBddConfig } from 'playwright-bdd'

const testDir = defineBddConfig({
  paths: ['features/**/*.feature'],
  import: ['features/steps/**/*.ts'],
  importTestFrom: 'features/fixtures/electron.ts',
  outputDir: '.features-gen'
})

export default defineConfig({
  testDir,
  tsconfig: './tsconfig.playwright.json',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  outputDir: 'test-results',
  use: {
    trace: 'on-first-retry'
  }
})
