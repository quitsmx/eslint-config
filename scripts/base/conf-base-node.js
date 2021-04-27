const { ON, WARN, ecmaVersion, esEnvironment } = require('../constants')

/**
 * @type {BaseConf}
 */
module.exports = {
  //
  parserOptions: {
    ecmaVersion,
  },

  env: {
    ...esEnvironment,
    node: true,
  },

  plugins: ['node'],

  settings: {
    node: {
      convertPath: {
        'src/bin/**/*.js': ['^src/bin/(.+)$', 'bin/$1'],
      },
    },
  },

  rules: {
    'node/exports-style': [WARN, 'module.exports'],
    'node/global-require': WARN,
    'node/no-deprecated-api': WARN,
    'node/no-extraneous-require': ON,
    'node/no-missing-require': ON,
    'node/no-mixed-requires': WARN,
    'node/no-unpublished-bin': ON,
    'node/no-unpublished-require': ON,
    'node/no-unsupported-features/es-builtins': ON,
    'node/no-unsupported-features/es-syntax': ON,
    'node/no-unsupported-features/node-builtins': ON,
    'node/prefer-global/buffer': WARN,
    'node/prefer-global/console': WARN,
    'node/prefer-global/process': WARN,
    'node/prefer-global/text-decoder': WARN,
    'node/prefer-global/text-encoder': WARN,
    'node/prefer-global/url-search-params': WARN,
    'node/prefer-global/url': WARN,
    'node/shebang': ON,
  },
}
