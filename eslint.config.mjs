import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import storybook from "eslint-plugin-storybook";

export default defineConfig([
  ...nextVitals,
  ...storybook.configs["flat/recommended"],
  {
    rules: {
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "storybook-static/**",
    "next-env.d.ts",
  ]),
]);
