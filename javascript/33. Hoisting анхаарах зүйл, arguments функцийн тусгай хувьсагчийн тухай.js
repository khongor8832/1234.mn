// learn 33. Hoisting анхаарах зүйл, arguments функцийн тусгай хувьсагчийн тухай
printAge();
// console.log(age);
var age = 23;
// console.log(age);
printAge();
function printAge() {
  // var age = 33; //энэ age нь глобал хувьсагчаасаа давуу эрхтэй байдаг.
  console.log(age);
}

/******************* Arguments нэмэлт мэдээлэл ***************** */

function printAgeSee(name, country, city, age) {
  console.log(arguments); // arguments-ыг javascript engne үүсгэдэг.
  console.log(
    arguments[1] +
      " улсын " +
      city +
      " хотод амьдардаг " +
      name +
      " нь " +
      age +
      " настай. "
  );
}
printAgeSee("Нараа", "Монгол", "Улаабаатар", "18");
