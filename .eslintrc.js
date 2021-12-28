module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    webextensions: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'vue/attributes-order': ['error', { alphabetical: true }],
    'vue/multi-word-component-names': 'off',
  },
  parserOptions: {
    'sourceType': 'module',
    'ecmaVersion': 8,
  },
}
