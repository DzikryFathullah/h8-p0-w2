function xo(str) {
  var bin =''
  var countO = 0
  var countX = 0
  for (var runOne = 0; runOne < str.length; runOne++){
    bin = str[runOne]
    if (bin === 'x'){
      countX = countX + 1
    } else {
      countO = countO + 1 
    }
  }
  /* sebagai materi uji
  console.log(countX)
  console.log(countO)*/
  if (countO === countX) {
    return true
  } else {
    return false
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
