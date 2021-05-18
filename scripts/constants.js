/**
 * This rules, as defined in rules-base.js, can be safely used with prettierx.
 * @type {Set<string>}
 */
const allowedRules = new Set(['curly', 'no-tabs'])

/**
 * Additional rules to disable
 */
const rulesToDisable = ['arrow-body-style', 'prefer-arrow-callback']

/**
 * Rules to removed just before writing the eslintrc.
 */
const rulesToRemove = [
  // Deprecated rules (used by StandardJS), to be removed.
  'indent-legacy',
  'no-spaced-func',
  'react/jsx-space-before-closing',

  // Allow a few things that I use in development
  'no-debugger',
  'react/jsx-curly-brace-presence',
  'react/jsx-handler-names',
]

/**
 * This rules are override by @quitsmx/eslint-config
 * @type {Set<string>}
 */
const knownOverrideRules = new Set([
  'no-misleading-character-class',
  'no-prototype-builtins',
  'no-tabs',
  'no-unused-expressions',
  'no-void',
  'spaced-comment',
  // These are replace by @typescript-eslint rules
  'camelcase',
  'no-use-before-define',
  // plugins
  'node/no-deprecated-api',
  'react/jsx-uses-react',
  'react/no-unescaped-entities',
])

const ecmaVersion = 2020

/**
 * @see project://node_modules/@eslint/eslintrc/conf/environments.js
 * @see https://github.com/sindresorhus/globals/blob/main/globals.json
 */
const esEnvironment = {
  es2020: true,
}

const ON = 'error'
const OFF = 'off'
const WARN = 'warn'

module.exports = {
  allowedRules,
  rulesToDisable,
  rulesToRemove,
  knownOverrideRules,

  ecmaVersion,
  esEnvironment,

  ON,
  OFF,
  WARN,
}
