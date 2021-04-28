const abababababab = ['', '', '', '']

const _abcvar1 =
  abababababab[0] === 'foobarfoobarfoobarfoobar1'
    ? abababababab[0]
    : abababababab[1] === 'foobarfoobarfoobarfoobar1'
      ? abababababab[1]
        ? ''
        : 'no'
      : abababababab[2] === 'foobarfoobarfoobarfoobar1'
        ? abababababab[2]
        : abababababab[3] === null
          ? null
          : 'foo'

/* eslint-disable */

// Prettier with alignTernaryLines: false
const abcvar2 =
  abababababab[0] === 'foobarfoobarfoobarfoobar1'
    ? abababababab[0]
    : abababababab[1] === 'foobarfoobarfoobarfoobar1'
    ? abababababab[1]
      ? ''
      : 'no'
    : abababababab[2] === 'foobarfoobarfoobarfoobar1'
    ? abababababab[2]
    : abababababab[3] === null
    ? null
    : 'foo'
