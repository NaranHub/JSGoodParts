// Functional Inheritance
// Page 52

var mammal = function (spec) {
  var that = {}

  that.get_name = function () {
    return spec.name
  }

  that.says = function () {
    return spec.saying || ''
  }

  return that
}

var cat = function (spec) {
  spec.saying = spec.saying || 'meow'

  var that = mammal(spec)

  that.purr = function (n) {
    var i
    var s = ''
    for (i = 0; i < n; i += 1) {
      if (s) {
        s += '-'
      }
      s += 'r'
    }
    return s
  }

  that.get_name = function () {
    return that.says() + ' ' + spec.name + ' ' + that.says()
  }

  return that
}

var coolCat = function (spec) {
  var that = cat(spec)
  var superGetName = that.superior('get_name')
  that.get_name = function () {
    return 'like ' + superGetName() + ' baby'
  }
  return that
}

var myCoolCat = coolCat({name: 'Alula'})
document.writeln()
document.writeln(myCoolCat.get_name())
