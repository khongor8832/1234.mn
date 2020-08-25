// learn 65. Хэрэглэгчийн оруулсан утгыг авах
// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  var DOMstring = {
    // HTML хадгалах объект дотор хувьсагчид хадгалж байна.
    inputType: ".add__type",
    inputDescrition: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  }; // value гэдэг утгыг авна.
  return {
    getInput: function () {
      //Public service бусад  контроллероос ишээ хандаж чадна.
      return {
        type: document.querySelector(DOMstring.inputType).value, // Dom -оос нэмэх хасах-ын add__type buuton type гэсэн утганд хадгалж байна.
        description: document.querySelector(DOMstring.inputDescrition).value, // Dom -оос утга оруулдаг хэсгийн add__description buuton description гэсэн утганд хадгалж байна.
        value: document.querySelector(DOMstring.inputValue).value, // Dom -оос орлого зарлагын дүнг оруулдаг хэсгийн add__value buuton value гэсэн утганд хадгалж байна.
        // Html -тэй холбож байгаа кодуудаа нэг бичээд js кодуудаа нэг газар бичихвэл дараа нь дизианер html class нэрийг сольсон тохиолдолд засахад амар байдаг.
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
  var DOM = uiController.getDOMsrting();
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    console.log(uiController.getInput());
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт гаргана.
    // 4. Төсөвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };
  document.querySelector(DOM.addBtn).addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function () {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
