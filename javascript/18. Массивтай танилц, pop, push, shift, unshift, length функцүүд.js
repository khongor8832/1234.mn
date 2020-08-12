// learn 18 Массивтай танилц, pop, push, shift, unshift, length функцүүд

// Массив нь олон өгөгдлийн цуглууллага юм.

var helnuud = ["Javascript", "php", "c#", 'lisp', "python"];
helnuud[1] = "GO";                                   // Массивт байгаа PHP хэлийг GO хэлээр сольж байна.
console.log(helnuud[3]);                             // Массивт байгаа 3-р index-н python хэлийг хэвлэж байна.
helnuud[4] = "C++";                                  // Массивруу өгөгдөл нэмэхэд 2 арга байдаг. 1-р арга C++ хэл нэмж байна.
helnuud[helnuud.length] = "Assembler";               // 2-р арга энэ байна. Assembler хэл нэмж байна.

// helnuud.unshift('perl')                           // Массив руу урд талд хэл нэмж байна.
// helnuud.shift('perl')                             // Массиваас урд талаас нь хэл хасаж байна.
// console.log(helnuud.shift());                     // Массивт байгаа хэлнээс урд талаас нь устгаад хэвлэж харуулж байна.

helnuud.push("aaa");                                 // Массив руу ааа гэсэн хэл хэмж байна.
console.log(helnuud.pop());                          // Массивт байгаа хэлнээс хамгийн сүүлчийнхийг хэвлэж харуулж байна.

console.log(helnuud[helnuud.length - 1]);            // Массивт байгаа хэлнүүдрүү хандаж байна. Энэ тохиолдолд хамгийн сүүлчийн хэлрүү хандаж байна.
console.log(helnuud.length + "ш хэл байна");         //Массив хэдэн элементэйг хэлж өгч байна.
console.log(helnuud);                                // helnuud гэдэг массивыг хэвлэж байна.

console.log(helnuud.indexOf('c#'));                  // Массив дотороос элемент хайж олоод тэрний Index -г буцаах маш их хэрэглэгддэг.
console.log(helnuud.indexOf('lisp'));                // Байхгүй хэл бичвэл -1
if (helnuud.indexOf('lisp') === -1)
    console.log('Уучилаарайь lisp хэл манай жагсаалтанд байхгүй байна.');
else
    console.log(helnuud.indexOf('lisp') + ' индекс дээр энэ хэл байна.')

var ddd = ['1. Энэ сургалтаар бид юу сурч эзэмших вэ!',
    '2. Javascript хэл үүссэн түүх, хөгжлийн явц броузерийн дайн Ecmascript стандарт',
    '3.Javascript хэл юугаараа бусдаас өөр вэ? Яагаад ийм алдартай байна?',
    '4. VS Code editor суулгах тохируулах'];
console.log(ddd.pop());
console.log(ddd[0]);                                 //гэх мэт ажиллаж болно. 