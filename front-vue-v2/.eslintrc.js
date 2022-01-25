module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'linebreak-style': 0,
    'no-trailing-spaces': 0,
    indent: 'off',
    semi: 0,
    'no-unused-vars': 0,
    'space-before-blocks': 0,
    'no-unused-expressions': 0,
    'keyword-spacing': 0,
     'padded-blocks': 0,
     'no-console': 'off',
     'vue/no-unused-components': 0,
     'comma-dangle': 0,
     'no-useless-return': 0,
     'no-underscore-dangle': 0
     
  },
};
