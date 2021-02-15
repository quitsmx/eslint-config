module.exports = {
  plugins: ['node'],

  env: {
    node: true,
  },

  settings: {
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
    node: {
      convertPath: {
        'src/bin/**/*.js': ['^src/bin/(.+)$', 'bin/$1'],
      },
    },
  },

  rules: {
    'node/callback-return': 1,
    'node/exports-style': [2, 'module.exports'],
    'node/global-require': 1,
    'node/handle-callback-err': 2,
    'node/no-callback-literal': 2,
    'node/no-deprecated-api': 2,
    'node/no-exports-assign': 2,
    'node/no-extraneous-require': 2,
    'node/no-missing-require': 2,
    'node/no-mixed-requires': 1,
    'node/no-new-require': 2,
    'node/no-path-concat': 1,
    'node/no-process-exit': 1,
    'node/no-unpublished-bin': 2,
    'node/no-unpublished-require': 2,
    'node/no-unsupported-features/es-builtins': 1,
    'node/no-unsupported-features/es-syntax': 1,
    'node/prefer-global/buffer': 2,
    'node/prefer-global/console': 2,
    'node/prefer-global/process': 2,
    'node/prefer-global/url-search-params': 2,
    'node/prefer-global/url': 2,
    'node/process-exit-as-throw': 2,
    'node/shebang': 2,
  },
}
