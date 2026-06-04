# Electron Vite React Starter

A minimal Electron desktop application scaffolded with Vite, React, TypeScript, PrimeReact, Vitest, Istanbul coverage, Playwright BDD, TypeDoc, ESLint, and Prettier.

## Scripts

- `npm run dev` starts Electron in development mode.
- `npm test` runs the Vitest test suite once.
- `npm run coverage` runs Vitest with Istanbul coverage reports.
- `npm run docs` generates TypeDoc documentation in `docs`.
- `npm run bdd:gen` generates Playwright tests from Gherkin feature files.
- `npm run e2e:install` installs Playwright browser binaries.
- `npm run e2e` builds the Electron app, generates BDD tests, and runs Playwright against Electron.
- `npm run e2e:ui` builds the Electron app, generates BDD tests, and opens the Playwright UI runner.
- `npm run e2e:headed` builds the Electron app, generates BDD tests, and runs them in headed mode.
- `npm run build` type-checks and builds the Electron main, preload, and renderer bundles.
- `npm run preview` previews the built Electron application.
- `npm run lint` runs ESLint with the TypeScript ESLint strict type-checked rules and `.gitignore`-based ignores.
- `npm run format` formats the project with Prettier.
- `npm run format:check` verifies Prettier formatting without writing changes.

## Project structure

- `src/main` contains the Electron main process.
- `src/preload` contains the preload bridge exposed to the renderer.
- `src/renderer` contains the React application, PrimeReact usage, and Vitest tests.
- `test/e2e` contains Playwright BDD feature files, Electron fixtures, and step definitions.

## Static analysis

TypeScript is configured with `strict` enabled for both Electron and renderer code, plus additional strictness checks such as unused code, implicit returns, and unchecked indexed access. Renderer imports can use `@` as an alias for `src/renderer`.

## End-to-end BDD tests

Playwright is configured in `playwright.config.ts` to generate tests from Gherkin features with `playwright-bdd` and launch the built Electron app through Playwright's Electron automation API. Generated BDD files under `test/e2e/.features-gen`, Playwright reports, and test artifacts are ignored by Git.

## Documentation and coverage

TypeDoc is configured through `typedoc.json` and `tsconfig.typedoc.json`. Coverage is configured in `electron.vite.config.ts` with the Istanbul provider and text, HTML, and LCOV reporters.
