// 1. Tugas 1
function shoutOut (){
return 'Hello Function'
}
console.log(shoutOut()) 

console.log('-------------------')

// 2. Tugas 2
function calculateMultiply (num1,num2){
var num1 
var num2 
  return num1 * num2
}

var hasilPerkalian = calculateMultiply(5,6);
console.log(hasilPerkalian); 

//3. Tugas 3
function processSentence (name,age,address,hobby){
//revisi section improvement - Addtional
var name 
var age 
var address 
var hobby
  return 'nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + ' !'
}

var fullSentence = processSentence('agus',30,'Jln. Malioboro, Yogjakarta','gaming');
console.log(fullSentence);
