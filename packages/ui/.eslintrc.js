/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@ruru/eslint-config/react-internal.js", 'custom/next'],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  extends: "next/core-web-vitals",
  rules: {
    // for the import hacks
    '@typescript-eslint/consistent-type-imports': 'off',
    // some arrays like link items won't be changed
    'react/no-array-index-key': 'off',
  },
};