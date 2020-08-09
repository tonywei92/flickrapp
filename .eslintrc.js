module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['prettier', 'plugin:react/recommended', 'airbnb'],
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
  plugins: ['react', 'prettier'],
  rules: {
    'trailing-comma': [
      true,
      {
        singleline: 'never',
        multiline: {
          objects: 'always',
          arrays: 'always',
          functions: 'never',
          typeLiterals: 'ignore',
        },
      },
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
