const { ON, WARN, ecmaVersion, esEnvironment } = require('../constants')

const reactNoUnescapedEntitiesOpts = {
  forbid: [
    { char: '"', alternatives: ['&quot;'] },
    { char: '>', alternatives: ['&gt;'] },
    { char: '}', alternatives: ['&#125;'] },
  ],
}

/**
 * This React config is also used by the Preact base.
 * @type {BaseConf}
 */
module.exports = {
  plugins: ['react', 'react-hooks'],

  settings: {
    linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
    react: {
      version: 'detect',
    },
  },

  parserOptions: {
    ecmaVersion,
    ecmaFeatures: { jsx: true },
  },

  env: {
    ...esEnvironment,
    browser: true,
  },

  rules: {
    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': ON,
    'react/button-has-type': ON,
    'react/forbid-foreign-prop-types': WARN,
    'react/no-access-state-in-setstate': WARN,
    'react/no-array-index-key': WARN,
    'react/no-did-mount-set-state': WARN,
    'react/no-did-update-set-state': ON,
    'react/no-multi-comp': [WARN, { ignoreStateless: true }],
    'react/no-redundant-should-component-update': ON,
    'react/no-this-in-sfc': ON,
    'react/no-typos': WARN,
    'react/no-unknown-property': ON,
    'react/no-unused-prop-types': ON,
    'react/no-unescaped-entities': [ON, reactNoUnescapedEntitiesOpts],
    'react/no-will-update-set-state': ON,
    'react/style-prop-object': ON,
    'react/void-dom-elements-no-children': ON,
    'react/jsx-filename-extension': [ON, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-max-depth': [ON, { max: 6 }],
    'react/jsx-no-bind': ON,
    'react/jsx-no-script-url': [ON, [{ name: 'Link', props: ['to'] }]],
    'react/jsx-no-useless-fragment': ON,
    'react/jsx-uses-react': WARN, // debatable
  },
}
