const jestConfig = require('./jest.config.js')

jestConfig.collectCoverage = false;
jestConfig.reporters = ['default']
module.exports = jestConfig