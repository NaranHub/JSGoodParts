// Prevents typing "prototype" when invoking Type methods
Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func
    return this
  }
}

// Converts numbers into integers
Number.method('integer', function () {
  return Math[this < 0 ? 'ceil' : 'floor'](this)
})

// Trims blank spaces out of strings
String.method('trim', function () {
  return this.replace(/^\s+|\s+$/g, '')
})

Function.method('curry', function () {
  var slice = Array.prototype.slice
  var args = slice.apply(arguments)
  var that = this
  return function () {
    return that.apply(null, args.concat(slice.apply(arguments)))
  }
})

document.writeln()
document.writeln('          Hello trimmed world!          '.trim())

// Takes the "super" method name and returns a fucntion that invokes that method
Object.method('superior', function (name) {
  var that = this
  var method = that[name]
  return function () {
    return method.apply(that, arguments)
  }
})

// Reduce method to perform computations on an Array
// Page 61
Array.method('reduce', function (f, value) {
  var i
  for (i = 0; i < this.length; i += 1) {
    value = f(this[i], value)
  }
  return value
})

// Creates an array with the specified dimension and sets every value with the initial value provided
// Page 63
Array.dim = function (dimension, initial) {
  var a = []
  var i
  for (i = 0; i < dimension; i += 1) {
    a[i] = initial
  }
  return a
}

// Creates a bidimensional array and initialises it
Array.matrix = function (m, n, initial) {
  var matrix = []
  var row
  var i
  for (i = 0; i < m; i += 1) {
    row = Array.dim(n, initial)
    matrix[i] = row
  }
  return matrix
}
