#!/usr/bin/env node
// @ts-check

const path = require('path')
const eslint = require('eslint')

const DEFAULT_EXTENSIONS = ['.js', '.jsx', '.cjs', '.esm', '.mjs', '.ts', '.tsx']

/** @typedef {import('eslint').Linter.BaseConfig} Config */

/**
 * Get the ESLint configuration.
 * @param {string} filename
 * @returns {Promise<Config>}
 */
const getConfig = filename => {
  if (!filename) {
    throw new TypeError('You must supply a filename.')
  }

  const filepath = path.resolve(filename)

  try {
    const cliEngine = new eslint.ESLint({
      extensions: DEFAULT_EXTENSIONS,
    })

    return cliEngine.calculateConfigForFile(filepath)
  } catch (error) {
    // is this noisy? Try setting options.disableLog to false
    console.error(`Cannot get config for "${filepath}"\n${error.message}`)
    process.exitCode = 1
  }
}

const args = process.argv.slice(2)

const popOption = opt => {
  const idx = args.indexOf(opt)
  return idx > -1 && args.splice(idx, 1)[0]
}

/**
 * @param {string} file
 * @param {boolean} asJson
 * @param {boolean} nocolor
 */
const listConf = (file, asJson, nocolor) => {
  getConfig(file)
    .then(conf => {
      if (asJson) {
        console.log(JSON.stringify(conf, null, 2))
      } else {
        console.dir(conf, { colors: !nocolor, depth: 8 })
      }
    })
    .catch(err => {
      console.error(err)
    })
}

if (!args.length || args.includes('-h') || args.includes('--help')) {
  console.log(`
  Usage: ${path.relative('.', __filename)} [options] js-filename

  List the ESLint settings used with 'js-filename'.

  Note: 'js-filename' can be absolute or relative to the current folder.

  options:
    -J, --json   Ourput as .json (forces '-no-color', default is 'console.dir')
    --no-color   Output with no colors
  `)
} else {
  const nocolor = popOption('--no-color')
  const asJson = popOption('-J') || popOption('--json')

  // console.dir({ nocolor, asJson, args })
  listConf(args[0], !!asJson, !!nocolor)
}
