// @ts-check
const stdConf = require('eslint-config-standard')
const customConf = require('./base/conf-base')
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
    .map(r => (r.includes('/') ? 'zzz' + r : r))
    .sort()
    .map(r => (r.includes('/') ? r.substr(3) : r))
    .reduce((o, k) => {
      o[k] = obj[k]
      return o
    }, /** @type {*} */ ({}))

/**
 * @param {string} name
 */
const filterFn = name => !name.includes('/')

const rules = sortProps(mergeRules(stdConf.rules, customConf.rules, filterFn))

excludeRules.forEach(name => {
  if (rules[name]) {
    delete rules[name]
  }
})

/**
 * A los plugins incluidos en la configuración agregar reglas
 * de los otros plugins no presentes, excepto node y los de react.
 */
const skipRe = /^(node|react)\//

/** @type {Rules} */
const extras = {}

/**
 * Agrega en "off" las reglas prettier no usadas.
 */
excludeRules.forEach(r => {
  const skip = rules[r] || skipRe.test(r)
  if (!skip) extras[r] = 'off'
})

Object.assign(rules, sortProps(extras))

/**
 * @type {BaseConf}
 */
module.exports = { ...customConf, rules }
