// learn 12 switch оператор ашиглах
//------------------ ямар мэргэжилтэй хүн ямар ажил хийдгийг олсон------------------------
var name = "Нараа";
var job = "";
if (job === "багш") {
  console.log(name + " бол хүүхдүүдэд хичээл заадаг.");
} else if (job === "зураач") {
  console.log(name + " гое зураг зурдаг.");
} else if (job === "программист") {
  console.log(name + " бол вэб програм зохиогч юм ");
} else
  console.log(name + " бол өөр ямар нэг ажил хийдэг юм байна. Бүү мэд... ");

// ----------switch ашиглаж ямар мэргэжилтэй хүн ямар ажил хийдгийг олсон -------------------
// switch - шилжих //  case - тохиолдол  //  break - хойшихийг нь хэрэгсдэггүй
var name = "Болд";
var job = "багш";
switch (job) {
  case "багш":
    console.log(name + " бол хүүхдүүдэд хичээл заадаг.");
    break;
  case "зураач":
    console.log(name + " гое зураг зурдаг.");
    break;
  case "программист":
    console.log(name + " бол вэб програм зохиогч юм");
    break;
  default:
    console.log(name + " бол өөр ямар нэг ажил хийдэг юм байна. Бүү мэд...");
}
// ------------------------  дүн олох: 1 ------------------------------
var name = "Ганаа";
var job = "сурагч";
var avgDun = 20;
if (avgDun >= "90") {
  console.log(name + " бол онц сурлагтан.");
} else if (avgDun < 90 && avgDun >= 80) {
  console.log(name + " бол сайн сурлагтан.");
} else if (avgDun < 80 && avgDun >= 70) {
  console.log(name + " бол дунд сурлагтан.");
} else console.log(name + " бол муу сурлагтан.");
// ------------------------ Switch ашиглаж дүн олох ------------------------------
var name = "Ганаа";
var avgDun = 100;
switch (true) {
  case avgDun >= 90:
    console.log(name + "бол онц сурлагтан.");
    break;
  case avgDun < 90 && avgDun >= 80:
    console.log(name + " бол сайн сурлагтан.");
    break;
  case avgDun < 80 && avgDun >= 70:
    console.log(name + " бол дунд сурлагтан.");
    break;
  default:
    console.log(name + "  бол муу сурлагтан.");
}
// 111111111111111111111111111111111111111111111111111111111111111