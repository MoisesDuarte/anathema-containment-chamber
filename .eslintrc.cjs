module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-airbnb',
  ],
  overrides: [{
    env: {
      node: true,
    },
    files: ['.eslintrc.{js.cjs}'],
    parserOptions: {
      sourceType: 'script',
    },
  }],
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
  },
  plugins: [
    '@typescript-eslint',
    'vue',
  ],
};
