const writeJson = require('./lib/write-json')
const getReactConf = require('./get-react-conf')

const reactConf = require('./base/conf-base-react')
const preactConf = require('./base/conf-preact-conf')
const mainConf = require('./main-conf')
const nodeConf = require('./node-conf')
const tsrtConf = require('./tsrt-conf')

writeJson('eslintrc', mainConf)
writeJson('eslintrc-node', nodeConf)
writeJson('eslintrc-react', getReactConf(reactConf))
writeJson('eslintrc-preact', getReactConf(preactConf))
writeJson('eslintrc-tsrt', tsrtConf)
