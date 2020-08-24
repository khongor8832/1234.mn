var uiController = (function () {
  var x = 100;

  function add(y) {
    re;
  }
  console.log("hello ");
})();

var financeController = (function () {
  var y = 21;
  console.log("finance " + y);
})();

var appContoller = (function (uiController, financeController) {
  uiController.add(50);
})(uiController, financeController);
