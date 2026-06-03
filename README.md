# Electron Vite React Starter

A minimal Electron desktop application scaffolded with Vite, React, TypeScript, PrimeReact, Vitest, Istanbul coverage, TypeDoc, ESLint, and Prettier.

## Scripts

- `npm run dev` starts Electron in development mode.
- `npm test` runs the Vitest test suite once.
- `npm run coverage` runs Vitest with Istanbul coverage reports.
- `npm run docs` generates TypeDoc documentation in `docs`.
- `npm run build` type-checks and builds the Electron main, preload, and renderer bundles.
- `npm run preview` previews the built Electron application.
- `npm run lint` runs ESLint with the TypeScript ESLint strict type-checked rules.
- `npm run format` formats the project with Prettier.
- `npm run format:check` verifies Prettier formatting without writing changes.

## Project structure

- `src/main` contains the Electron main process.
- `src/preload` contains the preload bridge exposed to the renderer.
- `src/renderer` contains the React application, PrimeReact usage, and Vitest tests.

## Static analysis

TypeScript is configured with `strict` enabled for both Electron and renderer code, plus additional strictness checks such as unused code, implicit returns, and unchecked indexed access.

## Documentation and coverage

TypeDoc is configured through `typedoc.json` and `tsconfig.typedoc.json`. Coverage is configured in `electron.vite.config.ts` with the Istanbul provider and text, HTML, and LCOV reporters.
