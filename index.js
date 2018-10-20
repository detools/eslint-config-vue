module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint-config-airbnb-base',
    'plugin:vue/essential',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-param-reassign': 'off',
  },
}
