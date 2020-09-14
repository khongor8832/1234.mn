learn 89. ES6 хувилбарын массивтай ажиллах нэмэлт функцүүд.js

Массив 
---------------------------------------------------
<div class = "box green" >
  Би бол хар
</div>
<div class = "box red">
  Би бол улаан
</div>
<div class = "box yellow">
  Би бол шар
</div>
<div class = "box blue">
  Би бол хөх
</div>
-------------------------------------------------
body {
  background: white; /* try type yellow */
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
}

.green{
  background-color: green ;
}
.red{
  background-color: red ;
}
.yellow{
  background-color: yellow ;
}
.blue{
  background-color: blue ;
}

// NodeList
const boxes = document.querySelectorAll('.box');

// // ES5 NodeList - ийг Массиврүү хөрвүүлэх дээр үеийн арга 
// var arr = Array.prototype.slice.call(boxes);
// arr.forEach(function(e){
//   e.style.backgroundColor = "dodgerBlue";
// });
// // дээд талын кодыг нэг мөрөнд бичиж болдог.
// Array.prototype.slice.call(boxes).forEach(function(e){
//   e.style.backgroundColor = "yellow";
// });

// // // ES6
// var arr1 = Array.from(boxes); 
// arr1.forEach(e => e.style.backgroundColor = "red");
// // дээд талын кодыг нэг мөрөнд бичиж болдог.
// Array.from(boxes).forEach(e => e.style.backgroundColor = "green");

// ES5 
// for(var i=0; i<boxes.length; i++)
// {
//   if(boxes[i].className === "box yellow") continue; 
//   boxes[i].textContent = "Би бол шар биш ";
// }

// ES6

for(const e of boxes)
{
  if(e.className === "box red") continue; 
  e.textContent = "Би бол улаан биш ";
}