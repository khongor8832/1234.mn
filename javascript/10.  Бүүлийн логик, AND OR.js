// learn 10 Бүүлийн логик, AND -> &&, OR->||

// Conditional Statements
// Өмнө хичээллээр if, else ганц нөхцөл шалгаж байсан бол энэ удаагын хичээлээр олон давхар нөхцөлүүдийг хэрхэн шалгадаг талаар үзэцгээе.
// Нөхцөл шалгаж байхад биелэгдэж байвал true биелэгдэхгүй байвал false 2 утга заадаг.

// && -ын тухай:
//Нэр нь and бичэглэл нь && -> бөгөөд, ба гэсэн утгатай юм. 2 нөхцөл байлаа гэж бодоход 2-уулаа билэгдэж байж true утга заадаг. 2уулаа юмуу аль нэг нь биелэгдэхгүй байвал false утга заадаг.

var dun = 94;
//энэ 3 гурвууллаа биелэгдэж байж true болж нөхцөл билэгдэнэ.
if (dun > 89 && dun < 95 && 100 > dun) {
  console.log(" true Нөхцөл биелэгдлээ ");
} else {
  console.log("false Нөхцөл биелэгдлээ ");
}

// || -ын тухай:
//Нэр нь or бичэглэл нь || -> эсвэл гэсэн утгатай нөхцөлийн аль нэг нь билэгдэж байвал true болдог.
// 95<A, 95>A->89, 89>B+>87, 87>B>84, 84>C>75, 74>D>65, 65>F>509

var dun = 100;
var hahuulMongo = 0;
var hamaatan = false;
var nadadTaalagddag = false;

if (
  (dun >= 90 && dun <= 100) ||
  hahuulMongo > 500000 ||
  hamaatan === true ||
  nadadTaalagddag === true
) {
  console.log("Та " + dun + " оноотой A авлаа ");
} else {
  if (
    (dun >= 80 && dun < 89) ||
    hahuulMongo > 500000 ||
    (hamaatan === true && nadadTaalagddag === true)
  ) {
    console.log("Та " + dun + " оноотой B авлаа ");
  } else {
    if (
      (dun >= 70 && dun < 79) ||
      hahuulMongo > 500000 ||
      (hamaatan === true && nadadTaalagddag === true)
    ) {
      console.log("Та " + dun + " оноотой C авлаа ");
    } else {
      if (
        (dun >= 60 && dun < 69) ||
        hahuulMongo > 500000 ||
        (hamaatan === true && nadadTaalagddag === true)
      ) {
        console.log("Та " + dun + " оноотой D авлаа ");
      } else {
        console.log(" Уучилаарай та F авлаа ");
      }
    }
  }
}
