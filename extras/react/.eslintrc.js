/* eslint-disable max-len, unicorn/prefer-spread */
/* eslint prettierx/options:[2,{printWidth:120}] */
/*
  Configuración para ESLint 6.x

  El soporte preact se basa en react con los siguientes cambios:

  - 'react/no-did-update-set-state': ON,
  - 'react/no-unknown-property': [ON, { ignore: ['class', 'for'] }]

  @date 2019-02-28T03:48:11.238Z
*/
const WARN = 1
const ON = 2

module.exports = {
  plugins: ['react', 'react-hooks', 'react-perf'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      { name: 'Link', linkAttribute: 'to' },
    ],
  },

  rules: {
    'react/button-has-type': ON,
    'react/forbid-foreign-prop-types': [ON, { allowInPropTypes: true }],
    'react/jsx-boolean-value': ON,
    'react/jsx-filename-extension': [ON, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-key': ON,
    'react/jsx-max-depth': [ON, { max: 5 }],
    'react/jsx-no-bind': [ON],
    'react/jsx-no-comment-textnodes': ON,
    'react/jsx-no-duplicate-props': [ON, { ignoreCase: true }],
    'react/jsx-no-script-url': [ON, [{ name: 'Link', props: ['to'] }]],
    'react/jsx-no-target-blank': ON,
    'react/jsx-no-undef': ON,
    'react/jsx-no-useless-fragment': ON,
    'react/jsx-pascal-case': [ON, { ignore: [] }],
    'react/jsx-uses-vars': ON,
    'react/no-access-state-in-setstate': ON,
    'react/no-array-index-key': WARN,
    'react/no-children-prop': ON,
    'react/no-danger-with-children': ON,
    'react/no-deprecated': ON,
    'react/no-did-update-set-state': ON,
    'react/no-direct-mutation-state': ON,
    'react/no-find-dom-node': ON,
    'react/no-is-mounted': ON,
    'react/no-multi-comp': [ON, { ignoreStateless: true }],
    'react/no-redundant-should-component-update': ON,
    'react/no-render-return-value': ON,
    'react/no-string-refs': ON,
    'react/no-this-in-sfc': ON,
    'react/no-typos': ON,
    'react/no-unescaped-entities': ON,
    'react/no-unknown-property': ON, // preact
    'react/no-will-update-set-state': ON,
    'react/prefer-stateless-function': WARN,
    'react/require-render-return': ON,
    'react/self-closing-comp': ON,
    'react/style-prop-object': ON,
    'react/void-dom-elements-no-children': ON,

    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': ON,

    'react-perf/jsx-no-new-object-as-prop': ON,
    'react-perf/jsx-no-new-array-as-prop': ON,
    'react-perf/jsx-no-jsx-as-prop': ON,
  },
}
