var forgetStore = []

var cloneModule = function (module) {
  oldModule = {store: {}}
  oldModule.proto = module.__proto__
  Object.keys(module).forEach(function (key) {
    oldModule.store[key] = module[key]
  })
  return oldModule
}

var replaceModule = function (module, mock, proto) {
  Object.keys(module).forEach(function (key) {
    delete module[key]
  })
  Object.keys(mock).forEach(function (key) {
    module[key] = mock[key]
  })
  module.__proto__ = proto
  return module
}

var forget = function (module, mock, proto) {
  proto = proto || {}
  forgetStore.push({old: cloneModule(module), ref: module})
  return replaceModule(module, mock, proto)
}

forget.restore = function () {
  forgetStore.forEach(function (module) {
    replaceModule(module.ref, module.old.store, module.old.proto)
  })
}

module.exports = forget
