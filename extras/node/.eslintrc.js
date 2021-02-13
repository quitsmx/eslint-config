module.exports = {
  plugins: ['node'],

  env: {
    node: true,
  },

  settings: {
    node: {
      convertPath: {
        'src/bin/**/*.js': ['^src/bin/(.+)$', 'bin/$1'],
      },
    },
  },

  rules: {
    'node/no-deprecated-api': 2,
    'node/no-extraneous-import': 2,
    'node/no-extraneous-require': 2,
    'node/no-unpublished-bin': 2,
    'node/no-unpublished-require': 2,
    'node/no-unsupported-features/node-builtins': 0,
    'node/shebang': 2,
    // migrated from eslint
    'node/callback-return': 1,
    'node/global-require': 1,
    'node/handle-callback-err': 2,
    'node/no-mixed-requires': 1,
    'node/no-new-require': 2,
    'node/no-path-concat': 1,
    'node/no-process-env': 0,
    'node/no-process-exit': 1,
    'node/no-restricted-require': 0,
    'node/no-sync': 0,
  },
}
