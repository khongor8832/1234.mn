// learn 35. this түлхүүр үг ямар учиртай вэ?

/*-Энгийн функцын хувьд this хувьсагч нь глобаль объектыг зааж байдаг. 
    Window, globalThis
-Объект дотор зарлагдсан функцын this нь уг объектоо зааж байдаг.Window
-This түлхүүр үг нь хэдийгээр үүсгэлийн шатанд үүсэх боловч яг утга нь АЖИЛЛУУЛАХ ШАТАНД тодорхойлогддог байна. */

console.log(this);

hello();

function hello() {
  console.log("hello функц ажиллаа ");
  console.log(this);
  console.log(window);
  console.log(globalThis);
}

var p1 = {
  name: "boldoo",
  printThis: function () {
    console.log(this);

    function secondFunction() {
      console.log("secondFunction ажилаа..." + this);
    }
    secondFunction();
  },
};
var p2 = {
  name: "Нараа",
};
p1.printThis();
