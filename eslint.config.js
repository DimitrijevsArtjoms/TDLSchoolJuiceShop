import js from "@eslint/js";
import * as wdio from "eslint-plugin-wdio";
import globals from "globals";

export default [
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        browser: "readonly",
        $: "readonly",
        $$: "readonly",
        define: "readonly",
        expect: "readonly",
      },
    },
    plugins: {
      wdio,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...wdio.configs.recommended.rules,
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
  {
    ignores: ["node_modules/", "dist/", "build/", "reports/"],
  },
];
