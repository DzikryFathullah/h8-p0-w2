// 1. Tugas 1
function shoutOut (){
return 'Hello Function'
}
console.log(shoutOut()) 

console.log('-------------------')

// 2. Tugas 2
function calculateMultiply (){
  return num1 * num2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); 

console.log('-------------------')

//3. Tugas 3
function processSentence (){
  return 'nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + ' !'
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
