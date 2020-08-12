// learn 18 Массивтай танилц, pop, push, shift, unshift, length функцүүд
// Массив нь олон өгөгдлийн цуглууллага юм.

var helnuud = ["Javascript", "php", "c#", "python"];
helnuud[1] = "GO"; //Массивт байгаа PHP хэлийг GO хэлээр сольж байна.
console.log(helnuud[3]); //Массивт байгаа 3-р index-н python хэлийг хэвлэж байна.
helnuud[4] = "C++"; //Массивруу өгөгдөл нэмэхэд 2 арга байдаг. 1-р арга C++ хэл нэмж байна.
helnuud[helnuud.length] = "Assembler"; // 2-р арга энэ байна. Assembler хэл нэмж байна.

// helnuud.unshift('perl')                        //Массив руу урд талд хэл нэмж байна.
// helnuud.shift('perl')                          // Массиваас урд талаас нь хэл хасаж байна.
// console.log(helnuud.shift());                // Массивт байгаа хэлнээс урд талаас нь устгаад хэвлэж харуулж байна.

helnuud.push("aaa"); //Массив руу ааа гэсэн хэл хэмж байна.
console.log(helnuud.pop()); // Массивт байгаа хэлнээс хамгийн сүүлчийнхийг хэвлэж харуулж байна.

console.log(helnuud[helnuud.length - 1]); // Массивт байгаа хэлнүүдрүү хандаж байна. Энэ тохиолдолд хамгийн сүүлчийн хэлрүү хандаж байна.
console.log(helnuud.length + "ш хэл байна"); //Массив хэдэн элементэйг хэлж өгч байна.
console.log(helnuud); // helnuud гэдэг массивыг хэвлэж байна.
