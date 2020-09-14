// learn 86. Суман функц буюу Arrow function.
const yaers = [1990, 1996, 2000, 1998];

// ES5
var age5 = yaers.map(function (el) {
  return 2020 - el;
});
/******************** ES6 Arrow function *********************************/
// ES6 Сутан функц буюу Arrow function. Хамгийн богино бичиглэл
var age6 = yaers.map((el) => 2019 - el);

//ES6 Arrow function. 2 аргумент дамжуулах
var age7 = yaers.map((el, i) => i + 2000 - el);
var age71 = yaers.map((el, index) => `${index}: 2019 - ${el}`);

//ES6 Arrow function. { } хаалтанд хийвэл заавал return хийнэ.
var age8 = yaers.map((el, i) => {
  let j = i + 1;
  return `${j}: 2019 - ${el}`;
});

console.log(yaers);
console.log(age5);
console.log(age6);
console.log(age7);
console.log(age8);
