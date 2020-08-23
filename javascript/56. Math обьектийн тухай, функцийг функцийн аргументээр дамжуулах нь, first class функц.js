// learn 56. Math обьектийн тухай, функцийг функцийн аргументээр дамжуулах нь, first class функц.
// Math обьектийн тухай, функцийг функцийн аргументээр дамжуулах нь, first class функц

// var math = {
//   abs: function(too){
//   if(too<0) return 0-too;
//   else return too;
//   }
// }
// console.log(math.abs(-15));

// console.log(typeof(Math));
// console.log(Math.floor(12.1));
// console.log(Math.ceil(12.1));
// console.log(Math.round(8.6));
// console.log(Math.random()*100);
// console.log(Math.sqrt(144));

// var a = 16;
// var b = 7;
// console.log(Math.max(a, b));

// console.log(Math.pow(4, 3));
// console.log(typeof(Math)); төрлийн шалгаж байна.
// console.log(Math.floor(12.1)); Тухайн тооны багаар авч байна. 12 гарна.
// console.log(Math.ceil(12.1)); Тухайн тооны ихээр авч байна. 13 гарна.
// console.log(Math.round(12.1)); Тухайн тооны аль ойрхон бүхэл тоогоор авч байна. 13 гарна.
// console.log(Math.random(12.1)); Санатсаргүй тоо гар ирнэ.
// console.log(Math.sqrt(144)); Язгуур гаргах
// max min олох
// console.log(Math.pow(4, 3)); Зэрэг олох

// функцийг функцийн аргументээр дамжуулах нь ямар ач холбогдолтой талаар:
// массив зарлах
// var birthYears = [1981, 2005, 1976, 1986, 2010];

// var ages = findOutAges();
// var ageTrueFalse = isFullAge();
// var heart = findOutMaxHeartRate();

// console.log(ages);
// console.log(ageTrueFalse);
// console.log(heart);

// // Хүнийг хэдэн настайгаар олох
// function findOutAges(){
//   var arr = [];
//   for(var i = 0; i < birthYears.length; i++)
//   {
//     arr.push(new Date().getFullYear() - birthYears[i]);
//   }
// return arr;
// }

// // 18 наснаас дээш үнэн худлаар гаргах
// function isFullAge(){
//   var arr = [];

//   for(var i = 0; i < ages.length; i++)
//   {
//     arr.push(ages[i] >= 18);
//   }
//   return arr;
// }

// // Хүний зүрхний зохилтоор гаргах
// function findOutMaxHeartRate(){
//   var arr = [];
//   for(var i = 0; i < ages.length; i++)
//   {
//     arr.push(Math.round(206.9 - 0.67 *ages[i]));
//   }
//   return arr;
// }

var birthYears = [1981, 2005, 1950, 1976, 1986, 2010, 1938];
/* функцийг функцруу дамжуулах замаар дээрх кодыг сайжруулж болно. Массиваар давталт хийхдээ
ерөнхий зориулттай нэг функц бичигдээд processArray гээд нэр өгчихий. Аргементээр myArr-> массив хүлээж авахаас гадна ямар нэгэн 
функц хүлээж авна. fn-> нэртэй функц хүлээж авахаад myArr гэсэн массивийг боловсруулна. Тэгээд тэрийгээ буцаан гэсэн ийм функц
 бичлээ. arr бол төрсөн онуудыг дамжуулна.  */

/*Код бол arr гэсэн хоосон массив үүсгээд myArr -аар давталт хийнгүүтээ ямар нэгэн үйлдэл гүйцэтгээд тэрийг нь  fn-> нэртэй функц 
 хийж өгнө. Тэрийгээ түр зуурынхаа arr гэсэн хоосон массивт хийж өгөөд 0-оос эхлээд myArr-ын төгсгөл хүртэл давтаад тэрийгээ дамжуулсан 
 функцыг ажилуулж байхгүй юу. fn гэсэн дамжуулсан функцыг ажилуулахдаа одоо бодогдож байгаа энэ myArr элементйиг дамжуулчихна */

//  var arr = []; хоосон массив үүсгэсэн.
// function processArray(myArr, fn ){ - myArr давталт хийгдэх массив
// function processArray(myArr, fn ){ - ямар нэгэн үйлдэл хийхийг  fn функц хийж өгнө.
// for(var i = 0; i < myArr.length; i++) - 0-оос эхлээд myArr-ын төгсгөл хүртэл давтаад
//  arr.push(fn(myArr[i])); -fn гэсэн дамжуулсан функцыг ажилуулахдаа одоо бодогдож байгаа энэ myArr элементйиг дамжуулчихна.

var ages = processArray(birthYears, findOutAges);
console.log(birthYears);
console.log(ages);
console.log(processArray(ages, isFullAge));
var heart = processArray(ages, findOutMaxHeartRate);
console.log(heart);
console.log(processArray([2016, 1965, 1945], findOutAges));

console.log(
  processArray(ages, function (age) {
    return age >= 65;
  })
);

function processArray(myArr, fn) {
  var arr = [];
  for (var i = 0; i < myArr.length; i++) {
    arr.push(fn(myArr[i]));
  }
  return arr;
}

function findOutAges(el) {
  return new Date().getFullYear() - el;
}

function isFullAge(el) {
  return el >= 18;
}

function findOutMaxHeartRate(el) {
  return Math.round(206.9 - 0.67 * el);
}
