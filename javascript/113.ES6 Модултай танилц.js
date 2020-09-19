// 113.ES6 Модултай танилц

/*
Module далдалт 
Ийм folder үүсгэж жишээ ажилцгаая.

js -->  model --> Search.js
        Veiw  --> searchVeiw.js
index.js 
****************************
js -->  model --> Search.js дотор
let query = "pizza";
export default query; // Энэ бол ганц юм exportлоход ашиглана. 
****************************
-----------------------------------------------
js --> Veiw  --> searchVeiw.js дотор
var superAdd = (a, b) => {
    return a + b + 1000;
  }; Module далдалт 
  
  export const add = (a, b) => superAdd(a, b);
  export let multiply = (a, b) => a * b;
  
  export const id = 25;
------------------------------------------------
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
index.js дотор
import p from "lodash";
import query from "./model/Search";
import { add as niilber, multiply as mul } from "./Veiw/searchVeiw";
// console.log("Хайлт : " + guery);
console.log("Хоёр тооны нийлбэр : " + niilber(4, 5));
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
