// learn 7 Үндсэн операторууд, утга олголт арифметик үйлдэл, typeof

// Үндсэн операторуудын жишээ

var year, yaerJohn, yaerMark;

year = 2019;
ageJhon = 17;
ageMark = 45;
console.log("Энэ жил бол :" + year);

yaerJohn = year - ageJhon;
yaerMark = year - ageMark;
console.log("Жоны төрсөн жил бол " + yaerJohn);
console.log("Таркын төрсөн жил бол " + yaerMark);

// 15 жилийн дараа хэдэн он байх вэ?
var future = year + 15;
console.log(" 15 жилийн дараа " + future + " он байна ");
// 18 жилийн дараа Марк хэдэн настай байх вэ?
var mark = year + 18;
var markagee = mark - yaerMark;
console.log("18 жилийн дараа Марк " + markagee + "настай байна ");

console.log(year * 2); //үржих
console.log(400 % 3); // хуваагаад гарах үлдэгдэлийг гаргах
console.log(2 ** 2); // кавдратаар үржүүлэх
console.log(2 ** 3); // куб үржүүлэх  хойн байгаа нь зэрэг нь гэсэн үг

var johnOlder = ageJhon < ageMark; // их баг тэнцүүг олох frue false гэж шалгаж байна
console.log(johnOlder);

console.log(typeof johnOlder); // ямар төрлийг олдог жн joinOlder бол boolen төрөл true , false шалгсан

var name = "boldoo";
console.log(typeof name);
// жн name бол string төрөлтэй байна.

var address;
console.log(typeof address);
// undefined - хоосон

var address = null;
console.log(typeof address);
// object хоосон шүү гэж программистууд бичиж өгдөг

console.log(3 / 2);
console.log(3 / "2");

console.log(3 / "b");
//NAN - Not A Number  тоог үсгээр хуваах гээд байна.
console.log(3 / 0);
// infinity - хязгааргүй
