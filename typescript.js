module.exports = {
	globals: {
		React: true,
		JSX: true,
	},

	extends: [
		'plugin:@typescript-eslint/recommended',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'./.eslintrc.js', // Layer in all the JS Rules
	],

	plugins: ['@typescript-eslint', 'unused-imports'],

	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},

	rules: {
		'@typescript-eslint/no-explicit-any': 'off', // This allows using async function on addEventListener().
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/comma-dangle': ['off'],
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false,
			},
		],
		'@typescript-eslint/no-redeclare': [
			'warn',
			{
				ignoreDeclarationMerge: true,
			},
		],
		'no-redeclare': 'off',
	},
}
