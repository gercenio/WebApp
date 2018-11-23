'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY :'"MDEzODk5MjgwMDAxNzJIR00gQ09OU1VMVE9SRVMgU1MgTFREQQ=="',
  API_CODE:'"01389928000172"',
  API_URL:'"http://178.128.188.196:80/api"'
})
