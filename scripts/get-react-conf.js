// @ts-check
const stdJsxConf = require('eslint-config-standard-jsx')
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
    .map(k => k.replace('react/jsx-', 'react/~~~-'))
    .sort()
    .map(k => k.replace('react/~~~-', 'react/jsx-'))
    .reduce((o, k) => {
      o[k] = obj[k]
      return o
    }, /** @type {*} */ ({}))

/**
 * @param {string} name
 */
const filterFn = name => name.startsWith('react/')

/**
 * @param {BaseConf} customConf
 */
const getReactConf = customConf => {
  const rules = sortProps(mergeRules(stdJsxConf.rules, customConf.rules, filterFn))

  excludeRules.forEach(name => {
    if (rules[name]) {
      delete rules[name]
    }
  })

  /**
   * Agrega en "off" las reglas prettier no usadas.
   */
  excludeRules.forEach(r => {
    if (r.startsWith('react/') && !rules[r]) {
      rules[r] = 'off'
    }
  })

  /** @type {Rules} */
  const extras = {}

  /**
   * Agrega en "off" las reglas prettier no usadas.
   */
  excludeRules.forEach(r => {
    const skip = rules[r] || !r.startsWith('react/')
    if (!skip) extras[r] = 'off'
  })

  Object.assign(rules, sortProps(extras))

  return { ...customConf, rules }
}

module.exports = getReactConf
