module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "eslint-config-prettier",
  ],

  plugins: ["eslint-plugin-prettier"],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    "no-console": 2,
    "no-unused-vars": [
      2,
      {
        vars: "all",
      },
    ],
    eqeqeq: [2, "always"],
    "semi-style": [2, "last"],
    "comma-style": [2, "last"],
    "nonblock-statement-body-position": [2, "below"],
    "multiline-ternary": [2, "always-multiline"],
    "no-nested-ternary": 2,
    "line-comment-position": [
      2,
      {
        position: "above",
      },
    ],
    "object-shorthand": [
      2,
      "always",
      {
        avoidExplicitReturnArrows: true,
      },
    ],
    curly: ["error", "multi", "consistent"],
    "space-before-function-paren": [
      2,
      {
        anonymous: "always",
        named: "always",
        asyncArrow: "always",
      },
    ],
    "vue/require-default-prop": 0,
  },
};

/**
 * 0 - turn off
 * 1 - warn
 * 2 - error
 */
