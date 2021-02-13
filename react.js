const conf = require('./extras/react/.eslintrc.js')

/**
 * Autodetection of React Version.
 */
const getReactVersion = () => {
  try {
    const version = require('react').version || '999.999.999'
    return version
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      console.warn('React is not detected.')
    } else {
      console.error(err.message)
    }
  }
  return ''
}

/**
 * Set the React version
 */
const getConf = () => {
  const reactConf = Object.assign({}, conf)
  const settings = reactConf.settings

  settings.react = Object.assign(settings.react, { version: getReactVersion() })
  return reactConf
}

module.exports = getConf()
