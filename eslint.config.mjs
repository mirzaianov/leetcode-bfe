// Since "package.json" doesn't specify "type": "module", using the .mjs extension for the ESLint config file allows to use ES Module syntax (import/export) directly within it.
// The tsconfig.json with `"module": "NodeNext"` aligns well with an ES Module approach.

// @ts-check Enables type checking for this ESLint config file in VSCode if you have the ESLint extension.
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/**
 * ESLint Flat Configuration
 *
 * This array defines a series of configuration objects.
 * ESLint processes them in order.
 * Each object can specify files it applies to, plugins, rules, language options, etc.
 */
export default [
  // Block 1: Global Ignores
  // Specifies files and directories that ESLint should completely ignore.
  {
    ignores: [
      'node_modules/',
      'dist/',
      '.DS_Store', // Common macOS file
      'eslint.config.mjs', // Ignore the ESLint config file itself from linting
      'coverage/', // Example: if you have a coverage reports directory
      // any other build artifacts or large non-source directories
    ],
  },
  // Block 2: Base Configuration for All Linted Files
  // This configuration applies broadly to JavaScript and TypeScript files
  // unless overridden by more specific configurations later.
  {
    languageOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript features (ES2022+ based on your tsconfig)
      sourceType: 'module', // Assumes your project's source code uses ES modules
      // Globals for common environments (e.g., Node.js, browser) can be defined here if needed.
      // For Node.js projects, you might add:
      // globals: {
      //   ...globals.node, // Requires `npm install --save-dev globals`
      //   ...globals.es2022,
      // }
      // However, for a library/leetcode setup, explicit globals might not be immediately necessary.
    },
    rules: {
      ...js.configs.recommended.rules, // Apply ESLint's recommended base rules (from @eslint/js)
    },
  },
  // Block 3: TypeScript Specific Configurations
  // These settings apply only to .ts (and .tsx if you were to use it) files.
  {
    files: ['**/*.ts'], // Adjust glob patterns as needed
    languageOptions: {
      parser: tsParser, // Use the TypeScript parser
      parserOptions: {
        project: true, // Enable type-aware linting. ESLint will look for tsconfig.json.
        // Alternatively, specify path: ['./tsconfig.json']
        tsconfigRootDir: import.meta.dirname, // Helps ESLint resolve `project` relative to this config file.
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin, // Register the TypeScript ESLint plugin
    },
    rules: {
      // Apply recommended rules from TypeScript-ESLint that require type information
      ...tsPlugin.configs['recommended-type-checked'].rules,
      // Apply stylistic rules from TypeScript-ESLint that require type information
      ...tsPlugin.configs['stylistic-type-checked'].rules,
      // Your custom rule overrides or additions for TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      // Example: '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  // Block 4: Prettier Integration (MUST BE THE LAST CONFIGURATION THAT AFFECTS RULES)
  // This ensures Prettier handles all formatting, and ESLint reports Prettier issues.
  eslintConfigPrettier, // Disables ESLint rules that conflict with Prettier.
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Runs Prettier as an ESLint rule and uses .prettierrc.json
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    },
  },
];
