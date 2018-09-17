module.exports = {
  'extends': [
    '@ys/eslint-config-strict',
    "plugin:react/recommended"
  ],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '15.0',
      flowVersion: '0.80.0'
    }
  },
  globals: {
    "__DEV__": true
  }
}
