var uiController = (function () {
  // ui функц маань нэг өгөгдөл нэг функцтай боллоо гэсэн үг
  var x = 100;

  function add(y) {
    return x + y;
  }

  return {
    publicAdd: function (a) {
      // closure функц
      //
      a = add(a);
      console.log("Боловсруулсан утга : " + a);
    },
  };
})();

var financeController = (function () {})();

var appController = (function (uiController, fnController) {
  //appController дотороос uiController руу хандаж чадна. Ягаад гэвэл appController руу uiController-ыг дамжуулчихсан байна. Ижилхэн нэртэй болчихсон байна. Өөр нэртэй ч өгч болно.
  uiController.publicAdd(50);
})(uiController, financeController);

// Гар нь дээр товч дарагдах event- ийг олж авна. https://developer.mozilla.org/en-US/docs/Web/Events
// Товчын event нийт дэлгэцэн дээр бичигддэг. Товч болгон өөрийн гэсэн тоотой байдаг.
// http://keycodes.atjayjo.com/  --> Товчны тоо гаргадаг сайт.
// event.keyCode === 13 --> орчин үеийн Broser дээр ажилладаг.
// event.which === 13   --> хуучиэ дээр үеийн Broser дээр ажилладаг.

//HTML дээр value гэдэг жинхэнэ утга байдаг харин placeholder нь түр зуурынх байдаг. Дээр нь юм бичиж болдог.
// Жишээ нь <input value="682565" type="text" class="add__description" placeholder="Add description">

var hunController = (function () {
  var bodol = "JAvascript толгой эргүүлмээр юм. ";
  function tusGuih() {}
  function huchilTurugchAgaaraasSorjTsusruuOruulah() {}
  return {
    yrih: function () {
      bodol = "JAvascript лаг ";
      huchilTurugchAgaaraasSorjTsusruuOruulah();
      tusGuih();
      console.log("hi");
    },
  };
})();

hunController.yrih();
