import { expect } from '@playwright/test'
import { _electron as electron, type ElectronApplication, type Page } from 'playwright'
import { test as base } from 'playwright-bdd'

type ElectronFixtures = {
  electronApp: ElectronApplication
  page: Page
}

export const test = base.extend<ElectronFixtures>({
  electronApp: async ({}, use) => {
    const electronApp = await electron.launch({ args: ['out/main/index.js'] })

    await use(electronApp)
    await electronApp.close()
  },
  page: async ({ electronApp }, use) => {
    const page = await electronApp.firstWindow()

    await use(page)
  }
})

export { expect }
