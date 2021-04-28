/* es--lint prettierx/options:[2,{printWidth:120}] */

const { builtinModules } = require('module')
const { ON, OFF, WARN, ecmaVersion, esEnvironment } = require('../constants')
const restrictedGlobals = require('./restricted-globals')

/** @type {RuleEntry} */
const noRestrictedGlobalsRule = [ON, ...restrictedGlobals]

/**
 * `sort-imports`
 */
const sortImportsOpts = {
  ignoreCase: true,
  ignoreDeclarationSort: true,
  ignoreMemberSort: false,
}

/**
 * `spaced-comment`
 */
const spacedCommentsOpts = {
  block: {
    exceptions: ['*'],
    markers: [
      '*package',
      '!',
      ',',
      ':',
      '::',
      'flow-include',
      '#__PURE__',
      '#__INLINE__',
      '#__NOINLINE__',
    ],
    balanced: true,
  },
  line: {
    exceptions: ['-', '='],
    markers: ['*package', '!', '/', ',', '=', '#region', '#endregion', '#'],
  },
}

/**
 * `no-unused-expressions` (core)
 * `@typescript-eslint/no-unused-expressions`
 */
const noUnusedExpressionsOpts = {
  allowShortCircuit: true,
  allowTaggedTemplates: true,
  enforceForJSX: true,
}

/**
 * `@typescript-eslint/consistent-type-assertions`
 */
const tsConsistentTypeAssertionsOpts = {
  assertionStyle: 'as',
  objectLiteralTypeAssertions: 'allow-as-parameter',
}

/**
 * `@typescript-eslint/member-delimiter-style`
 */
const tsMemberDelimiterStyleOpts = {
  multiline: {
    delimiter: 'none',
  },
  singleline: {
    requireLast: false,
  },
}

/**
 * `@typescript-eslint/no-use-before-define`
 */
const tsNoUseBeforeDefineOpts = {
  classes: true,
  enums: true,
  functions: false,
  typedefs: false,
  variables: false,
}

/**
 * `promise/catch-or-return`
 */
const promiseCatchOrReturnOpts = {
  allowThen: true,
  terminationMethod: ['catch', 'finally'],
}

/**
 * `simple-import-sort/imports`
 * 1. nodeJS built-in modules
 * 2. External packages, react/preact first
 * 3. Side effects & styles
 * 4. From aliased locations
 * 5. From parent and current directories
 * 6. Typings:
 *    - react/preact
 *    - external
 *    - aliased
 *    - parent and current
 */
const simpleImportSortImportsOpts = {
  groups: [
    // 1
    [`^(node:)?(${builtinModules.join('|')})(/|$)`],
    // 2
    ['^p?react', '^@?\\w'],
    // 3
    ['^\\u0000', '^.+\\.(s?css|less|styl)$'],
    // 4
    ['^~/'],
    // 5
    ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
    // 6
    ['^p?react', '^[^.~]', '^~', '^\\.\\.', ''].map(s => `${s}.*\\u0000$`),
  ],
}

/**
 * `unicorn/numeric-separators-style`
 * Enforce the style of numeric separators for decimal and binaries
 */
const unicornNumericSeparatorsStyleOpts = {
  onlyIfContainsSeparator: true,
  binary: {
    onlyIfContainsSeparator: false,
    minimumDigits: 5,
    groupLength: 4,
  },
}

// =============================================================================
//  Base Config
// =============================================================================

/**
 * @type {BaseConf}
 */
