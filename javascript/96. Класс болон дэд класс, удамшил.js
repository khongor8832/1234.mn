// 96. Класс болон дэд класс, удамшил

// Удамшилыг хэрэгжүүлэх 2 арга байгаа тэрийг олж мэд. Энэ 3 арга нь
// Super class
class Transaction {
  constructor(desc, value) {
    this.desc = desc;
    this.value = value;
  }
  info() {
    let typeText = this instanceof Income ? "Орлого" : "Зарлага";
    return `(${typeText}) ${this.value}₮ ===> ${this.desc}`;
  }
}
// Sub class
class Income extends Transaction {
  constructor(desc, value) {
    super(desc, value);
  }
}
// Sub class
class Expence extends Transaction {
  constructor(desc, value, zaaval = false) {
    super(desc, -value);
    this.zaaval = zaaval;
  }
}
let f = [];
f.push(new Income("Цалин", 2500));
f.push(new Expence("Хоол хүнс", 200, true));
f.push(new Expence("Кино", 7));
f.push(new Expence("Бохь", 1));
f.push(new Expence("Парк", 20));
f.push(new Income("Сугаллаа", 700));
f.push(new Expence("Байрны мөнгө", 20, true));

f.forEach((e) => console.log(e.info()));
console.log("------------------------------------------------");
console.log("Үлдэгдэл : " + f.reduce((budget, el) => budget + el.value, 0));

console.log(
  "Зайлшгүй зардал: " +
    f.filter((e) => e.zaaval).reduce((sum, el) => sum + el.value, 0)
);
console.log(
  "Зайлшгүй зардал биш: " +
    f.filter((e) => e.zaaval === false).reduce((sum, el) => sum + el.value, 0)
);
