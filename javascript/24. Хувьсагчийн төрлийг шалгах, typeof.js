// learn 24 Хувьсагчийн төрлийг шалгах, typeof

// javascript-ын хувьсагчид нь ямар төрөлтэй байна вэ гэдгийг шалгах арга
var x = "123";
var b = 456;
var c = true;

var d = {}; //обьектыг хоосон зарлаад болдог.
d.location = "UB"; //обьектыг ингэж бичээд дуудаад ажиллуулж болдог.
d.koordinate = 123234;

var e = []; //Массивыг хоосон зарлаад болдог.
e.push(789); // Массивруу утга хийж байна.

var z = null;
console.log(typeof x);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(d.location);
console.log(e);
console.log(typeof e);
console.log(typeof undefined);
console.log(typeof z); //null утга object гарч байна. Хөшигний цаан гэдгээр ярина. Программист нар энийг алдаа гэж үздэг байгаа
// Жишээ нь
if (typeof x === "number") console.log("Энэ бол тоо ");
else console.log(x + "-ийн төрөл нь " + typeof x);
//Ингээд бусад тарлүүийн шалгаад хэрвээ number (гэх мэт) байвал тийм юм хий гэж програм хэрэглэдэг.
