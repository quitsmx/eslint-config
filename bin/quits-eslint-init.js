#!/usr/bin/env node
// @ts-check

const fs = require('fs')
const path = require('path')
const presets = require('eslint-plugin-prettierx/lib/configs/presets')

// eslint-disable-next-line node/no-extraneous-require
const prettier = require('prettierx')

const eslintConf = {
  root: true,
  extends: ['@quitsmx', '@quitsmx/eslint-config/react'],
  overrides: [
    {
      files: ['/bin', '/scripts'],
      parserOptions: { sourceType: 'script' },
      extends: ['@quitsmx/eslint-config/node'],
    },
  ],
}

const prettierConf = {
  ...presets.standardize,
}

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

/**
 * Create a JSON file if not exists.
 * @param {string} name
 * @param {object} conf
 */
const createJsonFile = (name, conf) => {
  const file = path.resolve(name)

  if (fs.existsSync(file)) {
    const bakFile = file + '.bak'

    if (fs.existsSync(bakFile)) {
      console.log(`${name} and its .bak already exists, skipped.`)
      return
    }

    fs.renameSync(file, bakFile)
  }

  const data = prettier.format(JSON.stringify(conf), {
    ...prettierConf,
    filepath: file,
  })

  try {
    fs.writeFileSync(file, data, 'utf8')
  } catch (err) {
    console.error(`Can't create ${name}: ${err.message || err}`)
    process.exitCode = 1
  }
}

const checkVSCodeDir = () => {
  const vscDir = path.resolve('.vscode')

  if (!fs.existsSync(vscDir)) {
    fs.mkdirSync(vscDir)
  }
}

const makeConf = () => {
  checkVSCodeDir()
  createJsonFile('.eslintrc.json', eslintConf)
  createJsonFile('.prettierrc.json', prettierConf)
  createJsonFile('.vscode/settings.json', vsCodeConf)
}

makeConf()
