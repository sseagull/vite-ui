# Vite + React + TypeScript + Vitest + ESLint

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Dev Notes

Vite recommends updating eslint when developing a production application:

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`

When switching to this rule-set, TS loses proper typing for the `test/utils.tsx` exports _when importing via alias_. One solution is turning the offending rules off specifically in test files. See this [config option](https://eslint.org/docs/latest/use/configure/configuration-files#how-do-overrides-work).
