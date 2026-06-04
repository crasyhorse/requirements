import { test as base, createBdd } from 'playwright-bdd';
import { _electron as electron, type ElectronApplication, type Page } from '@playwright/test';

type ElectronFixtures = { electronApp: ElectronApplication; appWindow: Page };

export const test = base.extend<ElectronFixtures>({
    electronApp: async ({}, use) => {
        const electronApp = await electron.launch({
            // Use "." if your package.json points to the Electron main file.
            // Otherwise use something like "dist/main.js".
            args: ['.'],

            env: { ...process.env, NODE_ENV: 'test' },
        });

        await use(electronApp);

        await electronApp.close();
    },

    appWindow: async ({ electronApp }, use) => {
        const appWindow = await electronApp.firstWindow();

        await use(appWindow);
    },
});

export const { Given, When, Then } = createBdd(test);
