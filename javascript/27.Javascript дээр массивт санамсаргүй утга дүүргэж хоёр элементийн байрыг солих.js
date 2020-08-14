// learn 27 Javascript дээр массивт санамсаргүй утга дүүргэж хоёр элементийн байрыг солих
// Бодлого: 4
// 10 элементэй массивт санамсаргүй тоо дүүргээд хамгийн их, хамгийн бага хоёр элементийн байрийг соль
var arr = [];
for (var i = 1; i <= 10; i++) {
    var too = Math.random() * 100;
    var floortoo = Math.floor(too);
    // console.log(too + " тоймлоод: " + floortoo);
    console.log(floortoo);
    arr.push(floortoo);
}
// console.log(arr);
// Массивт байгаа элементийн хамгийн бага утгыг index-тэй хамт хэвлэж байна.
var minToo = 100
var minTooIndex = -1;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minToo) {
        minToo = arr[i];
        minTooIndex = i;
    }
}
console.log("Хамгийн бага элемент нь " + minToo + ", тэрний индекс нь : " + minTooIndex);
// Массивт байгаа элементийн хамгийн их утгыг index-тэй хамт хэвлэж байна.
var maxToo = 0
var maxTooIndex = -1;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxToo) {
        maxToo = arr[i];
        maxTooIndex = i;
    }
}
console.log("Хамгийн их элемент нь " + maxToo + ", тэрний индекс нь : " + maxTooIndex);
// Массивт байгаа хамгийн их, хамгийн бага хоёр элементийн байрийг соль
var turHadgalsanUtga = arr[minTooIndex];
arr[minTooIndex] = arr[maxTooIndex];
arr[maxTooIndex] = turHadgalsanUtga;
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
