/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import react from "eslint-plugin-react/configs/recommended.js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import { dirname } from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
	{
		ignores: [
			"node_modules/",
			".github/",
			"dist/",
			".eslintignore",
			"LICENSE",
			"*.lock",
			".yarn/*",
			"eslint.config.js",
			"vite.config.ts",
			"cypress/videos",
			"cypress/screenshots",
			"*.*js*",
		],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylistic,
	...tseslint.configs.strict,
	jsxA11y.flatConfigs.recommended,
	{
		name: "default config",
		files: ["**/*.{js,ts,tsx}", "custom-types.d.ts", "vite.config.ts"],
		...react,
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			...react.languageOptions,
			parserOptions: {
				project: true,
				tsconfigRootDir: __dirname,
				ecmaFeatures: {
					jsx: true,
				}
			},
		},
		linterOptions: {
			noInlineConfig: false,
			reportUnusedDisableDirectives: "error",
		},
		rules: {
			camelcase: ["error", {}],
			curly: ["error", "multi-line"],
			"default-case": "error",
			"default-case-last": "error",
			"dot-notation": "error",
			eqeqeq: "error",
			"no-alert": "error",
			"no-console": "warn",
			"no-delete-var": "warn",
			"no-duplicate-imports": "error",
			"no-empty": "error",
			"no-empty-function": "warn",
			"no-fallthrough": "off",
			"no-inline-comments": "error",
			"no-lonely-if": "error",
			"no-multi-assign": "warn",
			"no-unreachable-loop": "warn",
			"no-use-before-define": "error",
			"no-useless-assignment": "warn",
			"no-useless-catch": "warn",
			"no-var": "warn",
			"prefer-arrow-callback": "error",
			"prefer-const": "error",
			"require-await": "error",
			"vars-on-top": "error",
			"react/prop-types": "off",
			"react/destructuring-assignment": "error",
			"react/jsx-uses-react": "off",
			"react/no-access-state-in-setstate": "warn",
			"react/no-danger": "error",
			"react/no-deprecated": "error",
			"react/no-did-mount-set-state": "warn",
			"react/no-did-update-set-state": "warn",
			"react/no-will-update-set-state": "warn",
			"react/no-direct-mutation-state": "error",
			"react/no-find-dom-node": "error",
			"react/no-is-mounted": "error",
			"react/no-redundant-should-component-update": "error",
			"react/no-unsafe": "error",
			"@typescript-eslint/consistent-type-definitions": "off",
			"@typescript-eslint/no-unused-vars": "warn",
		},
	},
	eslintConfigPrettier,
];
