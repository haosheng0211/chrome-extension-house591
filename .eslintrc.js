module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
  },
  parserOptions: {
    'sourceType': 'module',
    'ecmaVersion': 8,
  },
}
