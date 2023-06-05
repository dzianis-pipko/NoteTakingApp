module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@react-native-community',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    'jest/globals': true,
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'prettier/prettier': 'warn',
    'no-trailing-spaces': 'warn',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useUpdateEffect)',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': ['error'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'import/ignore': ['react-native-reanimated'],
  },
};
