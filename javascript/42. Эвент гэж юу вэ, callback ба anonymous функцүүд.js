// learn 42. Эвент гэж юу вэ, callback ба anonymous функцүүд

/*
event гэдэг брозер дээр ийм ийм юм боллоо гэдгийг мэдээлдэг. Жишээ нь хэрэглэгч хулганаар дарлаа хэрэглэгч button дээр дарлаа enter дарлаа scape дарлаа гэх мэт.

Тэр болж үйл явдал дээр нь ийм click болсон юм байна одоо ийм болгоо гэсэн код бичиж өгдөг. Үүийг EventListener функцууд гэж нэрэлдэг.  

Эвэнт- (eevnt) = гэсэн үйл явдал гэсэн англи үг Вэб хуудас дээр ямар нэг үйлдэл хийгдлээ гэж брозераас Javascript  кодонд мэдэгддэг процесс юм. 

Эвэнт боловсруулагч (EventListener) = нь уг Эвэнтийг хүлээж аваад хариу үйлдэл хийдэг Javascript дээрх бидний бичсэн функц юм.
Ямар ямар Эвэнт байдгийг харахыг хүсвэл https://developer.mozilla.org/en-US/docs/Web/events


Message Queue гэж юу вэ? 

Javascript хэл нь SINGLE THREADED буюу процесс функцүүдийг нэг нэгээр нь дарааллуулан боловсруулдаг онцлогтой хэл юм. 
        Өөрөөр хэлбэл таны функц ажиллаад эхэлсэн л бол дуустал нь өөр Javascript код ажиллаж чадахгүй гэсэн үг юм. 
        Зарим хэл MULTI THREADED буюу олон процессийг зэрэг хийх чадвартай байдаг. Жишээ нь JAVA, Ruby 
Message Queue нь вэб хуудас үүссэн Эвэнтүүдийн боловсруулахдаа хүлээгээд оочирлож зогсдог газар юм. 
Execution stack дотор global Execution Context, Execution Context нар ажилж дуустал massege Queue хүлээж байдаг.  Execution Context ажилж дуусаад санах ойгоос устахад event, event listenner хамт явж байдаг. Хамт орж ирдэг. event loop энд ажиллан.  Еvent, event listenner ажиллаж дуусаад устахад дараа global Execution Context устдаг.


Callback функц 
    -А функцийн аргумент руу Б функцийг дамжуулна. 
    -А функц дотор Б функцийг ажиллана.
    -Энэ тохиолдолд Б функцийг Callback функц гэнэ. 
            Өөрөөр хэлбэл дараа дуудагдахаар дамжуулагдсан функц. 


Anonymous функц
-функцийн аргумент рүү НЭРГҮЙ Функц шууд бичиж дамжуулж болдог. Ийм нэргүй Anonymous функц гэнэ. 

энэ хоёр хоёулаа ижилхэн getElementById хурдтай ажилладаг. 
document.getElementById("#current-0").textContent = "0";
document.querySelector("#current-0").textContent = "0";*/
/******************************************************************** */
var acctivePlayer = 1;
var score = [0, 0];
var roundScore = 0;

// Програм эхлэхэд бэлтгэе.
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// ".btn-roll" товчон дээр EventListener холбож байна. 1-р аргумент дээр нь click event тавин. 2-р аргумент дээр нь javascript-ын ямар юм хийх функцаа дамжуулна. Жишээ нь шоо шидэх учираас shooShid гэсэн нэртэй функцаа дамжуулна.

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  //  Шоо хаяхад хэдийн тоо буусан тэр зургийг дэлгэцэнд харуулж байна
  diceDom.src = "dice-" + diceNumber + ".png";
});

/*function shooShid() { //Callback функц хэргэлсэн боловч шоо шидэх ганц үйлдэл байгаа болохоор Anonymous функц хийхээр болсон. 
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  alert("шоо бууллаа " + diceNumber);
}*/
diceDom.style.display = "block";
