// learn 65.Бүх үйл ажиллагааг шинээр эхлүүлэх функцийг бэлтгэх.

// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  var DOMstring = {
    inputType: ".add__type",
    inputDescrition: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstring.inputType).value,
        description: document.querySelector(DOMstring.inputDescrition).value,
        value: document.querySelector(DOMstring.inputValue).value,
      };
    },
    getDOMsrting: function () {
      return DOMstring;
    },
  };
})();
// Санхүүтэй ажиллах контроллер
var financeController = (function () {})();
// Програмын холбогч контроллер
var appController = (function (uiController, fnController) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    console.log(uiController.getInput());
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт гаргана.
    // 4. Төсөвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };

  var setupEventListener = function () {
    var DOM = uiController.getDOMsrting();
    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function () {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };
  return {
    init: function () {
      //Програмыг эхлүүлэх функц
      console.log("Application started ...");
      setupEventListener();
    },
  };
})(uiController, financeController);

appController.init(); //Програмыг эхлүүлэх
