import { defineConfig } from '@playwright/test'
import { defineBddConfig } from 'playwright-bdd'

const isCI = Boolean(process.env.CI)
const testDir = defineBddConfig({
  paths: ['test/e2e/features/**/*.feature'],
  import: ['test/e2e/steps/**/*.ts'],
  importTestFrom: 'test/e2e/fixtures/electron.ts',
  outputDir: 'test/e2e/.features-gen'
})

export default defineConfig({
  testDir,
  tsconfig: './tsconfig.playwright.json',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  ...(isCI ? { workers: 1 } : {}),
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  outputDir: 'test-results',
  use: {
    trace: 'on-first-retry'
  }
})
