const prettierRules = require('./prettier.config');

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
		// To use props&emit without declaring defineProps,defineEmits in each template
		'vue/setup-compiler-macros': true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		parser: '@babel/eslint-parser',
	},
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
	rules: {
		'prettier/prettier': ['error', prettierRules],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
};
