// learn 41. DOM руу хандаж үзэцгээе!

/* window болон document гэсэн 2 объект талаар үзнэ. Ялгааг харах болно. 

DOM гэж юу вэ? 

DOM : Document object Model 
    Вэб хуудас ачаалахад брузер дотор үүсдэг. 
    Вэб хуудас дотор бүх өгөгдлийг агуулсан санах ойд байдаг объект юм. 
    HTML таг бүрт харгалзах объектыг DOM  дотор үүсдэг. 
    Уг DOM объектыг нь Javascript-ээр өөрчлөх замаар вэб дээрх мэдээллийг өөрчилдөг. 

 HTML --> <head> -> <title>
                     <body> ->  <h1>
                            -> <p> -> <img>
                            -> <P1> -> <b> html гэнэ. Javascript HTML дээр өөрчлөлт хийдэггүй. 

document -> HTML --> <head> -> <title>
         <body>   ->  <h1>
                  -> <p> -> <img>
                  -> <P1> -> <b>
                         -> <a> гэх мэт энэ объектийг DOM гэдэг. DOM -оор Javascript ;дамжиж хайлт хийж байгаад өөрчлөлт хийдэг. Өөрчлөлт хийхээс гадна энэ гарсан өөрчлөлтийг уншиж авдаг. Мөн энэ дээр шинээр child -уудыг залгаж чадна. Жнь facebook-ын мэдээлэл доош нь гүйлгээл дуусангуут дараагын мэдээллийг залгааал яваад байдаг. Хязгааргүй олон contant-ыг facbook-ын үзэж байхад залгаал үзүүлчихдэг 
Жшээ нь: Facebook цаанаас HTML гэсэн юм ирлээ гэж бодоход broser хүлээж аваад  хадгалаад авахыг DOM гэнэ. 
javascript болон динамик хэлнүүдэд вэб сайтыг өөрчлөхөд тусалсан объект гэж хэлж болно. 


Javascript window VS document объект

javascript-ийг брузер дотор ажиллаж байхад 
        - globalThis глобаль объект нь window объект байдаг. 
        - WINDOW объект дотор вэбийн нүдэнд харагдах хэсгийг хариуцдаг DOCUMENT объект байрлана. 
        -WINDOW нь глобаль объект тул window.document эсвэл шууд document гэж хандах нь ялгаагүй байдаг.  */

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
