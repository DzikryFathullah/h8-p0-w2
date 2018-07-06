//1. Melakukan looping menggunakan while
var countLoopFs = 2
console.log('LOOPING PERTAMA')
while (countLoopFs <= 20 ) {
  console.log(countLoopFs + ' - I Love coding')
  countLoopFs = countLoopFs+2
}
console.log('LOOPING KEDUA')
while (countLoopFs > 2){
  countLoopFs = countLoopFs-2
  console.log(countLoopFs + ' - I will become fullstack developer')
}
console.log('-------------------------')

//2. Melakukan looping menggunakan for
console.log('LOOPING PERTAMA')
for (var countLoopNd = 1; countLoopNd <= 20; countLoopNd++){
  console.log(countLoopNd + ' - I love coding')
}
console.log('LOOPING KEDUA')
for (var countLoopRd = 20 ; countLoopRd > 0;countLoopRd--){
  console.log(countLoopRd + ' - I will become fullstack developer')
}
console.log('-------------------------')

//3. Angka Ganjil dan Genap
for (var countLoopTh = 1; countLoopTh <= 100; countLoopTh++){
  if (countLoopTh % 2 !== 0){
    console.log('counter sekarang = ' +countLoopTh)
    console.log('GANJIL')
  } else /*(countLoopTh % 2 !== 0)*/{
    console.log('counter sekarang = ' +countLoopTh)
    console.log('GENAP')
  }
}
console.log('++++++++++++++++++++++++++')
for (var countLoopKel3 =1 ; countLoopKel3 < 100; countLoopKel3+=2){
  if (countLoopKel3 % 3 === 0){
    console.log('counter sekarang = ' +countLoopKel3)
    console.log(countLoopKel3 + ' Kelipatan 3')
  }else {
    console.log('counter sekarang = ' +countLoopKel3)
  }
}
console.log('++++++++++++++++++++++++++')
for (var countLoopKel6 = 1; countLoopKel6 < 100; countLoopKel6+=5){
  if (countLoopKel6 % 6 === 0){
  console.log('counter sekarang = ' + countLoopKel6)
  console.log(countLoopKel6 + ' kelipatan 6')
  }else {
    console.log('counter sekarang = ' +countLoopKel6)
  }
}
console.log('++++++++++++++++++++++++++')
for (var countLoopKel10 = 1; countLoopKel10 < 100; countLoopKel10 +=9){
  if (countLoopKel10 % 10 === 0){
    console.log('counter sekarang = ' + countLoopKel10)
    console.log(countLoopKel10 + ' kelipatan 10')
  } else {
    console.log('counter sekarang = ' +countLoopKel10)
  }
}
