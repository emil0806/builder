module.exports = {
  root: true,
  env: {
    es2023: true,
    jest: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
    project: undefined, // not using project tsconfig for speed
  },
  plugins: ["react", "react-hooks", "react-native", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off", // React 17+
    "react-native/no-inline-styles": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  ignorePatterns: ["node_modules/", "dist/", "build/"],
};
