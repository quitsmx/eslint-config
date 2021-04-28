const abababababab = ['', '', '', '']

const _abcvar = abababababab
  .filter(item => item === 'foobarfoobarfoobarfoobar1')
  .map(item => item + 'foobarfoobarfoobarfoobar1')
  .forEach((item, ix) => {
    return item + `foobarfoobarfoobarfoobar${ix}`
  })

const _xyzvar = abababababab
  .filter(e => e === 'f')
  .map(e => e + 'f')
  .forEach((e, ix) => e + `f${ix}`)

const _varvar = abababababab.filter(item => item === 'f').map(item => item + 'f')
