const preactConf = require('./dist/eslintrc-preact.json')

/**
 * Get the Preact Version.
 */
const getPreactVersion = function () {
  try {
    // eslint-disable-next-line node/no-unpublished-require, node/global-require
    return require('preact/compat/dist/compat').version
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      console.warn('Preact is not detected.')
    } else {
      console.error(err.message)
    }
  }
  return undefined
}

/**
 * Set the React version
 */
const getConf = () => {
  const version = getPreactVersion()

  if (version) {
    const settings = { ...preactConf.settings }
    settings.react = { ...settings.react, version }
    return { ...preactConf, settings }
  }

  return preactConf
}

module.exports = getConf()