module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },

  env: {
    ...esEnvironment,
    'commonjs': true,
    'shared-node-browser': true,
  },

  plugins: [
    '@typescript-eslint',
    'compat',
    'prettierx',
    'promise',
    'simple-import-sort',
    'unicorn',
  ],

  rules: {
    'arrow-body-style': OFF,
    'camelcase': OFF,
    'complexity': [WARN, 10],
    'default-case': [WARN, { commentPattern: '^no default$' }],
    'default-param-last': ON,
    'for-direction': ON,
    'getter-return': ON,
    'max-depth': WARN,
    'max-params': [ON, 4],
    'no-alert': ON,
    'no-await-in-loop': ON,
    'no-confusing-arrow': [ON, { allowParens: false }],
    'no-constructor-return': ON,
    'no-div-regex': ON,
    'no-dupe-else-if': ON,
    'no-duplicate-imports': ON,
    'no-else-return': ON,
    'no-extra-label': ON,
    'no-implicit-globals': ON,
    'no-lonely-if': ON,
    'no-loop-func': ON,
    'no-prototype-builtins': WARN,
    'no-restricted-globals': noRestrictedGlobalsRule,
    'no-script-url': ON,
    'no-setter-return': ON,
    'no-shadow': ON,
    'no-tabs': [ON, { allowIndentationTabs: true }],
    'no-unused-expressions': [ON, noUnusedExpressionsOpts],
    'no-unused-labels': ON,
    'no-use-before-define': OFF,
    'no-useless-concat': ON,
    'no-void': [ON, { allowAsStatement: true }],
    'prefer-numeric-literals': ON,
    'prefer-spread': ON,
    'radix': ON,
    'require-atomic-updates': ON,
    'require-yield': ON,
    'sort-imports': [WARN, sortImportsOpts],
    'spaced-comment': [ON, 'always', spacedCommentsOpts],

    '@typescript-eslint/naming-convention': [
      WARN,
      {
        selector: ['typeLike', 'enum'],
        format: ['PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'allow',
      },
      {
        selector: ['function', 'method'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: ['accessor', 'classMethod', 'classProperty', 'parameterProperty'],
        format: ['camelCase'],
        modifiers: ['private'],
        leadingUnderscore: 'require',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'classMethod',
        format: null,
        filter: { regex: '^UNSAFE_[a-z]', match: true },
      },
    ],

    /**
     * Workaround for a @typescript-eslint/parser bug with React
     * @see https://github.com/typescript-eslint/typescript-eslint/issues/2540
     */
    '@typescript-eslint/no-use-before-define': [ON, tsNoUseBeforeDefineOpts],

    'compat/compat': WARN,

    'prettierx/options': WARN,

    'promise/catch-or-return': [ON, promiseCatchOrReturnOpts],
    'promise/no-callback-in-promise': WARN,
    'promise/no-nesting': WARN,
    'promise/no-new-statics': ON,
    'promise/no-return-in-finally': ON,
    'promise/no-return-wrap': [ON, { allowReject: true }],
    'promise/param-names': ON,
    'promise/valid-params': ON,

    'simple-import-sort/exports': WARN,
    'simple-import-sort/imports': [ON, simpleImportSortImportsOpts],

    'unicorn/better-regex': WARN,
    'unicorn/catch-error-name': [ON, { name: 'err', caughtErrorsIgnorePattern: '^_' }],
    'unicorn/custom-error-definition': ON,
    'unicorn/error-message': ON,
    'unicorn/escape-case': WARN,
    'unicorn/import-index': WARN,
    'unicorn/new-for-builtins': ON,
    'unicorn/no-array-push-push': WARN,
    'unicorn/no-console-spaces': WARN,
    'unicorn/no-instanceof-array': ON,
    'unicorn/no-new-buffer': ON,
    'unicorn/no-object-as-default-parameter': WARN,
    'unicorn/no-process-exit': ON,
    'unicorn/no-unreadable-array-destructuring': WARN,
    'unicorn/no-unsafe-regex': WARN,
    'unicorn/no-unused-properties': WARN,
    'unicorn/prefer-add-event-listener': WARN,
    'unicorn/prefer-array-find': WARN,
    'unicorn/prefer-array-flat-map': WARN,
    'unicorn/prefer-array-index-of': WARN,
    'unicorn/prefer-array-some': WARN,
    'unicorn/prefer-date-now': WARN,
    'unicorn/prefer-dom-node-append': WARN,
    'unicorn/prefer-dom-node-dataset': WARN,
    'unicorn/prefer-dom-node-remove': WARN,
    'unicorn/prefer-dom-node-text-content': ON,
    'unicorn/prefer-includes': ON,
    'unicorn/prefer-keyboard-event-key': WARN,
    'unicorn/prefer-modern-dom-apis': WARN,
    'unicorn/prefer-negative-index': ON,
    'unicorn/prefer-optional-catch-binding': WARN,
    'unicorn/prefer-regexp-test': WARN,
    'unicorn/prefer-string-starts-ends-with': WARN,
    'unicorn/prefer-string-trim-start-end': WARN,
    'unicorn/prefer-switch': WARN,
    'unicorn/prefer-ternary': [WARN, 'only-single-line'],
    'unicorn/prefer-type-error': ON,
    'unicorn/throw-new-error': ON,
  },

  /*
    project://node_modules/@typescript-eslint/eslint-plugin/lib/configs/recommended.json
  */
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'default-param-last': OFF,
        'no-array-constructor': OFF,
        'no-dupe-class-members': OFF, // to allow Ctor overloads
        'no-duplicate-imports': OFF,
        'no-empty-function': OFF,
        'no-redeclare': OFF, // avoid conflicts when exporting function+namespace
        'no-undef': OFF, // handled by TS
        'no-unused-expressions': OFF,
        'no-unused-vars': OFF, // handled by TS `noUnusedLocals`
        'no-use-before-define': OFF,
        'no-shadow': OFF,

        'import/export': OFF,
        'import/named': OFF,
        'import/no-named-as-default': OFF,

        '@typescript-eslint/adjacent-overload-signatures': ON,
        '@typescript-eslint/array-type': [ON, { default: 'array' }],
        '@typescript-eslint/ban-types': ON,
        '@typescript-eslint/consistent-type-assertions': [
          ON,
          tsConsistentTypeAssertionsOpts,
        ],
        '@typescript-eslint/default-param-last': ON,
        '@typescript-eslint/member-delimiter-style': [ON, tsMemberDelimiterStyleOpts],
        '@typescript-eslint/no-array-constructor': ON,
        '@typescript-eslint/no-dupe-class-members': ON,
        '@typescript-eslint/no-duplicate-imports': ON,
        '@typescript-eslint/no-empty-function': WARN,
        '@typescript-eslint/no-inferrable-types': ON,
        '@typescript-eslint/no-misused-new': ON,
        '@typescript-eslint/no-parameter-properties': ON,
        '@typescript-eslint/no-redeclare': ON,
        '@typescript-eslint/no-require-imports': ON,
        '@typescript-eslint/no-shadow': WARN,
        '@typescript-eslint/no-unused-expressions': [ON, noUnusedExpressionsOpts],
        '@typescript-eslint/no-var-requires': ON,
        '@typescript-eslint/prefer-namespace-keyword': ON,
        'unicorn/numeric-separators-style': [WARN, unicornNumericSeparatorsStyleOpts],
      },
    },
  ],
}
