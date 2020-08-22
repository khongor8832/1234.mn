// learn 52. Object.create ашиглан объект үүсгэх, Prototype удамшил

// Объект үүсгэх. 1-р арга
var p1 = {
  name: "Болдоо ",
  job: "програмист ",
  info: function () {
    console.log(this.name + this.job + "мэргэжилтэй. ");
  },
};
p1.info();

// Объект үүсгэх. 2-р арга Run time буюу javascript-ыг ажиллаж байхад өргөтгөх боломжтой байдаг.
// Объект байгуулсан дараа тэр объектруугаа өгөгдөл хийж болдог.
// Ямар нэгэн объект хүрээд ирэхэд өргөтгөж сайжруулж ашиглах боломжтой.
var p2 = {};
p2.name = "saraa";
p2.job = "nygtlan";
p2.info = function () {
  console.log(this.name + " нэртэй хүн " + this.job + "мэргэжилтэй. ");
};
p2.info();

//
String.sainuu = function () {
  console.log("өдрийн мэнд ");
};

console.log("123".sainuu);

/************************************************** */
/* Удамшил inheritance загвар 
null            -Object юунаас удамшсан вэ гэвэл null байгаа.  null нь юунаас ч удамшаагүй гэж зааж байгаа
var Object      -javascript-ын бүх объект энэ Object гэсэн объектоос удамшсан байдаг.  
var materi = {};
var amitan = Object.create(materi);
var hun = Object.create(amitan);
var tsereg = Object.create(hun);*/

/* Удамшил inheritance загвар 
var materi = {name : "bodis"};

var amitan = Object.create(materi);
amitan.name = "amitan";

var hun = Object.create(amitan);
hun.name = "hun";

var tsereg = Object.create(hun);
tsereg.name = "boldoo"

console.log(tsereg.__proto__);
console.log(tsereg.__proto__.__proto__);

Хариу: 
 { name:"hun" } -удамшаад хүний өгөгдөлийг хэвлэж байна. 
 { name:"amitan" } -удамшаад амьтаны өгөгдөлийг хэвлэж байна. */

// javascript бол prototype хэлээ. Prototype бол объект болгон цаанаа өөрийнхөө их загварыг заасан Proto гэдэг эх объектой байдаг.
var materi = {
  name: "bodis",
};

materi.haragdah = function () {
  console.log(this.name + " materi haraglaa");
};

var amitan = Object.create(materi);
amitan.name = "amitan";
amitan.hoolloh = function () {
  console.log(this.name + "  amitan hoolloo. ");
};
amitan.hodloh = function () {
  console.log(this.name + "  amitan hudluluu. ");
};

var hun = Object.create(amitan);
hun.name = "hun";
hun.tushaalAwah = function (tushaal) {
  console.log(this.name + " hun " + tushaal + " tushaal awlaa.");
};

var tsereg = Object.create(hun);
tsereg.name = "Boldoo";
tsereg.baildah = function () {
  console.log("baldlaa");
};

var tagnuul = Object.create(hun);
tagnuul.name = "naraa";

tsereg.haragdah();
tsereg.hoolloh();
tsereg.hodloh();
tsereg.tushaalAwah();
tsereg.baildah();

tagnuul.tushaalAwah("China ruu tagna ... ");
