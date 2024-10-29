import pluginJs from '@eslint/js'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    languageOptions: { globals: globals.node }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^node:', '^@?\\w'],
            ['^@/lib/const'],
            ['^@/middleware', '^@/routes'],
            ['^@/lib/utils']
          ]
        }
      ],
      'simple-import-sort/exports': 'error',
      'no-console': 'error'
    }
  }
]
