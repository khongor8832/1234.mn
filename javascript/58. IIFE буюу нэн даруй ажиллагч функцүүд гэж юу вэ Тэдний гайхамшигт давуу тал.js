// IIFE - immediately invoked function expression ---> Интернет дэхь маш олон devoloper -ууд зөрчилгүй хамтран ажиллах боломжийг олгодог.

/*Функцыг 2 янзаар бичдэг. */

// 1. Function statement
function hi() {
  console.log("hi");
}
hi();

// 2. Function expression

var aaa = function () {
  console.log("hello");
};
aaa();

// IIFE - immediately invoked function expression --> Нэн даруй дуудагдаж байгаа бичиглэл
// ганцхан удаа ашиглагдах функцанд дуудагдах бол ингэж бичигдэж болно.
// нэргүй функц
// Тодорхой шаардлагын дагуу ингэж бичдэг. Олон модулийг нийлүүлээд програмчлах тохиолдолд
// болон бусад open source labrary code оруулж ирэх тохиолдолд

(function () {
  console.log("hihihi");
})();

// Энгийнээр бичвэл доорх.
var aaa = function () {
  console.log("hi hi hi ");
};
aaa();

// Өөрийнхөө кодыг өөрөө бичиж байгаа тохиолдолд ингэж бичигдэг.
console.log("hi hi hi hi");

// Өөрийнхөө бичсэн хувьсагчыг өөр программистын хувьсагчтай холихгүй байх энэ тохиолдолд
// бүгдэнг нь cut-алж аваад функц дотор хийчихнэ.
var name = "Сараа";

console.log("Сайн уу? " + name);

var name = "Jhon";

console.log("hello? " + name);

console.log("Ажил төрөл сайн уу?" + name);

// функц дотор хийсэн үед

var name = "Сараа";

console.log("Сайн уу? " + name);

function englishVersion() {
  var name = "Jhon";
  console.log("Hello? " + name);
}
englishVersion();

console.log("Ажил төрөл сайн уу?" + name);

// дэлхий нийтэд ганц ашиглах функц нь дээр нэргүй функцийг ашиглаж шууд газар дээр нь дуудна.
(function () {
  var name = "Jhon";
  console.log("hello? " + name);
})();

// эцсийн хувилбар буюу өөр праграмистын хувьсагчтай холилдоод байхгүй мөн нэргүй функц
var name = "Сараа";

console.log("Сайн уу? " + name);

(function () {
  var name = "Jhon";
  console.log("hello? " + name);
})();

console.log("Ажил төрөл сайн уу?" + name);

// Одоо яг эцсийн хувилбар буюу өөр праграмистын хувьсагчтай холилдоод байхгүй мөн нэргүй функц
(function () {
  var name = "Сараа";
  console.log("Сайн уу? " + name);

  (function () {
    var name = "Jhon";
    console.log("hello? " + name);
  })();

  console.log("Ажил төрөл сайн уу? " + name);
})();

// IIFE гэдэг зүйл бол модулиар праграмчлалын хэлбэрийг дэмждэг бөгөөд бид нар, праграмистуудын лаг2 code - уудыг ашиглах мөн
//  модуль бичэнгүүтээ интернэт байршуулах, интернетэд байршуулсан code - ыг авч ашилах ихэвчлэн IIFE бичигдсэн байдаг.
