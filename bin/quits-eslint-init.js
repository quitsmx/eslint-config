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
  const file = path.resolve(name)

  if (fs.existsSync(file)) {
    console.log(`${name} already exists, skipped.`)
    return
  }

  try {
    fs.writeFileSync(file, JSON.stringify(conf, null, 2), 'utf8')
  } catch (err) {
    console.error(`Can't create ${name}: ${err.message || err}`)
    process.exitCode = 1
  }
}

createJsonFile('.eslintrc.json', {
  root: true,
  extends: ['@quitsmx', '@quitsmx/eslint-config/react'],
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

// VS Code settings ------------------------------------------------------------

const vsCodeConf = {
  'javascript.format.enable': false,
  'typescript.format.enable': false,
  'eslint.format.enable': true,
  '[javascript]': {
    'editor.defaultFormatter': 'dbaeumer.vscode-eslint',
    'editor.formatOnSave': true,
  },
  '[javascriptreact]': {
    'editor.defaultFormatter': 'dbaeumer.vscode-eslint',
    'editor.formatOnSave': true,
  },
  '[typescript]': {
    'editor.defaultFormatter': 'dbaeumer.vscode-eslint',
    'editor.formatOnSave': true,
  },
  '[typescriptreact]': {
    'editor.defaultFormatter': 'dbaeumer.vscode-eslint',
    'editor.formatOnSave': true,
  },
}

const vscDir = path.resolve('.vscode')
let ok = false

try {
  !fs.existsSync(vscDir) && fs.mkdirSync(vscDir)
  ok = true
} catch (err) {
  console.error(`\nCannot create the '.vscode' folder: ${err.message || err}\n`)
  process.exitCode = 1
}

if (ok) {
  createJsonFile('.vscode/settings.json', vsCodeConf)
}
