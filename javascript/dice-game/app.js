var acctivePlayer = 1;
var score = [0, 0];
var roundScore = 0;

// Програм эхлэхэд бэлтгэе.
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
// document.querySelector(".dice").style.display = "none";

var diceDom = document.querySelector(".dice");
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  //   document.querySelector(".dice").style.display = "block";
  //  Шоо хаяхад хэдийн тоо буусан тэр зургийг дэлгэцэнд харуулж байна.
  diceDom.src = "dice-" + diceNumber + ".png";
});
