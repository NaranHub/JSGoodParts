String.method('deentityify', (function () {
  // The entity table. It maps entity names to characters

  var entity = {
    quot: '"',
    lt: '<',
    gt: '>'
  }

  // Return the deentityify method.
  // The method calls the string replace method, looking for substrings that start with '&' and end with ';'
  // If the characters in between are in the entity table, then replace the entity with the character from the table. 
  // It uses a regular expression
  // Page 40: Modules
  return function () {
    return this.replace(/&([^&;]+);/g,
      function (a, b) {
        var r = entity[b]
        return typeof r === 'string' ? r : a
      }
    )
  }
}()))

document.writeln()
document.writeln('&lt;&quot;&gt;'.deentityify()) // <">
