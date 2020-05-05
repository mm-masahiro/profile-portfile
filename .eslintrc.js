module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "prettier",
    'jquery'
  ],
  rules: {
    "prettier/prettier": "error",
    "func-names": 0
  },
};
