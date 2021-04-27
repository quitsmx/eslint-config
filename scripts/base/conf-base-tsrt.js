const { ON, OFF, WARN } = require('../constants')

/**
 * no-base-to-string
 */
const tsNoBaseToStringOpts = {
  ignoredTypeNames: ['Error', 'RegExp', 'TypeError', 'URL'],
}

/**
 * no-confusing-void-expression
 */
const tsNoConfusingVoidExprOpts = {
  ignoreArrowShorthand: true,
}

/**
 * restrict-template-expressions
 */
const tsRestrictTemplateExprOpts = {
  allowNumber: true,
  allowBoolean: true,
  allowAny: true,
  allowNullish: true,
}

/**
 * Rules that requires runtime info from the TS compiler
 * @type {BaseConf}
 */
module.exports = {
  rules: {
    'dot-notation': OFF,
    'no-implied-eval': OFF,
    'no-return-await': OFF,
    'no-throw-literal': OFF,
    'require-await': OFF,

    /*
    '@typescript-eslint/no-unnecessary-condition': WARN,
    '@typescript-eslint/no-unsafe-argument': WARN,
    '@typescript-eslint/no-unsafe-assignment': OFF,
    '@typescript-eslint/no-unsafe-member-access': OFF,
    '@typescript-eslint/prefer-nullish-coalescing': OFF,
    '@typescript-eslint/prefer-readonly-parameter-types': WARN,
    '@typescript-eslint/prefer-readonly': WARN,
    '@typescript-eslint/prefer-string-starts-ends-with': WARN,
    '@typescript-eslint/strict-boolean-expressions': WARN,
    '@typescript-eslint/unbound-method': WARN,
    */
    '@typescript-eslint/await-thenable': ON,
    '@typescript-eslint/dot-notation': WARN,
    '@typescript-eslint/no-base-to-string': [WARN, tsNoBaseToStringOpts],
    '@typescript-eslint/no-confusing-void-expression': [WARN, tsNoConfusingVoidExprOpts],
    '@typescript-eslint/no-floating-promises': ON,
    '@typescript-eslint/no-for-in-array': ON,
    '@typescript-eslint/no-implied-eval': ON,
    '@typescript-eslint/no-misused-promises': ON,
    '@typescript-eslint/no-throw-literal': WARN,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': WARN,
    '@typescript-eslint/no-unnecessary-qualifier': WARN,
    '@typescript-eslint/no-unnecessary-type-arguments': WARN,
    '@typescript-eslint/no-unnecessary-type-assertion': ON,
    '@typescript-eslint/no-unsafe-call': ON,
    '@typescript-eslint/no-unsafe-return': ON,
    '@typescript-eslint/non-nullable-type-assertion-style': WARN,
    '@typescript-eslint/prefer-includes': WARN,
    '@typescript-eslint/prefer-reduce-type-parameter': WARN,
    '@typescript-eslint/prefer-regexp-exec': WARN,
    '@typescript-eslint/promise-function-async': WARN,
    '@typescript-eslint/require-array-sort-compare': ON,
    '@typescript-eslint/require-await': WARN,
    '@typescript-eslint/restrict-plus-operands': WARN,
    '@typescript-eslint/restrict-template-expressions': [OFF, tsRestrictTemplateExprOpts],
    '@typescript-eslint/return-await': WARN,
    '@typescript-eslint/switch-exhaustiveness-check': WARN,
  },
}
