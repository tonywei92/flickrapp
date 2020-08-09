module.exports = {
  env: {
    'cypress/globals': true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
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
  plugins: ['cypress', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      { declaration: false, assignment: false },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
