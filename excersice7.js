// 1. Menyusun baris bintang
var rows1 = 5
var stars = ''
for (var countAsterSt = 0; countAsterSt < rows1; countAsterSt++ ){
  console.log('*')
}

console.log('----------------------------------')

//2.Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5
var bint = ''
for (var countAsterNd = 0; countAsterNd < rows2; countAsterNd++) {
 bint = ''
  for (var countAsterRd = 0; countAsterRd < rows2; countAsterRd++){
    bint = bint + '*'
  }
  console.log(bint)
}

console.log('----------------------------------')

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5
for (var countAsterTh = 0; countAsterTh <= rows3; countAsterTh++){
  asterix = ''
  for (var countAsterFt = 0; countAsterFt < countAsterTh; countAsterFt++){
    asterix = asterix + '*'
  }
console.log(asterix)
}
