import { defineConfig } from "vite-plus"

export default defineConfig({
  fmt: {
    endOfLine: "lf",
    attributeSortOrder: "alphabetical",
    bracketSpacing: true,
    semi: false,
    singleQuote: false,
    arrowParens: "avoid",
    bracketSameLine: false,
    singleAttributePerLine: true,
    sortTailwindcss: true,
    jsdoc: true,
    sortImports: {
      partitionByNewline: true,
      newlinesBetween: false,
    },
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    options: { typeAware: true, typeCheck: true },
  },
})
