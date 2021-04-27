const { deepEqual } = require('fast-equals')
const { knownOverrideRules } = require('../constants')

/**
 * @type {Dict<RuleLevel>}
 */
const transLevel = {
  0: 'off',
  1: 'warn',
  2: 'error',
}

/**
 * @param {RuleEntry} rule
 * @returns {RuleEntry}
 */
const toRuleArr = rule => {
  if (typeof rule === 'string') {
    return rule
  }
  if (typeof rule === 'number') {
    return transLevel[rule]
  }
  if (typeof rule[0] === 'number') {
    rule = [...rule]
    rule[0] = transLevel[rule[0]]
  }
  return rule
}

/**
 * @param {string} name
 * @param {RuleEntry} pA
 * @param {RuleEntry} pB
 * @returns {RuleEntry}
 */
const compareRules = (name, pA, pB) => {
  //
  const out = toRuleArr(pB)
  if (knownOverrideRules.has(name)) {
    return out
  }

  const std = toRuleArr(pA)
  if (deepEqual(std, out)) {
    console.warn(`Equal custom/standard rule '${name}':`, pA)
  } else {
    console.log(`Standard rule '${name}' overrided:`, pA, pB)
  }

  return out
}

/**
 * @param {Rules} a
 * @param {Rules} b
 * @param {(s:string)=>boolean} [filt]
 * @returns {Rules}
 */
const mergeRules = (a, b, filt) => {
  //
  const rules = { ...a }

  if (filt) {
    Object.keys(rules).forEach(p => {
      if (!filt(p)) {
        delete rules[p]
      }
    })
  }

  for (const [name, rule] of Object.entries(b)) {
    if (rules[name]) {
      rules[name] = compareRules(name, rules[name], rule)
    } else {
      rules[name] = rule
    }
  }

  return rules
}

module.exports = mergeRules
