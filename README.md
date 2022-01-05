# SonarLint, ESLint, and Prettier Setup
Classy Llama's standard code style standards configuration for JS/TS development.
It is highly suggested that each project uses a linter to standardize code style within a project. It requires minimal effort to both set up and use, but it has a lot of benefits including catching potential errors.

## Terminology
Each ESLint rule has three potential levels of issues (read the official documentation [here](https://eslint.org/docs/user-guide/configuring/rules)):
- `"off"` or `0` - turn the rule off.
- `"warn"` or `1` - turn the rule on as a warning (doesn't affect exit code).
- `"error"` or `2` - turn the rule on as an error (exit code is 1 when triggered).

Many rules have additional configurations to further define the expected behavior and code style for a particular rule. Review the documentation for each rule to match the desired style.

## What it does
* Lints JavaScript based on the latest standards
* Fixes issues and formatting errors with Prettier
* Lints + Fixes inside of html script tags
* Lints + Fixes React via eslint-config-airbnb
* You can see all the [rules here](https://github.com/wesbos/eslint-config-wesbos/blob/master/.eslintrc.js).

## Installation
1. If you don't already have a `package.json` file, create one with `npm init`.
2. Then we need to install everything needed by the config:
	```
	npx install-peerdeps --dev eslint-config-wesbos
	```
3. You can see in your package.json there are now a big list of devDependencies.
4. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:
	```json
	{
		"extends": ["wesbos"]
	}
	```
	For TypeScript projects, use `wesbos/typescript`.
	```json
	{
		"extends": ["wesbos/typescript"]
	}
	```
	TypeScript users will also need a `tsconfig.json` file in their project. An empty object (`{}`) will do if this is a new project.
5. You can add two scripts to your package.json to lint and/or fix:
	```json
	"scripts": {
		"lint": "eslint .",
		"lint:fix": "eslint . --fix"
	},
	```
6. Now you can manually lint your code by running `npm run lint` (or `yarn lint`) and fix all fixable issues with `npm run lint:fix` (or `yarn lint:fix`). You probably want your editor to do this though.

## Settings
If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"` while [prettier options](https://prettier.io/docs/en/options.html) go under `"prettier/prettier"`. Note that prettier rules overwrite anything in the config (trailing comma, single quote, etc.), so you'll need to include those as well.
```js
{
	"extends": ["wesbos"],
	"rules": {
		"no-console": "error",
		"prettier/prettier": [
			"error",
			{
				"bracketSpacing": true,
				"printWidth": 120,
				"semi": false,
				"singleQuote": true,
				"tabWidth": 4,
				"trailingComma": "all",
				"useTabs": true,
			},
		],
	}
}
```

## VS Code Setup
1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:
	```js
	// These are all my auto-save configs.
	"editor.formatOnSave": true,
	// Turn it off for JS and JSX, we will do this via eslint.
	"[javascript]": {
		"editor.formatOnSave": false
	},
	"[javascriptreact]": {
		"editor.formatOnSave": false
	},
	// Show eslint icon at bottom toolbar.
	"eslint.alwaysShowStatus": true,
	// Tell the ESLint plugin to run on save.
	"editor.codeActionsOnSave": {
		"source.fixAll": true
	}
	```
   1. These settings can also be saved to `.vscode/settings.json`. This allows sharing the settings with other developers on the project.
3. After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.
4. Finally, you may need to restart VS code.

## JetBrains Products (IntelliJ IDEA, WebStorm, RubyMine, PyCharm, PhpStorm, etc) Setup
1. If you have previously configured ESLint to run via a File Watcher, [turn that off.](https://www.jetbrains.com/help/idea/using-file-watchers.html#enableFileWatcher)
2. Open ESLint configuration by going to `Edit > Preferences > Languages & Frameworks > Code Quality Tools > ESLint` (optionally just search settings for `"eslint"`)
   1. Select `"Automatic ESLint Configuration`"
   2. Check `"Run eslint --fix on save"`
3. Ensure the Prettier plugin is disabled if installed.
   1. Open Prettier configuration by going to `Edit > Preferences > Languages & Frameworks > Code Quality Tools > Prettier` (optionally just search settings for `"prettier"`)
   2. Uncheck both `"On code reformat`" and `"On save`"
   3. *Optional BUT IMPORTANT:* If you have the Prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already.
   4. Make sure the `"Run for files`" glob does not include `js,ts,jsx,tsx`.
   5. An example glob for styles, config, and markdown. `{**/*,*}.{yml,css,sass,md}`

## Typescript Setup
Same instructions as above, just make sure you extend `wesbos/typescript` instead of just `wesbos`.

## Yarn Setup
It should just work, but if they aren't showing up in your package.json, try `npx install-peerdeps --dev eslint-config-wesbos -Y`

## Troubleshooting
If you experience issues with ESLint not formatting the code or you receive a `Parsing error: Cannot find module '@babel/preset-react` error message then you need to check that you opened the folder where you installed and configured ESLint directly. The correct folder to open will be the one where you installed the `eslint-config-wesbos` npm package and where you created the `.eslintrc` file.

Opening a parent folder or child folder in your code editor will cause ESLint to fail in finding the ESLint npm packages and the formatting won't work.

```sh
username
  |
  sites
    |
    project # <- Open this folder directly in your code editor
      .eslintrc
      package.json
      node_modules/
      src/
```
