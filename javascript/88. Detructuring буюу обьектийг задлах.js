// learn 88. Detructuring буюу обьектийг задлах.
// var arr = ["Нараа", 23, " Баянзүрх 16 хороо 32-5", "Програмист "];

// // ES5
// var firstName = arr[0];
// var age = arr[1];
// var address = arr[2];
// var job = arr[3];
// console.log(firstName + " нэртэй хүний нас " + age + " ажлын хаяг нь " + address + " ажил нь " + job + " юм. ");

// ES6
let arr = ["нараа", 23, "Баянзүрх 16-р хороо 32-5", "Праграмист"];

let [a, b, c, d] = arr;

console.log(`${a} нэртэй хүний нас ${b}  хаяг нь ${c} мэргэжил нь ${d}`);

//  Detructuring

let human = {
  name: "saraa",
  age: 23,
  address: {
    city: "ulaanbaatar",
    duureg: "baynzurh",
    busad: "32-5",
  },
};
let {
  name: ner,
  address: { city: hot },
} = human;

console.log(ner + ", " + hot);

let [h1, h2, t, z] = my();
console.log(z);
function my() {
  return [2, 5, 45, 100];
}
