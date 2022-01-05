module.exports = {
	env: {
		browser: true,
		node: true,
		jquery: true,
		jest: true,
	},

	settings: {
		react: {
			version: 'detect',
		},
	},

	extends: ['airbnb', 'prettier'],

	plugins: ['html', 'prettier', 'react-hooks'],

	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,
		babelOptions: {
			presets: ['@babel/preset-react'],
		},
	},

	rules: {
		'array-bracket-spacing': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': 'off',
		camelcase: 'off',
		'class-methods-use-this': 'off', // _document.tsx use render method without `this` keyword
		'comma-dangle': ['error', 'always-multiline'],
		'consistent-return': 'off',
		curly: ['warn', 'multi-or-nest'],
		'dot-notation': 'warn',
		eqeqeq: ['warn', 'smart'],
		'func-names': 'off',
		'global-require': 'off',
		'import/extensions': [
			'error',
			'always',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/first': 'off',
		'import/no-default-export': 'off',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		'import/no-webpack-loader-syntax': 'off',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal'],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['react'],
				'newlines-between': 'never',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
		indent: [
			'error',
			'tab',
			{
				flatTernaryExpressions: false,
				offsetTernaryExpressions: true,
				MemberExpression: 1,
				SwitchCase: 1,
				ignoredNodes: ['ConditionalExpression'],
			},
		],
		'jsx-a11y/accessible-emoji': 'off',
		'jsx-a11y/anchor-is-valid': 'off', // Next.js use his own internal link system; remove this line and use the commented rule if not using Next.js.
		// 'jsx-a11y/anchor-is-valid': [
		// 	'warn',
		// 	{
		// 		aspects: ['invalidHref'],
		// 	},
		// ],
		'jsx-a11y/href-no-hash': 'off',
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				assert: 'either',
			},
		],
		'key-spacing': [
			'warn',
			{
				beforeColon: false,
				afterColon: true,
			},
		],
		'keyword-spacing': [
			'warn',
			{
				before: true,
				after: true,
			},
		],
		'linebreak-style': ['error', 'unix'],
		'max-len': 'off',
		'multiline-comment-style': ['warn', 'separate-lines'],
		'newline-per-chained-call': [
			'error',
			{
				ignoreChainWithDepth: 3,
			},
		],
		'no-alert': 'off',
		'no-await-in-loop': 'warning',
		'no-console': 'off',
		'no-const-assign': 'error',
		'no-continue': 'off',
		'no-debugger': 'off',
		'no-extra-parens': 'warn',
		'no-lonely-if': 'warn',
		'no-mixed-operators': 'off',
		'no-multiple-empty-lines': 'warn',
		'no-multi-spaces': 'warn',
		'no-prototype-builtins': 'off',
		'no-plusplus': 'off',
		'no-param-reassign': [
			'error',
			{
				props: false,
			},
		],
		'no-restricted-syntax': [
			'error',
			'ForInStatement',
			'LabeledStatement',
			'WithStatement',
		],
		'no-return-assign': ['error', 'except-parens'],
		'no-shadow': [
			'error',
			{
				hoist: 'all',
				allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
			},
		],
		'no-underscore-dangle': 'off',
		'no-unused-expressions': [
			'error',
			{
				allowTaggedTemplates: true,
			},
		],
		'no-unused-vars': [
			'warning',
			{
				ignoreRestSiblings: true,
				argsIgnorePattern: 'res|next|^err',
			},
		],
		'no-useless-catch': 'warn',
		'no-useless-escape': 'warn',
		'no-whitespace-before-property': 'warn',
		'object-curly-spacing': ['warn', 'always'],
		'padded-blocks': ['warn', 'never'],
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
			},
		],
		'prefer-destructuring': 'off',
		'prefer-spread': 'off',
		'prefer-template': 'warn',
		'prettier/prettier': [
			'error',
			{
				bracketSpacing: true,
				printWidth: 120,
				semi: false,
				singleQuote: true,
				tabWidth: 4,
				trailingComma: "all",
				useTabs: true
			},
		],
		quotes: [
			'warn',
			'single',
			{
				allowTemplateLiterals: true,
				avoidEscape: true,
			},
		],
		radix: 'off',
		'react/display-name': 'warning',
		'react/forbid-prop-types': 'off',
		'react/function-component-definition': 'off',
		'react/jsx-filename-extension': [
			'warning',
			{
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
			},
		],
		'react/jsx-props-no-spreading': 'off',
		'react/no-array-index-key': 'off',
		'react/no-unescaped-entities': 'off',
		'react/prefer-stateless-function': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		semi: ['error', 'never'],
		'space-before-function-paren': 'off',
		'space-in-parens': ['warn', 'never'],
		'space-infix-ops': [
			'warn',
			{
				int32Hint: false,
			},
		],
		'spaced-comment': ['warn', 'always'],
		'switch-colon-spacing': 'warn',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		yoda: 'error',
	},
}
