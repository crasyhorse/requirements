import { includeIgnoreFile } from '@eslint/compat'
import js from '@eslint/js'
import type { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-config-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'

const configDirectory = fileURLToPath(new URL('.', import.meta.url))
const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url))
const reactHooksRecommendedRules = reactHooks.configs.recommended.rules as Linter.RulesRecord

export default defineConfig(
  includeIgnoreFile(gitignorePath),
  {
    ignores: [
      'dist',
      'dist-electron',
      'coverage',
      'docs',
      '.features-gen',
      'playwright-report',
      'cucumber-report',
      'test-results'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  prettier,
  {
    files: ['eslint.config.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off'
    }
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: { allowDefaultProject: ['eslint.config.ts', 'playwright.config.ts'] },
        tsconfigRootDir: configDirectory
      }
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/no-empty-function': 'off'
    }
  },
  {
    files: [
      'electron.vite.config.ts',
      'playwright.config.ts',
      'src/main/**/*.ts',
      'src/preload/**/*.ts'
    ],
    languageOptions: {
      globals: {
        __dirname: 'readonly',
        process: 'readonly'
      }
    }
  },
  {
    files: ['src/renderer/**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    languageOptions: {
      globals: {
        document: 'readonly',
        window: 'readonly'
      }
    },
    rules: {
      ...reactHooksRecommendedRules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  }
)
