/*
  Configuración para ESLint 7.x

  El soporte preact se basa en react con los siguientes cambios:

  - 'react/no-did-update-set-state': ON,
  - 'react/no-unknown-property': [ON, { ignore: ['class', 'for'] }]

  @date 2019-02-28T03:48:11.238Z
*/
module.exports = require('./preset/.eslintrc')
