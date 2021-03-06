// learn 53.Байгуулагч функц ашиглан объект үүсгэх, Функцийн prototype.

function Animal(нэр) {
  this.name = нэр;
  this.хооллох = function () {
    console.log(this.name + " хооллолоо. ");
  };
}

var a1 = new Animal("үхэр");
a1.хооллох();

// хариу: үхэр хооллолоо

/* animal гэсэн праметрруу нь үхэр гэсэн тэмдэгт мөр дамжуулж байгаа бөгөөд animal-ын нэр орж ирээд this.name = нэр гэсэнд хадгалагдана гэсэн үг.
Гэхдээ функцын 2 төрөлийн construction function урд талд new гэсэн түлхүүр үг хэрэглэх юм бол байгуулагч функц гэнэ. 
THIS нь глобал объектыг зааж байдаг. new түлхүүр үгийг ашиглавал this -ыг window объектыг заахыг болиулаад, хоосон  объект үүсгээд тэр хоосон  объектыг this рүү хийж өгөөд, үүссэн хоосон объект нь дээр name гэдэг хувьсагчийг газар дээр нь залгаж өгөөд мөн хооллох залгаж өгөөд үүссэн байгаа тэр бэлтгэсэн объектыг буцаагаад new гэдэг чинь return хийгээд а1 өгч байна. Тэр үүсч байгаа объект чинь а1 болж хувирна гэсэн үг. 
*/

// new байхгүй бол ингэж бичигдэнэ.
//  new хэрэглэхгүй бол this нь window глобал объетийг зааж байгаа учир this.name өгөөд this.name нь window глобал объетод байхгүй учир new гэсэн шинэ объет зааж өгч байгаа юм.
function Animal(нэр) {
  var obj = Object.create(Animal.prototype);
  obj.name = нэр;
  obj.хооллох = function () {
    console.log(obj.name + " хооллолоо. ");
  };
  return obj;
}

var a1 = Animal("үхэр");
a1.хооллох();

// javascript-ийн объет болгоны дотор prototype хувьсагч байдаг
// javascript-ийн функц (function) болгоны дотор тусдаа prototype объет үүссэн байдаг

// байгуулагч функц ашиглаж объетийг үүсгэж бичих арга
function Animal(нэр) {
  this.name = нэр;
}
Animal.prototype.хооллох = function () {
  console.log(this.name + " хооллолоо. ");
};
var a1 = new Animal("ямаа");
a1.mailah = function () {
  console.log(this.name + " майллаа ");
};
a1.хооллох();
a1.mailah();
var a1 = new Animal("үхэр");
a1.хооллох();
var a1 = new Animal("адуу");
a1.хооллох();

// function Animal() {}
// Animal.prototype.хооллох = function () {
//   console.log(" хооллолоо. ");
// };

// var a1 = new Animal();
// a1.хооллох();

// Өгөгдлийн бүтэц хэлээр үздэг.
