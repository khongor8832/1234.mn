// learn 101. Promise -тэй танилц.

let p = new Promise((resolve, reject) => {
  console.log("Promise ажиллаж байна. ");

  // Зураг таних програм

  // Бүх зүйл амжилтай болбол resolve функцыг дуудна.
  resolve("Зураг хөрвүүлж дуусллаа...");

  // Асуудал үүсвэл reject функцыг дуудна.
  reject("Зураг хэт том байна...");
});

p.then((result) => console.log("Амжилтай : " + result));
p.catch((error) => console.log("Асуудал гарлаа : " + error));
