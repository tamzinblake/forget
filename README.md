## forget ##

Simple dependency mocking for commonjs.  Works in most cases for Node, browserify, and webpack.

## Installation ##

npm install forget

## Usage ##

Suppose you have a module that uses jquery.ajax and want to mock out that functionality:

```javascript
//module.js
var $ = require('jquery')
$.ajax({
//...
})
```

Then in your unit tests:

```javascript
//moduleSpec.js
var forget = require('forget')
var fakeJQuery = { ajax: function (options) { return options } }
forget(require('jquery'), fakeJQuery)
var module = require('./module.js')

/* Do some testing here */

forget.restore()
```

Now in your test, you'll use the mocked out version of jquery instead of the real thing.

## Author ##

Thom Blake

## License ##

ISC
