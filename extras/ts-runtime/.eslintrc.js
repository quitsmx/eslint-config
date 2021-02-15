const noBaseToStringOpts = {
  ignoredTypeNames: ['RegExp', 'Error', 'TypeError', 'URL'],
}

const restrictTemplateExpressionsOpts = {
  allowNumber: true,
  allowBoolean: true,
  allowAny: true,
  allowNullish: true,
}

/*
  Rules that requires runtime info from the TS compiler
*/
module.exports = {
  rules: {
    'require-await': 0,

    '@typescript-eslint/await-thenable': 1,
    '@typescript-eslint/dot-notation': 1,
    '@typescript-eslint/no-base-to-string': [2, noBaseToStringOpts],
    '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/no-for-in-array': 1,
    '@typescript-eslint/no-implied-eval': 2,
    '@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: false }],
    '@typescript-eslint/no-throw-literal': 2,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
    '@typescript-eslint/no-unnecessary-condition': 1,
    '@typescript-eslint/no-unnecessary-qualifier': 2,
    '@typescript-eslint/no-unnecessary-type-arguments': 2,
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-call': 1,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-return': 1,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/non-nullable-type-assertion-style': 1,
    '@typescript-eslint/prefer-includes': 1,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/prefer-readonly-parameter-types': 1,
    '@typescript-eslint/prefer-readonly': 1,
    '@typescript-eslint/prefer-reduce-type-parameter': 1,
    '@typescript-eslint/prefer-regexp-exec': 1,
    '@typescript-eslint/prefer-string-starts-ends-with': 1,
    '@typescript-eslint/promise-function-async': 1,
    '@typescript-eslint/require-array-sort-compare': 2,
    '@typescript-eslint/require-await': 1,
    '@typescript-eslint/restrict-plus-operands': 1,
    '@typescript-eslint/restrict-template-expressions': [0, restrictTemplateExpressionsOpts],
    '@typescript-eslint/return-await': 2,
    '@typescript-eslint/strict-boolean-expressions': 1,
    '@typescript-eslint/switch-exhaustiveness-check': 1,
    '@typescript-eslint/unbound-method': 1,
  },
}
