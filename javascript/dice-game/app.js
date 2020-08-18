// Аль тоглогч шоо шидэх вэ гэдгийг хадгална.
var acctivePlayer = 1;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score = [0, 0];
// Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шоо аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагч санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6 + 1);
//  Math.floor --> бүхэл тоог авдаг.
// Math.random --> саннамсаргүй бутархай тоо өгөх

/* Dom -ыг хэрхэн өөрчлөх вэ гэдгийг харуулах гэж байна. 
Санамасаргүй хаяж байгаа шоогоо 43 гэсэний оронд гаргий 
<div class="player-score" id="score-0">43</div> энэ div-ыг харгалзах Dom дотор байгаа объектыг хайж олно. Хайж олохдоо score-0 id-гаар хайж олно. 
Dom дотороос score-0 гэсэн элементийг гаргаад ирээ гэсэн Javascript код бичээд тэрний textэнд 43 гэсэний оронд саннамсаргүй унаж байгаа шоогоо хийж өгөх програм бичий 
window гэдэг глобал объект дотор document гэсэн объект байгаа 
Document - вэбийн нүдэнд харагдах хэсэг. Энэ Document нь Dom юм
querySelector --> Dom -ын элемэнт хайж олдог тусгай функц 
window.document.querySelector("#score-0")-> Ингээд тавингуут Domын объект ирнэ. Тэр объект хандахын тулд цэг тавиад textContent гэж бичинэ. textContent гэдэг бол 43 зааж байгаа. Саннамсаргүй унаж байгаа шоо буюу dice хийж өгөх 
// "#score-0" утганд dice гэсэн утга өгч бана.
window.document.querySelector("#score-0").textContent = dice;
// "#score-1" утганд HTML бичиж өгч байна.
window.document.querySelector("#score-1").innerHTML = "<em>YES!</em>";*/

/* Энэ шооны зургыг харагдахгүй болгох 
<img src="dice-5.png" alt="Dice" class="dice"></img> */
// css рүү нь хандаж байна.
// document.querySelector(".dice").style.display = "none";

// Програм эхлэхэд бэлтгэе.

/* <div class="player-score" id="score-0">43</div> */
/* <div class="player-score" id="score-1">72</div> */
document.querySelector("#score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";

/* <div class="player-current-score" id="current-0">11</div> */
/* <div class="player-current-score" id="current-1">11</div> */
document.querySelector("#current-0").textContent = "0";
document.querySelector("#current-1").textContent = "0";

document.querySelector(".dice").style.display = "none";
console.log("Шоо " + dice);
