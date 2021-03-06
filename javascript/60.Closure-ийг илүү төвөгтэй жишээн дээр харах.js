// Хоосон массив үүсгэх
// var arr = new Array();

// Товчлоод хоосон массивийг ингэж үүсгэдэг.
var a = []; //хоосон массив үүсгэж байна.
a.push(34); // a гэдэг массивруу push  ашиглан дотор элемент нэмдэг.
a.push("hello"); // a гэдэг массивруу push ашиглан Юу ч хамаагүй нэмж болно. Одоо hello гэсэн string нэмий
a.push(function () {
  // a гэдэг массивруу push ашиглан функц оруулж байна.
  console.log("Сайн уу, Массив дотроос мэндчилж байна... ");

  return function () {
    // Массив доторх функц, тэрний доторх функцаас буцааж байна.
    console.log("Массив доторх функц доторх функцаас хэвлэв.");
    return function () {
      // Массив доторх функц, тэрний доторх функцны доторх функцаас буцааж байна
      console.log("... Inception!!! ... ");
    };
  };
});
a[2]()()(); // a[2]() массив доторх 2 байгаа функц ажиллаж байна. Дараагийн 2 хаалт доторх 2 функцыг дуудаж ажиллуулж байна.

//Closure жишээ руу орж байна.
/* Энэ функц нь дотороо массив бэлдэх юм. */
function prepare() {
  // prepare - бэлдэх гэсэн нэртэй функц үүсгэж байна.
  var arr = []; // Функц дотороо arr - гэсэн хоосон массив зарлав.
  for (
    var i = 0;
    i < 3;
    i++ // 3 ширхэг функцыг нь массивруу хийе. Тэгэхлээр давталт хэрэглэнэ.
  ) {
    /* i нь 0 байж байхад массивруу хийнэ. i нь 1 болоход массивруу хийнэ. i нь 2 байж байхад массивруу хийнэ. 
                                                                    Тэгээд давталт дуусаад энэ функц дуусна. Функц болгон дотороо нэг ширхэг хэвэлдэг юмтай.*/
    arr.push(function () {
      // arr - гэсэн массивруугаа push ашиглан функц хийнэ.
      console.log(i); // Энэ функц i хэвлэнэ.
    });
  }
  console.log("i бол давталт дууссаны дараа : " + i);
  return arr; // Энэ функц маань цуглуулсан массиваа буцаан.
}

var massive = prepare(); //Дараа нь энэ функцаа дуудна. massive гэдэг хувьсагчинд авчихий Тэгэнгүүтээ prepare гэдэн функцаа дуудна.
// Тайлбар: prepare гэдэг функц нь дуудагдаад энэ arr массивруу энэд дуудагдсан 3 функцыг хийгээд arr ьн буцаахаар massive гэдэг хувьсагчруу ороод ирнэ. Дуудаад хэвлэнэ.

massive[0](); // Хамгийн эхнийх нь дуудах болохоор ингэж дуудна.
massive[1](); // Хоёрдугаар нь дуудах болохоор ингэж дуудна.
massive[2](); // Гуравдугаар нь дуудах болохоор ингэж дуудна.
// Хариулт: 3 3 3 гарч байна. ягаад вэ?

// -----------Дээрх жишээтэй төстэй өөрчилж арай өөрөөр бичиигдсэн байгаа ижилхэн мөрүүдэд тайлбар хийгээгүй болон. ----------------------------------
function prepare() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        //Annanys функц руу j гэдэг хувьсагч дамжуулдаг болшож өөрчиллөө.
        return function () {
          console.log(j); //  j хэвлэе. Тэгэнгүүтээ энэ функцыг зарлалт нь дээр нь буюу газар дээр нь ажиллуулаад i хувьсагчыг
          // дамжуулчихий.
        };
      })(i)
    ); // IIFE нэн даруй дуудаж ажиллуулж байна.
  }
  console.log("i бол давталт дууссаны дараа : " + i);

  return arr;
}

var massive = prepare();
/* Тайлбар: Нэмж байх үеддээ IIFE шууд ажиллууллаад байгаа юм.  Давталтан дээр i чинь 0 үе дээр 0 утгатайгаар дуудчихсан гэсэн үг За 0 - оор дуудахад  arr.push(function(j){ -->  
    -ын j руу 0 орж ирнэ. i нь 0 болохоор энэ функцыг дуудахаар arr.push(function(j){ --> аргемэнтээр нь j орж ирнэ. j - ээр 0 орж ирхээр энэ  
    arr.push(function(j){     
        return function(){
            console.log(j);         ---->  функцыг return хийхнэ. Гэхдээ j нь 0 байгаа. Эхний давталтан дээр j == 0 гээд харчихий.
Хэдийгээр  function(){
              console.log(j);
                      };        --> энэ функцыг ажиллуулаагүй байгаа биз Кодоор нь дамжуулсан доор дуудахаар  massive[0](); --> j хэвлэхийг оролдно. j гэдэг код орж ирнэ.  0 гэдэг 
кодтой биш бид нар дуудаагүй учир IIFE хэрэглээгүй учир j гэдэгтэйгээ орж ирнэ. Гэтэл гаднах функц нь буюу (function(j){  энэ нь ажиллаад дуусчихсан }(i)); дуудаад ажилаад дуусчихсан.
Гэхдээ энэ ажиллаад дуусахаад j == 0 утгатайгаар ажиллаад дууссан. Тэгэхээр хамгийн эхний нэмэгдсэн энэ функцын кодонд  j - г хэзээ нэгэн цагт буцаагаад хэвлэх юм бол (function(j){ энэ функц 
J нь хэддтэйгээр ажиллаж дууссан вэ? тэр утгыг сэргээн санан гэсэн үг юм. Өөрөөр хэлбэл хамгийн эхний давталтаар (function(j){ энэ функц нь j нь 0 тэнцүү болоод дуусчихсан. Дараа нь буцаагаад 
тэр massive[0](); хамгийн эхний функцыг хэвлэж үзэх юм бол 0 гэсэн утгыг сэргээж хэвлэн гэсэн үг юм.  
Дараагийн давталт нь дээр i == 1 болоход ---> }(1)); --> болно гэсэн үг  (function(j=1){ гэж энэд орж ирнэ. J нь хамгийн суулд мэдэгдэж байсан утга 1 байнаа гээд   
     return function(){
             console.log(j); 
                        }; энэ closure маань мэдэх нь байна гэсэн үг юм. тэрийг нь буцаагаад сэргээж хэвлэх massive[1](); буюу 1 гэж хэвлэж байна.
Хамгийн сүүлийнх ч бас ялгаагүй i-д нь 2 орж ирээл j нь 2 тэнцүү болоол хамгийн сүүлд j 2 байсан болохоор massive[2](); хэвлэхэд 2 гэж гарна.  */

massive[0]();
massive[1]();
massive[2]();
// Тайлбар: javascript -ийн сурсан 1. closure 2. scope chain 3. IIFE 4. Давталт 5. Массив 6. Функцыг объетоор буцаагаад гаднан тэр объетыг дуудаж байна. 7. Функцаас функц буцааж байна.
//  Хариулт ==> i бол давталт дууссаны дараа : 3
// 0
// 1
// 2
