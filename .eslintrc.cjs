module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint', 'import', 'simple-import-sort'],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.{test,spec}.{ts,tsx}',
          '**/__tests__/**/*.{ts,tsx}',
          'storybook/**/*.{ts,tsx,js,jsx}',
          'src/components/**/*.stories.tsx',
          'test/**/*.{ts,tsx,js,jsx}',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'all', arrowParens: 'avoid' },
    ],
    'react-native/no-color-literals': 'off',
    'react-native/no-raw-text': 'off',
    'react/jsx-props-no-spreading': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    'import/resolver': {
      typescript: {},
    },
  },
};
