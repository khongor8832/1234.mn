// learn 31.  хувьсагчийн undefined утга ямар учиртай вэ.

/* Ямар нэгэн хувьсагчид утга өгчихөөд тэр утгыг хүчингүй хоослох шаардлага гарвал яах вэ гэвэл энэ тохиолдолд var a = null; гэж хэрэглэдэг. 
NULL гэдэг бол програмист хүн өөрөө хувьсагчыг хоослохыг хүссэн үед хэрэглэдэг. 
Undefined гэдэг бол javascript-ын  execution context-ын дотор анх хувьсагчыг бэлдэхдээ энэ ямар утга өгөөгүй байгаа шүү гэж тусгай утга юм гэж илэрхийлдэг*/

var a;
// console.log(a);
var a = undefined;
// console.log(b);
// болохоороо b нь defined байна гэж зааж байна.
// undefined алдаа өгөгхгүй not defined алдаа өгч байна.
// undefined гэдэг бол утгатай байж байгаа санах ойд зай эзэлдэг утга юм. Батлахын тулд дараах жишээ харна уу ?
if (a === undefined) {
  console.log("a нь undefined байна. ");
} else {
  console.log("a нь defined байна. ");
}

// ингэж програмчлах болох боловч буруу програмчилал
// undefined гэдэг програмист утга өгөөгүй байна. гэсэн үг
// хэрвээ програмист undefined утгыг энд тэнд өгвөл дараа нь жинээ а-д undefined утга өгсөн билүү өгөөгүй билүү мэдхээ байдаг.  Утган дээр undefined утга өгч хэрэглэхийг хориглоно.
// global execution context эхлээд бүх утгыг undefined гэж хадгалдаг
console.log(a); //дээрээс дуудахад undefined гарч байна. global execution context ажиллаж байна
//доороос дуудахад 123 гарч байна
var a = 123;
var b = "boldoo";
var c = true;
var d;
var z = undefined;
if (b === undefined) {
  console.log("a нь undefined байна. ");
} else {
  console.log("a нь defined байна. ");
}

console.log(a);
