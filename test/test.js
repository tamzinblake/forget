var assert = require('assert')
var forget = require('../index.js')
var fakeObjectModule = { name: function () { return 'fakeName' } }
forget(require('./objectModule.js'), fakeObjectModule)
var testMe = require('./test-me.js')
assert.strictEqual(testMe(), 'fakeName')
forget.restore()
assert.strictEqual(testMe(), 'realName')
