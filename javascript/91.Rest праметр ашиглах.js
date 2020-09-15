// learn 91.Rest праметр ашиглах.

// Функцын параметртэй ажиллах бас нэг арга.

printAge(1990, 2005, 1996);

// ES5
function printAge() {
  console.log(arguments);
  var arr = Array.prototype.slice.call(arguments);
  console.log(arr);
  arr.forEach(function (e) {
    console.log(e + " онд төрсөн хүний нас " + (2020 - e));
  });
  console.log(arr);
}

// ES6
/***************** ... Rest ашиглах ****************************/

printAge6(" эрэгтэй", 1990, 2005, 1996);

function printAge6(gender, ...yaers) {
  yaers.forEach((el) =>
    console.log(el + " онд төрсөн" + gender + " хүний нас " + (2020 - el))
  );
}
