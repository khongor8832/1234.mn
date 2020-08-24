// learn 57.Функцээс функцийн КОДЫГ буцаах нь.

function interviewQuestion(job) {
  if (job === "programmer") {
    return function (name) {
      console.log(name + " Та prototype гэж юу болохыг мэдэх үү? ");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log(name + " Та хэддүгээр ангид хэчээл орж чадах вэ? ");
    };
  } else if (job === "driver") {
    return function (name) {
      console.log(name + " Та мотоцикл барьж чадах уу? ");
    };
  }
}
var programmerQuestion = interviewQuestion("programmer");
var teacherQuestion = interviewQuestion("teacher");
var driverQuestion = interviewQuestion("driver");

programmerQuestion("Болдоо");
teacherQuestion("Гана");
driverQuestion("Сүхээ");

// Бас нэг хувилбарын бичиглэл Дээрх 2 бичлэлийг нэг болгож бичиж байна.
interviewQuestion("driver")("Халиунаа")("12")("123")[1]("Сараа");
