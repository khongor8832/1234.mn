// learn 87. Arrow function ба THIS хувьсагч.
// Суман функц нь өөрийн гэсэн this заагч буюу хувьсагч дотор нь байдаггүй.
// Гэхдээ дотор нь this ашигладаг. Энэ тохиолдолд this хувьсагч нь тухайн суман функцын
// гадуур нь байгаа функцын this хувьсагчыг суман функц нь ашигладаг. Өөрөөр хэлбэл өөрийн гэсэн тодорхой нэг утгагүй
// гаднах функцынхаа this авч шууд ашигладаг. Жнь:

// let human = {
//   name: 'Сараа',
//   mendleh: function() {
//     // let that = this;
//     console.log('Сайн байна уу, би бол  ' + this.name);
//     setTimeout(function(){
//       console.log('Намайг ' + this.name + ' гэдэг...');
//     }, 1000);
//   }
// }
// human.mendleh();

window.name = "saraa";

let angi = {
  name: "Програм хангамж",
  info: function () {
    let human1 = {
      name: "Батболд",
      mendleh: () => {
        console.log("Сайн байна уу, би бол  " + this.name);
        setTimeout(() => console.log("Намайг " + this.name + " гэдэг..."), 500);
      },
      hello: function () {
        console.log("Hello " + this.name);
      },
    };

    human1.mendleh();
    human1.hello();
  },
};

angi.info();

// human1.mendleh();
// human1.hello();
