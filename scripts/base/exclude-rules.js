const { rules } = require('eslint-config-prettier')
const { allowedRules } = require('../constants')

/** @param {string} rule */
const allow = rule => !allowedRules.has(rule)

const excludeRules = new Set(Object.keys(rules).filter(allow))

module.exports = excludeRules
