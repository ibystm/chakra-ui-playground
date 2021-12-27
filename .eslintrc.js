module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "jest"],
  rules: {
    "no-control-regex": 0,
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off", // Reactのimportがなくてもjsxが使用できるようになる。
    "react-hooks/exhaustive-deps": "warn", // hooksのdeps漏れをwarnに
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSEnumDeclaration",
        message: "Don't declare enums",
      },
    ],
  },
};
