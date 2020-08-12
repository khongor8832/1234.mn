// learn 17.Обьектийн функцтэй ажиллах

// 16 хичээлйин жишээ нь дээр ажиллав.
var h1 = {
  name: "Ц.Амарбат", // console.log('обьетийн функц юм.');
  job: "Программист", // Объектын өгөгдөлрүү хандахдаа . цэг тавьж хандахаас гадна
  hobbi: "ном унших", //[] хаалт буюу массиваар хандаж болдог.[' ']хаалтаа тавьж
  location: "Монгол", //байгаад ямар өгөгдөлрүү хандах гээд байгаагаа дотор бичдэг.
}; // Javascript-ыг хүчтэй болгосон. Обьетруу өгөгдөл хувьсагч
var h2 = {
  //байдлаар дамжиж болно гэсэн үг.
  name: "Ганзориг", //Property - гэдэг  name job hobbi address гэсэн 4 Property -тай байна. Address нь  location city  country 3 Property -тай БЙАна.
  job: "дизайнер",
  hobbi: "спорт",
  address: {
    // this гэдэг бол өөрийг нь агуулж байгаа тэр объектыг хэлнэ.
    location: "Алтай хотхон 32-115 тоот",
    city: "Улаабаатар",
    country: "Монгол",
  },
};
console.log(
  h1.job +
    " мэргэжилтэй " +
    h1.name +
    "-ийн хобби нь" +
    h1.hobbi +
    " юм. " +
    h1.name +
    " нь " +
    h1.location +
    " д амьдардаг."
);
console.log(
  h2.job + " мэргэжилтэй " + h2.name + "-ийн хобби нь" + h2.hobbi + "юм. "
);
var c1 = {
  name: "Javascript хэлийг эхнээс нь дуустал!",
  lessonCount: 116,
  totalMin: 904,
  author: h1,
  price: 199000,
  discount: 26900,
  computerhour: function () {
    //math гэдэг class javascript өөрт нь байж байдаг объект байх нь байна.
    return Math.round(this.totalMin / 60); //Math.round ойролцоогоор боддог.
  },
  computerMin: function () {
    return this.totalMin % 60; // % тэмдэг үлдэгдэлийн авдаг.
  },
};
var c21 = {
  name: "HTML, CSS хэлийг эхнээс нь дуустал!",
  lessonCount: 128,
  totalMin: 1217,
  author: h2,
  price: 146000,
  discount: 26900,
  information: function () {
    console.log(
      this.author.address.location +
        "-д амьдардаг " +
        this.author.name +
        '-ийн 2019 онд гаргасан "' +
        this.name +
        '"сургалт нь ' +
        this.price +
        " үнэтэй боловч яг одоогоор " +
        this.discount +
        " болж хямдарсан байна."
    );
  },
  computerhour: function () {
    return Math.round(this.totalMin / 60); //Math.round ойролцоогоор боддог.
  },
  computerMin: function () {
    return this.totalMin % 60; // % тэмдэг үлдэгдэлийн авдаг.
  },
}; //.information(); IIFE
c21.information();
console.log(c21.computerhour());
console.log(c21.computerMin());
console.log(
  c21.name +
    " " +
    c21.computerhour() +
    " цаг " +
    c21.computerMin() +
    "мин видеотой"
);
console.log(
  c1.name +
    " " +
    c1.computerhour() +
    " цаг " +
    c1.computerMin() +
    "мин видеотой"
);
console.log(
  c21.computerhour() +
    c1.computerhour() +
    " цаг " +
    (c21.computerMin() + c1.computerMin()) +
    " хичээл үзэхнээ. "
);
/*    var aaa = 'author'
       var bbb = 'hobbi'
console.log(c2[aaa][bbb]);// дараа нь c2 өгөгдөлрүү хандаж хувьсагчанд хадгалаад шүүж авч болно гэсэн үг Энийг динамик програмчилал хийх боломжтой болчихож байгаа юм. 
          console.log(c2['author']['address']['city']);
          console.log(c2.author.address.city); // энэ бичиглэл бол static програмчлын хэлбэр юм. */
