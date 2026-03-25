import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
	{
		ignores: [
			"node_modules",
			"main.js",
			"*.config.*",
			"version-bump.mjs"
		]
	},

	js.configs.recommended,
	...tseslint.configs.recommended,

	{
		files: ["**/*.ts"],
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.json"
			},
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		rules: {
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": ["warn"],
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/consistent-type-imports": "warn"
		}
	}
];