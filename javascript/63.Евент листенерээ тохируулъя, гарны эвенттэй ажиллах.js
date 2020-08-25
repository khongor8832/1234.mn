// learn 63 Евент листенерээ тохируулъя, гарны эвенттэй ажиллах

// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();

// Санхүүтэй ажиллах контроллер
var financeController = (function () {})();

// Програмын холбогч контроллер
var appController = (function (uiController, fnController) {
  // enter болон add.btn товчийг 2ийг дарахад ажиллах нэгтэж нэг функц болгож байна.
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    console.log("Дэлгэцээс өгөгдлөө авах хэсэг. ");
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт гаргана.
    // 4. Төсөвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };
  // Энэ бол add.btn товчийг дарахад ажиллах EventListener
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
  // Энэ бол enter товчийг дарахад ажиллах EventListener
  document.addEventListener("keypress", function () {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
//  event.which === 13 дээр үеийн брозерт ингэж дууддаг.
// keypress нь товчийг дараад авахад ажиллах MDN сайтын keyboard event дотор байгаа.
// document.addEventListener("keypress", function (event) {
// console.log(event); Ингэж хэвлэж байж enter товчны ямар кодтойг мэдэж авна.

// http://keycodes.atjayjo.com/ keyboard-ны товчны тоо эндээс харж болно.
