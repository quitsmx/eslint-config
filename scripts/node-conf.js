const stdConf = require('eslint-config-standard')
const nodeConf = require('./base/conf-base-node')
const excludeRules = require('./base/exclude-rules')
const mergeRules = require('./lib/merge-rules')

/**
 * Sort the rules, put core rules first
 * @template {Dict} T
 * @param {T} obj Rules to sort
 * @returns {T}
 */
const sortProps = obj =>
  Object.keys(obj)
    .sort()
    .reduce((o, k) => {
      o[k] = obj[k]
      return o
    }, /** @type {*} */ ({}))

/**
 * @param {string} name
 */
const filterFn = name => name.startsWith('node/')

const rules = sortProps(mergeRules(stdConf.rules, nodeConf.rules, filterFn))

excludeRules.forEach(name => {
  if (rules[name]) {
    rules[name] = 'off'
  }
})

/**
 * @type {BaseConf}
 */
module.exports = { ...nodeConf, rules }
