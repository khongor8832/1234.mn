// learn 90. Spread буюу ... оператор.

/*********************************************************/
/* HTML
<div class = "box" >
  1
</div>
<div class = "box">
  2
</div>
<div class = "box">
 3
</div>
<div class = "box">
  4
</div>*/
/**********************************************************/
/* CSS

body {
  background: white; 
  color: #323232;

  margin: 0;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  
  font-family: Helvetica neue, roboto;
}
.box{
  width:200px;
  height:30px;
  padding:30px;
  font-size:20px;
  margin:20px;
  text-align: center;
  background-color: dodgerblue;
}

*/

/**********************************************************/
// 90. Spread буюу ... оператор.

// NodeList
const boxes = document.querySelectorAll(".box");

let arr = [...boxes];
arr.forEach((el) => (el.style.backgroundColor = "red"));

// Массивыг задлах
const names = ["Jhon", "Marry", "Mike"];
let [first, second, third] = names;
console.log(second);

change(...boxes);
function change(a, b, c, d) {
  a.style.backgroundColor = "green";
  b.style.backgroundColor = "dodgerBlue";
  c.style.backgroundColor = "yellow";
  d.style.backgroundColor = "orange";
}
let interpretators = ["php", "perl", "javascript", "python", "typescript"];
let compilers = ["java", "c", "c#"];
let language = [...interpretators, "Assambler", ...compilers];
console.log(language);
