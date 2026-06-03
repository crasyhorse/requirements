import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd'

const { Given, Then } = createBdd()

Given('I open the desktop starter', async ({ page }) => {
  await page.goto('/')
})

Then('I should see the {string} heading', async ({ page }, heading: string) => {
  await expect(page.getByRole('heading', { name: heading })).toBeVisible()
})

Then('I should see the {string} command', async ({ page }, command: string) => {
  await expect(page.getByText(command)).toBeVisible()
})

Then('I should see the {string} action', async ({ page }, action: string) => {
  await expect(page.getByRole('button', { name: action })).toBeVisible()
})
