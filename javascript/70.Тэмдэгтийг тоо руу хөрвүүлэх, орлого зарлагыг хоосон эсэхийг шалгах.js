// learn 70.Тэмдэгтийг тоо руу хөрвүүлэх, орлого зарлагыг хоосон эсэхийг шалгах
// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  //pravite объект
  var DOMstring = {
    inputType: ".add__type",
    inputDescrition: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
    incomeList: ".income__list",
    expenseList: ".expenses__list",
  };
  return {
    //public функц
    getInput: function () {
      return {
        type: document.querySelector(DOMstring.inputType).value,
        description: document.querySelector(DOMstring.inputDescrition).value,
        /*********************************************************** */
        // parseInt дотор хийгээд өглөө.
        value: parseInt(document.querySelector(DOMstring.inputValue).value),
        /******************************************************** */
      };
    },
    //public функц
    getDOMsrting: function () {
      return DOMstring;
    },

    clearFields: function () {
      var fields = document.querySelectorAll(
        DOMstring.inputDescrition + ", " + DOMstring.inputValue
      );
      //convert List to Array
      var fieldsArr = Array.prototype.slice.call(fields);
      fieldsArr.forEach(function (el, index, array) {
        el.value = "";
      });
      fieldsArr[0].focus();
    },

    //орлого зарлага оруулсаны дараа цэвэрлэдэг функц
    addListItem: function (item, type) {
      // 1.Орлого зарлагын элементийг агуулсан html-ийг бэлтгэнэ.
      var html, list;
      if (type === "inc") {
        list = DOMstring.incomeList;
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">$$DESCRIPTION$$</div><div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else {
        list = DOMstring.expenseList;
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">$$DESCRIPTION$$</div><div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      // 2.Тэр  html дотороо орлого зарлагын утгуудыг REPLACE ашиглаж өөрчилж өгнө.
      html = html.replace("%id%", item.id);
      html = html.replace("$$DESCRIPTION$$", item.description);
      html = html.replace("$$VALUE$$", item.value);
      // 3.Бэлтгэсэн HTML ээ DOM руу хийж өгнө.
      document.querySelector(list).insertAdjacentHTML("beforeend", html);
    },
  };
})();

// Санхүүтэй ажиллах контроллер
var financeController = (function () {
  //pravite функц
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  //pravite функц
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  //pravite объект
  var data = {
    items: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
  return {
    addItem: function (type, desc, val) {
      var item, id;
      if (data.items[type].length === 0) id = 1;
      else {
        id = data.items[type][data.items[type].length - 1].id + 1;
      }

      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        item = new Expense(id, desc, val);
      }

      data.items[type].push(item);

      return item;
    },

    seeData: function () {
      return data;
    },
  };
})();

// Програмын холбогч контроллер
var appController = (function (uiController, fnController) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    var input = uiController.getInput();
    /********************************************* */
    // орлого зарлага оруулдагын 2уулан дээр юм бичиж байж ордог боллоо
    if (input.description !== "" && input.value !== "") {
      // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
      var item = fnController.addItem(
        input.type,
        input.description,
        input.value
      );

      // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт гаргана.
      uiController.addListItem(item, input.type);
      uiController.clearFields();

      // 4. Төсөвийг тооцоолно.
      // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
    }
    /*************************************** */
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
      console.log("Application started ...");
      setupEventListener();
    },
  };
})(uiController, financeController);
appController.init();
