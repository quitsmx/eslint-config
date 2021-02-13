#!/usr/bin/env node
// @ts-check

const path = require('path')
const fs = require('fs')

/**
 * Create a JSON file if not exists.
 * @param {string} name
 * @param {object} conf
 */
const createJsonFile = (name, conf) => {
  const file = path.resolve('.', name)

  if (fs.existsSync(file)) {
    console.log(`${name} already exists, skipped.`)
  } else {
    fs.writeFile(file, JSON.stringify(conf, null, 2), 'utf8', err => {
      if (err) {
        console.error(`Can't create ${name}: ${err.message || err}`)
      }
    })
  }
}

createJsonFile('.eslintrc.json', {
  root: true,
  ignorePatterns: ['/.vscode', '/dist'],
  extends: ['@quitsmx', '@quitsmx/eslint-config/react'],
  rules: {},
})

createJsonFile('.prettierrc.json', {
  offsetTernaryExpressions: true,
  arrowParens: 'avoid',
  generatorStarSpacing: true,
  indentChains: true,
  printWidth: 92,
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  spaceBeforeFunctionParen: true,
  yieldStarSpacing: true,
})
