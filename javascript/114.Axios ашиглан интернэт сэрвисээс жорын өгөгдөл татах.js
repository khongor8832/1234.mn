// learn 114.Axios ашиглан интернэт сэрвисээс жорын өгөгдөл татах.
/*
pizza 
https://forkify-api.herokuapp.com/

Жорын дэлгэрэнгүй 
https://forkify-api.herokuapp.com/api/get?rId=47746

Өнөөдөр Axios хэрэглэнэ. fetch() -тэй адилхан бас энд тэндхийн сэрвэрүүдээс fetch() үүргийг гүйцэтгэж татаж авчирдаг. fetch() бодвол маш олон дэлгэрэнгүй боломжтой маш нарийн тохируулж ажиллуулах боломжтой. 

суулгах: 
 npm i axios
 энэ бол манай кодуудтай хамт байж өгөгдөл татах учир --save-dev ашиглахгүй. 


код нь: 
 /*require("@babel/polyfill");
import axios from "axios";

async function doSearch(search) {
  try {
    let result = await axios(
      "https://forkify-api.herokuapp.com/api/search?q=" + search
    );
    const recipes = result.data.recipes;
    console.log(recipes);

    result = await axios(
      "https://forkify-api.herokuapp.com/api/get?rId=" + recipes[1].recipe_id
    );
    console.log(result);
  } catch (error) {
    alert("Алдаа гарлаа : " + error);
  }
}

doSearch("pizza"); */
