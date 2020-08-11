// 15. Функцийн Statement болон Expression бичиглэл

/* javascript хэлийг гайхалтай болгосон төрлүүд:
 1. first class function хэл. 
 2. Prototype удамшилийг хэрэгжүүлдэг хэл. Энэ нь self хэлнээс гаралтай. Удамшилийг 2 янзаар хэрэгжүүлдэг.
        1. Сонгодог удамшилыг хэрэгжүүлдэг жн: java class зарлах байдлаар
        2. Prototype удамшилыг хэрэгжүүлдэг жн: javascript
3. javascript хэл бол indetater хэл дээрээсээ доошоо ажиллаж байдаг. 
Prototype үндэслэсэн удамшил нь тухайн объектыг газар дээр нь өөрчлөх боломжтой. Prototype шууд өөрчилж функцыг залгаснаар ирээдүйд бусад объектуудаа бол нөлөө үзүүлдэгүй гэж Тэгвэл  expression бичиглэлийн хэлбэр тэр объектыг өөрчлөх боломжийг олгодог.*/
/* Expression бичиглэлийн хэлбэр: 
Хувьсагч байдлаар зарладаг. Энэ бичиглэл javascript-ыг маш алдартай болгосон. Ягаад вэ гэвэл функц кодтойгоо өгөгдөл шиг дамжигдаж явах боломжийг javascript хэлэнд энэ бичиглэл олгодог. obj дотор өөр функцууд байсан боловч нэмээд newFunc функцтай болгож чаддаг гэсэн үг. Өөрөөр хэл газар дээр объектыг өргөтгөх боломжийг function expression олгодог.

obj.newFunc = function (number) {
  console.log("Expression function Ажиллааа...." + number);
};*/

// Expression бичиглэлийн хэлбэр
var module = function (number) {
  console.log("Expression function Ажиллааа...." + number);
};
module(-1000); // Дээрээс дуудаж ажилуулж болохгүй Доороос нь болно.

// statement бичиглэлийн хэлбэр:
function mod(number) {
  console.log("statement function Ажиллааа...." + number);
}
mod(1000); // Дээрээс доороосдуудаж ажилуулж болохгүй

// Тооны модуль хэлдэг функц
// |-15| = 15, |23| = 23

// ---------------Модул олох: 1 --------------
var module = function (number) {
  var mod;
  if (number < 0) mod = -number;
  else mod = number;
  console.log(number + "тооны модул нь " + mod);
};
module(-115);

//Тооны модулыг бусад операторууддаа дамжуулдаг өөр тооцоололд оролцоход нь тусалдаг байвал яах вэ. энэ тохиолдолд функцаас оператораас функцаас утга буцаах буюу return гэдэг түлхүүр үгийг ажиллаж үзий. Ямарч программын хэлэнд операторууд нь функцууд нь зарим утга буцаадаг зарим нь утга буцаааггүй.
// return - Заримдаа утга дамжуулна гэж хэлж болонлдоо
// ---------------Модул олох: 2 --------------

var module = function (too) {
  var mod;
  if (too < 0) mod = -too;
  else mod = too;
  return mod; // mod буцааж байна.
};
var x = module(-155); // module аас буцаж ирсэн утгыг x хадгалчихна.
module(-115);
console.log(-155 + "тооны модул нь " + x); // буцаж ирсэн утгыг хадгалж аваад хэвлэж байна.

// ---------------Модул олох: 3 --------------
var module = function (too) {
  var mod;
  if (too < 0) mod = -too;
  else mod = too;
  return mod;
};

var x = module(-155);
module(-115);
console.log(module(-25) + module(12) + module(-100));

// --------- |3| + |-15| + |-55| module ол------------
// Гурван тооны нийлбэр олдог функц

var moduleFind = function (too) {
  var mod;
  if (too < 0) mod = -too;
  else mod = too;
  return mod;
};
var addModules = function (x, y, z) {
  var niilber = moduleFind(x) + moduleFind(y) + moduleFind(z);
  return niilber;
};
var sum = addModules(-1, -2, -3);
console.log(sum);
