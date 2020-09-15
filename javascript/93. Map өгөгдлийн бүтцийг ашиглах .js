// learn 93. Map өгөгдлийн бүтцийг ашиглах.
// Шинэ өгөгдлийн төрөлтэй танилцана уу

// Map гэдэг өгөгдлийг тодорхой бүтэцтэйгээр хадгалдаг. Key value гэсэн утга авдаг.
let dict = new Map();

dict.set("language", "хэл");
dict.set("car", "машин");
dict.set("sun", "нар");
dict.set("аав", "father");
dict.set(1, "one");
console.log(dict);
console.log(dict.get("language"));

/******************************************************************* */
//ES5 forEach давталт агшиглах  dict дотор юу байгааг харуулах гэж байна.
dict.forEach((value, key) => console.log(key + "====> " + value));
/******************************************************************** */

// ES6 For ... of давталт агшиглах
for (let el of dict) {
  console.log(el);
  // console.log(el[1]) //Энэ болохоор массивын index -ээр хэвлэж байна.
}
// For ... of a b утга өгөөд задалж харуулж байна.
for (let [a, b] of dict) {
  console.log(a + "утга нь : " + b);
}

// Map дотороос бас  хэдэн үг байгааг харуулж байна.
dict.delete("laguage");
// Map дотор хэдэн үг байгааг харуулж байна.
console.log(dict.size);

/************************ Map text-тэй ажиллах **********************************************/

let text = `ES6: Генератор ба гарцын илэрхийлэл Олон тооны өгөгдлийн бүтцийн эсрэг хийсэн гогцоонуудын асуудал бол хэдэн зуун, хэдэн мянган зүйл юм. `;
// console.log(text)
// Бүх үгийг салгаж аваад массивт хийе Split ашиглана.
let words = text.split(" ");
// console.log(words)

//  Үг бүрээ Map руу хийнэ.
let myMap = new Map();
words.forEach((el) => myMap.set(el, 1));
//  Map  ийт хэмжээг харуулна.
console.log("Нийт давхардаагүй үгийн тоо : " + myMap.size);
