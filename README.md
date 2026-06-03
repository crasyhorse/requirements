# Electron Vite React Starter

A minimal Electron desktop application scaffolded with Vite, React, TypeScript, PrimeReact, Vitest, Istanbul coverage, Playwright BDD, TypeDoc, ESLint, and Prettier.

## Scripts

- `npm run dev` starts Electron in development mode.
- `npm test` runs the Vitest test suite once.
- `npm run coverage` runs Vitest with Istanbul coverage reports.
- `npm run docs` generates TypeDoc documentation in `docs`.
- `npm run bdd:gen` generates Playwright tests from Gherkin feature files.
- `npm run e2e:install` installs Playwright browser binaries.
- `npm run e2e` generates BDD tests and runs Playwright against the Vite renderer.
- `npm run e2e:ui` opens the Playwright UI runner after generating BDD tests.
- `npm run e2e:headed` runs generated Playwright tests in headed browser mode.
- `npm run build` type-checks and builds the Electron main, preload, and renderer bundles.
- `npm run preview` previews the built Electron application.
- `npm run lint` runs ESLint with the TypeScript ESLint strict type-checked rules.
- `npm run format` formats the project with Prettier.
- `npm run format:check` verifies Prettier formatting without writing changes.

## Project structure

- `src/main` contains the Electron main process.
- `src/preload` contains the preload bridge exposed to the renderer.
- `src/renderer` contains the React application, PrimeReact usage, and Vitest tests.
- `features` contains Playwright BDD feature files and step definitions.

## Static analysis

TypeScript is configured with `strict` enabled for both Electron and renderer code, plus additional strictness checks such as unused code, implicit returns, and unchecked indexed access.

## End-to-end BDD tests

Playwright is configured in `playwright.config.ts` to generate tests from Gherkin features with `playwright-bdd`, start the Vite renderer on `http://127.0.0.1:5173`, and run the generated scenarios in Chromium. Generated BDD files, Playwright reports, and test artifacts are ignored by Git.

## Documentation and coverage

TypeDoc is configured through `typedoc.json` and `tsconfig.typedoc.json`. Coverage is configured in `electron.vite.config.ts` with the Istanbul provider and text, HTML, and LCOV reporters.
