// learn 95.Массивын reduce, filter функцүүдийг ашиглах.

// Цээжил

let arr = [10, 20, 30, 40, 50, 60];

// 1-р арга for
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log("1. Массивт For давталт ашиглах: " + sum);

// 2-р арга for ...of
sum = 0;
for (let e of arr) {
  sum += e;
}
console.log("2. Массивт For ...of давталт ашиглах: " + sum);

// 3-р арга forEach
//3.1. Arrow function ашиглах
sum = 0;
arr.forEach((e) => (sum = sum + e));
console.log("3.1. Массивт ForEach давталт дээр Arrow функц ашиглах: " + sum);
// 3.2. Аnonymous function ашиглах
sum = 0;
arr.forEach(function (e) {
  sum = sum + e;
});
console.log(
  "3.2. Массивт ForEach давталт дээр Anonymous функц ашиглах: " + sum
);

// 4.1-р арга Reduce
// reduce нь forEach -тай адилхан элемент болгоноор явна.
// Явахдаа 2 утга бариад явна. нэг дэхь утга нь тодорхой нэг тооцоог утга хадгалж явдаг. Тэрийг нь Аккумулятор гэдэг. Хоёрдахь утга нь одоо энэд явж байгаа тоо нь 10 20 30 гэх мэт Reduce нь бүгдийн боловсруулаад нэг утгаруу өгдөг.
let niilber = arr.reduce(add, 0);
function add(a, b) {
  return a + b;
}
console.log("4.1. Массивт Reduce ашиглаж давталт хийх: " + niilber);
// reduce b нь 10 20 30 гэх мэт хийгээд явна. Харин а руу нь хамгийн эхэнд 0 дамжуулаад дараа нь 0+10=10 дамжуулаад дараа нь 10+20=30 дамжуулаад гэх мэт элемент болгон дээр хийгдсэн үйлдлүүдийг дамжуулдаг.

// 4.2. Массивт Reduce давталт дээр mовчлоод Anonymous функц ашиглах:
let niilber1 = arr.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(
  "4.2. Массивт Reduce давталт дээр Anonymous функц ашиглах: " + niilber1
);

// 4.3. Массивт Reduce давталт дээр бичиглэлийг багасгаад Arrow функц ашиглах:
let niilber2 = arr.reduce((a, b) => a + b, 0);
console.log(
  "4.3. Массивт Reduce давталт дээр Arrow функц ашиглах: " + niilber2
);

// 4.4. Массивт Reduce давталт ашиглаж хамгийн бага элементийг олохдоо Arrow функц ашиглах:
let min = arr.reduce(findMin);
function findMin(min, b) {
  if (b < min) min = b;
  return min;
}
console.log("4.4. Массиваас Хамгийн бага утга нь: " + min);

// 4.4.1. Массивт Reduce давталт ашиглаж хамгийн бага элементийг олохдоо Anonymous функц ашиглах:
let min1 = arr.reduce(function (min, b) {
  if (b < min) min = b;
  return min;
});
console.log("4.4.1. Массив, Reduce, Anonymous Хамгийн бага утга нь: " + min1);

// 4.4.2. Массивт Reduce давталт ашиглаж хамгийн бага элементийг олохдоо гурвалсан операторArrow функц ашиглах:
let min2 = arr.reduce((min, b) => (b < min ? b : min));
console.log(
  "4.4.2. Массив, Reduce, Arrow, Гурвалсан оператор Хамгийн бага утга нь: " +
    min2
);

// 5 filter Массивын бүх элементээр давтаж яваад ямар нэг юмыг хайгаад олдох юм бол тэрийг өөр нэг шинэ массив дотор угсараад байдаг
//5.1. Массивт  filter давталт, Anonymous функц ашиглаж 20 хуваагддаг тоог олох:
let found = arr.filter(function (e) {
  if (e % 20 === 0) return e;
});
console.log(
  "5.1. Mассив, filter, Anonymous ашиглаж: 20 хуваагддаг тоог олох: "
);
console.log(found);

// 5.2. Массивт  filter давталт, Arrow функц ашиглаж 20 хуваагддаг тоог олох:
let found1 = arr.filter((e) => e % 30 === 0);
console.log("5.1. Mассив, filter, Arrow ашиглаж: 0 хуваагддаг тоог олох: ");
console.log(found1);
