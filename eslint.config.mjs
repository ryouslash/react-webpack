import globals from "globals";
import pluginJs from "@eslint/js";
import configPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";

export default [
  // JS / JSX 対象ファイル
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
    },
  },
  // JS全体の基本ルール
  pluginJs.configs.recommended,
  // Prettierとの競合を避ける
  configPrettier,
];
