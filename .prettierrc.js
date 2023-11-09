module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  semi: true,
  bracketSameLine: true,
  arrowParens: 'always',
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html'
      }
    }
  ]
};
