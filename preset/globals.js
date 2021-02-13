/* eslint-disable */
const globals = require('confusing-browser-globals')
const allowed = ['self']

allowed.forEach(s => {
  const idx = globals.indexOf(s)
  if (~idx) {
    globals.splice(idx, 1)
  }
})

globals.push('title')

// remueve duplicados
module.exports = globals.filter((s, ix, arr) => arr.indexOf(s) === ix)
