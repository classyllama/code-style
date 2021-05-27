module.exports = {
  root: true,

  globals: {
    $: true,
    jQuery: true,
  },

  env: {
    es6: true,
    commonjs: true,
    browser: true,
    node: true,
  },

  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      impliedStrict: true,
    },
    sourceType: "module",
    allowImportExportEverywhere: true,
  },

  rules: {
    "arrow-body-style": ["warn", "as-needed"],
    "arrow-parens": "off",
    "class-methods-use-this": "off",
    "comma-dangle": ["error", "always-multiline"],
    "consistent-return": "off",
    curly: ["warn", "multi-or-nest"],
    "dot-notation": "warn",
    eqeqeq: ["warn", "smart"],
    "global-require": "off",
    "import/first": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "key-spacing": [
      "warn",
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    "keyword-spacing": [
      "warn",
      {
        before: true,
        after: true,
      },
    ],
    "linebreak-style": ["error", "unix"],
    "max-len": "off",
    "multiline-comment-style": ["warn", "separate-lines"],
    "newline-per-chained-call": [
      "error",
      {
        ignoreChainWithDepth: 3,
      },
    ],
    "no-alert": "off",
    "no-console": "off",
    "no-const-assign": "error",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-extra-parens": "warn",
    "no-lonely-if": "warn",
    "no-mixed-operators": "off",
    "no-multiple-empty-lines": "warn",
    "no-multi-spaces": "warn",
    "no-prototype-builtins": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-return-assign": "off",
    "no-template-curly-in-string": "off",
    "no-underscore-dangle": "off",
    "no-useless-catch": "warn",
    "no-useless-escape": "warn",
    "no-whitespace-before-property": "warn",
    "object-curly-spacing": ["warn", "always"],
    "padded-blocks": ["warn", "never"],
    "prefer-destructuring": "off",
    "prefer-spread": "off",
    "prefer-template": "warn",
    "quote-props": ["warn", "as-needed"],
    quotes: [
      "warn",
      "double",
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    semi: ["error", "always"],
    "space-before-function-paren": "warn",
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": [
      "warn",
      {
        int32Hint: false,
      },
    ],
    "spaced-comment": ["warn", "always"],
    "switch-colon-spacing": "warn",
    yoda: "error",
  },

  extends: ["eslint:recommended", "airbnb/base", "prettier"],
};
