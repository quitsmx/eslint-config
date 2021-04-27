const { ON } = require('../constants')
const reactConf = require('./conf-base-react')

const noUnknownPropertyOpts = { ignore: ['class', 'for', 'onDblClick'] }

/**
 * @type {BaseConf}
 */
const preactConf = {
  ...reactConf,

  parserOptions: {
    ...reactConf.parserOptions,
    jsxPragma: 'h',
    jsxFragmentName: 'Fragment',
  },

  settings: {
    ...reactConf.settings,
    react: {
      pragma: 'h',
      fragment: 'Fragment',
      version: '16.8',
    },
  },

  rules: {
    ...reactConf.rules,
    'react/no-unknown-property': [ON, noUnknownPropertyOpts],
    'react/no-did-mount-set-state': ON,
    'react/no-did-update-set-state': ON,
    'react/prefer-es6-class': ON,
  },
}

module.exports = preactConf
