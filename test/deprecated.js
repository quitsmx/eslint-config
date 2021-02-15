// @ts-check
const path = require('path')
const eslint = require('eslint')

/**
 * @typedef {{ meta?: { deprecated?: boolean, [k: string]: any } }} Rule
 * @typedef {{ [k: string]: Rule }} RuleCollection
 */

/** @type {Map<string,Rule>} */
const eslintRules = require('eslint/lib/rules')

const nodeRules = require('eslint-plugin-node/lib').rules
const jsxA11yRules = require('eslint-plugin-jsx-a11y').rules
const promiseRules = require('eslint-plugin-promise').rules
const reactRules = require('eslint-plugin-react').rules
const reactHooksRules = require('eslint-plugin-react-hooks').rules
const unicornRules = require('eslint-plugin-unicorn').rules

/** @type {string[]} */
const deprecatedRules = []

/**
 * @param {Map<string,Rule>} m
 */
const mapToDict = m => {
  /** @type {RuleCollection} */
  const out = {}
  m.forEach((rule, name) => {
    out[name] = rule
  })
  return out
}

/**
 *
 * @param {string} prefix
 * @param {RuleCollection} rules
 */
const addToDepRules = (prefix, rules) => {
  Object.keys(rules).forEach(name => {
    const rule = rules[name]
    if (rule.meta && rule.meta.deprecated) {
      deprecatedRules.push(prefix + name)
    }
  })
}

addToDepRules('', mapToDict(eslintRules))
addToDepRules('node/', nodeRules)
addToDepRules('jsx-a11y/', jsxA11yRules)
addToDepRules('promise/', promiseRules)
addToDepRules('react/', reactRules)
addToDepRules('react-hooks/', reactHooksRules)
addToDepRules('unicorn/', unicornRules)

const filepath = path.resolve('./test/fixtures/preact.tsx')

const cliEngine = new eslint.ESLint({
  extensions: ['js', 'tsx'],
})

cliEngine
  .calculateConfigForFile(filepath)
  .then(conf => {
    /** @type {{[k: string]: any}} */
    const rules = conf.rules
    const found = deprecatedRules.filter(name => !!rules[name])

    if (found.length) {
      console.error(`\nDeprecated rules found:\n${found.join('\n')}\n`)
      process.exitCode = 1
    } else {
      console.log('\nOK, no deprecated rules.\n')
    }
  })
  .catch(err => {
    console.error(err)
    process.exitCode = 2
  })
