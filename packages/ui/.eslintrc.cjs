module.exports = {
  // Exclude this file from ESLint's list of included files
  ignorePatterns: [".eslintrc.cjs"],
  plugins: ["@typescript-eslint/eslint-plugin", "eslint-plugin-tsdoc"],
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    // 'tsdoc/syntax': 'warn'
  },
};
