// learn 8 Coercion буюу автомат төрөл хувиргалт, операторуудын ажиллах дараалал

//Javascript  Динамик хэл энэ талаар үзэцгээе.
// Ямар төрөлтэй байгааг урд талд typeof бичээд console-оор харагдана.
var a1 = 12;
console.log(typeof a1); //  a -гийн төрөл number
var a2 = "12";
console.log(typeof a2); //  a -гийн төрөл string
var a3 = true;
console.log(typeof a3); // a -гийн төрөл boolean
var a4 = 12;
a4 = a4 + 4;
console.log(a4); // 16
//Операторын дараалалыг Mozila -гийн дарааллын эрхийг Javascript|MDN Operator precedence харж болно
var a5 = 16;
a5 = a5 + true;
console.log(a5); // 17
var a6 = 16;
a6 = a6 + false;
console.log(a6); // 16
var a = 16;
a = a + true + false + true;
console.log(a); // 18
//Компьютерийн систэмд хадгалагдахдаа  үнэнг - 1 худлааг - 0 гэж хадгалдаг
// coersion -> javascript-д автомат төрөл хувиргалт хэлнэ.
var a = 11;
a = 8;
console.log(a); // Тохиололд 8 гарна.
var a = 12;
a = 16 + true + true + true;
console.log(a); // Тохиололд
// Coersion гэдэг энэ жишээн дээр boolean утгатай true -г тоо руу хөрвүүлж 1 болгож  байна. зүүнээс баруун руу бодно.
a = 16 + true + true + "2";
console.log(a);
// Coersion жишээн дээр ижил эрхтэй оператор нь зүүнээсээ бодогдоод true 1 -ээр бодогдоод 18 болоод тэмдэгт мөрийг нэмэхэд 18 тэмдэгт мөр болоод 182 болно.
console.log("naraa" + 1); //  naraa1 болно.
console.log("naraa" + "saraa" + true); //naraasaraatrue болно. тэмэгт мөр + тэмдэгт мөр + boolean тэмдэгт мөр нэмэж байхад тэмдэгт мөр болно. string
console.log("naraa" + "saraa" + true + 5 + 7); //naraasaraatrue57
var a = 12;
var b = true;
var c = 15;
var d = "";
c = c + d;
console.log(a + c); // энийг сайн хар бод.
// Typescript microsoft гаргасан javascript жаахан өөрчилж гаргасан
//  хувьсагчийг тодорхой төрөлтэй болгож dynamic type төрөлтэй хэлийг static төрөлтэй болгож өөрчилж гаргасан. javascript --> typescript болгож гаргасан
//  java c# ---> cтатис хэл төрлийн зааж өгдөг хэлүүд
// Dynamic type төрөл javascrip -ийг хүчирхэг хэл болгоход нөлөөлж байгаа юм

console.log(4 > 2); // true
console.log(4 >= 4); // true
var result = 4 > 2 > 1;
console.log(result); // эхэлж var result = 4 > 2 true бодогдоод var result = true дараагийнх нь var result = true болоод  true = 1 шдээ  var result = 1 > 1; болоод false  харин 1 >= 1 байсан бол true гарна.

// precedence Associativity coersion энэ 3 болооо илэрхийлэл өөр болоод байгаа
