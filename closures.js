// Creates an object with a private 'value' property
// Page 37: Closures
var myObject = (function () {
  var value = 0

  return {
    increment: function (inc) {
      value += typeof inc === 'number' ? inc : 1
    },
    getValue: function () {
      return value
    }
  }
}())

myObject.increment(3)
myObject.increment(2)

document.writeln()
document.writeln('My object\'s value: ' + myObject.getValue())
document.writeln('My object\'s value property: ' + myObject.value)

// Define a function that sets a DOM node's color to yellow and then fades it to white
// Page 38: Closures
var fade = function (node) {
  var level = 1
  var step = function () {
    var hex = level.toString(16)
    node.style.backgroundColor = '#FFFF' + hex + hex
    if (level < 15) {
      level += 1
      setTimeout(step, 200)
    }
  }
  setTimeout(step, 200)
}

fade(document.body)
