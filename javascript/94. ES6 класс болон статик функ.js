// learn 94. ES6 класс болон статик функ.

// ES5 Объект хандалт прораммчлалыг ингэж бичдэг.
function Expense(id, desc, value) {
  this.id = id;
  this.desc = desc;
  this.value = value;
}
Expense.prototype.info = function () {
  console.log(this.id + ". " + this.desc + " = " + this.value);
};
var e1 = new Expense(1, "хоол", 7500);
var e2 = new Expense(2, "цай", 700);
console.log(e1, e2);
e1.info();
e2.info();
/******************************************************************/
//  ES6 класс Объект хандалт прораммчлалыг ингэж бичдэг.
class Income {
  constructor(id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = value;
  }
  info() {
    console.log(this.id + ". " + this.desc + " = " + this.value);
  } //  статик функ.
  static getDollerHansh() {
    console.log("Ханш : " + 2720);
  }
}
let i1 = new Income(3, "цалин", 2500000);
i1.info();
Income.getDollerHansh();
