const conf = require('./extras/react/.eslintrc.js')

/**
 * Get the Preact Version.
 */
const getPreactVersion = function () {
  try {
    return require('preact/compat/dist/compat').version || '99.99.99'
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      console.warn('Preact is not detected.')
    } else {
      console.error(err.message)
    }
  }
  return '16.2.0'
}

/**
 * Set the React version
 */
const getConf = () => {
  const reactConf = Object.assign({}, conf)
  const settings = reactConf.settings
  const options = reactConf.parserOptions

  settings.react = Object.assign(settings.react, {
    pragma: 'h',
    fragment: 'Fragment',
    version: getPreactVersion(),
  })

  options.jsxPragma = 'h'
  options.jsxFragmentName = 'Fragment'

  reactConf.rules['react/no-unknown-property'] = [2, { ignore: ['class', 'for'] }]
  return reactConf
}

module.exports = getConf()
