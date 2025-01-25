import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-var': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'no-unused-vars': 'warn',
      'eqeqeq': ['error', 'always'],
      'space-infix-ops': 'error',
      'no-console': 'warn',
      'curly': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
    },
  },
  pluginJs.configs.recommended,
];
