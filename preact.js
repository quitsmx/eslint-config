const conf = require('./extras/react/.eslintrc.js')

/**
 * Get the Preact Version.
 */
const preactVersion = function () {
  let preactPath = ''
  let version = ''

  try {
    preactPath = require.resolve('preact')
    version = require('preact/compat/dist/compat').version
  } catch (err) {
    if (!preactPath) {
      console.error('React is not detected.')
    } else {
      console.error(err.message)
    }
  }

  return version || '16.2.0'
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
    version: preactVersion(),
  })

  options.jsxPragma = 'h'
  options.jsxFragmentName = 'Fragment'

  reactConf.rules['react/no-unknown-property'] = [2, { ignore: ['class', 'for'] }]
  return reactConf
}

module.exports = getConf()
