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
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      // Trailing commas in functions are allowed only in ES8
      // https://github.com/eslint/eslint/issues/7809
      functions: 'never',
    }],
    'eol-last': 'off',
    'function-paren-newline': ['off'],
    'global-require': 'off',
    'indent': ['error', 2, { SwitchCase: 1 }],
    'implicit-arrow-linebreak': 'off',
    'max-len': [2, 100],
    'no-await-in-loop': 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'error',
    'no-param-reassign': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-return-assign': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'prefer-promise-reject-errors': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'semi': ['error', 'never'],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
}
