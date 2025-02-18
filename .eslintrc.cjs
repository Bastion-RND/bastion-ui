module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['airbnb', 'airbnb-typescript', 'prettier', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  ignorePatterns: [
    'build/*',
    'android/*',
    'dist/*',
    'vite.config.ts',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    project: './tsconfig.eslint.json',
  },
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'prettier/prettier': 'off',
    'react/no-unescaped-entities': 0,
    'react/jsx-props-no-spreading': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 0,
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'max-len': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
