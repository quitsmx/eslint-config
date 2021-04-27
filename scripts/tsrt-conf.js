const tsRtConf = require('./base/conf-base-tsrt')
const excludeRules = require('./base/exclude-rules')

/**
 * Sort the rules, put core rules first
 * @template {Dict} T
 * @param {T} obj Rules to sort
 * @returns {T}
 */
const sortProps = obj =>
  Object.keys(obj)
    .map(k => k.replace('@type', '~@type'))
    .sort()
    .map(k => k.replace('~@type', '@type'))
    .reduce((o, k) => {
      o[k] = obj[k]
      return o
    }, /** @type {*} */ ({}))

const rules = sortProps(tsRtConf.rules)

excludeRules.forEach(name => {
  if (rules[name]) {
    rules[name] = 'off'
  }
})

/**
 * @type {BaseConf}
 */
module.exports = { ...tsRtConf, rules }
