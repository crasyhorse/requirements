import { expect } from '@playwright/test';
import { Given, Then } from './fixtures';

Given('the Electron app is running', async ({ appWindow }) => {
    await expect(appWindow.locator('body')).toBeVisible();
});

Then('the main window title contains {string}', async ({ appWindow }, expectedTitle: string) => {
    await expect(appWindow).toHaveTitle(new RegExp(expectedTitle, 'i'));
});

Then('the renderer contains {string}', async ({ appWindow }, expectedText: string) => {
    await expect(appWindow.getByText(expectedText)).toBeVisible();
});

Then('the main process app name is {string}', async ({ electronApp }, expectedAppName: string) => {
    const actualAppName = await electronApp.evaluate(({ app }) => {
        return app.getName();
    });

    expect(actualAppName).toBe(expectedAppName);
});
