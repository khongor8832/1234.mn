// Learn 92. Default параметер ашиглах.

// Функцын параметртэй ажиллах бас нэг арга.

// ES5   Default параметер
function translate(question, lang) {
  if (lang === undefined) lang = "en";
  switch (lang) {
    case "mn":
      console.log("Дараах өгүүлбэрийг орчуул : " + question);
      break;
    case "en":
      console.log("Translate following sentence : " + question);
      break;
  }
}
translate("what is your job ", "mn");
translate("Таныг хэн гэдэг вэ? ");
translate("Таныг хэн гэдэг вэ? ");
translate("Таныг хэн гэдэг вэ? ");
console.log("------------------------------------------");

// ES6   Default параметер
function translate6(question = "Асуултаа дамжуулна уу?", lang = "en") {
  switch (lang) {
    case "mn":
      console.log("Дараах өгүүлбэрийг орчуул : " + question);
      break;
    case "en":
      console.log("Translate following sentence : " + question);
      break;
  }
}
translate6("what is your job ", "mn");
translate6("Таныг хэн гэдэг вэ? ");
translate6("Таныг хэн гэдэг вэ? ");
translate6();
