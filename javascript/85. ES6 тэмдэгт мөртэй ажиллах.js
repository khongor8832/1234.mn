// learn 85. ES6 тэмдэгт мөртэй ажиллах.

let level = 1;
let levelName = "Мангасын ам";
let zombieCount = 200;

const gameDuration = function (zombieCount) {
  return zombieCount * 3;
};
// ES5
let info =
  " Үе №" +
  level +
  " үеийн нэр : " +
  levelName +
  "Зомбигийн тоо : " +
  zombieCount +
  " бөгөөд энэ үе нь " +
  gameDuration(zombieCount) +
  " секунд үргэжилнэ.";
console.log(info);

// ES6 ` backtick
let gameinfo = ` Үе №${level} үеийн нэр : ${levelName} Зомбигийн тоо : ${zombieCount} бөгөөд энэ үе нь ${gameDuration(
  zombieCount
)} секунд үргэжилнэ.`;
console.log(gameinfo);

// Программын явцад ямар үсгээр эхэлдэг ямар үсгээр төгсдаг гэх мэтийг шалгадаг.
console.log(levelName.startsWith("Ма"));
console.log(levelName.endsWith("м"));
console.log(levelName.repeat(2));
console.log(`${levelName} `.repeat(10));
