// learn 103. Promise дээр Async/Await ашиглан хялбарчлах нь

// Бүх жорын ID-г олох
let getRecipies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([12, 33, 6, 98, 63]);
    }, 1000);
  });
};

// Өгөгдсөн ID-тай жорын мэдээллийг татах
let getRecipe = (recipeId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        resolve({ name: "Цуйван", author: "Өсөхбаяр" });
      },
      1000,
      recipeId
    );
  });
};

// Өгөгдсөн зохиогчийн жорыг татах
let getAuthorRecipe = (author) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (name) => {
        resolve({ name: "Тахианы шөл", author: "Өсөхбаяр" });
        // reject("Интернэт холболт байхгүй байна ");
      },
      500,
      author
    );
  });
};

// getRecipies().then(r => {
//   console.log(r);
// });

// getRecipe(12).then(r => console.log(r));

// getAuthorRecipe("Өсөхбаяр").then(r => console.log(r));

// Дараалсан хүсэлтийг илгээх
getRecipies()
  .then((r) => {
    console.log(r);
    return getRecipe(r[0]);
  })
  .then((r) => {
    console.log(r);
    return getAuthorRecipe(r.author);
  })
  .then((r) => {
    console.log(r);
  })
  .catch((e) => console.log(e));

// ES8 - EcmaScript2017 async, await
async function getInformation() {
  try {
    const ids = await getRecipies();
    console.log(ids);
    const jor = await getRecipe(ids[0]);
    console.log(jor);
    const nextJor = await getAuthorRecipe(jor.author);
    console.log(nextJor);
    return nextJor.name;
  } catch (error) {
    console.log("Алдаа : " + error);
  }
}

getInformation().then((result) => console.log("Зохиогчын жор :  " + result));
