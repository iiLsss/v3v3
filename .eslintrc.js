module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "prettier",
    "@vue/eslint-config-prettier"
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021
  },
  rules: {
    "no-unused-vars": "off",
    "vue/no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        tabWidth: 2,
        indent: 2,
        semi: false,
        trailingComma: "none",
        endOfLine: "auto"
      }
    ],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["Home", "Profile"]
      }
    ]
  },
  globals: {
    defineProps: "readonly"
  }
}
