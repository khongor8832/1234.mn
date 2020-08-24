var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }

  return {
    publicAdd: function (a) {
      a = add(a);
      console.log("Боловсруулсан утга : " + a);
    },
  };
})();

var financeController = (function () {})();

var appController = (function (uiController, fnController) {
  uiController.publicAdd(50);
})(uiController, financeController);
