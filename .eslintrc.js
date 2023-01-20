module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin', '@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@open-wc/eslint-config',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true,
      },
    ],
  },
};
