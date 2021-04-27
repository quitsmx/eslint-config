const fs = require('fs')
const path = require('path')
const prettier = require('prettier')
const { rulesToRemove } = require('../constants')

/**
 * Remove deprecated rules.
 * @param {BaseConf} conf
 */
const cleanRules = conf => {
  const { rules } = conf

  Object.keys(rules).forEach(r => {
    if (rulesToRemove.includes(r)) {
      delete rules[r]
    }
  })
  return conf
}

/** @param {string} file */
const addJsonExt = file => (file.endsWith('.json') ? file : `${file}.json`)

/**
 * Save the data to the JSON file
 * @param {string} filepath
 * @param {string} jsonConf
 */
const writeFile = async (filepath, jsonConf) => {
  const rootOpts = await prettier.resolveConfig(filepath, {
    editorconfig: true,
    useCache: true,
  })
  const options = { ...rootOpts, filepath }
  const dataStr = prettier.format(jsonConf, options)

  fs.writeFileSync(filepath, dataStr, 'utf8')
}

/**
 * Write the given object as JSON in "./lib", formatted with prettierx
 * @param {string} file
 * @param {BaseConf} conf
 */
const writeJson = (file, conf) => {
  const filepath = path.resolve(`./dist/${addJsonExt(file)}`)
  const jsonConf = JSON.stringify(cleanRules(conf))

  writeFile(filepath, jsonConf)
}

module.exports = writeJson
