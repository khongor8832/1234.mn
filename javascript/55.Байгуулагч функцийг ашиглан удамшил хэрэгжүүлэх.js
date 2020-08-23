// learn 55.Байгуулагч функцийг ашиглан удамшил хэрэгжүүлэх.

/*Матер --> Амьтан --> хүн */
/*Байгуулагч функцын нэрийг томоор бичиж javascript delevoper-ууд амаар тохирсон зарчим байдаг. Энгийн
функцууд жижигээр бичигдэг. Байгуулагч функцыг заавал new гэж бичигдэнэ.   */

// Байгуулагч функц:

// function Materi(une) {
//     this.une = une;
//     this.haragdah = function () {
//         console.log(this.une + "үнэтэй матери байна. ");
//     };
// }
// var m1 = new Materi(1000000);
// m1.haragdah();

/*
 энэ функц нь haragdah гэх функцын copy дотор бүх матери, хүн,  амьтан хууллаад broser-ын санах ойд
байршуулдаг болохоор удаан ажиллана.Үүнээс сэргийлэхийн тулд харагдах object-ийг материйн prototype дотор
хийгээд өнгө. Бүх функц  prototype объектай байдаг.*/
// Прогрраммистууд ер нь гаднаас өгч байгаа үнэ дотор хадгалагдаж байгаа үнийн нэрийг ижилхэн өгчихсөн байдаг.

// function Materi(une) {
//     this.une = une;
// }

// Materi.prototype.haragdah = function () {
//     console.log(this.une + "үнэтэй матери байна. ");
// }
// var m1 = new Materi(1000000);
// m1.haragdah();

//  1. Хийх алхам
//  Доорх жишээ бол: Амьтангаар орж ирсэн une-ийг call-ар дажуулаад дараа нь амьтаны байгууллагчаар орж ирсэн
// ungu call функцаар Materi дажуулчихна.

// Матери функц үүсгэж өгсөн
function Materi(une, ungu) {
  this.ungu = ungu;
  this.une = une;
}

// Матери гадна haragdah функц үүсгэж өгсөн  Хэрвээ дотор нь haragdah функц үүсгэж өгвөл удаан болно.
Materi.prototype.haragdah = function () {
  console.log(this.une + " үнэтэй матери байна. ");
};

//Amitan функц үүсгэж өгсөн
function Amitan(nas, une, ungu) {
  Materi.call(this, une, ungu);
  this.nas = nas;
}

// Матери-д Amitan объет удамшуулж өгч байна.
Amitan.prototype = Object.create(Materi.prototype);
Amitan.prototype.hoolloh = function () {
  console.log(
    this.nas +
      " настай " +
      this.une +
      " үнэтэй " +
      this.ungu +
      " өнгөтэй үнээ хоололлоо "
  );
};

//Хүн функц үүсгэж өгсөн
function Хүн(нэр, нас, үнэ, өнгө) {
  Amitan.call(this, нас, үнэ, өнгө);
  this.нэр = нэр;
}

// Amitan-д Хүн объет удамшуулж өгч байна.
Хүн.prototype = Object.create(Amitan.prototype);
Хүн.prototype.setgeh = function (bodol) {
  console.log(
    this.нэр +
      " нэртэй " +
      this.nas +
      " настай " +
      this.une +
      " үнэтэй " +
      this.ungu +
      " өнгөтэй хүн " +
      bodol +
      " гэж бодлоо "
  );
};

// unee -нд утга өгөөд хэвлэж байна.
var unee = new Amitan(20, 40000, "alag");
unee.haragdah();
unee.hoolloh();

// p1 -нд утга өгөөд хэвлэж байна.
var p1 = new Хүн(" Болдоо ", 18, 150, " шар ");
p1.haragdah();
p1.hoolloh();
p1.setgeh("Javascript лайтай юмааа");

//  2. Хийх алхам Materi Amitan  2 байгуулагч функцыг гар аргаар залгаж байна гэсэн үг.

// Object.create -нь шинээр объект үүсгэж өгдөг. Гэхдээ ямар нэгэн объектоос загвар болгож аргументаар нь дажуулсан объектоос
// загвар болгож үүсгэдэг. Дээрх жишээ нь дээр загьар нь Materi байна.
// Ийм байдлаар байгуулагч функц ашиглаж удамши хийхнээ. Гэхдээ энэ бол
