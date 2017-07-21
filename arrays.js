// Testing reduce methods on Arrays
// Page 62
var data = [4, 8, 15, 16, 23, 42]

var add = function (a, b) {
  return a + b
}

var multiply = function (a, b) {
  return a * b
}

document.writeln()
document.writeln('Addition is ' + data.reduce(add, 0)) // 108
document.writeln('Multiplication is ' + data.reduce(multiply, 1)) // 7418880

// Create a 2x3 matrix initialized to 9
var matrix = Array.matrix(2, 3, 9)
document.writeln('2x3 matrix initialised with 9s:')
document.writeln('\t[' + matrix[0][0] + ', ' + matrix[0][1] + ', ' + matrix[0][2] + '],')
document.writeln('\t[' + matrix[1][0] + ', ' + matrix[1][1] + ', ' + matrix[1][2] + ']')
