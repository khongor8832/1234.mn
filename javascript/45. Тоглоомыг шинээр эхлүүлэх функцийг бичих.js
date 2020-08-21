// learn 45. Тоглоомыг шинээр эхлүүлэх функцийг бичих

// Глобал бүх газарт ашиглагдах глобал хувьсагчдыг энд зарлая

// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;

// Аль тоглогч шоо шидэх вэ гэдгийг хадгална.
var activePlayer;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores;

// Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;

// Шооны зургийг үзүүлэх элемэнтийг домоос хайж олоод энд хадгалья
var diceDom = document.querySelector(".dice");
// Тоглоомыг эхлүүлнэ.
initGame();

// Тоглоом шинээр эхлэхэд бэлтгэнэ.
function initGame() {
  // тоглогчын ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;

  // Тоглоомыг эхлүүлнэ.
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Тоглогчын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

//// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 доторх санамсаргүй нэг тоо гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.style.display = "block";

  // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
  if (diceNumber !== 1) {
    // 1 -ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchToNextPlayer(); // DRY dont repeat yourself
  }
});

// hold товчны
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Уг тоглогчын цуглуулсан ээлжийн оноог глобаль оноон дээр нэмж өгнө.
  // if (activePlayer === 0) {
  //   scores[0] = scores[0] + roundScore;
  // } else {
  //   scores[1] = scores[1] + roundScore;
  // } Илүү хялбараар бичвэл
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // Дэлгэцэн дээр оноог өөрчилнө.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Уг тоглогч хожсон эсэхийг ( оноо нь 100-с их эсэх ) шалгах
  if (scores[activePlayer] >= 20) {
    //Ялагч гэсэн тестийг нэрнийх нь оронд гаргана.
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // тоглогчын  ээлжийг солино.
    switchToNextPlayer();
  }
});

function switchToNextPlayer() {
  // 1 Буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

  // энэ тоглогчийг ээлжиндээ цуглуулсан оноог 0 болгоно
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Тоглогчийн ээлжийг нөгөө тоглогчруу шилжүүлнэ.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // улаан цэгийг шилжүүлнэ.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //  Шоог харагдахгүй болгон.
  diceDom.style.display = "none";
}
// New game буюу шинэ тоглоом эхлүүлэх товчний эвент листенер
document.querySelector(".btn-new").addEventListener("click", initGame);
