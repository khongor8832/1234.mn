// learn 102.Promise chaining гэж юу вэ.
let getRecipies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([12, 334, 121, 86]);
    }, 2000);
  });
};

let getRecipe = (recipeId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        resolve({
          name: "Цуйван",
          author: "Өсөхбаяр",
        });
      },
      2000,
      recipeId
    );
  });
};

let getAuthorRecipe = (author) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (name) => {
        resolve({
          name: "Тахианы шөл",
          author: "Өсөхбаяр",
        });
      },
      2000,
      author
    );
  });
};
// Promise chaining

getRecipies()
  .then((ids) => {
    console.log(ids);
    return getRecipe(ids[0]);
  })
  .then((recipe) => {
    console.log(recipe);
    return getAuthorRecipe(recipe.author);
  })
  .then((recipe) => console.log(recipe))
  .catch((error) => {
    console.log("Алдаа гарлаа " + error);
  });

// getRecipe().then( r => console.log(r))
// getRecipe(12).then( r => console.log(r))
