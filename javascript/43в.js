// Тоглоом эхлэлээ гэдэгт төлөвт оруулна
isNewGame = true;

// тоглогчын ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
scores = [0, 0];

// Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
roundScore = 0;

// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// Тоглогчдын нэрийг буцааж гаргах
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");

diceDom.style.display = "none";
