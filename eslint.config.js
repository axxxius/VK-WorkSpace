import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import antfu from '@antfu/eslint-config';

export default antfu(
  {
    react: true,
    typescript: true,
    jsx: true
  },
  {
    name: 'rewrite',
    rules: {
      'style/semi': 'off',
      'style/jsx-one-expression-per-line': 'off',
      'style/member-delimiter-style': 'off',
      'style/jsx-quotes': ['error', 'prefer-single'],
      'style/comma-dangle': 'off',
      'style/arrow-parens': 'off',
      'style/quote-props': 'off',

      'antfu/top-level-function': 'off',
      'antfu/if-newline': 'off',
      'antfu/curly': 'off',

      'test/prefer-lowercase-title': 'off',
      'no-console': 'off',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'off'
    }
  },
  {
    name: 'ignores',
    ignores: ['build/**/*']
  },
  {
    name: 'react',
    plugins: {
      'plugin-react': pluginReact
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'react-refresh/only-export-components': 'off',
      'plugin-react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function'],
          unnamedComponents: 'arrow-function'
        }
      ]
    }
  },
  {
    name: 'imports',
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'sort-imports': 'off',
      'react-refresh/only-export-components': 'off',
      'import/order': 'off',
      'import/extensions': 'off',
      'perfectionist/sort-imports': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^'],
            ['^@'],
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.s?scss$']
          ]
        }
      ]
    }
  },
  {
    name: 'prettier',
    rules: {
      ...eslintConfigPrettier.rules
    }
  }
);
